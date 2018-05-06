RegisterCtrl.$inject = ['$auth', '$state'];

function RegisterCtrl($auth, $state) {
  this.data = {};
  function handleRegister() {

    if(this.form.$invalid) return false;

    $auth.signup(this.data)
      .then(()=> $state.go('home'));
  }

  function isDanger(field) {
    return (this.form[field].$touched || this.form.$submitted) && (this.form[field].$error.required || this.form[field].$error.email);
  }

  this.handleRegister = handleRegister;
  this.isDanger = isDanger;
}

export default RegisterCtrl;
