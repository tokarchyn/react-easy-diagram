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
   * Position in diagram coordinates system (including zoom). Undefined if pointer is not above a diagram.
   */
  position?: Point;
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
  onDragStart?: (state: DragAndDropStartEvent) => false | any;
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
  const diagramRectRef = useRef<DOMRect>();
  const elementRef = useRef<HTMLDivElement>(null);
  const cancelledRef = useRef<boolean>(false);

  const getPositionOnDiagram = useCallback(
    (pointerPosition: Point) => {
      if (diagramRectRef.current) {
        const pointOnDiagram = subtractPoints(pointerPosition, [
          diagramRectRef.current.left,
          diagramRectRef.current.top,
        ]);
        if (
          pointOnDiagram[0] >= 0 &&
          pointOnDiagram[1] >= 0 &&
          pointOnDiagram[0] <= diagramRectRef.current.width &&
          pointOnDiagram[1] <= diagramRectRef.current.height
        ) {
          return multiplyPoint(
            subtractPoints(pointOnDiagram, store.diagramState.offset),
            1 / store.diagramState.zoom
          );
        }
      }
    },
    [diagramRectRef, store]
  );

  useGesture(
    {
      onDrag: ({ movement, xy }) => {
        // Cannot use 'cancel' property provided by the library because the first callbacks
        // after cancelling will have this property set to false
        if (!cancelledRef.current) {
          setTranslate(movement);

          props.onDrag?.({
            position: getPositionOnDiagram(xy),
            pointerPosition: xy,
            store,
          });
        }
      },
      onDragStart: ({ xy, cancel }) => {
        const allowDrag = props.onDragStart?.({ pointerPosition: xy, store });
        if (allowDrag === false) {
          cancelledRef.current = true;
          cancel();
          return;
        } else {
          cancelledRef.current = false;
          store.diagramSettings.userInteraction.disableAllPointerInteractions();
          diagramRectRef.current = store.diagramState.diagramInnerRef.current?.getBoundingClientRect();
          setPosition(xy);
          setActive(true);
        }
      },
      onDragEnd: ({ xy }) => {
        if (!cancelledRef.current) {
          store.diagramSettings.userInteraction.enableAllPointerInteractions();
          setActive(false);
          setTranslate([0, 0]);
  
          props.onDrop?.({
            position: getPositionOnDiagram(xy),
            pointerPosition: xy,
            store,
          });
        }
      },
    },
    {
      domTarget: elementRef,
      eventOptions: { passive: false },
    }
  );

  return (
    <div className='react_fast_diagram_DragAndDropItem' ref={elementRef}>
      {props.draggable}
      <div
        className='react_fast_diagram_DragAndDropItem_Droppable'
        style={{
          transform: `translate(calc(${translate[0]}px - 50%), calc(${translate[1]}px - 50%))`,
          opacity: active ? 1 : 0,
          pointerEvents: active ? 'auto' : 'none',
          left: position[0],
          top: position[1],
        }}
      >
        {props.droppable ? props.droppable : props.draggable}
      </div>
    </div>
  );
}
