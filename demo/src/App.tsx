import React from 'react';
import './App.css';
import { createCurvedLinkPathConstructor, createLinkDefault, IDiagramInitState, useDiagram } from '@react-easy-diagram/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { ControlPanel } from './ControlPanel';

const useStyles = makeStyles(() => ({
  diagram: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#dbdbdb',
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
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