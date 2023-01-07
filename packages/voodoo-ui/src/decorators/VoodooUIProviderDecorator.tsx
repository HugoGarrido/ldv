import { VoodooUIProvider } from '../lib/components/VoodooUIProvider/VoodooUIProvider';
import { ReactNode } from 'react';
import { makeDecorator } from '@storybook/addons';

interface VoodooUIProviderComponentDecoratorProps {
  children: ReactNode;
  isSSR?: boolean;
}

export function VoodooUIProviderComponentDecorator({
  children,
  isSSR,
}: VoodooUIProviderComponentDecoratorProps) {
  return <VoodooUIProvider isSSR={isSSR}>{children}</VoodooUIProvider>;
}

export const VoodooUIProviderDecorator = makeDecorator({
  name: 'VoodooUIProviderDecorator',
  parameterName: 'theme',
  wrapper: (storyFn, context, { options = {}, parameters = {} }) => {
    return (
      <VoodooUIProvider isSSR={parameters.isSSR ?? (options as any).isSSR}>
        {storyFn(context) as ReactNode}
      </VoodooUIProvider>
    );
  },
});
