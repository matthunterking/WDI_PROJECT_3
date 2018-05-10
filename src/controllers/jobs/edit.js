JobsEditCtrl.$inject = ['Job', '$state'];

function JobsEditCtrl(Job, $state) {

  const vm = this;
  vm.data = {};
  vm.cats = ['DIY', 'Gardening', 'Removals', 'Shopping', 'Social', 'Pet-sitting', 'Others'];
  vm.durations = ['1-2 hours', '2-3 hours', 'Half a day', 'Full day'];
  vm.frequencies =['Once', 'Daily', 'Weekly', 'Monthly'];

  Job
    .findById($state.params.id)
    .then(res => vm.data = res.data);

  function handleUpdate() {
    if(this.form.$invalid) return false;
    Job
      .updateById($state.params.id, vm.data)
      .then(() => $state.go('jobsShow', $state.params))
      .then(ifFinished);
  }


  function updateLocation(location) {
    console.log('updating location..', location);
    vm.data.location = location;
  }

  function handleStatusReview() {
    Job
      .statusReview($state.params.id)
      .then(() => vm.status = 'reviewed')
      .then(location.reload());
  }

  function ifFinished() {
    console.log(vm.data.status);
    if (vm.data.status === 'finished') {
      handleStatusReview();
    }
  }

  function isDanger(field) {
    return (vm.form[field].$touched || vm.form.$submitted) && (vm.form[field].$error.required || vm.form[field].$error.email);
  }

  this.handleUpdate = handleUpdate;
  this.updateLocation = updateLocation;
  this.isDanger = isDanger;
  this.handleStatusReview = handleStatusReview;
  this.ifFinished = ifFinished;
}

export default JobsEditCtrl;
