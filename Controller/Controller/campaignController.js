'use strict';

var Campaign = require('../Models/campaignModel.js');

exports.create_campaign = function(req, res){
    var new_campaign = new Campaign(req.body);
    if (!new_campaign.campaign_name || !new_campaign.campaign_info || !new_campaign.site_link ) {
      res.status(400).json({
        "code": 400,
        "response":"Please provide input for all fields."
      });
    }else{
      Campaign.create_campaign(new_campaign, function(err,campaign){
        if (err){
          res.send(err);
        }
        else{
          res.json(campaign);
        }
      });
    }
  };

  exports.edit_campaign = async function(req, res, next) {
    try {
      const c = {
          campaignID: req.body.campaignID,
          campaign_name: req.body.campaign_name,
          campaign_info: req.body.campaign_info,
          site_link: req.body.site_link
      };
      c.campaignID = parseInt(req.params.id, 10);
      c = await Campaign.update(c);
  
      if(c !== null) {
        res.status(200).json(c);
      } else {
        res.status(404).end();
      }
    } catch(err) {
      next(err);
    }
  };

  exports.delete_campaign = function(req, res) {
  
exports.getAllCampaigns = function(req,res){
    Campaign.getAllCampaigns(function(err,camp){
        if(err){
            res.send(err);
        }
        res.json(camp);
    });
};


};