import type { IImageProps } from 'native-base';
import { Image as NativeBaseImage } from 'native-base';
import type { ForwardRefComponent } from '../nativeBaseSupportedProps';

export const Image = NativeBaseImage as ForwardRefComponent<IImageProps>;
