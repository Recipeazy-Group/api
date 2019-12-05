'use strict';
var express = require('express');
var app = express.Router();
//module.exports = function(app) {

  var userControl = require('../public/Controller/userController.js');
  var candidateControl = require('../public/Controller/candidateController.js');
  var policyControl = require('../public/Controller/policyController.js');
  var propositionControl = require('../public/Controller/propositionController.js');
  var campaignControl = require('../public/Controller/campaignController.js');
  var eventControl = require('../public/Controller/eventController.js');

app.route('/')
.get(function(req,res){
  res.status(200).send('We are working');
});

//Users
  app.route('/signup')              
    .post(userControl.create_user);

  app.route('/login')                  
    .get(userControl.login_user);

  app.route('/user/:user_id')
    .get(userControl.get_user);


//Candidate
app.route('/candidate/:user_id')
  .get(candidateControl.getCandidateProfile);

app.route('/createNewCandidate')
.post(candidateControl.createCandidate);

app.route('/search')
  .get(candidateControl.getAllCandidates);

app.route('/candidatephotoupdate')
  .put(candidateControl.updateProfileImage);

app.route('/candidateinfoupdate')
  .put(candidateControl.updateProfileBio);

app.route('/candidatedrop')
  .put(candidateControl.candidateDrop);


//Policies
app.route('/policies')
  .get(policyControl.getAllPolicies);


app.route('/addNewPolicy')
.post(policyControl.addNewPolicy);

//Campaign
app.route('/campaigns')
.get(campaignControl.getAllCampaigns);

app.route('/addNewCampaign')
.post(campaignControl.create_campaign);

//Proposition
app.route('/propositions')
  .get(propositionControl.getAllPropositions);
//put
app.route('/addNewProposition')
.post(propositionControl.create_proposition);
//Event
app.route('/events')
  .get(eventControl.getAllEvents);
  
app.route('/addEvent')
  .post(eventControl.addEvent);

//};
module.exports = app;
