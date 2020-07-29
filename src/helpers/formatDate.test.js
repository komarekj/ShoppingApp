import formatDate from './formatDate';

describe('formatDate helper', () => {
  const date = 1577840400000;

  test('should return default format string', () => {
    const formated = formatDate(date);
    expect(formated).toBe('Jan 1, 2020');
  });

  test('should return custom format string', () => {
    const formated = formatDate(date, 'YYYY');
    expect(formated).toBe('2020');
  });
});
