const fs = require('fs-extra');
const path = require('path');
const execa = require('execa');
const Listr = require('listr');

const rootDir = __dirname;

const libs = [
  '../dist/libs/core',
  '../dist/libs/angular',
  '../dist/libs/react',
  '../dist/libs/vue',
  '../dist/libs/svelte',
];

function projectPath(project) {
  return path.join(rootDir, project);
}

function packagePath(project) {
  return path.join(rootDir, project, 'package.json');
}

function readPkg(project) {
  const packageJsonPath = packagePath(project);
  return JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
}

function writePkg(project, pkg) {
  const packageJsonPath = packagePath(project);
  const text = JSON.stringify(pkg, null, 2);
  return fs.writeFileSync(packageJsonPath, `${text}\n`);
}

function updatePeerDependency(pkg, dependency, version) {
  if (pkg.peerDependencies && pkg.peerDependencies[dependency]) {
    pkg.peerDependencies[dependency] = version;
  }
}

function updatePackageVersions(tasks, libs, version) {
  libs.forEach(lib => {
    const projectRoot = projectPath(lib);
    let npmVersion = version;
    if (lib.includes('vue')) {
      // For vue only, make sure the version start at 0.x.x until fully tested.
      const versionArray = npmVersion.split('.');
      versionArray[0] = '0';
      npmVersion = versionArray.join('.');
    }
    tasks.push({
      title: `${lib.split('/').reverse()[0]}: update package.json ${version}`,
      task: async () => {
        await execa('npm', ['version', npmVersion, '--allow-same-version'], {
          cwd: projectRoot,
        });
      },
    });

    tasks.push({
      title: `${
        lib.split('/').reverse()[0]
      }: update @se/web-ui@${version} peerDependencies in package.json`,
      task: async () => {
        const pkg = readPkg(lib);
        updatePeerDependency(pkg, '@se/web-ui', version);
        writePkg(lib, pkg);
      },
    });
  });
}

function publishLibs(tasks, libs, tag = 'latest') {
  // next publish
  libs.forEach(lib => {
    const projectRoot = projectPath(lib);

    tasks.push({
      title: `${lib.split('/').reverse()[0]}: publish to ${tag} tag`,
      task: async () => {
        await execa('npm', ['publish', '--tag', tag], { cwd: projectRoot });
      },
    });
  });
}

// Make sure that we are not publishing twice the same version
function alreadyDeployedVersion(name, version) {
  const { stdout } = execa.sync('yarn', ['info', name, 'dist-tags.latest']);
  const list = stdout.split('\n');
  let alreadyDeployed = false;
  // Parse each line in case the `yarn info` function return more information than expected
  list.forEach(function (elm) {
    if (elm === version) {
      alreadyDeployed = true;
    }
  });
  return alreadyDeployed;
}

async function main() {
  try {
    const beta = process.argv.indexOf('--beta') > -1;

    const tasks = [];
    const { name, version } = readPkg('..');

    // Do not deploy a version if already published
    if (alreadyDeployedVersion(name, version)) {
      console.log('\n Package version already deployed \n');
      process.exit(1);
    }

    // Update package version
    updatePackageVersions(tasks, libs, version);

    // publish each package in NPM
    publishLibs(tasks, libs, beta ? 'beta' : 'latest');

    const listr = new Listr(tasks);
    await listr.run();
    console.log(`\nweb-ui ${version} published!! 🎉\n`);
  } catch (err) {
    console.log('\n', err, '\n');
    process.exit(1);
  }
}

main();
