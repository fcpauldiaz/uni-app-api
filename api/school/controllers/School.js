'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {

  findAll(ctx) {
    return strapi.services.school.findAll(ctx);
  }

};
