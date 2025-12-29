const { calculateInterest } = require('../script');

describe("Interest Calculator Tests", function () {

  it("should calculate simple interest correctly", function () {
    const result = calculateInterest(1000, 5, 2);
    expect(result).toBe(100);
  });

  it("should return 0 if principal is 0", function () {
    const result = calculateInterest(0, 5, 2);
    expect(result).toBe(0);
  });

});
