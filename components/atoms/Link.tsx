import NextLink from 'next/link';
import { AnchorHTMLAttributes, forwardRef } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { href, ...rest } = props;

  if (href.includes(':')) {
    return <a ref={ref} href={href} {...rest} />;
  }

  return (
    <NextLink href={href} passHref>
      <a ref={ref} {...rest} />
    </NextLink>
  );
});

Link.displayName = 'Link';
