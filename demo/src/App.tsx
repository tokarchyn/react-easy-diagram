import React from 'react';
import './App.css';
import {
  createCurvedLinkPathConstructor,
  createDefaultMiniControl,
  createLinkDefault,
  IDiagramInitState,
  useDiagram,
} from '@react-easy-diagram/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { ControlPanel } from './ControlPanel';

const useStyles = makeStyles(() => ({
  diagram: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  controlPanel: {
    position: 'absolute',
    top: '20px',
    left: '20px',
  },
}));

export const App = () => {
  const classes = useStyles();
  const { Diagram, storeRef } = useDiagram(initState, {
    links: {
      components: {
        default: createLinkDefault(),
        attention: createLinkDefault({ color: 'red' }),
      },
      pathConstructor: createCurvedLinkPathConstructor(),
    },
    diagram: {
      miniControlComponent: createDefaultMiniControl({
        buttonsSize: 30,
        position: 'left-bottom',
      }),
    },
  });

  return (
    <Box className={classes.diagram}>
      <Diagram />
      <Box className={classes.controlPanel}>
        <ControlPanel reinitState={storeRef.current?.importState} />
      </Box>
    </Box>
  );
};

const initState: IDiagramInitState = {
  nodes: [
    {
      id: 'Node 1',
      position: [300, 300],
      ports: [
        { id: 'output_1', type: 'bottom' },
      ],
    },
    {
      id: 'Node 2',
      position: [520, 400],
      ports: [
        { id: 'input_1', type: 'top' },
        { id: 'input_2', type: 'top' },
        { id: 'output_1', type: 'right' },
        { id: 'output_2', type: 'right' },
        { id: 'output_3', type: 'right' },
      ],
    },
    {
      id: 'Node 3',
      position: [520, 200],
      ports: [
        { id: 'input_1', type: 'top' },
        { id: 'output_1', type: 'bottom' },
        { id: 'output_2', type: 'bottom' },
      ],
    },
  ],
  links: [
    {
      source: {
        nodeId: 'Node 1',
        portId: 'output_1',
      },
      target: {
        nodeId: 'Node 2',
        portId: 'input_1',
      },
      componentType: 'attention',
    },
  ],
};
