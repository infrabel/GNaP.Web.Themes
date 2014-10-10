// Generated on <%= (new Date).toISOString().split('T')[0] %> using
// <%= pkg.name %> <%= pkg.version %>
'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            js: {
                files: ['./src/app/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: '<%%= connect.options.livereload %>',
                    livereloadOnError: false
                }
            },
            livereload: {
                files: [
                    './src/index.html',
                    './src/app/**/*.html',
                    './src/app/**/*.json'
                ],
                options: {
                    livereload: '<%%= connect.options.livereload %>',
                    livereloadOnError: false
                }
            }
        },

        connect: {
            options: {
                port: <%= portNumber %>,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static('./src'),
                            connect().use('/node_modules', connect.static('./node_modules'))
                        ];
                    }
                }
            }
        },

        useminPrepare: {
            options: {
                dest: 'dist'
            },
            html: './src/index.html'
        },

        usemin: {
            options: {
                assetsDirs: [
                    'dist',
                    'dist/images',
                    'dist/styles'
                ]
            },
            html: ['dist/{,*/}*.html'],
            css: ['dist/styles/{,*/}*.css']
        },

        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            'dist/*',
                            '!dist/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp'
        },

        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'src',
                        dest: 'dist',
                        src: [
                            './index.html',
                            './**/*.html',
                            './**/*.json'
                        ]
                    }
                ]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                './src/app/*.js',
                './src/app/**/*.js'
            ]
        }
    });

    grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function() {
        if (grunt.option('allow-remote')) {
            grunt.config.set('connect.options.hostname', '0.0.0.0');
        }

        grunt.task.run([
            'clean:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concat',
        //'cssmin',
        'uglify',
        'copy:dist',
        //'rev',
        'usemin' /*,
            'htmlmin'*/
    ]);
};
