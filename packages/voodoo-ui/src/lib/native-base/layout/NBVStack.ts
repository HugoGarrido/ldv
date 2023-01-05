import { VStack as NativeBaseVStack } from 'native-base';
import type { Except } from 'type-fest';
import type { ForwardRefComponent } from '../nativeBaseSupportedProps';
import type { StackProps } from './NBStack';

export interface VStackProps extends Except<StackProps, 'direction'> {
  direction?: Extract<StackProps['direction'], 'column' | 'column-reverse'>;
}
export const VStack = NativeBaseVStack as ForwardRefComponent<VStackProps>;
