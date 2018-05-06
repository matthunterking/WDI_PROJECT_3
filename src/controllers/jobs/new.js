JobsNewCtrl.$inject = ['Job', '$state'];

function JobsNewCtrl(Job, $state) {
  this.data = {};

  function handleCreate() {
    console.log(this.data.location);
    postcodeConverter(this.data.location);
    Job
      .create(this.data)
      .then(() => $state.go('jobsIndex'));
  }

  function postcodeConverter(postcode) {
    return postcode;
    //receive a post code
    //send a request to app
    //create an object and save the lat and long
    //save that object in the record
  }

  this.handleCreate = handleCreate;

}

export default JobsNewCtrl;
