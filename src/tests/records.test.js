const request = require('supertest');
const app = require('../../index');
const mongoose = require('mongoose');

describe('Get Records', () => {
  afterAll(async () => {
    await mongoose.connection.close();
  })
  it('should throw an error if startDate property is missing', async () => {
   let startDate;
    const res = await request(app)
    .post('/v1/api/records')
    .send({
      "endDate": "2016-02-02",
      "minCount": 2700,
      "maxCount": 3000
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.msg).toEqual(`Invalid (startDate) format: ${startDate}`);
  })
  it('should throw an error if startDate property is not in "YYYY-MM-DD" format', async () => {
    const startDate = "03-12-2020";
    const res = await request(app)
    .post('/v1/api/records')
    .send({
      "startDate": startDate,
      "endDate": "2016-02-02",
      "minCount": 2700,
      "maxCount": 3000
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.msg).toEqual(`Invalid (startDate) format: ${startDate}`);
  })
  it('should throw an error if startDate property is not a date', async () => {
    const startDate = "test";
    const res = await request(app)
    .post('/v1/api/records')
    .send({
      "startDate": startDate,
      "endDate": "2016-02-02",
      "minCount": 2700,
      "maxCount": 3000
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.msg).toEqual(`Invalid (startDate) format: ${startDate}`);
  });
  it('should throw an error if endDate property is missing', async () => {
   let endDate;
    const res = await request(app)
    .post('/v1/api/records')
    .send({
      "startDate": "2016-02-02",
      "minCount": 2700,
      "maxCount": 3000
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.msg).toEqual(`Invalid (endDate) format: ${endDate}`);
  })
  it('should throw an error if endDate property is not in "YYYY-MM-DD" format', async () => {
    const endDate = "03-12-2020";
    const res = await request(app)
    .post('/v1/api/records')
    .send({
      "startDate": "2016-02-02",
      "endDate": endDate,
      "minCount": 2700,
      "maxCount": 3000
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.msg).toEqual(`Invalid (endDate) format: ${endDate}`);
  })
  it('should throw an error if endDate property is not a date', async () => {
    const endDate = "test";
    const res = await request(app)
    .post('/v1/api/records')
    .send({
      "startDate": "2016-02-02",
      "endDate": endDate,
      "minCount": 2700,
      "maxCount": 3000
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.msg).toEqual(`Invalid (endDate) format: ${endDate}`);
  });
  it('should throw an error if minCount is missing', async () => {
    const res = await request(app)
    .post('/v1/api/records')
    .send({
      "startDate": "2016-02-02",
      "endDate": "2016-02-04",
      "maxCount": 3000
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.msg).toEqual(`Invalid (minCount) type: ${ typeof minCount }. Expecting type integer`);
  })
  it('should throw an error if type of minCount is not an integer', async () => {
    const minCount = "test";
    const res = await request(app)
    .post('/v1/api/records')
    .send({
      "startDate": "2016-02-02",
      "endDate": "2016-02-04",
      "minCount": minCount,
      "maxCount": 3000
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.msg).toEqual(`Invalid (minCount) type: ${typeof minCount}. Expecting type integer`);
  });
  it('should throw an error if maxCount is missing', async () => {
    const res = await request(app)
    .post('/v1/api/records')
    .send({
      "startDate": "2016-02-02",
      "endDate": "2016-02-04",
      "minCount": 3000
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.msg).toEqual(`Invalid (maxCount) type: ${ typeof maxCount }. Expecting type integer`);
  })
  it('should throw an error if type of maxCount is not an integer', async () => {
    const maxCount = "test";
    const res = await request(app)
    .post('/v1/api/records')
    .send({
      "startDate": "2016-02-02",
      "endDate": "2016-02-04",
      "minCount": 3000,
      "maxCount": maxCount
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.msg).toEqual(`Invalid (maxCount) type: ${typeof maxCount}. Expecting type integer`);
  });
});