JobsEditCtrl.$inject = ['Job', '$state'];

function JobsEditCtrl(Job, $state) {
  this.data = {};

  Job
    .findById($state.params.id)
    .then(res => this.data = res.data);

  function handleUpdate() {
    Job
      .updateById($state.params.id, this.data)
      .then(() => $state.go('jobsShow', $state.params))
  }

  this.handleUpdate = handleUpdate;
}

export default JobsEditCtrl;
