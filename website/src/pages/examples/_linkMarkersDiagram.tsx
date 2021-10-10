import React from 'react';
import {
  COMPONENT_DEFAULT_TYPE,
  createLinkDefault,
  createPortInnerDefault,
  Diagram,
  createArrowMarker,
  createCircleMarker,
  LINK_CREATION_COMPONENT_TYPE
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
          components: {
            default: createPortInnerDefault({
              style: {
                base: {
                  opacity: 0,
                }
              }
            }),
          },
        },
        links: {
          components: {
            [COMPONENT_DEFAULT_TYPE]: createLinkDefault({
              mainLine:{
                style: {
                  base: {
                    markerEnd: 'url(#default_arrow_marker)', // There 6 built-in markers: 'default_{circle|arrow}_marker', 'default_{circle|arrow}_marker_selected', 'default_{circle|arrow}_marker_hovered'
                    markerStart: 'url(#default_circle_marker)'
                  },
                  hovered: {
                    markerEnd: 'url(#default_arrow_marker_hovered)'
                  },
                  selected: {
                    markerEnd: 'url(#default_arrow_marker_selected)'
                  }
                }
              },
              // If you use markers it can be more attractive to disable hover effect, but hidden secondary line
              secondaryLine: {
                style: {
                  base: {
                    opacity: 0
                  }
                }
              }
            }),
            custom_arrow_link: createLinkDefault({
              mainLine:{
                style: {
                  base: {
                    stroke: 'red',
                    markerEnd: 'url(#custom_arrow)', // There 6 built-in markers: 'default_{circle|arrow}_marker', 'default_{circle|arrow}_marker_selected', 'default_{circle|arrow}_marker_hovered'
                    markerStart: 'url(#custom_circle)'
                  },
                  hovered: {
                    markerStart: 'url(#custom_circle_hovered)'
                  },
                  selected: {
                    markerStart: 'url(#custom_circle_selected)'
                  }
                }
              },
            }),
            // Link component that will be used while connecting ports
            [LINK_CREATION_COMPONENT_TYPE]: createLinkDefault({
              mainLine:{
                style: {
                  base: {
                    stroke: 'red',
                    markerEnd: 'url(#default_arrow_marker_hovered)',
                  },
                }
              },
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
