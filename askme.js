process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

process.stdin.on('data', function (text) {
  console.log('received data:', util.inspect(text));
  if (text === 'quit\n') {
    done();
  }
});

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}


// var prompt = require('prompt');
//
//   prompt.start();
//
//   prompt.get(['username', 'email'], function (err, result) {
//     if (err) { return onErr(err); }
//     console.log('Command-line input received:');
//     console.log('  Username: ' + result.username);
//     console.log('  Email: ' + result.email);
//   });
//
//   function onErr(err) {
//     console.log(err);
//     return 1;
//   }

// var readline = require('readline');
//
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// var rl = prompt("What is your name?");
// // rl.question('What do you think of Node.js? ', (answer) =>
// //   rl.close();
// // });
//
//
// console.log(rl);
//
// rl.close();
