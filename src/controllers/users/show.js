UsersShowCtrl.$inject = ['User', '$state'];


function UsersShowCtrl(User, $state) {
  this.user = {};

  const vm = this;

  vm.user = {};
  vm.data = {};

  //find a specific user
  User.findById($state.params.id)
    .then(res => vm.user = res.data);

  //rating as a helper
  function handleUserrating() {
    if(vm.form.$invalid) return false;
    User
      .userratingCreate($state.params.id, vm.data)
      .then(res => vm.user = res.data)
      .then(location.reload());
  }

  //rating as an asker
  function calculateAverageJobrating() {
    var array = [];
    var userjobs = vm.user.jobs;
    if (userjobs) {
      for (var i = 0; i< userjobs.length; i++) {
        array.push(userjobs[i].jobrating);
      }
      var answer = (array.reduce(function(a, b) {
        return a + b;
      }, 0)) / array.length;
      console.log(answer);
      return answer;
    }
  }



  this.calculateAverageJobrating = calculateAverageJobrating;
  this.handleUserrating = handleUserrating;

}

export default UsersShowCtrl;
