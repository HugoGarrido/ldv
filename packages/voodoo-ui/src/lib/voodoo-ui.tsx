import { NativeBaseProvider, Box, Button } from 'native-base';

/* eslint-disable-next-line */
export interface VoodooUiProps {}

export function VoodooUi(props: VoodooUiProps) {
  return (
    <NativeBaseProvider>
      <Box>Welcome to VoodooUi!</Box>
      <Button>lol</Button>
    </NativeBaseProvider>
  );
}

export default VoodooUi;
