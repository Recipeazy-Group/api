'use strict';

var Event = require('../Models/eventModel.js');

exports.getAllEvents = function(req,res){
    Event.getAllEvents(function(err,even){
        if(err){
            res.send(err);
        }
        res.json(even);
    });
};

exports.addEvent = function(req,res){

};