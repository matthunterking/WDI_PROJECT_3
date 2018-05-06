UsersProfileCtrl.$inject = ['User', '$state', '$auth'];


function UsersProfileCtrl(User, $state, $auth) {
  this.user = {};

  User.findById($auth.getPayload().sub)
    .then(res => this.user = res.data);


  //delete your account
  function handleDelete() {
    User.removeById($auth.getPayload().sub)
      .then(() => $auth.logout())
      .then(() => $state.go('home'));
  }

  this.handleDelete = handleDelete;


}


export default UsersProfileCtrl;
