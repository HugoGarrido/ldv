import { Heading, Typography2 } from '@ldv/voodoo-ui';
import { PageContainer } from '../shared/components/PageContainer/PageContainer';

export function Index() {
  return (
    <PageContainer>
      <div>
        <span> Hello there, </span>
        Welcome to LDV portfolio 👋
      </div>
      <Typography2
        variant="heading6"
        color="primary"
        $small={{ color: 'accent', variant: 'heading3' }}
        $medium={{ color: 'accent', variant: 'heading1' }}
      >
        Title
      </Typography2>

      <Typography2 variant="body">This is body</Typography2>
    </PageContainer>
  );
}

export default Index;
