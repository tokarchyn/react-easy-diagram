import React from 'react';
import { ExampleWrapper } from './_exampleWrapper';
import CodeBlock from "@theme/CodeBlock"
import {DiagramContainer} from './_diagramContainer'

import DiagramExampleSource from '!!raw-loader!./_callbacksDiagram';
import DiagramExample from './_callbacksDiagram'

export default function Example() {
  return (
    <ExampleWrapper title='Callbacks Example'>
      <DiagramContainer><DiagramExample/></DiagramContainer>
      <CodeBlock className="language-jsx">{DiagramExampleSource}</CodeBlock>
    </ExampleWrapper>
  );
}
