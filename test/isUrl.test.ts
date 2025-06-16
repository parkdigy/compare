import { isUrl } from '../src';

describe('isUrl', () => {
  it('URL 여부 확인', () => {
    expect(isUrl('test.com')).toBe(true);
    expect(isUrl('test.com/path/to')).toBe(true);
    expect(isUrl('http://test.com/path/to')).toBe(true);
    expect(isUrl('https://test.com/path/to')).toBe(true);
    expect(isUrl('/path/to', true)).toBe(true);
    expect(isUrl('ftp://domain.com/path/to', ['ftp'])).toBe(true);
    expect(isUrl('ws://domain.com/path/to', ['ws'], true)).toBe(true);
    expect(isUrl('/path/to', ['ws'], true)).toBe(true);

    expect(isUrl('test')).toBe(false);
    expect(isUrl('test/path/to')).toBe(false);
    expect(isUrl('http://test/path/to')).toBe(false);
    expect(isUrl('https://test/path/to')).toBe(false);
    expect(isUrl('htt://test.com/path/to')).toBe(false);
    expect(isUrl('/path/to')).toBe(false);
    expect(isUrl('path/to', true)).toBe(false);
    expect(isUrl('ftp://domain.com/path/to')).toBe(false);
    expect(isUrl('https://domain.com/path/to', ['ftp'])).toBe(false);
  });
});
