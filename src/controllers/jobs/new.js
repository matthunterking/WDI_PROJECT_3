JobsNewCtrl.$inject = ['Job', '$state'];

function JobsNewCtrl(Job, $state) {
  this.data = {};

  function handleCreate() {
    Job
      .create(this.data)
      .then(() => $state.go('jobsIndex'));
  }

  this.handleCreate = handleCreate;

}

export default JobsNewCtrl;
