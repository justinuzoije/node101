var fs = require('fs');
var infile = 'file1.txt';
var outfile = 'where/output.txt';

fs.readFile(infile, function(err, buffer) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("Input file: " + infile);
  console.log("Output file: " + outfile);
  var contents = buffer.toString();
  var upperContents = contents.toUpperCase();
  fs.writeFile(outfile, upperContents, function(err) {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log('Wrote to file ' + outfile);
  });
});
