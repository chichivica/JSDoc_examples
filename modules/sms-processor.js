/**
 * @namespace Processing
 * @memberOf module:SmsModule
 */



let SmsSender = require('./sms-sender').SmsSender;

/**
 * @memberOf Processing
 */
class SmsProcessor extends SmsSender{
  constructor(q, p, h){
      this._a = q + 1;
      this._b = p + 2;
      this._h = h;
      super(q, p);
  }
}

module.exports = {
  SmsProcessor
};