jobsIndexFilterLocationCtrl.$inject = ['Job', '$state'];

function jobsIndexFilterLocationCtrl(Job, $state) {
  this.all = [];
  this.criteria = {};

  Job
    .findByLocation(this.criteria)
    .then(res => this.all = res.data);
}

export default jobsIndexFilterLocationCtrl;
