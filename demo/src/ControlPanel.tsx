import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tune } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { IDiagramInitState, ILinkState, INodeState, RootStore } from '@react-easy-diagram/core';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '-8px 0',
    '& > *': {
      margin: '8px 0'
    }
  },
  visibilityBtn: {
    borderRadius: '25px',
    minWidth: '24px',
    padding: '8px 8px',
    backgroundColor: 'white',
  },
  header: {
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    margin: '0 -14px',
    '& > *': {
      margin: '0 14px'
    }
  },
}));

const generateLargeDiagram = (colNum: number, rowNum: number): IDiagramInitState => {
  const nodes : INodeState[] = [];
  const links : ILinkState[] = [];
  const getNodeId = (i: number,j: number) => `node_${i}_${j}`;

  for (let i = 0; i < colNum; i++) {
    for (let j = 0; j < rowNum; j++) {
      nodes.push({
        id: getNodeId(i,j),
        position: [i * 120, j * 120 ],
        ports: [
          {id: 'left', type: 'left'},
          {id: 'top', type: 'top'},
          {id: 'right', type: 'right'},
          {id: 'bottom', type: 'bottom'},
        ]
      });
      if (i - 1 >= 0) {
        links.push({
          source: {
            nodeId: getNodeId(i - 1,j),
            portId: 'right'
          },
          target: {
            nodeId: getNodeId(i,j),
            portId: 'left'
          }
        });
      }
      if (j - 1 >= 0) {
        links.push({
          source: {
            nodeId: getNodeId(i,j - 1),
            portId: 'bottom'
          },
          target: {
            nodeId: getNodeId(i,j),
            portId: 'top'
          }
        });
      }
    }
  }

  return {nodes,links};
};

export interface ControlPanelProps{
  store: RootStore | null
}

export const ControlPanel = (props: ControlPanelProps) => {
  const classes = useStyles();

  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);

  const [visible, setVisible] = useState(false);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.store) {
      const newState = generateLargeDiagram(row, col);
      props.store.importState(newState.nodes, newState.links);
    }
  };

  if (visible) {
    return (
      <Box padding={3} clone>
        <Card>
          <div className={classes.header}>
            <Button
              className={classes.visibilityBtn}
              variant='outlined'
              aria-label='control-panel'
              onClick={() => setVisible(false)}
            >
              <Tune />
            </Button>
            <Typography variant='h5'>Control Panel</Typography>
          </div>
          <form
            className={classes.form}
            noValidate
            autoComplete='off'
            onSubmit={onFormSubmit}
          >
            <TextField
              id='rows'
              value={row}
              type='number'
              label='Rows'
              variant='outlined'
              onChange={(e) => setRow(parseInt(e.target.value))}
            />
            <TextField
              id='columns'
              value={col}
              type='number'
              label='Columns'
              variant='outlined'
              onChange={(e) => setCol(parseInt(e.target.value))}
            />
            <Button variant='contained' type='submit'>
              Generate new Diagram
            </Button>
          </form>
          <Button style={{
            marginTop: 10
          }} variant='contained' onClick={() => {
            console.log(props.store?.export())
          }}>
            Print state
          </Button>
        </Card>
      </Box>
    );
  } else {
    return (
      <Button
        variant='outlined'
        className={classes.visibilityBtn}
        aria-label='control-panel'
        onClick={() => setVisible(true)}
      >
        <Tune />
      </Button>
    );
  }
};
