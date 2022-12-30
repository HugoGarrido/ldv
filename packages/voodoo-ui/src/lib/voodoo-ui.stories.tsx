import type { ComponentStory } from '@storybook/react';
import VoodooUI from './voodoo-ui';

export default {
  title: 'voodoo-ui/components/test',
  component: VoodooUI,
};
console.log({ a: process.env });
export const VoodooUIStory: ComponentStory<typeof VoodooUI> = () => (
  <VoodooUI />
);
