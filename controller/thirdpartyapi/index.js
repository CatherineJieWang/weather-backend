const axios = require('axios');
const config = require("../../config");

const getWeatherWithCityID = (cityId) => {
    return axios.get(config.thirdpartyapi + '/api/location/' + cityId);
};

const getLocationWithCity = (city) => {
    return axios.get(config.thirdpartyapi + '/api/location/search/?query=' + city);
}

const getGeoLocationWithLattLong = (lattlong) => {
    return axios.get(config.thirdpartyapi + `/api/location/search/?lattlong=${lattlong}`);
}

module.exports = { getWeatherWithCityID,getLocationWithCity, getGeoLocationWithLattLong };
