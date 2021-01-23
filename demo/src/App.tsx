import React from 'react';
import './App.css';
import { createCurvedLinkPathConstructor, createDefaultBackground, createDefaultMiniControl, createImageWithCrosses, createLinkDefault, IDiagramInitState, useDiagram } from '@react-easy-diagram/core';
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
  const { Diagram, apiRef } = useDiagram(initState, {
    links: {
      components: {
        default: createLinkDefault(),
        attention: createLinkDefault({color: 'red'})
      },
      pathConstructor: createCurvedLinkPathConstructor()
    },
    diagram: {
      miniControlComponent: createDefaultMiniControl({
        buttonsSize: 30,
        position: 'left-bottom'
      })
    }
  });

  return (
    <Box className={classes.diagram}>
      <Diagram />
      <Box className={classes.controlPanel}>
        <ControlPanel reinitState={apiRef.current?.reinitState} />
      </Box>
    </Box>
  );
};

const initState: IDiagramInitState = {
  nodes: [
    {
      id: 'Node 1',
      position: [300, 300],
      ports: {
        'output_1': {type: 'bottom'}, 
      }
    },
    {
      id: 'Node 2',
      position: [520, 400],
      ports: {
        'input_1': {type: 'top'}, 
        'input_2': {type: 'top'}, 
        'output_1': {type: 'right'}, 
        'output_2': {type: 'right'}, 
        'output_3': {type: 'right'}, 
      }
    },
    {
      id: 'Node 3',
      position: [520, 200],
      ports: {
        'input_1': {type: 'top'}, 
        'output_1': {type: 'bottom'}, 
        'output_2': {type: 'bottom'}, 
      }
    },
  ],
  links: [
    {
      source: {
        nodeId: 'Node 2',
      },
      target: {
        nodeId: 'Node 1',
      },
      componentType: 'attention',
    },
  ],
};
