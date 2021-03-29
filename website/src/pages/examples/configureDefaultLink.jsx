import React from 'react';
import { ExampleWrapper } from './_exampleWrapper';
import CodeBlock from "@theme/CodeBlock"
import {DiagramContainer} from './_diagramContainer'

import DiagramExampleSource from '!!raw-loader!./_configureDefaultLinkDiagram';
import DiagramExample from './_configureDefaultLinkDiagram'

export default function Example() {
  return (
    <ExampleWrapper title='Configure Default Link Example'>
      <DiagramContainer><DiagramExample/></DiagramContainer>
      <CodeBlock className="language-jsx">{DiagramExampleSource}</CodeBlock>
    </ExampleWrapper>
  );
}
