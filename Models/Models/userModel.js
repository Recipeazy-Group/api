'use strict';

var sql = require('./db.js');

var User = function(user) {
  this.username = user.username;
  this.email = user.email;
  this.f_name = user.f_name;
  this.l_name = user.l_name;
  this.pass = user.pass;
};

var logUser = function(user) {
  this.username = user.username;
  this.pass = user.pass;
}

var usId = function(user){
  this.user_id = user.user_id;
}

var PassRecov = function(passrecov) {
  this.user_id = passrecov.user_id;
  this.recov_ans_one = passrecov.recov_ans_one;
  this.recov_ans_two = passrecov.recov_ans_two;
}

User.createUser = function(newUse, result) {

  sql.query("INSERT INTO `Gov_site`.`User` (`username`,`email`,`real_name`,`password`) VALUES ('" + newUse.username + "', '" + newUse.email + "', '" + newUse.f_name + newUse.l_name + "', '" + newUse.pass + "');",

    function(err, res) {
      if (err){
        result(err, null);
      }else{
        result(null,{"code":200,"response":"User creation was sucessfull."});
      }
    }
  );
};


logUser.loginUser = function(userLogin, result){
  sql.query('SELECT * FROM `Gov_site`.`User` WHERE email = ? OR username = ?;', [userLogin.email, userLogin.username], function(err, res) {
    if(err){
      result(err, null);
    }else{
      if(res.length > 0){
        if(res[0].pass == userLogin.pass){
          result(null,{
            "code":200,
            "response":"Login was sucessfull.",
            "user_id":res[0].user_id,
            "email":res[0].email,
            "real_name":res[0].real_name
            });
        }else{
          result({"code":204,
                  "response":"login unsuccessful, enter correct password"},null);
        }
      }else{
        result({"code":204,
                "response":"login unsuccessful, email/username not found"},null);
      }
    }
  });
};

usId.getUserByID = function(user, result){
  sql.query('SELECT * FROM `Gov_site`.`User` WHERE user_id = ?', [user.user_id], function(err, res){
      if(err){
        result(err, null);
      }else{
        if(res.length > 0){
          result(null,{
            "code":200,
            "response":"Account retrieved",
            "user_id":res[0].user_id,
            "email":res[0].email,
            "real_name":resp[0].real_name
          })
        }
      }
  });
};

const recoverPasswordStatement =
 `SELECT * FROM 'Gov_site'.'Password_recovery' WHERE recov_ans_one = ? AND recov_ans_two = ?`
;

const editingUserStatement = 
`REPLACE INTO 'Gov_site'.'User' VALUES (?, ?, ?, ?, ?)`;

const updateUser = 
  `UPDATE USER
  SET username = :username,
  email = :email,
  real_name = :real_name
  WHERE user_id = :user_id`;

async function upd(u) {
  const user = Object.assign({}, u);
  const result = await database.simpleExecute(updateUser, user);

  if (result.rowsAffected && result.rowsAffected === 1) {
    return user;
  } else {
    return null;
  }
};

User.update = (upd_u) => {
  upd(upd_u);
  return upd_u;
}


module.exports = User;