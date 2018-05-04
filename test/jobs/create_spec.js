/* global api, describe, it, expect, beforeEach */

const Job = require('../../models/job');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');


const userData = {
  firstname: 'test',
  surname: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};
const jobData = {
  category: 'test',
  description: 'test',
  duration: 'test'
};

let token;

describe('POST /jobs', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Job.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      })
      .then(() => done());
  });

  it('should return a 401 reposnse without token', done => {
    api
      .post('/api/wines')
      .send(jobData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 201 reponse with a token', done => {
    api
      .post('/api/jobs')
      .set('Authorization', `Bearer ${token}`)
      .send(jobData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });

  it('should return a valid job object', done => {
    api
      .post('/api/jobs')
      .set('Authorization', `Bearer ${token}`)
      .send(jobData)
      .end((err, res) => {
        expect(res.body._id).to.be.a('string');
        Object.keys(jobData).forEach(field => {
          expect(res.body[field]).to.deep.eq(jobData[field]);
        });
        done();
      });
  });

});
