const router = require('express').Router();
const jobs = require('../controllers/jobs');
const auth = require('../controllers/auth');
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.route('/jobs')
  .get(jobs.index)
  .post(secureRoute, jobs.create);

router.route('/jobs/:id')
  .get(jobs.show)
  .put(secureRoute, jobs.update)
  .delete(secureRoute, jobs.delete);


router.route('/users')
  .get(users.index);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.post('/login', auth.login);  /* <-- Not Needed as we are using the home screen as the login page */


router.post('/jobs/:id/messages', jobs.messageCreate);
router.delete('/jobs/:id/messages/:messageId', jobs.messageDelete);

router.post('/jobs/:id/applicants', jobs.applicantCreate);
router.delete('/jobs/:id/applicants/:applicantId', jobs.applicantDelete);

// router.post('/github', oauth.github);  /* <-- Use when needed with OAuth  */
// router.post('/facebook', oauth.facebook);  /* <-- Use when needed with OAuth  */


module.exports = router;
