const getSavings = require('../getSavings');

test('Can calculate compound interest on a principal investment', () => {
  const savings = getSavings(1000, 0, 0.1, 3);

  expect(savings[0].month).toBe(1);
  expect(savings[0].amount).toBeCloseTo(1007.97, 2);
  expect(savings[1].month).toBe(2);
  expect(savings[1].amount).toBeCloseTo(1016.01, 2);
  expect(savings[2].month).toBe(3);
  expect(savings[2].amount).toBeCloseTo(1024.11, 2);
});
