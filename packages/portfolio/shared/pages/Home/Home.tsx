import { Stack, Icon } from '@ldv/voodoo-ui';
import { HomePageSection } from './components/HomePageSection';
import { IntroSection } from './components/IntroSection';
import { DevFrontSection } from './components/DevFrontSection';
import { DesignSystemSection } from './components/DesignSystemSection';
import { ProductTeamSection } from './components/ProductTeamSection';
import { FunFactSection } from './components/FunFactSection';

export function Home() {
  return (
    <div>
      <Stack height="100vh" alignItems="center" justifyContent="space-between">
        <HomePageSection>
          <IntroSection />
        </HomePageSection>
        <Stack paddingBottom="$voodoo.10">
          <Icon.ArrowDownCircle color="#000" size={40} />
        </Stack>
      </Stack>

      <Stack height="100vh" backgroundColor="$accent600">
        <HomePageSection sectionId="dev-front">
          <DevFrontSection />
        </HomePageSection>
      </Stack>

      <Stack height="100vh" backgroundColor="$primary600">
        <HomePageSection sectionId="libs">
          <DesignSystemSection />
        </HomePageSection>
      </Stack>

      <HomePageSection sectionId="product">
        <ProductTeamSection />
      </HomePageSection>

      <HomePageSection sectionId="fun-facts">
        <FunFactSection />
      </HomePageSection>
    </div>
  );
}
