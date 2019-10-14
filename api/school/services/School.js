'use strict';

/**
 * Read the documentation () to implement custom service functions
 */

module.exports = {
  findAll(params) {
    return strapi
      .query('school')
      .model.find()
      .populate({
        path: 'careers',
        model: 'Career',
        populate: {
          path: 'category',
          model: 'Categories',
        }
      });
  }
};
