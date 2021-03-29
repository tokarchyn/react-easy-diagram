import React from 'react';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import LayoutHead from '@theme/LayoutHead';
import useKeyboardNavigation from '@theme/hooks/useKeyboardNavigation';

// Copied from docusaurus Layout
export function ExampleWrapper(props) {
  useKeyboardNavigation();
  return (
    <LayoutProviders>
      <LayoutHead {...props} />
      <SkipToContent />
      <AnnouncementBar />
      <Navbar />
      {props.children}
      <Footer/>
    </LayoutProviders>
  );
}