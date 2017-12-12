/**
*
* Global
*
* @author  Minh Huy
* @version 1.0
* @since   18-05-2017
*/

var utils = require('./utils');

module.exports = {
  Utils : new utils(),
  Constants : require('./constants'),
  DefineApi : require('./api'),
  Localization: require('./localization.js')
};
