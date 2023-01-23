import { ReactElement, ReactNode } from 'react';
import { TamaguiProvider, TamaguiProviderProps } from 'tamagui';
import { config } from '../../../tamagui.config';

interface VoodooUITamaguiProviderProps
  extends Omit<TamaguiProviderProps, 'config'> {
  children: ReactNode;
}

export function VoodooUITamaguiProvider({
  children,
  ...props
}: VoodooUITamaguiProviderProps): ReactElement {
  return (
    <TamaguiProvider {...props} defaultTheme="light" config={config}>
      {children}
    </TamaguiProvider>
  );
}
