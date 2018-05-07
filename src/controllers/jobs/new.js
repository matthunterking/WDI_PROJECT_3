JobsNewCtrl.$inject = ['Job', '$state'];

function JobsNewCtrl(Job, $state) {
  this.data = {};

  function handleCreate() {

    if(this.form.$invalid) return false;

    Job
      .create(this.data)
      .then(() => $state.go('jobsIndex'));
  }

  function updateLocation(location) {
    console.log('updating location..', location);
    this.data.location = location;
  }

  function isDanger(field) {
    return (this.form[field].$touched || this.form.$submitted) && (this.form[field].$error.required);
  }


  this.handleCreate = handleCreate;
  this.updateLocation = updateLocation;
  this.isDanger = isDanger;

}

export default JobsNewCtrl;
