'use strict';

/**
 * Read the documentation () to implement custom service functions
 */

module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  findAll(params, populate) {
    return strapi.query('career').find(params, populate);
  }
};
