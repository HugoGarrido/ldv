import type { ComponentStory } from '@storybook/react';
import { View } from '../../native-base/primitives';
import { HStack } from '../../native-base/layout';
import { Button, ButtonColor, ButtonVariant } from './Button';

const buttonColors: ButtonColor[] = ['primary', 'default', 'white', 'black'];
const buttonVariants: ButtonVariant[] = ['solid', 'outlined', 'text'];

export default {
  title: 'voodoo-ui/Components',
  component: Button,
};

export const ButtonStory: ComponentStory<typeof Button> = () => (
  <>
    {buttonColors.map((color) => (
      <View
        key={color}
        paddingY="voodoo.3"
        paddingX="voodoo.4"
        backgroundColor={
          color === 'white' ? 'voodoo.colors.black.900' : undefined
        }
      >
        <HStack space="voodoo.2">
          {buttonVariants.map((variant) => (
            <View key={variant}>
              <Button color={color} variant={variant}>
                Let's do Voodoo
              </Button>
            </View>
          ))}
        </HStack>
      </View>
    ))}
    <View paddingY="voodoo.3" paddingX="voodoo.4">
      <HStack space="voodoo.2">
        {buttonVariants.map((variant) => (
          <View key={variant}>
            <Button disabled>Let's do Voodoo</Button>
          </View>
        ))}
      </HStack>
    </View>
  </>
);
