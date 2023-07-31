import { DivinePride } from '../src';

describe('instantiation', () => {
  it('should default export to be a function', () => {
    expect(new DivinePride('123abc456def')).toBeInstanceOf(DivinePride);
  });

  it('invalid api key should fail instantiation', () => {
    expect(() => new DivinePride('')).toThrow(
      'Please provide DivinePride API key. You can get one here: https://www.divine-pride.net/account'
    );
  });
});
