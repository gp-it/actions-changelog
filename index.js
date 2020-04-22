const exec = require('child_process').exec
const fs = require('fs')

exec('git describe --abbrev=0 --tags',
  (error, stdout, stderr) => {
    if (stdout) {
      exec(`git log ${stdout.trim()}..master --oneline`,
        (error, stdout, stderr) => {
          if (stdout) {
            const stream = fs.createWriteStream('Changelog.md', { flags: 'w' })
            stream.write(stdout)
          }
        })
    }
  });
