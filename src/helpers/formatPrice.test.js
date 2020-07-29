import formatPrice from './formatPrice';

describe('formatPrice', () => {
  test('should return price with currency', () => {
    const formated = formatPrice(100);
    expect(formated).toBe('$100.00');
  });
});
