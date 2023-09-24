import { Stack } from '@ldv/voodoo-ui';
import { VideoPlayer } from './VideoPlayer';

export function PhonePreviewCard() {
  return (
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
  );
}
