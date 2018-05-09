JobsEditCtrl.$inject = ['Job', '$state'];

function JobsEditCtrl(Job, $state) {
  this.data = {};
  this.cats = ['DIY', 'Gardening', 'Removals', 'Shopping', 'Social', 'Pet-sitting', 'Others'];
  this.durations = ['1-2 hours', '2-3 hours', 'Half a day', 'Full day'];
  this.frequencies =['Once', 'Daily', 'Weekly', 'Monthly'];

  Job
    .findById($state.params.id)
    .then(res => this.data = res.data);

  function handleUpdate() {

    if(this.form.$invalid) return false;

    Job
      .updateById($state.params.id, this.data)
      .then(() => $state.go('jobsShow', $state.params));
  }


  function updateLocation(location) {
    console.log('updating location..', location);
    this.data.location = location;
  }

  function isDanger(field) {
    return (this.form[field].$touched || this.form.$submitted) && (this.form[field].$error.required || this.form[field].$error.email);
  }

  this.handleUpdate = handleUpdate;
  this.updateLocation = updateLocation;
  this.isDanger = isDanger;
}

export default JobsEditCtrl;
