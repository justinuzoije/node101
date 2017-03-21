var fs = require('fs');
var request = require('request');
var gm = require('gm');


var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('URL: ' + uri);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download('https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png', 'logo.png', function(){
  // Modify Image
  gm('logo.png')
  .resize(240, 240)
  .noProfile()
  .write('small.png', function (err) {
    if (!err) console.log('done');
    else {
      console.log(err);
    }
  });

});




// gm('logo.png')
// .resize(353, 257)
// .autoOrient()
// .write(writeStream, function (err) {
//   if (!err) console.log(' hooray! ');
// });
// gm('logo.png')
// .resizeExact(240, 240)
// .write('resize.png', function (err) {
//   if (!err) console.log('done');
// });

// var options = {
//   url: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
//   encoding: null
// };
//
// // Download image
// request(options, function(err, response, imageData) {
//   // save image data and resize
//   if(err){
//
//   }
//   console.log(imageData);
//   //Write the binary data to an image file
//
// });


// Modify Image
// gm('img.jpg')
// .resizeExact(240, 240)
// .write('/path/to/resize.png', function (err) {
//   if (!err) console.log('done');
// });

// var gm = require('gm');

// gm('/path/to/image.jpg')
// .resize(353, 257)
// .autoOrient()
// .write(writeStream, function (err) {
//   if (!err) console.log(' hooray! ');
// });
