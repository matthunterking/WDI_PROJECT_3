UsersProfileCtrl.$inject = ['User', '$state', '$auth', '$scope'];


function UsersProfileCtrl(User, $state, $auth, $scope) {

  const vm = this;
  vm.user = {};


  User.findById($auth.getPayload().sub)
    .then(res => vm.user = res.data);

  //delete your account
  function handleDelete() {
    User.removeById($auth.getPayload().sub)
      .then(() => $auth.logout())
      .then(() => $state.go('home'));
  }

  function calculateAverageJobrating() {
    var array = [];
    var userjobs = vm.user.jobs;
    for (var i = 0; i< userjobs.length; i++) {
      array.push(userjobs[i].jobrating);
    }
    var answer = (array.reduce(function(a, b) {
      return a + b;
    }, 0)) / array.length;
    console.log(answer);
    return answer;
  }



  this.handleDelete = handleDelete;
  this.calculateAverageJobrating = calculateAverageJobrating;



}

export default UsersProfileCtrl;
