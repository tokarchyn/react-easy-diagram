import React from 'react';
import { ExampleWrapper } from './_exampleWrapper';
import CodeBlock from '@theme/CodeBlock';
import { DiagramContainer } from './_diagramContainer';

import DiagramExampleSource from '!!raw-loader!./_dragAndDropDiagram';
import DiagramExample from './_dragAndDropDiagram';

export default function Example() {
  return (
    <ExampleWrapper title='Drag And Drop Example'>
      <DiagramContainer>
        <DiagramExample />
      </DiagramContainer>
      <CodeBlock className='language-jsx'>{DiagramExampleSource}</CodeBlock>
    </ExampleWrapper>
  );
}
