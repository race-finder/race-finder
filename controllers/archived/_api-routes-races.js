// *********************************************************************************
// _api-routes-races.js
//
// This file contains several routes not yet used in production. This file
// was initially created by Christopher on 9/30/2017. Keep this file to use
// the code if any routes are implemented in the production version of the
// file--"api-routes-races.js" (no preceding underscore).
//
// This file offers a set of routes for displaying and saving data to the db.
// *********************************************************************************

// Dependencies
// =============================================================
const Race = require("../models/races.js");
const Location = require("../models/locations.js");

// Routes
// =============================================================
module.exports = function(app) {
	// Get all races
	app.get("/api/all", function(req, res) {
		Race.findAll({}).then(function(results) {
			res.json(results);
		});
	});

	// Get a specific race by id
	app.get("/api/id/:id", function(req, res) {
		if (req.params.id) {
			Race.findAll({
				where: {
					id: req.params.id
				}
			}).then(function(results) {
				res.json(results);
			});
		}
	});

	// Add a race
	app.post("/api/new", function(req, res) {
		console.log("Race Info:");
		console.log(req.body);
		Race.create({
			name: req.body.name,
			url: req.body.url,
			zip_code: req.body.zip_code,
			date:req.body.date,
			avg_temp:req.body.avg_temp
		});
	});

	// Delete a race
	app.post("/api/delete", function(req, res) {
		console.log("Race Info:");
		console.log(req.body);
		Race.destroy({
			where: {
				id: req.body.id
			}
		});
	});

	// Update a race
	app.post("/api/update", function(req, res) {
		Race.update({
			name:req.body.name,
			url:req.body.url,
			zip_code: req.body.zip_code,
			date:req.body.date,
			avg_temp: req.body.avg_temp
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(results){
			res.json(results);
		});
	});
};