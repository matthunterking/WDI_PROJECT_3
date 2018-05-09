Auth.$inject = ['$authProvider'];

function Auth($authProvider) {
  $authProvider.loginUrl = '/api/login';
  $authProvider.signupUrl = '/api/register';

  $authProvider.google({
    url: '/api/google',
    clientId: '188667229153-j0d8s2ul5lls4l3tggse2lbputgaav1t.apps.googleusercontent.com',
    redirectUri: window.location.origin,
    requiredUrlParams: ['scope'],
    optionalUrlParams: ['display'],
    scope: ['profile', 'email'],
    scopePrefix: 'openid',
    scopeDelimiter: ' ',
    display: 'popup',
    oauthType: '2.0',
    popupOptions: { width: 452, height: 633 }
  });

}

export default Auth;
