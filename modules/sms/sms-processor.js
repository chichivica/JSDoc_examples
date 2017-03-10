/**
 * @namespace Processing
 * @memberOf module:SmsModule
 */

/**#@+
 * @inner
 * @type {module:SmsModule.Sending.SmsSender}
 */
let SmsSender = require('./sms-sender').SmsSender;
let PrimeNumber = 32416190071;
/**#@-*/

/**
 * @memberOf module:SmsModule.Processing
 */
class SmsProcessor extends SmsSender {
  constructor(q, p, h) {
    this._a = q + 1;
    this._b = p + 2;
    this._h = h;
    super(q, p);
  }

  /**
   * this method can use only dummy text
   * @see module:SmsModule.Sending.SmsSender.generateDummyText
   * @param {string} text
   */
  processText(text) {

  }
}

module.exports = {
  SmsProcessor
};