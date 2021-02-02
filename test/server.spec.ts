import { asyncFunc } from '../src/server';

describe('asyncFunc', () => {
  it('test', async () => {
    const res = await asyncFunc();
    expect(res).toBe(true);
  });
});
