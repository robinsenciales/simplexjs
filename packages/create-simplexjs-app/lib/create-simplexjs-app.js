const path = require('path');
const { promisify } = require('util');
const { copy } = require('fs-extra');
const execa = require('execa');

(async () => {
  const projectName = process.argv[2];

  if (!projectName) {
    console.log('Please specify a project name.');
    return;
  }

  const projectPath = path.join(process.cwd(), projectName);

  await copy(path.join(__dirname, 'template'), projectPath);

  console.log(`Creating a new simplexjs-app project in ${projectPath}...`);

  process.chdir(projectPath);

  await execa('npm', ['install']);

  console.log('Done!');
})();