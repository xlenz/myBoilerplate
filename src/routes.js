'use strict';

var self = this;
var html;

module.exports = function (cfg) {
    //api = require('./controllers/api')(dbMysql);
    html = require('./controllers/html')(cfg);
    return self;
};

exports.routes = function (app) {
    app.get('/', html.appHtml);
};
