JobsShowCtrl.$inject = ['Job', '$state'];

function JobsShowCtrl(Job, $state) {
  this.job = {};
  this.data = {};
  this.applicant = [];

  Job
    .findById($state.params.id)
    .then(res => this.job = res.data);

  function handleDelete() {
    Job
      .removeById($state.params.id)
      .then(() => $state.go('jobsIndex'));
  }

  function handleMessageCreate() {

    if(this.form.$invalid) return false;
    console.log(this.data);

    Job
      .messageCreate($state.params.id, this.data)
      .then(res => this.job = res.data);
  }

  function handleMessageDelete(message) {
    Job
      .messageDelete($state.params.id, message._id)
      .then(res => this.job = res.data);
  }

  function handleApplicantCreate() {

    if(this.form.$invalid) return false;

    Job
      .applicantCreate($state.params.id, this.data)
      .then(res => this.job = res.data)
      .then(handleMessageCreate());
  }

  function handleApplicantDelete(applicant) {
    Job
      .applicantDelete($state.params.id, applicant._id)
      .then(res => this.job = res.data);
  }


  this.handleDelete = handleDelete;
  this.handleMessageCreate = handleMessageCreate;
  this.handleMessageDelete = handleMessageDelete;
  this.handleApplicantCreate = handleApplicantCreate;
  this.handleApplicantDelete = handleApplicantDelete;
}

export default JobsShowCtrl;
