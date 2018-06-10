const getSavings = (initial, monthly, rate, months = 50, compoundedPa = 1) => (
  [...Array(months)].map((v, index) => {
    const month = index + 1;

    return {
      month,
      amount: initial * (1 + (rate/compoundedPa)) ** (compoundedPa * (1/12) * month),
    };
  })
);

module.exports = getSavings;
