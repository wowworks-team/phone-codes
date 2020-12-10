const shell = require('shelljs');

shell.cp('./package.json', './dist');
shell.cp('./README.md', './dist');
