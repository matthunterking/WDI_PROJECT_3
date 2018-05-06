JobsNewCtrl.$inject = ['Job', '$state'];

function JobsNewCtrl(Job, $state) {
  this.data = {};

  function handleCreate() {
    Job
      .create(this.data)
      .then(() => $state.go('jobsIndex'));
  }

  function updateLocation(location) {
    console.log('updating location..', location);
    this.data.location = location;
  }

  this.handleCreate = handleCreate;
  this.updateLocation = updateLocation;

}

export default JobsNewCtrl;
