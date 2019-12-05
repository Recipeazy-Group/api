'use strict';

var sql = require('./db.js');
var Policy = function(policy) {
    this.policy_name  = policy.policy_name;
    this.policy_info  = policy.policy_info;
  };






const policygetStatement = 
`SELECT * FROM 'Gov_site'.'Policy' WHERE policy_id = ?`;

const policyCandMatchStatement = 
`SELECT * FROM 'Gov_site'.'Cand_policy' WHERE policy_id = ?`;



module.exports = Policy;