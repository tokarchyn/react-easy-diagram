import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from '../styles.module.css';

export function DiagramContainer(props) {
  return (
    <div className={styles.diagramContainer}>
      <BrowserOnly>{() => props.children}</BrowserOnly>
    </div>
  );
}
