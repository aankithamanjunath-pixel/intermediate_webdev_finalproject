function calculateInterest(principal, rate, time) {
    principal = Number(principal);
    rate = Number(rate);
    time = Number(time);
  
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      return 0;
    }
  
    return (principal * rate * time) / 100;
  }
  
  function calculate() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("time").value;
  
    const interest = calculateInterest(principal, rate, time);
    document.getElementById("result").innerText =
      "Simple Interest is: " + interest;
  }
  
  module.exports = { calculateInterest };
  