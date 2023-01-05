import { HStack as NativeBaseHStack } from 'native-base';
import type { Except } from 'type-fest';
import type { ForwardRefComponent } from '../nativeBaseSupportedProps';
import type { StackProps } from './NBStack';

export interface HStackProps extends Except<StackProps, 'direction'> {
  direction?: Extract<StackProps['direction'], 'row' | 'row-reverse'>;
}
export const HStack = NativeBaseHStack as ForwardRefComponent<HStackProps>;
