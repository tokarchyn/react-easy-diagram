import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export function DiagramContainer(props) {
  return (
    <BrowserOnly>
      {() => (
        <div style={{ height: 'calc(90vh - var(--ifm-navbar-height))' }}>
          {props.children}
        </div>
      )}
    </BrowserOnly>
  );
}
