User.$inject = ['$http'];

function User($http) {

  function find() {
    return $http.get('/api/users');
  }

  function findById(id) {
    return $http.get(`/api/users/${id}`);
  }

  function removeById(id) {
    return $http.delete(`/api/users/${id}`);
  }

  function updateById(id, data) {
    return $http.put(`/api/users/${id}`, data);
  }

  this.find = find;
  this.findById = findById;
  this.removeById = removeById;
  this.updateById = updateById;
}

export default User;
