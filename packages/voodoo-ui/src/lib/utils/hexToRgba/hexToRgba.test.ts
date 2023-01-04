import { hex2rgba } from './hexToRgba';

it('should convert hex color into rgba with provided opacity', () => {
  expect(hex2rgba('#CCCCC', 0.2)).toBe('rgba(204, 204, 12, 0.2)');
});
