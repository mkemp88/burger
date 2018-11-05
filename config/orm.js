var connection = require("../config/connection.js");
var express = require("express");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err,results) {
            if(err) {
                throw err;
            }
            return cb(results);
        });
    },
    insertOne: function(table, newRow, cb) {
        var queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [table, newRow], function(err,results) {
            if(err) {
                throw err
            }
            return cb(results);
        })
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err,results) {
            if(err) {
                throw err
            }
            cb (results);
        })
    },


}


module.exports = orm;