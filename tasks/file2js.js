module.exports = function(grunt) {

  var str2js = require('str2js');

  grunt.registerMultiTask('file2js', 'Grunt plugin for transforming files into JavaScript strings.', function() {

    var opts = this.options({
      obj: 'window'
    });

    this.files.forEach(function(file) {
      var str = "";
      file.src.forEach(function(srcFile) {
        var f = grunt.file.read(srcFile);
        str += str2js(opts.obj, srcFile, f);
      });
      grunt.file.write(file.dest, str);
    });

  });

};
