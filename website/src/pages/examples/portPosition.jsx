import React from 'react';
import { ExampleWrapper } from './_exampleWrapper';
import CodeBlock from "@theme/CodeBlock"
import {DiagramContainer} from './_diagramContainer'

import DiagramExampleSource from '!!raw-loader!./_portPositionDiagram';
import DiagramExample from './_portPositionDiagram'

export default function Example() {
  return (
    <ExampleWrapper title='Port Position Example'>
      <DiagramContainer><DiagramExample/></DiagramContainer>
      <CodeBlock className="language-jsx">{DiagramExampleSource}</CodeBlock>
    </ExampleWrapper>
  );
}
