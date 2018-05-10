/* global api, describe, it, expect, beforeEach */

const Job = require('../../models/job');

const jobData = {
  category: 'test',
  description: 'test',
  duration: 'test'
};

describe('GET /jobs', () => {
  beforeEach(done => {
    Job.remove({})
      .then(() => Job.create(jobData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api
      .get('/api/jobs')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array as response body', done => {
    api
      .get('/api/jobs')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of valid job objects', done => {
    api
      .get('/api/jobs')
      .end((err, res) => {
        res.body
          .forEach((job, index) => {
            Object.keys(jobData[index]).forEach(field => {
              expect(job[field]).to.deep.eq(jobData[index][field]);
            });
          });
        done();
      });
  });

});
