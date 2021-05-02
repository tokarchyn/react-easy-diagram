import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export function DiagramContainer(props) {
  return (
    <div style={{ height: 'calc(90vh - var(--ifm-navbar-height))' }}>
      <BrowserOnly>{() => props.children}</BrowserOnly>
    </div>
  );
}
