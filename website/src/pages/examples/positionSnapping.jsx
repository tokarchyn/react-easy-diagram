import React from 'react';
import { ExampleWrapper } from './_exampleWrapper';
import CodeBlock from "@theme/CodeBlock"
import {DiagramContainer} from './_diagramContainer'

import DiagramExampleSource from '!!raw-loader!./_positionSnappingDiagram';
import DiagramExample from './_positionSnappingDiagram'

export default function Example() {
  return (
    <ExampleWrapper title='Position snapping example'>
      <DiagramContainer><DiagramExample/></DiagramContainer>
      <CodeBlock className="language-jsx">{DiagramExampleSource}</CodeBlock>
    </ExampleWrapper>
  );
}
