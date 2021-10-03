import React from 'react';
import {
  componentDefaultType,
  createLinkDefault,
  createPortInnerDefault,
  Diagram,
  createArrowMarker,
  createCircleMarker
} from 'react-easy-diagram';

export default function () {
  return (
    <Diagram
      initState={{
        nodes: [
          {
            id: 'node_1',
            label: 'Node 1',
            position: [300, 300],
            type: 'output_horizontal',
          },
          {
            id: 'node_2',
            label: 'Node 2',
            position: [520, 400],
            type: 'input_output_horizontal',
          },
          {
            id: 'node_3',
            label: 'Node 3',
            position: [520, 200],
            type: 'input_horizontal',
          },
        ],
        links: [
          {
            source: {
              nodeId: 'node_1',
              portId: 'output',
            },
            target: {
              nodeId: 'node_2',
              portId: 'input',
            },
            type: 'custom_arrow_link',
          },
          {
            source: {
              nodeId: 'node_1',
              portId: 'output',
            },
            target: {
              nodeId: 'node_3',
              portId: 'input',
            },
          },
          {
            source: {
              nodeId: 'node_3',
              portId: 'input',
            },
            target: {
              nodeId: 'node_2',
              portId: 'output',
            },
          },
        ],
      }}
      settings={{
        ports: {
          portComponents: {
            default: createPortInnerDefault({
              size: [10, 10],
              opacity: 0,
            }),
          },
        },
        links: {
          components: {
            [componentDefaultType]: createLinkDefault({
              // You can specify marker for each link state
              markerEnd: {
                default: 'default_arrow_marker', // There 6 built-in markers: 'default_{circle|arrow}_marker', 'default_{circle|arrow}_marker_selected', 'default_{circle|arrow}_marker_hovered'
                hovered: 'default_arrow_marker_hovered',
                selected: 'default_arrow_marker_selected',
              },
              // Or just using one marker for all states
              markerStart: 'default_circle_marker',
              // If you use markers it can be more attractive to disable hover effect
              enableHoverEffect: false,
            }),
            custom_arrow_link: createLinkDefault({
              markerEnd: 'custom_arrow',
              markerStart: {
                default: 'custom_circle',
                hovered: 'custom_circle_hovered',
                selected: 'custom_circle_selected',
              },
            }),
            // Link component that will be used while connecting ports
            linkCreation: createLinkDefault({
              markerEnd: 'default_arrow_marker_hovered',
              enableHoverEffect: false,
            }),
          },
          // You can define your own markers
          svgMarkers: [
            // With built-in marker creators
            createCircleMarker({
              id: 'custom_circle',
              radius: 6,
              style: {
                fill: 'grey',
              },
            }),
            createCircleMarker({
              id: 'custom_circle_selected',
              radius: 6,
              style: {
                fill: 'yellow',
              },
            }),
            createCircleMarker({
              id: 'custom_circle_hovered',
              radius: 6,
              style: {
                fill: 'yellow',
                opacity: 0.5,
              },
            }),
            createArrowMarker({
              id: 'custom_arrow',
              style: {
                fill: 'red',
              },
            }),
            // Or by providing any marker you like
            () => (
              <marker
                id='my_circle_marker'
                overflow='visible'
                markerUnits='userSpaceOnUse'
              >
                <circle r={5} style={{ fill: 'red' }} />
              </marker>
            ),
          ],
        },
      }}
    />
  );
}
