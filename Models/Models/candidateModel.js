'use strict';

var sql = require('./db.js');

var Candidate = function(candidate) {
  this.biography = candidate.biography;
  this.pic_url = candidate.pic_url;
  this.active = candidate.active;
  this.position = candidate.position;
};

Candidate.createCandidate = function(newCand, result) {
  sql.query("INSERT INTO `Gov_site`.`Candidate` (`biography`,`pic_url`,`active`,`position`) VALUES ('" + newCand.biography + "', '" + newCand.pic_url + "', '" + newCand.active + "', '" + newCand.position + "');",
  function(err, res) {
    if (err){
      result(err, null);
    }else{
      result(null,{"code":200,"response":"Candidate creation was sucessfull."});
    }
  }
);
};

Candidate.getCandidateById = function(cand_id,result){
  sql.query('SELECT * FROM `Gov_site`.`Candidate` INNER JOIN `User` WHERE `Candidate`.user_id = ?', [cand_id], function(err, res){
    if(err){
      result(err, null);
    }else{
        result(null,res)
      }
});
};

Candidate.getAllCandidates = function(result){
  sql.query("SELECT * FROM Candidate" , [], function(err,res){
    if(err){
      result(err,null);
    }
    else{
      result(null, res);
    }
  });
};

Candidate.droppedOut = function(cand_id, result){
  sql.query("UPDATE 'Gov_site'.'Candidate' SET active = false WHERE user_id = ?",[cand_id],function(err,res){
    if(err){
      result(err,null);
    }else{
      result(null,{
        "code":200,
        "response":"Candidate has been dropped out"
      });
    }
  });
};

Candidate.updatePhotoUrl = function(cand_id, photo_url, result){
  sql.query("UPDATE 'Gov_site'.'Candidate' SET pic_url = ? WHERE user_id = ?",[photo_url,cand_id],function(err,res){
    if(err){
      result(err,null);
    }else{
      result(null,{
        "code":200,
        "response":"Photo url has been updated"
      });
    }
  });
}

module.exports = Candidate;