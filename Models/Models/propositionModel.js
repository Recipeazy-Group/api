'use strict';

var sql = require('./db.js');
var Proposistion = function(proposistion) {
    this.prop_name = proposistion.prop_name;
    this.prop_info = proposistion.prop_info;
    this.prop_link = proposistion.prop_link;
  };

  var edProposition = function(proposistion) {
    this.propID = proposistion.propID;
    this.prop_name = proposistion.prop_name;
    this.prop_info = proposistion.prop_info;
    this.prop_link = proposistion.prop_link;
  };

  Proposistion.createProposition = function(newProp, result) {
    sql.query("INSERT INTO `Gov_site`.`Proposition` (`prop_name`,`prop_info`,`prop_link`) VALUES ('" + newProp.prop_name + "', '" + newProp.prop_info + "', '" + newProp.prop_link +"');",
      function(err, res) {
        if (err){
          result(err, null);
        }else{
          result(null,{"code":200,"response":"Proposition creation was sucessfull."});
        }
      }
    );
  };

  edProposition.editProposition = function(editProp, result) {
    sql.query('SELECT * FROM `Gov_site`.`Proposition` WHERE prop_id = propID', [editProp.prop_name, editProp.prop_info, editProp.prop_link], function(err, res){
      if (err){
        result(err, null);
      }else{
        if(res.length > 0){
          if(res[0].propID == editProp.propID){
            
              result(null,{
                "response":"Update of proposition was sucessfull.",
                "prop_name":res[0].prop_name,
                "prop_info":res[0].prop_info,
                "prop_link":res[0].prop_link,
              });
          }
        result(null,{"code":200,"response":"Proposition update was not sucessfull. Proposition ID not found"});
      }
    }
    }
  );
  };

module.exports = Proposistion;