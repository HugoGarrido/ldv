import { ReactElement, ReactNode } from 'react';
import type { StackProps } from '@ldv/voodoo-ui';
import { Stack, Typography } from '@ldv/voodoo-ui';

interface CardProps extends StackProps {
  title?: ReactNode;
  children: ReactNode;
}

export function Card({ title, children, ...props }: CardProps): ReactElement {
  return (
    <Stack
      {...props}
      padding="$voodoo.4"
      borderRadius="$voodoo.5"
      borderColor="$black400"
      borderWidth="1px"
    >
      {children}
    </Stack>
  );
}

interface TitleProps extends StackProps {
  children: ReactNode;
}

function Title({ children, ...props }: TitleProps): ReactElement {
  return (
    <Stack marginBottom="$voodoo.2" {...props}>
      <Typography.Heading textAlign="center" variant="heading3">
        {children}
      </Typography.Heading>
    </Stack>
  );
}

interface BodyProps extends StackProps {
  children: ReactNode;
}

function Body({ children, ...props }: BodyProps): ReactElement {
  return <Stack {...props}>{children}</Stack>;
}

Card.Title = Title;
Card.Body = Body;
