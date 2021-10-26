import { useRootStore } from 'hooks/useRootStore';
import React, { useCallback, useRef, useState } from 'react';
import { useGesture } from 'react-use-gesture';
import { RootStore } from 'states/rootStore';
import { multiplyPoint, Point, subtractPoints } from 'utils/point';

interface DragAndDropBaseEvent {
  /**
   * Position of mouse or finger on the screen.
   */
  pointerPosition: Point;
  store: RootStore;
}

export interface DragAndDropEvent extends DragAndDropBaseEvent {
  /**
   * Position in diagram coordinates system (including zoom).
   */
  position: Point;
}

export interface DragAndDropStartEvent extends DragAndDropBaseEvent {}

export interface DragAndDropItemProps {
  /**
   * Callback that will be called on drop.
   */
  onDrop: (event: DragAndDropEvent) => any;
  /**
   * Callback that will be called on drag start. Return false to cancel drag.
   */
  onDragStart?: (state: DragAndDropStartEvent) => boolean;
  /**
   * Callback that will be called during pointer movement.
   */
  onDrag?: (event: DragAndDropEvent) => any;
  /**
   * Represents element to drag. It will be wrapped in another element with disabled user-select and touch-action.
   */
  draggable: JSX.Element;
  /**
   * Element to render while dragging. Same as draggable if not provided.
   */
  droppable?: JSX.Element;
}

export function DragAndDropItem(props: DragAndDropItemProps) {
  const store = useRootStore();

  const [position, setPosition] = useState<Point>([0, 0]);
  const [translate, setTranslate] = useState<Point>([0, 0]);
  const [active, setActive] = useState(false);
  const leftTopDiagramRef = useRef<Point>();

  const getPositionOnDiagram = useCallback(
    (pointerPosition: Point) => {
      if (leftTopDiagramRef.current) {
        const pointOnDiagram = subtractPoints(
          pointerPosition,
          leftTopDiagramRef.current
        );
        if (pointOnDiagram[0] >= 0 && pointOnDiagram[1] >= 0) {
          return multiplyPoint(
            subtractPoints(pointOnDiagram, store.diagramState.offset),
            1 / store.diagramState.zoom
          );
        }
      }
    },
    [leftTopDiagramRef, store]
  );

  const bind = useGesture(
    {
      onDrag: ({ movement, event, xy }) => {
        event.preventDefault();
        setTranslate(movement);

        props.onDrop?.({ position, pointerPosition: xy, store });
      },
      onDragStart: ({ event, xy, cancel }) => {
        const allowDrag = props.onDragStart?.({ pointerPosition: xy, store });
        if (allowDrag === false) {
          cancel();
          return;
        } else {
          const diagRect = store.diagramState.diagramInnerRef.current?.getBoundingClientRect();
          leftTopDiagramRef.current = diagRect && [diagRect.left, diagRect.top];
          event.preventDefault();
          setPosition(xy);
          setActive(true);
        }
      },
      onDragEnd: ({ xy }) => {
        setActive(false);
        setTranslate([0, 0]);

        const positionOnDiagram = getPositionOnDiagram(xy);
        if (positionOnDiagram) {
          props.onDrop?.({
            position: positionOnDiagram,
            pointerPosition: xy,
            store,
          });
        }
      },
    },
    {
      eventOptions: { passive: false },
    }
  );

  return (
    <div className='react_fast_diagram_DragAndDropItem' {...bind()}>
      {props.draggable}
      <div
        className='react_fast_diagram_DragAndDropItem_Droppable'
        style={{
          transform: `translate(calc(${translate[0]}px - 50%), calc(${translate[1]}px - 50%))`,
          opacity: active ? 1 : 0,
          left: position[0],
          top: position[1],
        }}
      >
        {props.droppable ? props.droppable : props.draggable}
      </div>
    </div>
  );
}
