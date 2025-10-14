import { DivinePride } from '../src';

describe('DivinePride API mocks', () => {
  let api: DivinePride;

  beforeEach(() => {
    api = new DivinePride('123abc456def');

    jest.spyOn(api as any, 'request').mockImplementation((...args: any[]) => {
      const endpoint = args[0];

      if (endpoint.startsWith('Item/')) {
        return Promise.resolve({ id: 123, name: 'Mocked Item' });
      }

      if (endpoint.startsWith('Monster/')) {
        return Promise.resolve({ id: 456, name: 'Mocked Monster' });
      }

      return Promise.resolve({});
    });
  });

  it('should return mocked item', async () => {
    const item = await api.getItem(123);
    expect(item).toEqual({ id: 123, name: 'Mocked Item' });
  });

  it('should return mocked monster', async () => {
    const monster = await api.getMonster(456);
    expect(monster).toEqual({ id: 456, name: 'Mocked Monster' });
  });
});
