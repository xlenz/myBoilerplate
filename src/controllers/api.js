'use strict';

//var helpers = require('./../helpers');

var self = this;
//var dbMysql;
module.exports = function (dbMysql) {
    this.dbMysql = dbMysql;
    return self;
};

//just a template :)

exports.notImplemented = function (req, res, next) {
    throw new Error('notImplemented');
};
