const mongoose = require('mongoose');
const moment = require('moment');

// so users can leave messages on the job
const messageSchema = new mongoose.Schema({
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
  status: {
    type: String,
    enum: ['pending','accepted', 'rejected'],
    default: 'pending'
  }
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

//the actual job schema
const jobSchema = new mongoose.Schema({
  category: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  startdate: { type: Date, required: true },
  enddate: { type: Date, required: true },
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