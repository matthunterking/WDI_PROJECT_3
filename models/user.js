const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.Promise = require('bluebird');

const userratingSchema = new mongoose.Schema({
  rating: {type: Number}
});


const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: { type: String },
  image: { type: String },
  userratings: [ userratingSchema ]
});

userSchema.virtual('jobs', {
  ref: 'Job',
  localField: '_id',
  foreignField: 'createdBy'
});

// userSchema
//   .virtual('avgUserrating')
//   .get(function getAvgUserrating(){
//     if(this.userratings.length === 0) return 'N/A';
//     const ratings = this.userratings.map(userrating => userrating.rating);
//     return Math.round(((ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length) * 2) / 2);
//   });

userSchema.virtual('avgRating')
  .get(function(){
    return this.userratings.reduce((sum, userrating) => sum + userrating.rating, 0) / this.userratings.length;
  });


userSchema.plugin(require('mongoose-unique-validator'));

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password;
    return json;
  }
});

userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password);
};

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next){
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
