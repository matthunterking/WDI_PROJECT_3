const Job = require('../models/job');

function jobsIndex(req, res, next) {
  Job
    .find()
    .populate('createdBy')
    .exec()
    .then(jobs => res.json(jobs))
    .catch(next);
}

function jobsIndexFilter(req, res, next) {
  //max distance is in km!
  const radians = (parseFloat(req.body.maxDistance) / 6378.1);
  console.log(radians);
  Job
    .find({
      location: {
        $geoWithin: {
          $centerSphere: [ [ parseFloat(req.body.lng), parseFloat(req.body.lat) ], radians ]
        }
      }
    })
    .populate('createdBy')
    .exec()
    .then(jobs => res.json(jobs))
    .catch(next);
}

function jobsShow(req, res, next) {
  Job
    .findById(req.params.id)
    .populate('createdBy messages.createdBy applicants.who')
    .exec()
    .then(job => {
      if(!job) return res.sendStatus(404);
      res.json(job);
    })
    .catch(next);
}

function jobsCreate(req, res, next) {
  req.body.createdBy = req.currentUser;
  Job
    .create(req.body)
    .then(job => res.status(201).json(job))
    .catch(next);
}

function jobsUpdate(req, res, next) {
  Job
    .findById(req.params.id)
    .exec()
    .then(job => {
      if(!job) return res.sendStatus(404);
      return Object.assign(job, req.body);
    })
    .then(job => job.save())
    .then(job => res.json(job))
    .catch(next);
}

function jobsDelete(req, res, next) {
  Job
    .findById(req.params.id)
    .exec()
    .then(job => {
      if(!job) return res.sendStatus(404);
      return job.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

//jobs message creation
function jobsMessageCreate(req, res, next) {
  req.body.createdBy = req.currentUser;
  Job
    .findById(req.params.id)
    .populate('createdBy messages.createdBy applicants.who')
    .exec()
    .then(job => {
      job.messages.push(req.body);
      return job.save();
    })
    .then(job => res.json(job))
    .catch(next);
}

//jobs message deletion
function jobsMessageDelete(req, res, next) {
  Job
    .findById(req.params.id)
    .populate('createdBy messages.createdBy applicants.who')
    .exec()
    .then(job => {
      const message = job.messages.id(req.params.messageId);
      if(!message.createdBy.equals(req.currentUser._id)) {
        return res.status(401).json({message: 'Unauthorized'});
      }
      message.remove();
      return job.save();
    })
    .then(job => res.json(job))
    .catch(next);
}

//jobs applicant creation
function jobsApplicantCreate(req, res, next) {
  req.body.who = req.currentUser;
  Job
    .findById(req.params.id)
    .populate('createdBy messages.createdBy applicants.who')
    .exec()
    .then(job => {
      job.applicants.push(req.body);
      return job.save();
    })
    .then(job => {
      res.json(job);
    })
    .catch(next);
}

//jobs applicant deletion
function jobsApplicantDelete(req, res, next) {
  Job
    .findById(req.params.id)
    .populate('createdBy messages.createdBy applicants.who')
    .exec()
    .then(job => {
      const applicant = job.applicants.id(req.params.applicantId);
      applicant.remove();
      return job.save();
    })
    .then(job => res.json(job))
    .catch(next);
}

// accepting applicants

function jobsApplicantAccept(req, res, next) {
  Job
    .findById(req.params.id)
    .populate('createdBy messages.createdBy applicants.who')
    .exec()
    .then(job => {
      const applicant = job.applicants.id(req.params.applicantId);
      applicant.status = 'accepted';
      return job.save();
    })
    .then(job => res.json(job))
    .catch(next);
}

// rejecting applicants

function jobsApplicantReject(req, res, next) {
  Job
    .findById(req.params.id)
    .populate('createdBy messages.createdBy applicants.who')
    .exec()
    .then(job => {
      const applicant = job.applicants.id(req.params.applicantId);
      applicant.status = 'rejected';
      return job.save();
    })
    .then(job => res.json(job))
    .catch(next);
}


// change job status to in progress

function jobsStatusProgress(req, res, next) {
  Job
    .findById(req.params.id)
    .populate('createdBy messages.createdBy applicants.who')
    .exec()
    .then(job => {
      job.status = 'in progress';
      return job.save();
    })
    .then(job => res.json(job))
    .catch(next);
}

// change job status to finished

function jobsStatusFinish(req, res, next) {
  Job
    .findById(req.params.id)
    .populate('createdBy messages.createdBy applicants.who')
    .exec()
    .then(job => {
      job.status = 'finished';
      return job.save();
    })
    .then(job => res.json(job))
    .catch(next);
}

// change job status to reviewed

function jobsStatusReview(req, res, next) {
  Job
    .findById(req.params.id)
    .populate('createdBy messages.createdBy applicants.who')
    .exec()
    .then(job => {
      job.status = 'reviewed';
      return job.save();
    })
    .then(job => res.json(job))
    .catch(next);
}

module.exports = {
  index: jobsIndex,
  indexFilter: jobsIndexFilter,
  show: jobsShow,
  create: jobsCreate,
  update: jobsUpdate,
  delete: jobsDelete,
  messageCreate: jobsMessageCreate,
  messageDelete: jobsMessageDelete,
  applicantCreate: jobsApplicantCreate,
  applicantDelete: jobsApplicantDelete,
  applicantAccept: jobsApplicantAccept,
  applicantReject: jobsApplicantReject,
  statusProgress: jobsStatusProgress,
  statusFinish: jobsStatusFinish,
  statusReview: jobsStatusReview
};
