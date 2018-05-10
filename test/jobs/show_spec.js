/* global api, describe, it, expect, beforeEach */

const Job = require('../../models/job');

const jobData = {
  category: 'test',
  description: 'test',
  duration: 'test'
};

let jobId;

describe('GET /job/:id', () => {
  beforeEach(done => {
    Job
      .remove({})
      .then(() => Job.create(jobData))
      .then(job => {
        jobId = job._id;
      })
      .then(() => done());
  });

  it('should return a 200 reponse', done => {
    api
      .get(`/api/jobs/${jobId}`)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return a valid job object', done => {
    api
      .get(`/api/jobs/${jobId}`)
      .end((err, res) => {
        expect(res.body._id).to.be.a('string');
        Object.keys(jobData).forEach(field => {
          expect(res.body[field]).to.deep.eq(jobData[field]);
        });
        done();
      });
  });



});
