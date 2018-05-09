JobsIndexCtrl.$inject = ['Job'];

function JobsIndexCtrl(Job) {
  this.all = [];
  this.userLocation = {};
  this.criteria = {};

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

  function setUserLocation(pos) {
    this.criteria.lat = pos.lat;
    this.criteria.lng = pos.lng;
  }

  this.jobsFilter = jobsFilter;
  this.setUserLocation = setUserLocation;

}
export default JobsIndexCtrl;
