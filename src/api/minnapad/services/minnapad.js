'use strict';

/**
 * minnapad service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::minnapad.minnapad');
