function calculateCashOutBefore(input) {}

function calculateCashOutAfter(input) {}

function calculateScenarios(input) {
  return {
    cashOutBefore: calculateCashOutBefore(input),
    cashoutAfter: calculateCashOutAfter(input),
  };
}

export { calculateScenarios };
