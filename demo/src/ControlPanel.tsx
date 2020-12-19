import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tune } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { IDiagramInitState } from '@react-easy-diagram/core';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px',
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
    gap: '14px',
  },
}));

const generateLargeDiagram = (colNum: number, rowNum: number): IDiagramInitState => {
  const nodes = [];
  const links = [];
  const getNodeId = (i: number,j: number) => `node_${i}_${j}`;

  for (let i = 0; i < colNum; i++) {
    for (let j = 0; j < rowNum; j++) {
      nodes.push({
        id: getNodeId(i,j),
        position: { x: i * 120, y: j * 120 },
      });
      if (i - 1 >= 0) {
        links.push({
          source: {
            nodeId: getNodeId(i - 1,j)
          },
          target: {
            nodeId: getNodeId(i,j)
          }
        });
      }
      if (j - 1 >= 0) {
        links.push({
          source: {
            nodeId: getNodeId(i,j - 1)
          },
          target: {
            nodeId: getNodeId(i,j)
          }
        });
      }
    }
  }

  return {nodes,links};
};

export interface ControlPanelProps{
  reinitState?(initializer: IDiagramInitState): void;
}

export const ControlPanel = (props: ControlPanelProps) => {
  const classes = useStyles();

  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);

  const [visible, setVisible] = useState(true);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (props.reinitState) {
      props.reinitState(generateLargeDiagram(row, col));
    }
    e.preventDefault();
    e.stopPropagation();
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
