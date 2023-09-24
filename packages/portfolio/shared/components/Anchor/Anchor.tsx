import { Typography, TypographyProps } from '@ldv/voodoo-ui';
import { ReactElement, ReactNode } from 'react';

interface AnchorProps extends TypographyProps {
  children: ReactNode;
  href: string;
  isExternal?: boolean;
}

export function Anchor({
  children,
  href,
  isExternal,
  ...props
}: AnchorProps): ReactElement {
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer noopener' : undefined}
    >
      <Typography {...props} textDecorationLine="underline">
        {children}
      </Typography>
    </a>
  );
}
