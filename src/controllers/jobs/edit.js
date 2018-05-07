JobsEditCtrl.$inject = ['Job', '$state'];

function JobsEditCtrl(Job, $state) {
  this.data = {};

  Job
    .findById($state.params.id)
    .then(res => this.data = res.data);

  function handleUpdate() {

    if(this.form.$invalid) return false;

    Job
      .updateById($state.params.id, this.data)
      .then(() => $state.go('jobsShow', $state.params));
  }

  function isDanger(field) {
    return (this.form[field].$touched || this.form.$submitted) && (this.form[field].$error.required || this.form[field].$error.email);
  }

  this.handleUpdate = handleUpdate;
  this.isDanger = isDanger;
}

export default JobsEditCtrl;
