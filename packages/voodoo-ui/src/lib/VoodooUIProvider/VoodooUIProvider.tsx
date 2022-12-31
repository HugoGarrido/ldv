import { NativeBaseProvider, NativeBaseProviderProps } from 'native-base';

export interface VoodooUIProviderProps extends NativeBaseProviderProps {}

export function VoodooUIProvider({
  isSSR,
  children,
  ...props
}: VoodooUIProviderProps) {
  return <NativeBaseProvider isSSR={isSSR}>{children}</NativeBaseProvider>;
}
