﻿module.exports = {
    gnap_custom_images_to_build_ace: {
        expand: true,
        cwd: './custom/gnap/images/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/images/'
    },

    gnap_custom_css_to_build_ace: {
        expand: true,
        cwd: './custom/gnap/css/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/css/less/theme/'
    },

    gnap_custom_html_to_build_ace: {
        expand: true,
        cwd: './custom/gnap/html/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/html/'
    },

    gnap_deploy_ace: {
        expand: true,
        cwd: './deploy/ace/',
        src: ['*.*', '**/*.*', 'LICENSE-Ace'],
        dest: './deploy/gnap/'
    },

    gnap_jquery_to_build_ace: {
        expand: true,
        cwd: './deploy/jquery/',
        src: ['*.js', '!*.min.js', '!*.min.map'],
        dest: './build/ace/js/develop/'
    },

    gnap_select2js_to_build_ace: {
        expand: true,
        cwd: './deploy/select2/',
        src: ['*.js', '!*.min.js', '!*.min.map'],
        dest: './build/ace/js/develop/select2/'
    },

    gnap_select2css_to_build_ace: {
        expand: true,
        cwd: './deploy/select2/',
        src: ['*.css', '**/*.css'],
        dest: './build/ace/css/develop/'
    },

    gnap_select2images_to_build_ace: {
        expand: true,
        cwd: './deploy/select2/',
        src: ['*.gif', '*.png', '**/*.gif', '**/*.png'],
        dest: './build/ace/images/'
    },

    gnap_highlightjs_to_build_ace: {
        expand: true,
        cwd: './deploy/highlight/',
        src: ['*.js', '!*.min.js', '!*.min.map'],
        dest: './build/ace/js/develop/highlight/'
    },

    gnap_highlightcss_to_build_ace: {
        expand: true,
        cwd: './deploy/highlight/styles/',
        src: ['*.css', '**/*.css'],
        dest: './build/ace/css/develop/highlight/'
    },

    gnap_packagejson: {
        src: './npm/GNaP.Themes.Web.GNaP.json',
        dest: './deploy/vendor/gnap-theme-gnap/package.json'
    },

    gnap_readme: {
        src: './npm/README.md',
        dest: './deploy/vendor/gnap-theme-gnap/README.md'
    },

    gnap_server: {
        expand: true,
        cwd: './server/release/',
        src: ['**/*.dll', '**/*.exe', '**/*.config'],
        dest: './deploy/gnap/server/'
    },

    gnap_server_batch: {
        expand: true,
        cwd: './server/',
        src: ['start-server.cmd'],
        dest: './deploy/gnap/'
    }
};
