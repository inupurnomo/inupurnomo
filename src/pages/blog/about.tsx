import React from 'react';
import BlogLayout from '@/layout/BlogLayout';

export default function About(): JSX.Element {
  return (
    <BlogLayout
      customMeta={{
        title: 'About - Diggy',
      }}
    >
      <h1>About Page</h1>
      <p>Welcome to the about page</p>
    </BlogLayout>
  );
}
