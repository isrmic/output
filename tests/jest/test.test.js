const resolvecolorname = require('./modules/resolvecolor');

test('resolve color name string', () => {
  expect(resolvecolorname('WHITE')).toBe('White');
  expect(resolvecolorname('white')).toBe('White');
  expect(resolvecolorname('WhItE')).toBe('White');
});