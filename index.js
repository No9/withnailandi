exports.getline = get_line;

var fs = require('fs');
var hasLine = false;


function get_line(line_no, count, callback) {
    var filename = __dirname + '/withnailandi.txt';
    var stream = fs.createReadStream(filename, {
      flags: 'r',
      encoding: 'utf-8',
      fd: null,
      mode: 0666,
      bufferSize: 64 * 1024
    });

    var fileData = '';
    stream.on('data', function(data){
      fileData += data;
      // The next lines should be improved
      var lines = fileData.split("\n");

      if(lines.length >= +line_no+count){
        stream.destroy();
        if(hasLine == false){
          hasLine = true;

          callback(null, lines.splice(line_no, count));
        }
      }
    });

    stream.on('error', function(){
      callback('Error', null);
    });

    stream.on('end', function(){
      callback('File end reached without finding line', null);
    });

}
