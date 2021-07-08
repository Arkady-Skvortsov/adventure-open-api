const request = require("supertest");
const router = require("../routes/pages");

describe("Server testing", () => {
  test("Get all characters from PostgresQL", () => {
    const response = request(router).get("/characters");

    expect(response).toEqual("http://localhost:4000/characters");
  });

  //Get all weapons from PostgresQL
  //Get all lands from PostgresQL
  //Get all artifacts from PostgresQL
  //Get random character from PostgresQL
  //Get random weapon from PostgresQL
  //Get random land from PostgresQL
  //Get random artifact from PostgresQL
  //Get current character from PostgresQL
  //Get current weapon from PostgresQL
  //Get current land from PostgresQL
  //Get current artifact from PostgresQL
  //Get page from characters URL
});
