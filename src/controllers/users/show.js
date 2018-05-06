UsersShowCtrl.$inject = ['User', '$state'];


function UsersShowCtrl(User, $state) {
  this.user = {};

  //find a specific user
  User.findById($state.params.id)
    .then(res => this.user = res.data);


  // //delete a specific user
  // function handleDelete() {
  //   User.removeById($state.params.id)
  //     .then(() => $state.go('home'));
  // }
  //
  // this.handleDelete = handleDelete;

}

export default UsersShowCtrl;
