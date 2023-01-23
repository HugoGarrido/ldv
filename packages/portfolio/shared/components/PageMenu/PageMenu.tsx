import { Stack, Typography, XStack } from '@ldv/voodoo-ui';
import Link from 'next/link';
import { ReactNode } from 'react';
import { PageContainer } from '../PageContainer/PageContainer';

interface MenuItemProps {
  children: ReactNode;
  href: string;
}

function MenuItem({ children, href }: MenuItemProps) {
  return (
    <Link href={href}>
      <Typography.Text variant="body">{children}</Typography.Text>
    </Link>
  );
}

export function PageMenu() {
  return (
    <PageContainer.MaxWidth>
      <PageContainer.Padding>
        <XStack space="$voodoo.4">
          <Stack>
            <MenuItem href="/">Home</MenuItem>
          </Stack>
          <Stack>
            <MenuItem href="/fun-facts">Fun Facts</MenuItem>
          </Stack>
        </XStack>
      </PageContainer.Padding>
    </PageContainer.MaxWidth>
  );
}
