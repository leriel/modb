module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      modb: {
        files: {
          'dist/scripts/modb.min.js' : ['dist/scripts/modb.js']
        }
      }
    },
    watch: {
      react: {
        files: 'src/scripts/**/*.js*',
        tasks: ['browserify']
      }
    },

    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      client: {
        src: ['src/scripts/**/*.jsx'],
        dest: 'dist/scripts/modb.js'
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "dist/index.html": ["src/index.jade"]
        }
      }
    },
    // grunt-contrib-connect will serve the files of the project
    // on specified port and hostname
    connect: {
      all: {
        options:{
          port: 9000,
          base: 'dist',
          hostname: "0.0.0.0",
          // No need for keepalive anymore as watch will keep Grunt running
          //keepalive: true,

          // Livereload needs connect to insert a cJavascript snippet
          // in the pages it serves. This requires using a custom connect middleware
          middleware: function(connect, options) {

            return [

              // Load the middleware provided by the livereload plugin
              // that will take care of inserting the snippet
              require('grunt-contrib-livereload/lib/utils').livereloadSnippet,

              // Serve the project folder
              connect.static(options.base[0])
            ];
          }
        }
      }
    },

    // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= connect.all.options.port%>'
      }
    },

    // grunt-regarde monitors the files and triggers livereload
    // Surprisingly, livereload complains when you try to use grunt-contrib-watch instead of grunt-regarde 
    regarde: {
      all: {
        // This'll just watch the index.html file, you could add **/*.js or **/*.css
        // to watch Javascript and CSS files too.
        files:['dist/**/*'],
        // This configures the task that will run when the file change
        tasks: ['livereload']
      }
    }
  }
  );

  grunt.registerTask('default', [
    'browserify','jade','uglify'
  ]);

  // Creates the `server` task
  grunt.registerTask('server',[
    'default',
    // Starts the livereload server to which the browser will connect to
    // get notified of when it needs to reload
    'livereload-start',
    'connect',
    // Connect is no longer blocking other tasks, so it makes more sense to open the browser after the server starts
    'open',
    // Starts monitoring the folders and keep Grunt alive
    'regarde',
  ]);
};
