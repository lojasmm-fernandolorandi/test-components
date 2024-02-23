import { format } from './utils';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format({ first: undefined, middle: undefined, last: undefined })).toEqual('');
  });

  it('formats just first names', () => {
    expect(format({ first: 'Joseph', middle: undefined, last: undefined })).toEqual('Joseph');
  });

  it('formats first and last names', () => {
    expect(format({ first: 'Joseph', middle: undefined, last: 'Publique' })).toEqual('Joseph Publique');
  });

  it('formats first, middle and last names', () => {
    expect(format({ first: 'Joseph', middle: 'Quincy', last: 'Publique' })).toEqual('Joseph Quincy Publique');
  });
});
