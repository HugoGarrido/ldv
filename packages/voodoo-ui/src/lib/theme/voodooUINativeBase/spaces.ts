import { theme } from '../theme';

type Enumerate<N, A extends number[] = []> = A['length'] extends N
  ? A[number]
  : Enumerate<N, [...A, A['length']]>;

type VoodooUIScale = `voodoo.${Exclude<Enumerate<65>, 0>}`;

type VoodooUIScaleRecord = Record<VoodooUIScale, number>;

const makeScalesRecord = (spacing: number, limit = 64): VoodooUIScaleRecord => {
  const sizes: Partial<VoodooUIScaleRecord> = {};
  for (let size = 1; size <= limit; size++) {
    sizes[`voodoo.${size}` as VoodooUIScale] = size * spacing;
  }
  return sizes as VoodooUIScaleRecord;
};

export const spaces = makeScalesRecord(theme.space);
