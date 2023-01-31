import { Stack, Typography } from '@ldv/voodoo-ui';
import Link from 'next/link';
import { PageContainer } from '../../../../components/PageContainer/PageContainer';

export function FunFactSection() {
  return (
    <Stack backgroundColor="$black500">
      <PageContainer.Padding>
        <Stack alignItems="center" justifyContent="center" minHeight="200px">
          <Typography.Text variant="body" color="white" textAlign="center">
            Wanna dig more ?{' '}
            <Link href="/fun-facts">
              Let&apos;s have a look on some fun facts about me 🙈
            </Link>
          </Typography.Text>
        </Stack>
      </PageContainer.Padding>
    </Stack>
  );
}
