const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    node_env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080,
    api: {
        prefix: process.env.API_PREFIX || '/',
    },
    thirdpartyapi: process.env.THIRDPARTYAPI || 'https://www.metaweather.com'
};