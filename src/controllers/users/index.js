UsersIndexCtrl.$inject = ['$http'];


function UsersIndexCtrl($http) {
  this.all = [];

  $http.get('/api/users')
    .then(res => this.all = res.data);

}

export default UsersIndexCtrl;
