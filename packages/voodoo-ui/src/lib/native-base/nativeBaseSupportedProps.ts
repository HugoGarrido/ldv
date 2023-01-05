import type { PlatformProps } from 'native-base/lib/typescript/components/types';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export type NativeBaseAcceptedChildrenProp = 'children';

export type NativeBaseAcceptedSpaceProps =
  | 'margin'
  | 'marginTop'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginRight'
  | 'marginX'
  | 'marginY'
  | 'padding'
  | 'paddingTop'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingX'
  | 'paddingY';

export type NativeBaseAcceptedColorsProps =
  | 'color'
  | 'background'
  | 'backgroundColor'
  | 'opacity';

export type NativeBaseAcceptedLayoutProps =
  | 'width'
  | 'height'
  | 'minWidth'
  | 'maxWidth'
  | 'minHeight'
  | 'maxHeight'
  | 'display'
  // not crossplatform
  // | 'verticalAlign'
  | 'overflow'
  | 'overflowX'
  | 'overflowY';

export type NativeBaseAcceptedFlexboxProps =
  | 'alignItems'
  | 'alignContent'
  | 'justifyItems'
  | 'justifyContent'
  | 'flexWrap'
  | 'flexDirection'
  | 'flex'
  | 'flexGrow'
  | 'flexShrink'
  | 'flexBasis'
  // | 'justifySelf'
  | 'alignSelf';
// | 'order';

export type NativeBaseAcceptedBorderProps =
  | 'borderWidth'
  | 'borderStyle'
  | 'borderColor'
  // not crossplatform
  // | 'borderTop'
  | 'borderTopWidth'
  | 'borderTopStyle'
  | 'borderTopColor'
  // not crossplatform
  // | 'borderRight'
  | 'borderRightWidth'
  | 'borderRightStyle'
  | 'borderRightColor'
  // not crossplatform
  // | 'borderBottom'
  | 'borderBottomWidth'
  | 'borderBottomStyle'
  | 'borderBottomColor'
  // not crossplatform
  // | 'borderLeft'
  | 'borderLeftWidth'
  | 'borderLeftStyle'
  | 'borderLeftColor';

export type NativeBaseAcceptedBorderRadiusProps =
  | 'borderRadius'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
  | 'borderTopRadius'
  | 'borderLeftRadius'
  | 'borderBottomRadius'
  | 'borderRightRadius';

export type NativeBaseAcceptedPositionProps =
  | 'position'
  | 'zIndex'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left';

export type NativeBaseAcceptedShadowProps = 'shadow';

type ComponentWithPlatformProps<ComponentProps> = ComponentProps &
  PlatformProps<ComponentProps>;

export type ForwardRefComponent<ComponentProps> = ForwardRefExoticComponent<
  ComponentWithPlatformProps<ComponentProps> & RefAttributes<unknown>
>;
