# grunt-file2js #

A Grunt plugin for converting arbitrary files into JavaScript assignments.

Sample configuration:

```
    file2js:
        default:
            options:
                obj: window.fileList
            expand: true,
            cwd: 'path/to/src/dir'
            src: ['*.ext']
            dest: 'path/to/dest/dir'
            ext: '.js'
```
