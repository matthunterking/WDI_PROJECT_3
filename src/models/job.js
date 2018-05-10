Job.$inject = ['$http'];
function Job($http) {
  function find() {
    return $http.get('/api/jobs');
  }

  function findById(id) {
    return $http.get(`/api/jobs/${id}`);
  }

  function findByLocation(data) {
    console.log(data);
    return $http.post('/api/jobsfiltered', data);
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

  function messageCreate(jobId, data) {
    return $http.post(`/api/jobs/${jobId}/messages`, data);
  }

  function messageDelete(jobId, messageId) {
    return $http.delete(`/api/jobs/${jobId}/messages/${messageId}`);
  }

  function applicantCreate(jobId, data) {
    return $http.post(`/api/jobs/${jobId}/applicants`, data);
  }

  function applicantDelete(jobId, applicantId) {
    return $http.delete(`/api/jobs/${jobId}/applicants/${applicantId}`);
  }

  function applicantAccept(jobId, applicantId, data) {
    return $http.put(`/api/jobs/${jobId}/applicants/${applicantId}/accept`, data);
  }

  function applicantReject(jobId, applicantId, data) {
    return $http.put(`/api/jobs/${jobId}/applicants/${applicantId}/reject`, data);
  }

  function statusProgress(jobId, data) {
    return $http.put(`/api/jobs/${jobId}/progress`, data);
  }

  function statusFinish(jobId, data) {
    return $http.put(`/api/jobs/${jobId}/finish`, data);
  }

  function statusReview(jobId, data) {
    return $http.put(`/api/jobs/${jobId}/review`, data);
  }

  this.find = find;
  this.findById = findById;
  this.findByLocation = findByLocation;
  this.removeById = removeById;
  this.create = create;
  this.updateById = updateById;
  this.messageCreate = messageCreate;
  this.messageDelete = messageDelete;
  this.applicantCreate = applicantCreate;
  this.applicantDelete = applicantDelete;
  this.applicantAccept = applicantAccept;
  this.applicantReject = applicantReject;
  this.statusProgress = statusProgress;
  this.statusFinish = statusFinish;
  this.statusReview = statusReview;
}

export default Job;
