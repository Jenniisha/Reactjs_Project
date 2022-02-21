import { jest } from '@jest/globals';
import supertest from 'supertest';
import app from '../routes/app.js';


test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});



describe('It should test the root path', () => {
  test('It has to response the GET method', (done) => {
    supertest(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the search doctors speciality route", () => {
  test("Testing the doctor search based on speciality", done => {
    supertest(app)
      .get("/doctors/search/speciality/Opthalmologist")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});


describe("Test the delete doctors based on name", () => {
  jest.setTimeout(5000);
  test("It should response the GET method", async () => {
    await supertest(app)
      .get("/doctors/delete/Dr John")
      .then(response => {
        console.log(response._body);
        // expect((response.msg).indexOf("Doctor removed successfully") !== -1).toBe(true);
        // done();
      });
  });
});


