import React, { useEffect } from 'react';
import {
  createNodeDefault,
  createOutputHorizontalNode,
  Diagram,
  disableNodeUserInteractionClassName,
  INodeVisualComponentProps,
  NodeState,
  Port,
} from '@react-easy-diagram/core';
import { observer } from 'mobx-react-lite';

const NumberProvider = observer<{ node: NodeState }>(({ node }) => {
  const port = node.ports['output'];
  return (
    <>
      <div>Number input</div>
      <span>
        <input
          type='number'
          onChange={(event) =>
            port?.setExtra(parseInt(event.target.value) || 0)
          }
          defaultValue={port && port.extra}
          className={disableNodeUserInteractionClassName}
        />
      </span>
    </>
  );
});

const AddNumbers = observer<{ node: NodeState }>(({ node }) => {
  const outputPort = node.ports['output'];

  const getInputNumber = (portName: string): number => {
    const port = node.ports[portName];
    if (port && port.connectedPorts.length > 0) {
      return port.connectedPorts[0].extra;
    } else return 0;
  };
  const num1 = getInputNumber('number_1');
  const num2 = getInputNumber('number_2');
  const sum = num1 + num2;

  useEffect(() => outputPort?.setExtra(sum), [outputPort, sum]);

  return (
    <>
      <div>Add numbers</div>
      <span>Result: {outputPort ? outputPort.extra : ''}</span>
    </>
  );
});

export default () => (
  <Diagram
    initState={{
      nodes: [
        {
          id: 'num1',
          position: [100, 100],
          componentType: 'number',
        },
        {
          id: 'num2',
          position: [100, 300],
          componentType: 'number',
        },
        {
          id: 'num3',
          position: [420, 250],
          componentType: 'number',
        },
        {
          id: 'add1',
          position: [420, 150],
          componentType: 'addnumbers',
        },
        {
          id: 'add2',
          position: [700, 200],
          componentType: 'addnumbers',
        },
      ],
      links: [
        {
          source: {
            nodeId: 'num1',
            portId: 'output',
          },
          target: {
            nodeId: 'add1',
            portId: 'number_1',
          },
        },
        {
          source: {
            nodeId: 'num2',
            portId: 'output',
          },
          target: {
            nodeId: 'add1',
            portId: 'number_2',
          },
        },
        {
          source: {
            nodeId: 'num3',
            portId: 'output',
          },
          target: {
            nodeId: 'add2',
            portId: 'number_2',
          },
        },
        {
          source: {
            nodeId: 'add1',
            portId: 'output',
          },
          target: {
            nodeId: 'add2',
            portId: 'number_1',
          },
        },
      ],
    }}
    settings={{
      nodes: {
        components: {
          number: createOutputHorizontalNode({
            innerNode: NumberProvider,
          }),
          addnumbers: createNodeDefault({
            ports: {
              left: [
                {
                  id: 'number_1',
                  type: 'single_connection',
                },
                {
                  id: 'number_2',
                  type: 'single_connection',
                },
              ],
              right: [
                {
                  id: 'output',
                },
              ],
            },
            innerNode: AddNumbers,
          }),
        },
      },
      callbacks: {
        validateLinkEndpoints: (source, target, rootStore) => {
          if (target.type === 'single_connection') {
            // allow connection only if target port is still unconnected
            return target.connectedLinks.length === 0;
          }
          return true;
        },
      },
    }}
  />
);
