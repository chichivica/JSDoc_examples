/**
 * @module SmsModule
 */

/**
 * @namespace Sending
 * @memberOf module:SmsModule
 */

const EventEmitter = require('events');

function sendSms(){
  return 'sms sended'
}

/**
 *
 * @param {module:PdfCreator.PdfSpecialType} pdfSpecObj to send in sms
 */
function receiveSmth(pdfSpecObj){

}

/**
 * @memberOf Sending
 * @extends 'events'.EventEmitter
 */
class SmsSender extends EventEmitter{
  constructor(a, b){
    this._a = a;
    this._b = b;
  }
}

module.exports = {
  sendSms,
  SmsSender
};