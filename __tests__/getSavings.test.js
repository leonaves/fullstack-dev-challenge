const getSavings = require('../getSavings');

test('Can calculate yearly compounding interest on a principal investment', () => {
  const savings = getSavings(1000, 0, 0.1, 12);

  expect(savings[0]).toBeCloseTo(1000, 2);
  expect(savings[1]).toBeCloseTo(1000, 2);
  expect(savings[11]).toBeCloseTo(1000, 2);
  expect(savings[12]).toBeCloseTo(1100, 2);
  expect(savings[13]).toBeUndefined();
});

test('Can calculate monthly compounding interest on a principal investment', () => {
  const savings = getSavings(1000, 0, 0.025, 12, 12);

  expect(savings[0]).toBeCloseTo(1000, 2);
  expect(savings[1]).toBeCloseTo(1002.08, 2);
  expect(savings[11]).toBeCloseTo(1023.16, 2);
  expect(savings[12]).toBeCloseTo(1025.29, 2);
});

test('Can calculate quarterly compounding interest on a principal investment', () => {
  const savings = getSavings(1000, 0, 0.05, 12, 4);

  expect(savings[0]).toBeCloseTo(1000, 2);
  expect(savings[1]).toBeCloseTo(1000, 2);
  expect(savings[3]).toBeCloseTo(1012.50, 2);
  expect(savings[6]).toBeCloseTo(1025.16, 2);
  expect(savings[11]).toBeCloseTo(1037.97, 2);
  expect(savings[12]).toBeCloseTo(1050.95, 2);
});
