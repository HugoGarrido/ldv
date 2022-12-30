import type { ComponentStory } from '@storybook/react';
import VoodooUI from './voodoo-ui';

export default {
  title: 'voodoo-ui/components/test',
  component: VoodooUI,
};

export const VoodooUIStory: ComponentStory<typeof VoodooUI> = () => (
  <VoodooUI />
);
