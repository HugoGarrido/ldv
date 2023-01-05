import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { View } from '../../native-base/primitives';
import { Typography } from '../Typography/Typography';
import { Link } from './Link';

export default {
  title: 'voodoo-ui/Components',
  component: Link,
} as ComponentMeta<typeof Link>;

export const LinkStory: ComponentStory<typeof Link> = (args) => (
  <View paddingTop="voodoo.4">
    <View
      marginBottom="voodoo.10"
      borderBottomColor="voodoo.colors.black"
      borderBottomWidth="2px"
      paddingX="voodoo.4"
      paddingBottom="voodoo.10"
    >
      <View marginBottom="voodoo.2">
        <Typography.Heading3>🕹 Demo</Typography.Heading3>
      </View>

      <Link {...args} />
    </View>
  </View>
);

LinkStory.args = {
  variant: 'body',
  children: 'Hello this is Voodoo UI',
  color: 'primary',
  href: 'https://google.com',
};
