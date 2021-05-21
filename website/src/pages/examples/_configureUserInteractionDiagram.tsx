import React from 'react';
import {
  createNode,
  Diagram,
  INodeVisualComponentProps,
  IUserInteraction,
  useRootStore,
} from 'react-easy-diagram';
import { observer } from 'mobx-react-lite';

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'Node 1',
          label: 'Node with drag disabled',
          position: [450, 50],
          type: 'input_output_vertical',
          isDragEnabled: false, // specifying this property in the element overrides diagram settings
        },
        {
          id: 'Node 2',
          label: 'Node with selection disabled',
          position: [450, -100],
          type: 'output_vertical',
          isSelectionEnabled: false,
        },
        {
          id: 'Node 3',
          label: 'Node that use default diagram settings',
          position: [450, 200],
          type: 'input_vertical',
        },
        {
          id: 'Node 4',
          label: 'Node with disabled port',
          position: [100, 200],
          type: 'disabled_port',
        },
        {
          id: 'Node 5',
          label: 'Node with drag enabled (overrides diagram settings)',
          position: [100, 120],
          isDragEnabled: true,
        },
        {
          id: 'Configurator',
          position: [100, -100],
          type: 'config',
          isSelectionEnabled: false,
        },
      ],
      links: [
        {
          source: { nodeId: 'Node 1', portId: 'output' },
          target: { nodeId: 'Node 3', portId: 'input' },
        },
        {
          source: { nodeId: 'Node 1', portId: 'input' },
          target: { nodeId: 'Node 2', portId: 'output' },
          isSelectionEnabled: false,
        },
      ],
    }}
    settings={{
      nodes: {
        components: {
          config: Configurator,
          disabled_port: createNode({
            ports: [{ id: 'port', position: 'right-center', isConnectionEnabled: false }],
          })
        },
      },
    }}
  />
);

const Configurator = observer<INodeVisualComponentProps>(({ draggableRef }) => {
  const { diagramSettings } = useRootStore();

  return (
    <div className='react_fast_diagram_Node_Default' ref={draggableRef}>
      <div>
        <b>Diagram user interaction configuration</b>
      </div>
      <div style={{ width: '100%', textAlign: 'left', marginTop: '10px' }}>
        <UserInteractionCheckbox userInteractionPropertyName='diagramZoom' />
        <UserInteractionCheckbox userInteractionPropertyName='diagramPan' />
        <UserInteractionCheckbox userInteractionPropertyName='nodeDrag' />
        <UserInteractionCheckbox userInteractionPropertyName='portConnection' />
        <UserInteractionCheckbox userInteractionPropertyName='nodeSelection' />
        <UserInteractionCheckbox userInteractionPropertyName='linkSelection' />
      </div>
    </div>
  );
});

const UserInteractionCheckbox = observer<{
  userInteractionPropertyName: keyof IUserInteraction;
}>(({ userInteractionPropertyName }) => {
  const { diagramSettings } = useRootStore();

  return (
    <div>
      <input
        name={userInteractionPropertyName}
        type='checkbox'
        checked={diagramSettings.userInteraction[userInteractionPropertyName]}
        onChange={(event) =>
          (diagramSettings.userInteraction[userInteractionPropertyName] = event.target.checked)
        }
      />
      <label
        htmlFor={userInteractionPropertyName}
        style={{ paddingLeft: '10px' }}
      >
        {userInteractionPropertyName}
      </label>
    </div>
  );
});
