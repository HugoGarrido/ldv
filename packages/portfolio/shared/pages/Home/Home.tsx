import { Stack, Icon } from '@ldv/voodoo-ui';
import { HomePageSection } from './components/sections/HomePageSection';
import { IntroSection } from './components/sections/IntroSection';
import { DevFrontSection } from './components/sections/DevFrontSection';
import { DesignSystemSection } from './components/sections/DesignSystemSection';
import { ProductTeamSection } from './components/sections/ProductTeamSection';
import { FunFactSection } from './components/sections/FunFactSection';
import { OrnikarSection } from './components/sections/OrnikarSection/OrnikarSection';

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

      <Stack height="100vh">
        <HomePageSection sectionId="ornikar">
          <OrnikarSection />
        </HomePageSection>
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
