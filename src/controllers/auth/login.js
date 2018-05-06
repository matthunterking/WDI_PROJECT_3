LoginCtrl.$inject = ['User', '$auth', '$state'];

function LoginCtrl(User, $auth, $state) {
  this.data = {};
  this.userId = '';

  function handleLogin() {

    if(this.form.$invalid) return false;

    $auth.login(this.data)
      .then(() => {
        User.findById($auth.getPayload().sub)
          .then(res => this.userId = res.data)
          .then(() => $state.go('jobsIndex'));
      });
  }

  function isDanger(field) {
    return (this.form[field].$touched || this.form.$submitted) && (this.form[field].$error.required || this.form[field].$error.email);
  }

  this.isAuthenticated = $auth.isAuthenticated;
  this.handleLogin = handleLogin;
  this.isDanger = isDanger;

}

export default LoginCtrl;
