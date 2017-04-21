var db = require('./pghelper');

exports.getInfobyId = function(req, res, next) {
	var id = req.params.id;
	db.select("SELECT * FROM salesforce.Lead WHERE SFID='" + id + "'")
	.then(function(results) {
		//console.log(results);	
		res.json(results);
	})
    .catch(next);
}

exports.createLead = function(req, res, next) {
	if (!req.body) return res.sendStatus(400);
	//console.log(req.body);
	var query = "INSERT INTO salesforce.lead (identification_number__c, passport_number__c, gender__c, title_th__c, ";
	query += "first_name_th__c, last_name_th__c, salutation, firstname, lastname, mobilephone, email, congenital_disease__c, ";
	query += "student_id__c, faculty__c, request_zone__c, street, city, state, postalcode, ";
	query += "country, parent_name__c, parent_phone__c) VALUES ('"; 
	query += req.body.identification_number__c + "', '" + req.body.passport_number__c + "', '" + req.body.gender__c + "', '";
	query += req.body.title_th__c + "', '" + req.body.first_name_th__c + "', '" + req.body.last_name_th__c + "', '";
	query += req.body.salutation + "', '" + req.body.firstname + "', '" + req.body.lastname + "', '" + req.body.mobilephone + "', '";
	query += req.body.email + "', '" + req.body.congenital_disease__c + "', '" + req.body.student_id__c + "', '" + req.body.faculty__c + "', '";
	query += req.body.request_zone__c + "', '" + req.body.street + "', '" + req.body.city + "', '";
	query += req.body.state + "', '" + req.body.postalcode + "', '" + req.body.country + "', '" + req.body.parent_name__c + "', '";
	query += req.body.parent_phone__c + "') RETURNING *";
	db.select(query)
	.then(function(results) {
		setTimeout(function () {
			db.select("SELECT * FROM salesforce.lead WHERE id='" + results[0].id + "'")
			.then(function(results2) {
				console.log(results2);	
				res.json(results2);
			})
		    .catch(next);
		}, 5000) 
	})
    .catch(next);
}

exports.deleteLead = function(req, res, next) {
	var id = req.params.id;
	db.select("DELETE FROM salesforce.Lead WHERE SFID='" + id + "'" )
	.then(function(results) {
		console.log(results);	
		res.json(results);
	})
    .catch(next);
}

exports.updateLead = function(req, res, next) {
	var id = req.params.id;
	if (!req.body) return res.sendStatus(400);
	console.log(req.body);
	var query = "UPDATE salesforce.Lead SET identification_number__c='" + req.body.identification_number__c + "', "; 
	query += "passport_number__c='" + req.body.passport_number__c + "', ";
	query += "gender__c='" + req.body.gender__c + "', ";
	query += "title_th__c='" + req.body.title_th__c + "', ";
	query += "first_name_th__c='" + req.body.first_name_th__c + "', ";
	query += "last_name_th__c='" + req.body.last_name_th__c + "', ";
	query += "salutation='" + req.body.salutation + "', ";
	query += "firstname='" + req.body.firstname + "', ";
	query += "lastname='" + req.body.lastname + "', ";
	query += "mobilephone='" + req.body.mobilephone + "', ";
	query += "email='" + req.body.email + "', ";
	query += "congenital_disease__c='" + req.body.congenital_disease__c + "', ";
	query += "student_id__c='" + req.body.student_id__c + "', ";
	query += "faculty__c='" + req.body.faculty__c + "', ";
	query += "request_zone__c='" + req.body.request_zone__c + "', ";
	query += "street='" + req.body.street + "', ";
	query += "city='" + req.body.city + "', ";
	query += "state='" + req.body.state + "', ";
	query += "postalcode='" + req.body.postalcode + "', ";
	query += "country='" + req.body.country + "', ";
	query += "parent_name__c='" + req.body.parent_name__c + "', ";
	query += "parent_phone__c='" + req.body.parent_phone__c + "' ";
	query += " WHERE SFID='" + id + "' RETURNING *";
	db.select(query)
	.then(function(results) {
		console.log(results);	
		res.json(results);
	})	
    .catch(next);
}