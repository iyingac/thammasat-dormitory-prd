var db = require('./pghelper');

exports.UserInfo = function(req, res, next) {
	var id = req.params.id;
	const results = db.select("SELECT name, identification_number__c, gender__c FROM salesforce.Account WHERE SFID='" + id + "'");
	res.json(results);
};