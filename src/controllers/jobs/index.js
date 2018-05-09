JobsIndexCtrl.$inject = ['Job'];

function JobsIndexCtrl(Job) {
  this.all = [];
  this.userLocation = {};

  Job
    .find()
    .then(res => this.all = res.data);

  function jobsFilter() {
    Job
      .findByLocation(this.criteria)
      .then(res => {
        this.all = res.data;
      });
  }

  this.jobsFilter = jobsFilter;

}
export default JobsIndexCtrl;
