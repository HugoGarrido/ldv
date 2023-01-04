import { Typography } from '../components/Typography/Typography';
import { HStack } from '../native-base/layout';
import { View } from '../native-base/primitives';
import { theme } from './theme';

export default {
  title: 'voodoo-ui/Theme',
};

export const PaletteStory = () => (
  <>
    <View marginBottom="voodoo.2">
      <Typography.Heading3>Palette</Typography.Heading3>
    </View>
    {Object.keys(theme.palette).map((key) => (
      <>
        <Typography.Text>{key}</Typography.Text>
        <HStack>
          {Object.keys(theme.palette[key]).map((color) => (
            <View
              width="80px"
              height="80px"
              backgroundColor={`voodoo.colors.palettes.voodooUI.${key}.${color}`}
            >
              <Typography.Text>{color as string}</Typography.Text>
            </View>
          ))}
        </HStack>
      </>
    ))}
  </>
);
