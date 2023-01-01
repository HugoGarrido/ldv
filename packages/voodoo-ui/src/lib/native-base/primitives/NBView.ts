import { View as NativeBaseView } from 'native-base';
import type {
  InterfaceViewProps,
  IViewProps,
} from 'native-base/lib/typescript/components/basic/View/types';
import type { ViewProps as NativeViewProps } from 'react-native';
import type {
  ForwardRefComponent,
  NativeBaseAcceptedBorderProps,
  NativeBaseAcceptedBorderRadiusProps,
  NativeBaseAcceptedColorsProps,
  NativeBaseAcceptedFlexboxProps,
  NativeBaseAcceptedLayoutProps,
  NativeBaseAcceptedPositionProps,
  NativeBaseAcceptedShadowProps,
  NativeBaseAcceptedSpaceProps,
} from '../nativeBaseSupportedProps';

type NativeBaseAcceptedViewProps = Extract<
  keyof InterfaceViewProps,
  'children' | keyof NativeViewProps
>;

export interface ViewProps
  extends Pick<
    IViewProps,
    | NativeBaseAcceptedViewProps
    | NativeBaseAcceptedSpaceProps
    | NativeBaseAcceptedColorsProps
    | NativeBaseAcceptedBorderProps
    | NativeBaseAcceptedBorderRadiusProps
    | NativeBaseAcceptedPositionProps
    | NativeBaseAcceptedShadowProps
    | NativeBaseAcceptedLayoutProps
    | NativeBaseAcceptedFlexboxProps
  > {}

export const View = NativeBaseView as ForwardRefComponent<ViewProps>;
