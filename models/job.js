const mongoose = require('mongoose');
const moment = require('moment');

// so users can leave messages on the job
const messageSchema = new mongoose.Schema({

  message: { type: String },
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

messageSchema.virtual('createdAtRelative')
  .get(function(){
    return moment(this.createdAt).fromNow();
  });

messageSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.createdAt;
    delete json.updatedAt;
    return json;
  }
});

//so users can be associated as applicants to the job
const applicantSchema = new mongoose.Schema({
  who: { type: mongoose.Schema.ObjectId, ref: 'User' },
  status: {type: String, default: 'pending', enum: ['accepted', 'pending', 'rejected']}
}, {
  timestamps: true
});

applicantSchema.virtual('createdAtRelative')
  .get(function(){
    return moment(this.createdAt).fromNow();
  });

applicantSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.createdAt;
    delete json.updatedAt;
    return json;
  }
});

//the actual job schema - removed required from start and end for testing
const jobSchema = new mongoose.Schema({
  category: { type: String },
  description: { type: String },
  duration: { type: String },
  startdate: { type: Date },
  enddate: { type: Date },
  postcode: { type: String },
  location: { type: Object },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  applicants: [ applicantSchema ],
  messages: [ messageSchema ]
}, {
  timestamps: true
});

jobSchema.virtual('createdAtRelative')
  .get(function(){
    return moment(this.createdAt).fromNow();
  });


jobSchema.set('toJSON', {
  virtuals: true
});


module.exports = mongoose.model('Job', jobSchema);
