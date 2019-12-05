'use strict';
var sql = require('./db.js');

var Candidate = function(candidate) {
  this.biography = candidate.biography;
  this.pic_url = candidate.pic_url;
  this.active = candidate.active;
  this.position = candidate.position;
  this.location = candidate.location;
};

Candidate.createCandidate = function(newCand, result) {
  sql.query("INSERT INTO `Gov_site`.`Candidate` (`biography`,`pic_url`,`active`,`position`, 'location') VALUES ('" + newCand.biography + "', '" + newCand.pic_url + "', '" + newCand.active + "', '" + newCand.position + "', '" + newCand.location + "');",
  function(err, res) {
    if (err){
      result(err, null);
    }else{
      result(null,{"code":200,"response":"Candidate creation was sucessfull."});
    }
  }
);
};

Candidate.getCandidateById = function(user_id,result){
  sql.query('SELECT * FROM `Gov_site`.`Candidate` JOIN `User` WHERE user_id = ?', [user_id], function(err, res){
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

Candidate.updateBio = function(cand_id, bio, result){
  sql.query("UPDATE 'Gov_site'.'Candidate' SET biography = ? WHERE user_id = ?",[bio,cand_id],function(err,res){
    if(err){
      result(err,null);
    }else{
      result(null,{
        "code":200,
        "response":"Bio has been updated"
      });
    }
  });
}

Candidate.updatePosition = function(cand_id, pos, result){
  sql.query("UPDATE 'Gov_site'.'Candidate' SET position = ? WHERE user_id = ?",[pos,cand_id],function(err,res){
    if(err){
      result(err,null);
    }else{
      result(null,{
        "code":200,
        "response":"Position has been updated"
      });
    }
  });
}

Candidate.updateLocation = function(cand_id, loc, result){
  sql.query("UPDATE 'Gov_site'.'Candidate' SET location = ? WHERE user_id = ?",[loc,cand_id],function(err,res){
    if(err){
      result(err,null);
    }else{
      result(null,{
        "code":200,
        "response":"Location has been updated"
      });
    }
  });
}
module.exports = Candidate;
