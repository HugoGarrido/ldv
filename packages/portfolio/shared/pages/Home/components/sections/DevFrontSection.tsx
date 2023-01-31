import { Stack, Typography } from '@ldv/voodoo-ui';
import { PageContainer } from '../../../../components/PageContainer/PageContainer';

export function DevFrontSection() {
  return (
    <PageContainer.Padding>
      <Stack marginBottom="$voodoo.4">
        <Typography.Heading variant="heading2">
          Frontend tools
        </Typography.Heading>
      </Stack>

      <Stack>
        <Typography.Text variant="body">
          I mainly work with React and React Native and its ecosystem TS / Expo
          / Storybook / Apollo / Micro Service / RTL
        </Typography.Text>
      </Stack>
    </PageContainer.Padding>
  );
}
