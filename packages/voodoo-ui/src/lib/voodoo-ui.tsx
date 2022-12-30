import { Suspense } from 'react';
// import { NativeBaseProvider, Box, Button } from 'native-base';
import { TamaguiProvider } from 'tamagui';
import { Button } from 'tamagui';
import config from '../tamagui.config';

/* eslint-disable-next-line */
export interface VoodooUiProps {}

// export function VoodooUi(props: VoodooUiProps) {
//   return (
//     <NativeBaseProvider>
//       <Box>Welcome to VoodooUi!</Box>
//       <Button>lol</Button>
//     </NativeBaseProvider>
//   );
// }

export function VoodooUi(props: VoodooUiProps) {
  console.log({ lol: process.env });
  return (
    <TamaguiProvider config={config}>
      {/* if you want nice React 18 concurrent hydration, you'll want Suspense near the root */}
      <Suspense>
        Welcome to VoodooUi Tama!
        <Button onPress={() => console.log('hello')}>mdr</Button>
      </Suspense>
    </TamaguiProvider>
  );
}

export default VoodooUi;
