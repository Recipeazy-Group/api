'use strict';

var Policy = require('../Models/policyModel.js');

exports.addNewPolicy = function(req,res){

};

exports.getAllPolicies = function(req,res){
    Policy.getAllPolicies(function(err,pol){
        if(err){
            res.send(err);
        }
        res.json(pol);
    });
};