import { DivinePride } from '../src';
import { MissingApiKeyError } from '../src/errors';

describe('instantiation', () => {
  it('should default export to be a function', () => {
    expect(new DivinePride('123abc456def')).toBeInstanceOf(DivinePride);
  });

  it('invalid api key should fail instantiation', () => {
    expect(() => new DivinePride('')).toThrow(MissingApiKeyError);
  });
});
