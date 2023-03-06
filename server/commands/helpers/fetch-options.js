/**
 *  @module FetchOptions
 * @param {String} method The method for the request.
 * @param {String} contentType The expected content type.
 * @returns An object containing a method and headers property.
 */
module.exports = function (method, contentType) {
  return {
    method,
    headers: { 'Content-Type': contentType }
  };
};
