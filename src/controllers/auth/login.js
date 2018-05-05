LoginCtrl.$inject = ['$auth', '$state'];

function LoginCtrl($auth, $state) {
  this.data = {};

  function handleLogin() {

    if(this.form.$invalid) return false;

    $auth.login(this.data)
      .then(() => $state.go('jobsIndex'));
  }


  function isDanger(field) {
    return (this.form[field].$touched || this.form.$submitted) && (this.form[field].$error.required || this.form[field].$error.email);
  }




  this.handleLogin = handleLogin;
  this.isDanger = isDanger;

}

export default LoginCtrl;
