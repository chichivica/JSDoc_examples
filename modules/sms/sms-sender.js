/**
 * @module SmsModule
 */

/**
 * @namespace Sending
 * @memberOf module:SmsModule
 */

const EventEmitter = require('events');

/**
 * @memberOf module:SmsModule.Sending
 * @extends 'events'.EventEmitter
 */
class SmsSender extends EventEmitter {
  constructor(a, b) {
    this._a = a;
    this._b = b;
  }

  /**
   *  method sends an sms
   * @param {module:SmsModule.Core.Sms} sms
   */
  sendSms(sms) {

  }

  /**
   * generates text stub
   * @param {number} length of the text
   */
  static generateDummyText(length) {

  }
}

module.exports = {
  SmsSender
};