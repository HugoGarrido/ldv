import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from './Typography';
import { View } from '../../native-base/primitives';

export default {
  title: 'voodoo-ui/components/Typography',
  component: Typography.Text,
} as ComponentMeta<typeof Typography.Text>;

export const TypographyStory: ComponentStory<typeof Typography.Text> = (
  args
) => (
  <>
    <View marginBottom="voodoo.2">
      <Typography.Heading3>Demo</Typography.Heading3>
    </View>

    <Typography.Text {...args} />
  </>
);

TypographyStory.args = {
  variant: 'body',
  children: 'Hello this is Voodoo UI',
  color: 'body',
};
