const fs = require('fs-extra');
const path = require('path');
const execa = require('execa');
const Listr = require('listr');

const rootDir = __dirname;

const packages = [
  'libs/core',
  'libs/angular',
  'libs/react'
];

function packagePath(project) {
  return path.join(rootDir, project, 'package.json');
}

function projectPath(project) {
  return path.join(rootDir, project);
}

function updatePackageVersions(tasks, packages, version) {
  packages.forEach(package => {
    const projectRoot = projectPath(package);
    tasks.push(
      {
        title: `${package}: update package.json ${version}`,
        task: async () => {
          await execa('npm', ['version', version], { cwd: projectRoot });
        }
      }
    );
  })
}

function publishPackages(tasks, packages, tag = 'latest') {
  // next publish
  packages.forEach(package => {
    const projectRoot = projectPath(package);

    tasks.push({
      title: `${package}: publish to ${tag} tag`,
      task: async () => {
        await execa('npm', ['publish', '--tag', tag], { cwd: projectRoot });
      },
    });
  });
}

function readPkg(project) {
  const packageJsonPath = packagePath(project);
  return JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
}

// Make sure that we are not publishing twice the same version
function alreadyDeployedVersion(name, version) {
  const {stdout} = execa.sync('yarn', ['info', name, 'dist-tags.latest']);
  const list = stdout.split('\n');
  let alreadyDeployed = false;
  // Parse each line in case the `yarn info` function return more information than expected
  list.forEach(function(elm) {
    if (elm === version){
      alreadyDeployed = true
    }
  });
  return alreadyDeployed;
}


async function main() {
  try {
    const tasks = [];
    const { name, version } = readPkg('');

    // Do not deploy a version if already published
    if (alreadyDeployedVersion(name, version)){
      console.log('\n Package version already deployed \n');
      process.exit(1);
    }

    // Update package version
    updatePackageVersions(tasks, packages, version);

    // publish each package in NPM
    publishPackages(tasks, packages);

    const listr = new Listr(tasks);
    await listr.run();
    console.log(`\nweb-ui ${version} published!! 🎉\n`);

  } catch (err) {
    console.log('\n', err, '\n');
    process.exit(1);
  }
}

main();
