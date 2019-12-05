'use strict';

var sql = require('./db.js');
var Event = function(event) {
    this.event_date  = event.event_date;
    this.event_name  = event.event_name;
    this.event_info  = event.event_info;
    this.campaign_id  = event.campaign_id;
  };

module.exports = Event;