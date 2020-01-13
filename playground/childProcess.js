const { spawn } = require('child_process');
// const child = spawn('ls -lrth');

const child = spawn('ls -lrth', {
        stdio: 'inherit',
        shell: true
      });
// child.stdout.on('data', (data) => {
//         console.log(`child stdout:\n${data}`);
//       });

//       child.stderr.on('data', (data) => {
//         console.error(`child stderr:\n${data}`);
//       });



// const { exec } = require('child_process');

// exec('ls -lrth', (err, stdout)  => {
//                 if (err) {
//                         console.log(err)
//                         return ;
//                 } 

//                 console.log(stdout);
// })