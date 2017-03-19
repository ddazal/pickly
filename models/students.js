var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcryptjs')

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
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	projects: [{
		name: String,
		xml: String,
		createdAt: {
			type: Date,
			default: Date.now
		}
	}]
})

StudentSchema.pre('save', function(next) {
  var student = this
  if (!student.isModified('password')) 
  	return next()
  bcrypt.genSalt(10, (err, salt) => {
    if (err) 
    	return next(err)
    bcrypt.hash(student.password, salt, (err, hash) => {
      if (err) 
      	return next(err)
      student.password = hash
      next()
    });
  });
});

StudentSchema.methods.comparePassword = function(password, callback) {
	bcrypt.compare(password, this.password, (err, match) => {
		if (err)
			return callback(err)
		callback(null, match)
	})
}

module.exports = mongoose.model('Student', StudentSchema)