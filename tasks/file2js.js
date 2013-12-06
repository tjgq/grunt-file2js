module.exports = function(grunt) {

  var str2js = require('str2js');

  grunt.registerMultiTask('file2js', 'Grunt plugin for transforming files into JavaScript strings.', function() {

    var opts = this.options({
      obj: 'window'
    });

    this.files.forEach(function(file) {
      var str = grunt.file.read(file.src[0]);
      str = str2js(opts.obj, file.src[0], str);
      grunt.file.write(file.dest, str);
    });

  });

};
