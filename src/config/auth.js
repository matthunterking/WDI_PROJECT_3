Auth.$inject = ['$authProvider'];

function Auth($authProvider) {
  $authProvider.loginUrl = '/api/login';
  $authProvider.signupUrl = '/api/register';

  $authProvider.google({
    clientId: '188667229153-j0d8s2ul5lls4l3tggse2lbputgaav1t.apps.googleusercontent.com',
    url: 'https://accounts.google.com/o/oauth2/auth?'
  });

}

export default Auth;
