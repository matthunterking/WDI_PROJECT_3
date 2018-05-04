/* global api, describe, it, expect, beforeEach */

const jwt = require('jsonwebtoken');

const User = require('../../models/user');

const userData = {
  firstname: 'test',
  surname: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

describe('POST /register', () => {
  beforeEach(done => {
    User
      .remove({})
      .then(() => done());
  });

  it('should return a 200 response with correct data', done => {
    api
      .post('/api/register')
      .send(userData)
      .expect(200, done);
  });

  it('should return a new user object', done => {
    api
      .post('/api/register')
      .send(userData)
      .end((err, res) => {
        expect(res.body.user._id).to.exist;
        done();
      });
  });

  it('should create a new user', done => {
    api
      .post('/api/register')
      .send(userData)
      .end((err, res) => {
        expect(res.body.user._id).to.exist;
        done();
      });
  });

  it('should return a 422 if the user already exists', done => {
    User.create(userData)
      .then(() => {
        api
          .post('/api/register')
          .send(userData)
          .end((err, res) => {
            expect(res.status).to.eq(422);
            done();
          });
      });
  });

  it('should return a 422 if the password and password confirmation do not match', done => {
    api
      .post('/api/register')
      .send({
        firstname: 'test',
        surname: 'test',
        email: 'test@test.com',
        password: 'test',
        passwordConfirmation: 'bad'
      })
      .end((err, res) => {
        expect(res.status).to.eq(422);
        done();
      });
  });

  it('should return a 422 if no password is given', done => {
    api
      .post('/api/register')
      .send({
        username: 'test',
        email: 'test@test.com'
      })
      .end((err, res) => {
        expect(res.status).to.eq(422);
        done();
      });
  });

});
