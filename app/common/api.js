/**
*
* api
*
* @author  Minh Huy
* @version 1.0
* @since   18-05-2017
*/

var DOMAIN = 'http://118.69.109.101:8010/';//alpha

exports.TOKEN_SENT_API = DOMAIN + 'auth/register-device';
exports.LOGIN_API = DOMAIN + 'auth/login';
exports.REFRESH_TOKEN_API = DOMAIN + 'auth/refresh-token';
exports.LOGOUT_API = DOMAIN + 'auth/logout';
