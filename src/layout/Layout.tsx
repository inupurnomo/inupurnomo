import React from 'react';
import { MetaProps } from '@/types/layout';
import Head from '@/components/blog/Head';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://inupurnomo.com';

export default function Layout({
  children,
  customMeta,
}: LayoutProps): JSX.Element {
  return (
    <>
      <Head customMeta={customMeta} />
      <main>
        <div className="w-full overflow-x-hidden overflow-y-hidden font-bodyFont text-textDark dark:text-textLight">
          {children}
        </div>
      </main>
    </>
  );
}
