import {
  NativeBaseProvider,
  Box,
  Button,
  NativeBaseProviderProps,
} from 'native-base';

export type VoodooUiProps = NativeBaseProviderProps;

export function VoodooUi({ isSSR, ...props }: VoodooUiProps) {
  return (
    <NativeBaseProvider isSSR={isSSR}>
      <Box>Welcome to VoodooUi!</Box>
      <Button>testing</Button>
    </NativeBaseProvider>
  );
}

export default VoodooUi;
