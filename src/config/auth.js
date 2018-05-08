Auth.$inject = ['$authProvider'];

function Auth($authProvider) {
  $authProvider.loginUrl = '/api/login';
  $authProvider.signupUrl = '/api/register';

  $authProvider.google({
    url: '/auth/google',
    clientId: '188667229153-shoma2uvkvfojmif31r2fb28u9qreglb.apps.googleusercontent.com',
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
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
