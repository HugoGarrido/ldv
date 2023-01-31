import { Stack, Typography, XStack, YStack } from '@ldv/voodoo-ui';
import { ReactElement, ReactNode } from 'react';
import { PageContainer } from '../../../../../components/PageContainer/PageContainer';
import { VideoPlayer } from './VideoPlayer';

interface CardProps {
  title: ReactNode;
  children: ReactNode;
}

function Card({ title, children }: CardProps): ReactElement {
  return (
    <Stack
      borderRadius="$voodoo.4"
      borderColor="$black400"
      borderWidth="2px"
      padding="$voodoo.4"
      minHeight="200px"
    >
      <Stack marginBottom="8px">
        <Typography.Heading textAlign="center" variant="heading3">
          {title}
        </Typography.Heading>
      </Stack>

      <Stack>{children}</Stack>
    </Stack>
  );
}

export function OrnikarSection() {
  return (
    <PageContainer.Padding>
      <Stack marginBottom="$voodoo.4">
        <Typography.Heading variant="heading2">
          Frontend tools
        </Typography.Heading>
      </Stack>

      <Stack>
        <Typography.Text variant="body">
          I mainly work with React and React Native and its ecosystem TS / Expo
          / Storybook / Apollo / Micro Service / RTL
        </Typography.Text>
      </Stack>

      <XStack space="$voodoo.10">
        <Stack
          maxWidth="358px"
          width="100%"
          position="relative"
          height="732px"
          borderRadius="58px"
          overflow="hidden"
        >
          <Stack
            position="absolute"
            width="374px"
            height="800px"
            left="-8px"
            top="-9px"
          >
            <VideoPlayer
              autoPlay
              loop
              width={380}
              src="/assets/video/ornikar-app.mp4"
            />
          </Stack>
        </Stack>

        <Stack>
          <YStack space="$voodoo.4">
            <Stack>
              <Card title="Champion de l'AppStore">
                <Typography.Text textAlign="center" variant="body">
                  Top 7 App Store Education 🏆 4.7/5
                </Typography.Text>
              </Card>
            </Stack>
          </YStack>
        </Stack>
      </XStack>
    </PageContainer.Padding>
  );
}
