let user_service = require('/services/node_modules/user-service');
var Sms = require("../modules/sms/sms.js").Sms;

/**
 *
 * @param {module:SmsModule.Sending.SmsSender} [smsSender]
 * @return {module:SmsModule.Processing.SmsProcessor}
 */
function processSomeUser(smsSender) {
  var sms = new Sms('hi', 'go');
}
