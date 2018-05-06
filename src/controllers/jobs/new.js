JobsNewCtrl.$inject = ['Job', '$state', '$http'];

function JobsNewCtrl(Job, $state, $http) {
  this.data = {};

  function handleCreate() {
    Job
      .create(this.data)
      .then(() => $state.go('jobsIndex'));
  }

  this.handleCreate = handleCreate;

}

export default JobsNewCtrl;
