import { Stack, Typography, Button2 } from '@ldv/voodoo-ui';
import { PageContainer } from '../../../components/PageContainer/PageContainer';
import { Anchor } from '../../../components/Anchor/Anchor';

export function IntroSection() {
  return (
    <PageContainer.Padding>
      <Stack
        paddingTop="$voodoo.16"
        marginBottom="$voodoo.4"
        backgroundColor="$backgroundTransparent"
      >
        <Typography.Heading variant="heading1">
          Hello there,
          <br />
          I&apos;m{' '}
          <Typography.Heading variant="heading1" color="primary">
            Hugo Garrido
          </Typography.Heading>
        </Typography.Heading>

        <Button2>Lets do voodoo</Button2>

        <Button2 color="black">Lets do voodoo</Button2>
      </Stack>

      <Stack marginBottom="$voodoo.4">
        <Typography.Heading variant="heading4">
          A frontend developer from Paris, France currently at{' '}
          <Anchor isExternal href="https://www.ornikar.com/">
            Ornikar
          </Anchor>{' '}
          !
        </Typography.Heading>
      </Stack>

      <Stack>
        <Typography.Heading variant="heading4">
          I like to be part of teams where I can{' '}
          <Anchor variant="heading4" href="#dev-front">
            write code
          </Anchor>{' '}
          and{' '}
          <Anchor variant="heading4" href="#libs">
            design system
          </Anchor>{' '}
          that turns into{' '}
          <Anchor variant="heading4" href="#product">
            products useful to real people
          </Anchor>
          .
        </Typography.Heading>
      </Stack>
    </PageContainer.Padding>
  );
}
