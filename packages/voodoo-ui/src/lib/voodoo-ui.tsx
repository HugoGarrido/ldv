import { Box, Button, NativeBaseProviderProps } from 'native-base';

export type VoodooUiProps = NativeBaseProviderProps;

export function VoodooUi({ isSSR, ...props }: VoodooUiProps) {
  return (
    <>
      <Box>Welcome to VoodooUi!</Box>
      <Button>testing</Button>
    </>
  );
}

export default VoodooUi;
