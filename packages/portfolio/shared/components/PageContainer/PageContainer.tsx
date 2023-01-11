import { ReactNode } from 'react';
import { PageBackground } from './components/PageBackground';
import { PageMaxWidth } from './components/PageMaxWidth';
import { PagePadding } from './components/PagePadding';

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <PageBackground>
      <PageMaxWidth>
        <PagePadding>{children}</PagePadding>
      </PageMaxWidth>
    </PageBackground>
  );
}

PageContainer.Background = PageBackground;
PageContainer.MaxWidth = PageMaxWidth;
PageContainer.Padding = PagePadding;
