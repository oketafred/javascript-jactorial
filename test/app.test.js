const chai = require("chai");
const { assert } = chai;

const app = require("../app");

describe("Checking through app.js", function() {
  // Checking whether the factorial of 0 is 1
  it("Check whether the Factorial of 0 is 1", function() {
    assert.equal(app(0), 1);
  });

  // Checking whether the factorial of 1 is 1
  it("Check whether the Factorial of 1 is 1", function() {
    assert.equal(app(1), 1);
  });

  // Check whether the factorial of 3 is 6
  it("Check whether the Factorial of 3 is 6", function() {
    assert.equal(app(3), 6);
  });

  it("Check whether the Factorial of 10 is 6628800", function() {
    assert.equal(app(10), 3628800);
  });
});
