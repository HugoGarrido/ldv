import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from './Typography';
import { View } from '../../native-base/primitives';
import { ReactElement } from 'react';
import { TypographyColor, TypographyVariant } from './types';

const variants: TypographyVariant[] = [
  'heading1',
  'heading2',
  'heading3',
  'heading4',
  'heading5',
  'heading6',
  'body',
  'body-small',
];

const colors: TypographyColor[] = [
  'body',
  'primary',
  'accent',
  'white',
  'black',
];

function StoryContent(): ReactElement {
  return (
    <>
      {colors.map((typographColor) => (
        <View key={typographColor} marginBottom="voodoo.4">
          <View
            backgroundColor={
              typographColor === 'white' ? 'voodoo.colors.black.900' : undefined
            }
            padding="voodoo.4"
          >
            <View marginBottom="voodoo.2">
              <Typography.Heading4
                textTransform="uppercase"
                color={typographColor === 'white' ? 'white' : 'body'}
              >
                {typographColor} color
              </Typography.Heading4>
            </View>
            {variants.map((typographyVariant) => (
              <View key={typographyVariant} marginBottom="voodoo.2">
                <Typography.Text
                  color={typographColor}
                  variant={typographyVariant}
                >
                  {typographyVariant}
                </Typography.Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </>
  );
}

export default {
  title: 'voodoo-ui/components/Typography',
  component: Typography.Text,
} as ComponentMeta<typeof Typography.Text>;

export const TypographyStory: ComponentStory<typeof Typography.Text> = (
  args
) => (
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

      <Typography.Text {...args} />
    </View>

    <View>
      <View marginBottom="voodoo.2">
        <Typography.Heading3>🔍 Overview</Typography.Heading3>
      </View>
      <StoryContent />
    </View>
  </View>
);

TypographyStory.args = {
  variant: 'body',
  children: 'Hello this is Voodoo UI',
  color: 'body',
};
