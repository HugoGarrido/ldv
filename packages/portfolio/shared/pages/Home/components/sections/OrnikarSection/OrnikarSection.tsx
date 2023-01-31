import { Stack, Typography, XStack, Button2, YStack } from '@ldv/voodoo-ui';
import { Car } from '@tamagui/lucide-icons';
import { PageContainer } from '../../../../../components/PageContainer/PageContainer';
import { AppInfoCards } from './components/AppInfoCards';
import { Card } from './components/Card';
import { PhonePreviewCard } from './components/PhonePreviewCard';

export function OrnikarSection() {
  return (
    <PageContainer.Padding>
      <Stack marginBottom="$voodoo.4">
        <Typography.Heading textAlign="center" variant="heading2">
          Tech @Ornikar
        </Typography.Heading>
      </Stack>

      <Stack marginBottom="$voodoo.16">
        <Typography.Text textAlign="center" variant="body">
          I am currently working at Ornikar on universal apps and help our team
          to build for the web and the native world
        </Typography.Text>
      </Stack>

      <XStack
        space="$voodoo.10"
        justifyContent="center"
        width="100%"
        flexWrap="wrap"
        // backgroundColor="$accent600"
      >
        <Stack maxWidth="358px" width="100%">
          <PhonePreviewCard />
        </Stack>

        <Stack
          display="inline-flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexGrow={0}
          flexWrap="wrap"
          maxWidth={`calc(100% - 358px - 40px)`}
        >
          <YStack
            space="$voodoo.10"
            flexGrow={0}
            maxWidth="100%"
            flexWrap="wrap"
          >
            <AppInfoCards />
            <Card
              maxWidth="480px"
              justifyContent="space-between"
              paddingBottom="$voodoo.10"
              height="480px"
            >
              <Stack>
                <Card.Title>@Ornikar</Card.Title>
                <Card.Body>
                  <Stack>
                    <Stack marginBottom="$voodoo.10" marginTop="auto">
                      <Typography.Text variant="body-small">
                        Ornikar is the leading online driving school in France
                        and aims to improve the access to mobility for young
                        drivers. The Driving Licence exam is the most passed
                        exam in France and half of the candidate obtain it
                        thanks to Ornikar.
                      </Typography.Text>
                    </Stack>
                  </Stack>
                </Card.Body>
              </Stack>

              <Stack alignItems="center">
                <Button2 color="black">Go to Ornikar</Button2>
              </Stack>
            </Card>
          </YStack>
        </Stack>
      </XStack>
    </PageContainer.Padding>
  );
}
