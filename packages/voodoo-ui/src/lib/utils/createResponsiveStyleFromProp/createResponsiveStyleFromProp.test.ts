import { createResponsiveStyleFromProp } from './createResponsiveStyleFromProp';

describe('createResponsiveStyleFromProp', () => {
  it('handles boolean value', () => {
    expect(createResponsiveStyleFromProp(true, 'auto', '100%')).toBe('auto');
    expect(createResponsiveStyleFromProp(true, 'auto')).toBe('auto');

    expect(createResponsiveStyleFromProp(false, 'auto', '100%')).toBe('100%');
    expect(createResponsiveStyleFromProp(false, 'auto')).toBe(undefined);
  });

  it('handles undefined value', () => {
    expect(createResponsiveStyleFromProp(undefined, 'auto', '100%')).toBe(
      '100%'
    );
    expect(createResponsiveStyleFromProp(undefined, 'auto')).toBe(undefined);
  });

  it('handles breakpoint object', () => {
    const responviveValue = {
      small: true,
      medium: undefined,
      large: false,
      wide: true,
    };

    expect(
      createResponsiveStyleFromProp(responviveValue, 'auto', '100%')
    ).toMatchObject({
      small: 'auto',
      medium: '100%',
      large: '100%',
      wide: 'auto',
    });
    expect(
      createResponsiveStyleFromProp(responviveValue, 'auto')
    ).toMatchObject({
      small: 'auto',
      medium: undefined,
      large: undefined,
      wide: 'auto',
    });
  });
});
