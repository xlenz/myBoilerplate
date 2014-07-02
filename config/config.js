'use strict';

var pathToApp = 'app';

module.exports = function () {
    return {
        host: '',
        port: 81,

        pathToApp: pathToApp,
        appHtml: pathToApp + '/app.html',
        pageNotFound: pathToApp + '/404.html'
    };
};
