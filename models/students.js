var mongoose = require('mongoose')
var Schema = mongoose.Schema

var StudentSchema = new Schema({
	id: {
		type: Number,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,	
		required: true
	},
	firstname: String,
	lastname: String,
	projects: [{
		name: String,
		xml: String,
		create: {
			type: Date,
			default: Date.now
		}
	}]
})

module.exports = mongoose.model('Student', StudentSchema)