UsersShowCtrl.$inject = ['User', '$state'];


function UsersShowCtrl(User, $state) {
  this.user = {};

  User.findById($state.params.id)
    .then(res => this.user = res.data);

  function handleDelete() {
    User.removeById($state.params.id)
      .then(() => $state.go('usersIndex'));
  }


  this.handleDelete = handleDelete;

}

export default UsersShowCtrl;
