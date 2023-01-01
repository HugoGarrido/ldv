import { NativeBaseProvider, NativeBaseProviderProps } from 'native-base';
import { extendedNativeBaseTheme } from '../theme/extendedNativeBaseTheme';

export interface VoodooUIProviderProps extends NativeBaseProviderProps {}

export function VoodooUIProvider({
  isSSR,
  children,
  ...props
}: VoodooUIProviderProps) {
  return (
    <NativeBaseProvider isSSR={isSSR} theme={extendedNativeBaseTheme}>
      {children}
    </NativeBaseProvider>
  );
}
