UsersShowCtrl.$inject = ['$http', '$state'];

function UsersShowCtrl($http, $state) {
  this.user = {};

$http.get(`/api/users/${$state.params.id}`
    .then(res => this.user = res.data);

  function handleDelete() {
    $http.delete(`/api/users/${$state.params.id}`);
      .then(() => $state.go('usersIndex'));
  }

  this.handleDelete = handleDelete;

}

export default UsersShowCtrl;
