/**
 * @module PdfCreator
 */

let Sms = require('../sms/sms').Sms;

/**
 * method explanation
 * @return {PdfPage}
 */
function createPdf() {
  return {
    pageTitle: "Hello page!",
    pageContent: "Halam balam balam",
    numberOfPages: 1,
    /**
     * @type {module:SmsModule.Core.Sms}
     */
    attachedSms: new Sms('Hi!', 'How are you?')
  }
}

module.exports = {
  createPdf
};
