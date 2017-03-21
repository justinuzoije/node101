process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var request = require('request');
var fs = require('fs');
var outfile = 'cover-book.html';
var url = 'https://css-tricks.com/creating-book-cover-using-javascript-p5-js/';



process.stdin.on('data', function (text) {
  console.log('received data:', util.inspect(text));
  request.get(url, function(err, resp, html) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('URL:' + url);

    fs.writeFile(outfile, html, function(err) {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log('Save to file: ' + outfile);
      console.log('Saved to file' + outfile);
    });
  });
  if (text === 'quit\n') {
    done();
  }
});

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}





// var request = require('request');
// var fs = require('fs');
// var outfile = 'cover-book.html';
//
// //chastising for no razon. Por dios, ya basta! duelyst y mtg tambien! hijo de la santa maria
// // var url = 'https://css-tricks.com/creating-book-cover-using-javascript-p5-js/';
// var url = 'https://css-tricks.com/creating-book-cover-using-javascript-p5-js/sdfjsfl;sjdflkajd';
// request.get(url, function(err, resp, html) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log('URL:' + url);
//
//   fs.writeFile(outfile, html, function(err) {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//     console.log('Save to file: ' + outfile);
//     console.log('Saved to file' + outfile);
//   });
//   // console.log(html);
// });
