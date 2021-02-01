const assert = require("assert");
const { getWeatherWithCityID } = require("./thirdpartyapi");

async function getWeather(req, res) {
  const { cityId } = req.params;
  assert(cityId, "city must exist!");
  if (!cityId) {
    return res.status(422).send({ "Error Message": "cityId must exist!" });
  }
  try {
    const response = await getWeatherWithCityID(cityId);
    if (response) {
      res.status(200).send(response.data);
    }
  } catch (e) {
    res.status(e.response.status).send({ "Error Message": e.message });
  }
}

module.exports = { getWeather };
