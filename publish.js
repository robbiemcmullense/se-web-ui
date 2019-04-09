const fs = require('fs-extra');
const path = require('path');
const execa = require('execa');
const Listr = require('listr');
const tc = require('turbocolor');

const rootDir = __dirname;

const packages = [
  'core',
  'angular',
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
        title: `${package}: update package.json ${tc.dim(`(${version})`)}`,
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


async function main() {
  try {
    const tasks = [];
    const { version } = readPkg('');

    // Update package version
    updatePackageVersions(tasks, packages, version);

    // publish each package in NPM
    publishPackages(tasks, packages);

    const listr = new Listr(tasks);
    await listr.run();
    console.log(`\nweb-ui ${version} published!! 🎉\n`);

  } catch (err) {
    console.log('\n', tc.red(err), '\n');
    process.exit(1);
  }
}

main();
