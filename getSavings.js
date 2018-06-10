const getSavingsScalar = (initial, monthly, rate, months = 50, compoundsPa = 1) => (
  [...Array(months)].map((v, index) => {
    const month = index + 1;

    const compoundedValue = initial * (1 + (rate/compoundsPa)) ** (compoundsPa * (1/12) * month);
    const contributions = (monthly * (12/compoundsPa)) * (((1 + rate/compoundsPa) ** (compoundsPa * ((1/12) * month)) - 1) / (rate/compoundsPa));

    return {
      month,
      amount: compoundedValue + contributions,
    };
  })
);

const getSavings = (initial, monthly, rate, months = 50, compoundsPa = 1) => {
  const values = [initial];

  for (let month = 1; month <= months; month++) {
    let value = values[month - 1];

    if (month % (12/compoundsPa) === 0) {
      value += value * (rate / compoundsPa);
    }

    values.push(value);
  }

  return values;
};

module.exports = getSavings;
