const router = require('express').Router();
const jobs = require('../controllers/jobs');
const auth = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');

router.route('/jobs')
  .get(jobs.index)
  .post(jobs.create);        /* <-- secureRoute will be added here */

router.route('/jobs/:id')
  .get(jobs.show)
  .put(jobs.update)          /* <-- secureRoute will be added here */
  .delete(jobs.delete);      /* <-- secureRoute will be added here */

router.post('/register', auth.register);
router.post('/login', auth.login);  /* <-- Not Needed as we are using the home screen as the login page */

// router.post('/github', oauth.github);  /* <-- Use when needed with OAuth  */
// router.post('/facebook', oauth.facebook);  /* <-- Use when needed with OAuth  */


module.exports = router;
