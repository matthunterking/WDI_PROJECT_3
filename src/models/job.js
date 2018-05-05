Job.$inject = ['$http'];
function Job($http) {
  function find() {
    return $http.get('/api/jobs');
  }

  function findById(id) {
    return $http.get(`/api/jobs/${id}`);
  }

  function removeById(id) {
    return $http.delete(`/api/jobs/${id}`);
  }

  function create(data) {
    return $http.post('/api/jobs', data);
  }

  function updateById(id, data) {
    return $http.put(`/api/jobs/${id}`, data);
  }

  // function commentCreate(jobId, data) {
  //   return $http.post(`/api/jobs/${jobId}/comments`, data);           /* This will be added when comments are fucntional? */
  // }

  function commentDelete(jobId, commentId) {
    return $http.delete(`/api/jobs/${jobId}/comments/${commentId}`);
  }

  this.find = find;
  this.findById = findById;
  this.removeById = removeById;
  this.create = create;
  this.updateById = updateById;
  // this.commentCreate = commentCreate;
  this.commentDelete = commentDelete;
}

export default Job;
