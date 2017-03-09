/**
 * Created by chichivica on 3/9/17.
 */

/**
 * @module PdfCreator
 */

/**
 * SomeObject that contains a number and string
 * used to save pdf files
 * @typedef {{a: number, b: string}} PdfSpecialType
 * @memberOf module:PdfCreator
 */

/**
 * method explanation
 * @return {PdfSpecialType}
 */
function createPdf() {
  return {
    a : 1,
    b : "hello"
  }
}

module.exports = {
  createPdf
};
