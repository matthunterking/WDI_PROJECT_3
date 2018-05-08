JobsNewCtrl.$inject = ['Job', '$state'];

function JobsNewCtrl(Job, $state) {
  this.data = {};
  this.cats = ['DIY', 'Gardening', 'Removals', 'Shopping', 'Social', 'Pet-sitting', 'Others'];
  this.durations = ['1-2 hours', '2-3 hours', 'Half a day', 'Full day'];
  this.frequencies =['Once', 'Daily', 'Weekly', 'Monthly'];



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
