'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');


module.exports = {
    async find() {
        const data = await strapi.services['fragrance'].find({_limit: -1})

        return sanitizeEntity(data, { model: strapi.models.fragrance });

    }
};
