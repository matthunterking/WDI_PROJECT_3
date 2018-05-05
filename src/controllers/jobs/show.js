JobsShowCtrl.$inject = ['Job', '$state'];

function JobsShowCtrl(Job, $state) {
  this.job = {};
  this.data = {};

  Job
    .findById($state.params.id)
    .then(res => this.job = res.data);

  function handleDelete() {
    Job
      .removeById($state.params.id)
      .then(() => $state.go('jobsIndex'));
  }

  function handleComentCreate() {
    Job
      .commentCreate($state.params.id, this.data)
      .then(res => this.job = res.data);
  }

  function handleCommentDelete(comment) {
    Job.commentDelete($state.params.id, comment._id)
      .then(res => this.job = res.data);
  }

  this.handleDelete = handleDelete;
  this.handleComentCreate = handleComentCreate;
  this.handleComentDelete = handleCommentDelete;
}

export default JobsShowCtrl;
