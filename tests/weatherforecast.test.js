const request = require('supertest');
const {app} = require('../index');

test("Get Sydney Weathers with CityId ", async () => {
    await request(app).get('/weather/1105779').expect(200);
})

test("Get Location Sydney with City Name ", async () => {
    await request(app).get('/location/?query=sydney').expect(200);
})

test("Get GeoLocation Sydney Latt and Long ", async () => {
    await request(app).get('/geolocation/?lattlong=-33.869629, 151.206955').expect(200);
})

