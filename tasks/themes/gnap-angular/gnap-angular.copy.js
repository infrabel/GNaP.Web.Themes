﻿module.exports = {
    'gnap-angular_angular_js_to_build': {
        expand: true,
        cwd: './deploy/angular/',
        src: ['*.js', '!*.min.js', '!*.min.map',
              '**/*.js', '!**/*.min.js', '!**/*.min.map',
              '!docs/*.*', '!docs/**/*.*'],
        dest: './build/gnap-angular/js/develop/'
    },

    'gnap-angular_base64_js_to_build': {
        expand: true,
        cwd: './deploy/base64/',
        src: ['*.js'],
        dest: './build/gnap-angular/js/develop/base64/'
    },

    'gnap-angular_angular_css_to_build': {
        expand: true,
        cwd: './deploy/angular/',
        src: ['localytics-chosen/*.css',
              'angular-datatables/*.css',
              'ngprogress-lite/*.css'],
        dest: './build/gnap-angular/css/develop/'
    },

    'gnap-angular_angular_images_to_build': {
        expand: true,
        cwd: './deploy/angular/',
        src: ['localytics-chosen/*.gif'],
        dest: './build/gnap-angular/images/'
    },

    'gnap-angular_custom_to_build': {
        expand: true,
        cwd: './custom/gnap-angular/',
        src: ['*.*', '**/*.*', '!server/*.*', '!server/**/*.*'],
        dest: './build/gnap-angular/'
    },

    'gnap-angular_deploy_gnap': {
        expand: true,
        cwd: './deploy/gnap/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/gnap-angular/'
    },

    'gnap-angular_deploy': {
        expand: true,
        cwd: './build/gnap-angular/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/gnap-angular/'
    },

    'gnap-angular_deploy_gnap_directives': {
        expand: true,
        cwd: './deploy/gnap-angular/js/develop/gnap',
        src: ['*.*', '**/*.*', '!*.js', '!**/*.js'],
        dest: './deploy/gnap-angular/js/gnap'
    },

    'gnap-angular_packagejson': {
        src: './npm/GNaP.Themes.Web.GNaP.Angular.json',
        dest: './deploy/vendor/gnap-theme-gnap-angular/package.json'
    },

    'gnap-angular_readme': {
        src: './npm/README.md',
        dest: './deploy/vendor/gnap-theme-gnap-angular/README.md'
    }
};
