'use strict';

var sql = require('./db.js');
var Campaign = function( campaign) {
    this.campaign_name = campaign.campaign_name;
    this.campaign_info = campaign.campaign_info;
    this.site_link = campaign.site_link;
  };

  var edCampaign = function( campaign) {
    this.campaignID = campaign.campaignID;
    this.campaign_name = campaign.campaign_name;
    this.campaign_info = campaign.campaign_info;
    this.site_link = campaign.site_link;
  };

  var delCampaign = function( campaign) {
    this.campaignID = campaign.campaignID;
  };

  var idCampaign = function(campaign){
    this.userID = campaign.userID;
  };



Campaign.createCampaign = function(newCamp, result) {
  sql.query("INSERT INTO `Gov_site`.`Campaign` (`campaign_name`,`campaign_info`,`site_link`) VALUES ('" + newCamp.campaign_name + "', '" + newCamp.campaign_info + "', '" + newCamp.site_link +"');",
    function(err, res) {
      if (err){
        result(err, null);
      }else{
        result(null,{"code":200,"response":"Campaign creation was sucessfull."});
      }
    }
  );
};

edCampaign.editCampaign = function(editCamp, result) {
  sql.query('SELECT * FROM `Gov_site`.`Campaign` WHERE campaign_id = campaignID', [editCamp.campaign_name, editCamp.campaign_info, editCamp.site_link], function(err, res){
    if (err){
      result(err, null);
    }else{
      if(res.length > 0){
        if(res[0].campaignID == userUpdate.campaignID){
          
            result(null,{
              "response":"Update of campaign was sucessfull.",
              "campaign_name":res[0].campaign_name,
              "campaign_info":res[0].campaign_info,
              "site_link":res[0].site_link,
            });
        }
      result(null,{"code":200,"response":"Campaign update was not sucessfull. Campaign ID not found"});
    }
  }
  }
);
};

delCampaign.deleteCampaign = function(err, id) {
  if (err){
    result(err,null);
  };
  sql.query("DELETE FROM 'Gov_site'. 'Campaign' WHERE campaign_id = ?",[id], function (err, result) {
    if(err){
      result(err,null);
    };
  });
};

idCampaign.getAllCampaigns = function(id, result) {
  sql.query(`SELECT * FROM 'Gov_site'.'Campaign' WHERE user_id = ?`, [id], function (err, res){
if(err){
  result(err,null);
}
else{
  result(null,res)
}
  });
};

module.exports = Campaign;