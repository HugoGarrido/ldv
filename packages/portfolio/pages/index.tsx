import { PageMenu } from '../shared/components/PageMenu/PageMenu';
import { Home } from '../shared/pages/Home/Home';

export function Index() {
  return (
    <div>
      <PageMenu />
      <Home />
    </div>
  );
}

export default Index;
