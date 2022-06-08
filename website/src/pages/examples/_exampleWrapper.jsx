import React from 'react';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import { PageMetadata, useKeyboardNavigation } from '@docusaurus/theme-common';

// Copied from docusaurus Layout (https://github.com/facebook/docusaurus/blob/main/packages/docusaurus-theme-classic/src/theme/Layout/index.tsx)
export function ExampleWrapper(props) {
  const { title, description } = props;

  useKeyboardNavigation();
  return (
    <LayoutProviders>
      <PageMetadata title={title} description={description} />
      <SkipToContent />
      <AnnouncementBar />
      <Navbar />
      {props.children}
      <Footer />
    </LayoutProviders>
  );
}
