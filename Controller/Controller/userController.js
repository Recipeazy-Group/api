'use strict';

var User = require('../Models/userModel.js');
let logged_in = false;

exports.create_user = function(req, res){
  var new_user = new User(req.body);
  if (!new_user.email || !new_user.pass || !new_user.f_name || !new_user.l_name || !new_user.username) {
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }else{
    User.createUser(new_user, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};

exports.login_user = function(req,res){
  var login_user = new User(req.body);
  if((!login_user.username && !login_user.email) || !login_user.pass){
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields."
    });
  }else{
    User.loginUser(login_user, function(err, user){
      if(err){
        res.json(err);
      }
      else {
        res.json(user);
        logged_in = true;
      }
    });
  }
};

exports.get_user = function(req, res) {
  User.getUserByID(req.params.user_id, function(err, user){
    if (err){
      res.send(err);
    }
    else{
      res.json(user);
    }
    
  });
};

exports.recover_password = function(req,res){
  User.recovPass(req.params.user_id, req.params.recov_ans_one, req.params.recov_ans_two, function(err, password){
    if(err){
      res.send(err);
    }
    else{
      res.json(password);
    }
  })
};

exports.edit_user = async function(req, res, next) {
  if(!logged_in) {
    res.json(err);
  }

  try {
    const u = {
        user_id: req.body.user_id,
        username: req.body.username,
        email: req.body.email,
        real_name: req.body.real_name
    };
    u.user_id = parseInt(req.params.id, 10);
    u = await User.update(u);

    if(u !== null) {
      res.status(200).json(u);
    } else {
      res.status(404).end();
    }
  } catch(err) {
    next(err);
  }
};
