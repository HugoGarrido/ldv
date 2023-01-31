import { Stack, Typography, XStack, YStack } from '@ldv/voodoo-ui';
import { Card } from './Card';

export function AppInfoCards() {
  return (
    <Stack>
      <YStack space="$voodoo.4">
        <XStack space="$voodoo.10">
          <Card>
            <Card.Title>Top de l&apos;AppStore</Card.Title>
            <Card.Body>
              <Typography.Text textAlign="center" variant="body-small">
                Top 7 App Store Education 🏆 4.7/5
              </Typography.Text>
            </Card.Body>
          </Card>

          <YStack space="$voodoo.4">
            <Card>
              <Card.Body>
                <Typography.Text textAlign="center" variant="body-small">
                  Apple
                </Typography.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Typography.Text textAlign="center" variant="body-small">
                  Android
                </Typography.Text>
              </Card.Body>
            </Card>
          </YStack>
        </XStack>
      </YStack>
    </Stack>
  );
}
