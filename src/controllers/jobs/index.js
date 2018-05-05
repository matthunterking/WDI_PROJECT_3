JobsIndexCtrl.$inject = ['Job'];

function JobsIndexCtrl(Job) {
  this.all = [];

  Job
    .find()
    .then(res => this.all = res.data);
}

export default JobsIndexCtrl;
