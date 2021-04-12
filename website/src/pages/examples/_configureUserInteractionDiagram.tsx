import React from 'react';
import {
  Diagram,
  INodeVisualComponentProps,
  IUserInteraction,
  useRootStore,
} from '@react-easy-diagram/core';
import { observer } from 'mobx-react-lite';

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'Node 1',
          label: 'Node with drag disabled',
          position: [450, 50],
          ports: [{ id: 'port_top', type: 'top' }, { id: 'port_bottom', type: 'bottom' }],
          isDragEnabled: false, // specifying this property in the element overrides diagram settings
        },
        {
          id: 'Node 2',
          label: 'Node with selection disabled',
          position: [450, -100],
          ports: [{ id: 'port', type: 'bottom' }],
          isSelectionEnabled: false,
        },
        {
          id: 'Node 3',
          label: 'Node that use default diagram settings',
          position: [450, 200],
          ports: [{ id: 'port', type: 'top' }],
        },
        {
          id: 'Node 4',
          label: 'Node with disabled port',
          position: [100, 200],
          ports: [{ id: 'port', type: 'right', isConnectionEnabled: false }],
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
          componentType: 'config',
          isSelectionEnabled: false,
        },
      ],
      links: [
        {
          source: { nodeId: 'Node 1', portId: 'port_bottom' },
          target: { nodeId: 'Node 3', portId: 'port' },
        },
        {
          source: { nodeId: 'Node 1', portId: 'port_top' },
          target: { nodeId: 'Node 2', portId: 'port' },
          isSelectionEnabled: false,
        },
      ],
    }}
    settings={{
      nodes: {
        components: {
          config: Configurator,
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
