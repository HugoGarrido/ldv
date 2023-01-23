import { Stack } from '@ldv/voodoo-ui';
import { ReactNode } from 'react';

interface HomePageSectionProps {
  children: ReactNode;
  sectionId?: string;
}

export function HomePageSection({ children, sectionId }: HomePageSectionProps) {
  return (
    <section id={sectionId}>
      <Stack paddingTop="$voodoo.4" marginBottom="$voodoo12">
        {children}
      </Stack>
    </section>
  );
}
