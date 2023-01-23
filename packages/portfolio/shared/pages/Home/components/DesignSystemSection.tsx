import { Stack, Typography } from '@ldv/voodoo-ui';
import { PageContainer } from '../../../components/PageContainer/PageContainer';

export function DesignSystemSection() {
  return (
    <PageContainer.Padding>
      <Stack marginBottom="$voodoo.4">
        <Typography.Heading variant="heading2">
          Design System
        </Typography.Heading>
      </Stack>

      <Stack>
        <Typography.Text variant="body">
          When working with a team of up to 30 front end devs and 10 designers
          for a consumer first product application, every aspect of the
          conception and building must be streamlined. Also, when having several
          native and web apps that share the same design system, there is a dire
          need to build a resilient component library to make it work at scale.
        </Typography.Text>
      </Stack>
    </PageContainer.Padding>
  );
}
