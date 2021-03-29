import React from 'react';
import { ExampleWrapper } from './_exampleWrapper';
import CodeBlock from "@theme/CodeBlock"
import {DiagramContainer} from './_diagramContainer'

import DiagramExampleSource from '!!raw-loader!./_simpleDiagram';
import DiagramExample from './_simpleDiagram'

export default function Example() {
  return (
    <ExampleWrapper title='Simple example'>
      <DiagramContainer><DiagramExample/></DiagramContainer>
      <CodeBlock className="language-jsx">{DiagramExampleSource}</CodeBlock>
    </ExampleWrapper>
  );
}
