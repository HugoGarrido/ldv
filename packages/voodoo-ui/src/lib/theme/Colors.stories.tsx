import { Typography } from '../components/Typography/Typography';
import { HStack } from '../native-base/layout';
import { View } from '../native-base/primitives';
import { theme } from './theme';
import { VoodooUIPalette } from './voodooUI/palette';

export default {
  title: 'voodoo-ui/Theme',
};

export const ColorStory = () => (
  <>
    <View marginBottom="voodoo.2">
      <Typography.Heading3>Colors</Typography.Heading3>
    </View>
    {Object.keys(theme.colors).map((key) => (
      <>
        <Typography.Text>{key}</Typography.Text>

        <HStack>
          {Object.keys(
            (theme.colors as Record<string, VoodooUIPalette>)[key]
          ).map((color) => (
            <View
              width="80px"
              height="80px"
              backgroundColor={`voodoo.colors.${key}.${color}`}
            >
              <Typography.Text>{color as string}</Typography.Text>
            </View>
          ))}
        </HStack>
      </>
    ))}
  </>
);
