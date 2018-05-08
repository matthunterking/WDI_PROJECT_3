const router = require('express').Router();
const jobs = require('../controllers/jobs');
const auth = require('../controllers/auth');
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');
const oauth = require('../controllers/oauth');

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/jobs')
  .get(jobs.index)
  .post(secureRoute, jobs.create);

router.route('/jobs/:id')
  .get(jobs.show)
  .put(secureRoute, jobs.update)
  .delete(secureRoute, jobs.delete);

router.post('/jobs/:id/messages', secureRoute, jobs.messageCreate);
router.delete('/jobs/:id/messages/:messageId', secureRoute, jobs.messageDelete);

router.post('/jobs/:id/applicants', secureRoute, jobs.applicantCreate);
router.delete('/jobs/:id/applicants/:applicantId', secureRoute, jobs.applicantDelete);

router.route('/jobs/:id/applicants/:applicantId/accept')
  .put(secureRoute, jobs.applicantAccept);

router.route('/jobs/:id/applicants/:applicantId/reject')
  .put(secureRoute, jobs.applicantReject);

router.route('/jobs/:id/progress')
  .put(secureRoute, jobs.statusProgress);

router.route('/jobs/:id/finish')
  .put(secureRoute, jobs.statusFinish);

// router.post('/github', oauth.github);  /* <-- Use when needed with OAuth  */
// router.post('/facebook', oauth.facebook);  /* <-- Use when needed with OAuth  */


router.route('/google')
  .post(oauth.google);
// >>>>>>> gmail-oauth

module.exports = router;
