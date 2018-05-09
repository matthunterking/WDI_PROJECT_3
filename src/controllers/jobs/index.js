JobsIndexCtrl.$inject = ['Job'];

function JobsIndexCtrl(Job) {
  this.all = [];
  // this.criteria = {};

  Job
    .find()
    .then(res => this.all = res.data);

  function jobsFilter() {
    console.log(this.criteria);
    Job
      .findByLocation(this.criteria)
      .then(res => {
        // this.all = res.data;
        console.log(res.data);
      });
  }

  this.jobsFilter = jobsFilter;

}
export default JobsIndexCtrl;
