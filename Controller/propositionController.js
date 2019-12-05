'use strict';

var Proposition = require('../Models/propositionModel.js');

exports.create_proposition = function(req, res){
    var new_proposition = new Proposition(req.body);
    if (!new_proposition.prop_name || !new_proposition.prop_info || !new_proposition.prop_link ) {
      res.status(400).json({
        "code": 400,
        "response":"Please provide input for all fields."
      });
    }else{
      Proposition.create_proposition(new_proposition, function(err, proposition){
        if (err){
          res.send(err);
        }
        else{
          res.json(proposition);
        }
      });
    }
  };

exports.edit_proposition = async function(req, res, next) {
    try {
      const p = {
          propID: req.body.propID,
          prop_name: req.body.prop_name,
          prop_info: req.body.prop_info,
          prop_link: req.body.prop_link
      };
      p.propID = parseInt(req.params.id, 10);
      p = await Proposition.update(p);
  
      if(p !== null) {
        res.status(200).json(p);
      } else {
        res.status(404).end();
      }
    } catch(err) {
      next(err);
    }
  };

exports.getAllPropositions = function(req,res){
    Proposition.getAllPropositions(function(err,prop){
        if(err){
            res.send(err);
        }
        res.json(prop);
    });
};

