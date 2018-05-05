JobsNewCtrl.$inject = ['Job', '$state'];

function JobsNewCtrl(Job, $state) {
  this.data = {};

  function handleCreate() {
    console.log('in create');
    Job
      .create(this.data)
      .then(() => $state.go('jobsIndex'));
  }

  this.handleCreate = handleCreate;

}

export default JobsNewCtrl;
