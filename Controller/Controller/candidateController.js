'use strict';

var Candidate = require('../Models/candidateModel.js');

exports.createCandidate = function(req,res){
    var new_candidate = new Candidate(req.body);
    if (!new_candidate.biography || !new_candidate.pic_url || !new_candidate.active || !new_candidate.position) {
      res.status(400).json({
        "code": 400,
        "response":"Please provide input for all fields."
      });
    }else{
      Candidate.createCandidate(new_candidate, function(err,candidate){
        if (err){
          res.send(err);
        }
        else{
          res.json(candidate);
        }
      });
    }
    
};

exports.getCandidateProfile = function(req,res){
Candidate.getCandidateById(req.params.user_id, function(err, candidate){
        if (err){
          res.send(err);
        }
        else{
          res.json(candidate);
        }
        
      });
};


exports.getAllCandidates = function(req,res){
    Candidate.getAllCandidates(function(err,cand){
        if(err){
            res.send(err);
        }
        res.json(cand);
    });
};

exports.updateProfileImage = function(req,res){
    if(!req.params.user_id){
        res.status(400).json({
            "code":400,
            "response":"Missing  ID in API request."
        });
    }
    else{
        Candidate.updatePhotoUrl(req.params.user_id,req.params.photo_url,function(err,cand){
            if(err){
                res.send(err);
            }
            else{
                res.json(cand);
            }
        });

    }
};

exports.updateProfileBio = function(req,res){
if(!req.params.user_id){
        res.status(400).json({
            "code":400,
            "response":"Missing  ID in API request."
        });
    }
    else{
        
    }
};

exports.updateProfilePosition = function(req,res){

};

exports.candidateDrop = function(req,res){
    if(!req.params.user_id){
        res.status(400).json({
            "code":400,
            "response":"Missing  ID in API request."
        });
    }
    else{
        Candidate.droppedOut(req.params.user_id,function(err,user){
            if(err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
    }
};