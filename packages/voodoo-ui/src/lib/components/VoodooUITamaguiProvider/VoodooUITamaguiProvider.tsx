import { ReactElement, ReactNode, Suspense } from 'react';
import { TamaguiProvider, Button } from 'tamagui';
import config from '../../../tamagui.config';

interface VoodooUITamaguiProviderProps {
  children: ReactNode;
}

export function VoodooUITamaguiProvider({
  children,
}: VoodooUITamaguiProviderProps): ReactElement {
  return (
    <TamaguiProvider config={config}>
      {/* if you want nice React 18 concurrent hydration, you'll want Suspense near the root */}
      <Suspense>
        <>
          {children}
          <Button onPress={() => console.log('tamagui')}>tamagui</Button>
        </>
      </Suspense>
    </TamaguiProvider>
  );
}
