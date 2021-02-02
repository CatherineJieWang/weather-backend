const {
  getLocationWithCity,
  getGeoLocationWithLattLong,
} = require("./thirdpartyapi");
const assert = require("assert");

async function getLocation(req, res) {
  const { query } = req.query;
  if (!query) {
    return res.status(422).send({ "Error Message": "query must exist!" });
  }
  assert(query, "query must exist!");
  
  try {
    const response = await getLocationWithCity(query);

    if (response) {
      res.status(200).send(response.data);
    }
  } catch (e) {
    return res.status(e.response.status).send({ "Error Message": e });
  }
}

async function getGeoLocation(req, res) {
  const { lattlong } = req.query;
  if (!lattlong) {
    return res.status(422).send({ "Error Message": "lattlong must exist!" });
  }
  assert(lattlong, "lattlong must exist!");
  
  try {
    const response = await getGeoLocationWithLattLong(lattlong);
    if (response) {
      res.status(200).send(response.data);
    }
  } catch (e) {
    return res.status(e.response.status).send({ "Error Message": e });
  }
}

module.exports = { getLocation, getGeoLocation };
