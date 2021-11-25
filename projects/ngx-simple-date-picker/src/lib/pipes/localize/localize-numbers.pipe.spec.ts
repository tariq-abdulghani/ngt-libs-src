import { LocalizeNumbersPipe } from './localize-numbers.pipe';

describe('LocalizeNumbersPipe', () => {
  it('create an instance', () => {
    const pipe = new LocalizeNumbersPipe();
    expect(pipe).toBeTruthy();
  });
});
