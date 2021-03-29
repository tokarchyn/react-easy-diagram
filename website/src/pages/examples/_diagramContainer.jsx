import React from 'react';

export function DiagramContainer(props) {
  return (
    <div style={{height: 'calc(90vh - var(--ifm-navbar-height))'}}>{props.children}</div>
  )
} 