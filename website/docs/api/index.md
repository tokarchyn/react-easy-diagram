---
id: "index"
title: "react-easy-diagram"
slug: "/api/"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [Callbacks](classes/Callbacks)
- [CommandExecutor](classes/CommandExecutor)
- [DiagramSettings](classes/DiagramSettings)
- [DiagramState](classes/DiagramState)
- [DragState](classes/DragState)
- [HtmlElementRefState](classes/HtmlElementRefState)
- [LinkCreationState](classes/LinkCreationState)
- [LinkPointEndpointState](classes/LinkPointEndpointState)
- [LinkPortEndpointState](classes/LinkPortEndpointState)
- [LinkState](classes/LinkState)
- [LinksSettings](classes/LinksSettings)
- [LinksStore](classes/LinksStore)
- [NodeState](classes/NodeState)
- [NodesSettings](classes/NodesSettings)
- [NodesStore](classes/NodesStore)
- [PortState](classes/PortState)
- [PortsSettings](classes/PortsSettings)
- [RootStore](classes/RootStore)
- [SelectionState](classes/SelectionState)
- [StatefullStyling](classes/StatefullStyling)
- [UserInteractionSettings](classes/UserInteractionSettings)
- [VisualComponentState](classes/VisualComponentState)
- [VisualComponentWithDefault](classes/VisualComponentWithDefault)
- [VisualComponents](classes/VisualComponents)

## Interfaces

- [Dictionary](interfaces/Dictionary)
- [IBackgroundComponentProps](interfaces/IBackgroundComponentProps)
- [ICallbacks](interfaces/ICallbacks)
- [IComponentDefinition](interfaces/IComponentDefinition)
- [ICurvedLinkPathConstructorSettings](interfaces/ICurvedLinkPathConstructorSettings)
- [IDiagramInitState](interfaces/IDiagramInitState)
- [IDiagramInnerProps](interfaces/IDiagramInnerProps)
- [IDiagramProps](interfaces/IDiagramProps)
- [IDiagramSettings](interfaces/IDiagramSettings)
- [IDiagramState](interfaces/IDiagramState)
- [IDragHandlers](interfaces/IDragHandlers)
- [IHtmlElementRect](interfaces/IHtmlElementRect)
- [ILineStyling](interfaces/ILineStyling)
- [ILinkDefaultSettings](interfaces/ILinkDefaultSettings)
- [ILinkInteractionState](interfaces/ILinkInteractionState)
- [ILinkPath](interfaces/ILinkPath)
- [ILinkPathConstructorEndpointInfo](interfaces/ILinkPathConstructorEndpointInfo)
- [ILinkPortEndpoint](interfaces/ILinkPortEndpoint)
- [ILinkSegment](interfaces/ILinkSegment)
- [ILinkState](interfaces/ILinkState)
- [ILinkStateWithId](interfaces/ILinkStateWithId)
- [ILinkStateWithoutId](interfaces/ILinkStateWithoutId)
- [ILinkVisualComponentProps](interfaces/ILinkVisualComponentProps)
- [ILinksSettings](interfaces/ILinksSettings)
- [IMiniControlComponentProps](interfaces/IMiniControlComponentProps)
- [IMiniControlDefaultSettings](interfaces/IMiniControlDefaultSettings)
- [INodeDefaultSettings](interfaces/INodeDefaultSettings)
- [INodePortState](interfaces/INodePortState)
- [INodeState](interfaces/INodeState)
- [INodeStateWithId](interfaces/INodeStateWithId)
- [INodeStateWithoutId](interfaces/INodeStateWithoutId)
- [INodeVisualComponentProps](interfaces/INodeVisualComponentProps)
- [INodesSettings](interfaces/INodesSettings)
- [IPortInnerDefaultSettings](interfaces/IPortInnerDefaultSettings)
- [IPortProps](interfaces/IPortProps)
- [IPortState](interfaces/IPortState)
- [IPortStateWithIds](interfaces/IPortStateWithIds)
- [IPortStateWithoutIds](interfaces/IPortStateWithoutIds)
- [IPortVisualComponentProps](interfaces/IPortVisualComponentProps)
- [IPortsContainerProps](interfaces/IPortsContainerProps)
- [IPortsContainerSettings](interfaces/IPortsContainerSettings)
- [IPortsSettings](interfaces/IPortsSettings)
- [ISettings](interfaces/ISettings)
- [ISvgArrowMarkerSettings](interfaces/ISvgArrowMarkerSettings)
- [ISvgBackgroundSettings](interfaces/ISvgBackgroundSettings)
- [ISvgCircleMarkerSettings](interfaces/ISvgCircleMarkerSettings)
- [ISvgMarkerSettings](interfaces/ISvgMarkerSettings)
- [ITransformation](interfaces/ITransformation)
- [IUseLinkUserInteractionResult](interfaces/IUseLinkUserInteractionResult)
- [IUsePortUserInteractionResult](interfaces/IUsePortUserInteractionResult)
- [IUserInteraction](interfaces/IUserInteraction)
- [IUserInteractionTranslate](interfaces/IUserInteractionTranslate)
- [IUserInteractionTranslateAndZoom](interfaces/IUserInteractionTranslateAndZoom)
- [IVisualComponentProps](interfaces/IVisualComponentProps)
- [IVisualComponentsObject](interfaces/IVisualComponentsObject)
- [IZoomToFitSettings](interfaces/IZoomToFitSettings)

## Type aliases

### BackgroundSvgImageGenerator

Ƭ **BackgroundSvgImageGenerator**: (`width`: `number`, `height`: `number`) => `string`

#### Type declaration

▸ (`width`, `height`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

##### Returns

`string`

#### Defined in

[lib/src/components/background/SvgBackground.tsx:135](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/background/SvgBackground.tsx#L135)

___

### BoundingBox

Ƭ **BoundingBox**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bottomRightCorner` | [`Point`](#point) |
| `size` | [`Point`](#point) |
| `topLeftCorner` | [`Point`](#point) |

#### Defined in

[lib/src/utils/common.ts:3](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/common.ts#L3)

___

### CornerPosition

Ƭ **CornerPosition**: ``"left-top"`` \| ``"right-top"`` \| ``"right-bottom"`` \| ``"left-bottom"``

#### Defined in

[lib/src/utils/position.ts:12](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/position.ts#L12)

___

### Direction

Ƭ **Direction**: ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"``

#### Defined in

[lib/src/utils/position.ts:1](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/position.ts#L1)

___

### DirectionWithDiagonals

Ƭ **DirectionWithDiagonals**: [`Direction`](#direction) \| ``"left-down"`` \| ``"left-up"`` \| ``"right-down"`` \| ``"right-up"``

#### Defined in

[lib/src/utils/position.ts:2](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/position.ts#L2)

___

### ErrorResult

Ƭ **ErrorResult**<`TValue`\>: `TValue` extends `undefined` ? { `error?`: `string` ; `success`: ``false``  } : { `error?`: `string` ; `success`: ``false`` ; `value`: `TValue`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `undefined` |

#### Defined in

[lib/src/utils/result.ts:1](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/result.ts#L1)

___

### GestureHandlers

Ƭ **GestureHandlers**: `Partial`<`UserHandlers`<`EventTypes`\> & `NativeHandlers`<`EventTypes`\>\>

#### Defined in

[lib/src/hooks/userInteractions/common.ts:64](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/common.ts#L64)

___

### ILinkPathConstructor

Ƭ **ILinkPathConstructor**: (`source`: [`ILinkPathConstructorEndpointInfo`](interfaces/ILinkPathConstructorEndpointInfo), `target`: [`ILinkPathConstructorEndpointInfo`](interfaces/ILinkPathConstructorEndpointInfo)) => `string`

#### Type declaration

▸ (`source`, `target`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ILinkPathConstructorEndpointInfo`](interfaces/ILinkPathConstructorEndpointInfo) |
| `target` | [`ILinkPathConstructorEndpointInfo`](interfaces/ILinkPathConstructorEndpointInfo) |

##### Returns

`string`

#### Defined in

[lib/src/states/linksSettings.ts:132](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linksSettings.ts#L132)

___

### INodeDefaultSettingsWithoutPorts

Ƭ **INodeDefaultSettingsWithoutPorts**: `Omit`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"ports"``\>

#### Defined in

[lib/src/components/node/NodeDefault.tsx:83](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeDefault.tsx#L83)

___

### LinkDefaultSettingsByStates

Ƭ **LinkDefaultSettingsByStates**<`TValue`\>: { [key in LinkDefaultState]?: TValue }

#### Type parameters

| Name |
| :------ |
| `TValue` |

#### Defined in

[lib/src/components/link/LinkDefault.tsx:80](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/link/LinkDefault.tsx#L80)

___

### LinkDefaultState

Ƭ **LinkDefaultState**: ``"base"`` \| ``"hovered"`` \| ``"selected"`` \| ``"selected-hovered"``

#### Defined in

[lib/src/components/link/LinkDefault.tsx:75](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/link/LinkDefault.tsx#L75)

___

### MultipleSelectionKey

Ƭ **MultipleSelectionKey**: ``"ctrl"`` \| ``"alt"`` \| ``"meta"`` \| ``"shift"``

#### Defined in

[lib/src/states/userInteractionSettings.ts:114](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/userInteractionSettings.ts#L114)

___

### NodeDefaultSettingsByStates

Ƭ **NodeDefaultSettingsByStates**<`TValue`\>: { [key in NodeDefaultState]?: TValue }

#### Type parameters

| Name |
| :------ |
| `TValue` |

#### Defined in

[lib/src/components/node/NodeDefault.tsx:58](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeDefault.tsx#L58)

___

### NodeDefaultState

Ƭ **NodeDefaultState**: ``"base"`` \| ``"hovered"`` \| ``"selected"`` \| ``"selected-hovered"``

#### Defined in

[lib/src/components/node/NodeDefault.tsx:57](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeDefault.tsx#L57)

___

### Optional

Ƭ **Optional**<`T`, `K`\>: `Pick`<`Partial`<`T`\>, `K`\> & `Omit`<`T`, `K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

#### Defined in

[lib/src/utils/common.ts:13](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/common.ts#L13)

___

### Point

Ƭ **Point**: [`number`, `number`]

#### Defined in

[lib/src/utils/point.ts:1](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/point.ts#L1)

___

### PortInnerDefaultSettingsByStates

Ƭ **PortInnerDefaultSettingsByStates**<`TValue`\>: { [key in PortInnerDefaultState]?: TValue }

#### Type parameters

| Name |
| :------ |
| `TValue` |

#### Defined in

[lib/src/components/port/PortInnerDefault.tsx:45](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/port/PortInnerDefault.tsx#L45)

___

### PortInnerDefaultState

Ƭ **PortInnerDefaultState**: ``"base"`` \| ``"hovered"`` \| ``"dragging"`` \| ``"invalid"``

#### Defined in

[lib/src/components/port/PortInnerDefault.tsx:40](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/port/PortInnerDefault.tsx#L40)

___

### PortPosition

Ƭ **PortPosition**: typeof [`portPositionValues`](#portpositionvalues)[`number`]

#### Defined in

[lib/src/hooks/useRelativePositionStyles.ts:139](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/useRelativePositionStyles.ts#L139)

___

### Position

Ƭ **Position**: typeof [`positionValues`](#positionvalues)[`number`]

#### Defined in

[lib/src/utils/position.ts:10](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/position.ts#L10)

___

### SelectableItem

Ƭ **SelectableItem**: [`NodeState`](classes/NodeState) \| [`LinkState`](classes/LinkState)

#### Defined in

[lib/src/states/selectionState.ts:59](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/selectionState.ts#L59)

___

### SuccessOrErrorResult

Ƭ **SuccessOrErrorResult**<`TValue`, `TErrorValue`\>: [`SuccessResult`](#successresult)<`TValue`\> \| [`ErrorResult`](#errorresult)<`TErrorValue`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `undefined` |
| `TErrorValue` | `undefined` |

#### Defined in

[lib/src/utils/result.ts:9](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/result.ts#L9)

___

### SuccessResult

Ƭ **SuccessResult**<`TValue`\>: `TValue` extends `undefined` ? { `success`: ``true``  } : { `success`: ``true`` ; `value`: `TValue`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `undefined` |

#### Defined in

[lib/src/utils/result.ts:5](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/result.ts#L5)

___

### VisualComponent

Ƭ **VisualComponent**<`TComponentProps`\>: `React.FunctionComponent`<`TComponentProps`\>

#### Type parameters

| Name |
| :------ |
| `TComponentProps` |

#### Defined in

[lib/src/states/visualComponentState.ts:55](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponentState.ts#L55)

## Variables

### BackgroundWrapper

• **BackgroundWrapper**: () => `Element` & { `displayName`: `string`  }

#### Defined in

[lib/src/components/background/BackgroundWrapper.tsx:5](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/background/BackgroundWrapper.tsx#L5)

___

### Button

• **Button**: `React.FC`<`Object`\>

#### Defined in

[lib/src/components/miniControl/MiniControlDefault.tsx:110](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/miniControl/MiniControlDefault.tsx#L110)

___

### CopyIcon

• **CopyIcon**: `React.FC`

#### Defined in

[lib/src/components/Icons.tsx:11](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/Icons.tsx#L11)

___

### DISABLED\_USER\_SELECT\_CSS\_CLASS

• **DISABLED\_USER\_SELECT\_CSS\_CLASS**: ``"react_fast_diagram_disabled_user_select"``

#### Defined in

[lib/src/hooks/userInteractions/useUserAbilityToSelectSwitcher.ts:3](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/useUserAbilityToSelectSwitcher.ts#L3)

___

### DigramInner

• **DigramInner**: `FunctionComponent`<[`IDiagramInnerProps`](interfaces/IDiagramInnerProps)\>

#### Defined in

[lib/src/components/DiagramInner.tsx:15](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/DiagramInner.tsx#L15)

___

### FilterCenterFocusIcon

• **FilterCenterFocusIcon**: `React.FC`

#### Defined in

[lib/src/components/Icons.tsx:17](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/Icons.tsx#L17)

___

### LinkDefault

• **LinkDefault**: `React.FC`<[`ILinkVisualComponentProps`](interfaces/ILinkVisualComponentProps)<[`ILinkDefaultSettings`](interfaces/ILinkDefaultSettings)\>\>

#### Defined in

[lib/src/components/link/LinkDefault.tsx:7](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/link/LinkDefault.tsx#L7)

___

### LinkWrapper

• **LinkWrapper**: `FunctionComponent`<`Object`\>

#### Defined in

[lib/src/components/link/LinkWrapper.tsx:7](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/link/LinkWrapper.tsx#L7)

___

### LinksLayer

• **LinksLayer**: `FunctionComponent`<`Object`\>

#### Defined in

[lib/src/components/link/LinksLayer.tsx:7](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/link/LinksLayer.tsx#L7)

___

### MiniControlWrapper

• **MiniControlWrapper**: () => `Element` & { `displayName`: `string`  }

#### Defined in

[lib/src/components/miniControl/MiniControlWrapper.tsx:5](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/miniControl/MiniControlWrapper.tsx#L5)

___

### NodeContext

• **NodeContext**: `Context`<``null`` \| [`NodeState`](classes/NodeState)\>

#### Defined in

[lib/src/components/node/NodeWrapper.tsx:40](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeWrapper.tsx#L40)

___

### NodeLabel

• **NodeLabel**: `React.FC`<`Object`\>

#### Defined in

[lib/src/components/node/NodeLabel.tsx:5](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeLabel.tsx#L5)

___

### NodeWrapper

• **NodeWrapper**: `FunctionComponent`<`Object`\>

#### Defined in

[lib/src/components/node/NodeWrapper.tsx:11](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeWrapper.tsx#L11)

___

### NodesLayer

• **NodesLayer**: `FunctionComponent`<`Object`\>

#### Defined in

[lib/src/components/node/NodesLayer.tsx:7](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodesLayer.tsx#L7)

___

### Port

• **Port**: `React.FC`<[`IPortProps`](interfaces/IPortProps)\>

#### Defined in

[lib/src/components/port/Port.tsx:25](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/port/Port.tsx#L25)

___

### RenderedPortsComponentsContext

• **RenderedPortsComponentsContext**: `Context`<`IRenderedPorts`\>

#### Defined in

[lib/src/components/node/NodeWrapper.tsx:45](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeWrapper.tsx#L45)

___

### RootStoreContext

• **RootStoreContext**: `Context`<``null`` \| [`RootStore`](classes/RootStore)\>

#### Defined in

[lib/src/components/Diagram.tsx:10](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/Diagram.tsx#L10)

___

### RubbishBinIcon

• **RubbishBinIcon**: `React.FC`

#### Defined in

[lib/src/components/Icons.tsx:5](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/Icons.tsx#L5)

___

### className

• **className**: `string`

#### Defined in

[lib/src/components/node/NodeWrapper.tsx:48](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeWrapper.tsx#L48)

___

### cloneSelectedNodesCommand

• **cloneSelectedNodesCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore)) => `void` |

#### Defined in

[lib/src/commands/clone.ts:5](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/commands/clone.ts#L5)

___

### componentDefaultType

• **componentDefaultType**: ``"default"``

#### Defined in

[lib/src/states/visualComponents.ts:72](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponents.ts#L72)

___

### defaultLinkMainLineClasses

• **defaultLinkMainLineClasses**: [`LinkDefaultSettingsByStates`](#linkdefaultsettingsbystates)<`string`[]\>

#### Defined in

[lib/src/components/link/LinkDefault.tsx:84](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/link/LinkDefault.tsx#L84)

___

### defaultLinkSecondaryLineClasses

• **defaultLinkSecondaryLineClasses**: [`LinkDefaultSettingsByStates`](#linkdefaultsettingsbystates)<`string`[]\>

#### Defined in

[lib/src/components/link/LinkDefault.tsx:92](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/link/LinkDefault.tsx#L92)

___

### defaultNodeClasses

• **defaultNodeClasses**: [`NodeDefaultSettingsByStates`](#nodedefaultsettingsbystates)<`string`[]\>

#### Defined in

[lib/src/components/node/NodeDefault.tsx:62](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeDefault.tsx#L62)

___

### defaultPortInnerClasses

• **defaultPortInnerClasses**: [`PortInnerDefaultSettingsByStates`](#portinnerdefaultsettingsbystates)<`string`[]\>

#### Defined in

[lib/src/components/port/PortInnerDefault.tsx:55](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/port/PortInnerDefault.tsx#L55)

___

### disableNodeUserInteractionClassName

• **disableNodeUserInteractionClassName**: ``"react_easy_diagram_disable_node_user_interaction"``

#### Defined in

[lib/src/hooks/userInteractions/useNodeUserInteraction.ts:134](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/useNodeUserInteraction.ts#L134)

___

### enableNodeUserInteractionClassName

• **enableNodeUserInteractionClassName**: ``"react_easy_diagram_enable_node_user_interaction"``

#### Defined in

[lib/src/hooks/userInteractions/useNodeUserInteraction.ts:132](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/useNodeUserInteraction.ts#L132)

___

### linkCreationComponentType

• **linkCreationComponentType**: `string` = `'linkCreation'`

#### Defined in

[lib/src/states/linkCreationState.ts:153](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L153)

___

### portPositionValues

• **portPositionValues**: readonly [``"left-top"``, ``"left-center"``, ``"left-bottom"``, ``"top-left"``, ``"top-center"``, ``"top-right"``, ``"right-top"``, ``"right-center"``, ``"right-bottom"``, ``"bottom-left"``, ``"bottom-center"``, ``"bottom-right"``, ``"diagonal-left-top"``, ``"diagonal-right-top"``, ``"diagonal-right-bottom"``, ``"diagonal-left-bottom"``]

#### Defined in

[lib/src/hooks/useRelativePositionStyles.ts:117](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/useRelativePositionStyles.ts#L117)

___

### positionValues

• **positionValues**: readonly [``"left"``, ``"top"``, ``"right"``, ``"bottom"``]

#### Defined in

[lib/src/utils/position.ts:9](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/position.ts#L9)

___

### removeSelectedCommand

• **removeSelectedCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore)) => `void` |

#### Defined in

[lib/src/commands/remove.ts:4](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/commands/remove.ts#L4)

___

### removeSelectedLinksCommand

• **removeSelectedLinksCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore)) => `void` |

#### Defined in

[lib/src/commands/remove.ts:19](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/commands/remove.ts#L19)

___

### removeSelectedNodesCommand

• **removeSelectedNodesCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore)) => `void` |

#### Defined in

[lib/src/commands/remove.ts:11](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/commands/remove.ts#L11)

## Functions

### Diagram

▸ **Diagram**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IDiagramProps`](interfaces/IDiagramProps) |

#### Returns

`Element`

#### Defined in

[lib/src/components/Diagram.tsx:12](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/Diagram.tsx#L12)

___

### addPoints

▸ `Const` **addPoints**(...`points`): [`Point`](#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...points` | (`undefined` \| ``null`` \| [`Point`](#point))[] |

#### Returns

[`Point`](#point)

#### Defined in

[lib/src/utils/point.ts:17](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/point.ts#L17)

___

### arePointsEqual

▸ `Const` **arePointsEqual**(`a?`, `b?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | [`Point`](#point) |
| `b?` | [`Point`](#point) |

#### Returns

`boolean`

#### Defined in

[lib/src/utils/point.ts:38](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/point.ts#L38)

___

### areTranformationsEqual

▸ `Const` **areTranformationsEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ITransformation`](interfaces/ITransformation) |
| `b` | [`ITransformation`](interfaces/ITransformation) |

#### Returns

`boolean`

#### Defined in

[lib/src/utils/transformation.ts:18](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/transformation.ts#L18)

___

### canDragGestureBeTapInstead

▸ **canDragGestureBeTapInstead**(`movement`): `boolean`

Does gesture can be potentially a tap/click event?
Drag gesture will be tap/click gesture on mouse or touch release only when the drag displacement is inferior to 3 pixels.
See useGestures documetation for more information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `movement` | `Vector2` | state value of gesture, represent gesture offset |

#### Returns

`boolean`

#### Defined in

[lib/src/hooks/userInteractions/common.ts:45](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/common.ts#L45)

___

### clampValue

▸ **clampValue**(`value`, `interval`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `interval` | [`Point`](#point) |

#### Returns

`number`

#### Defined in

[lib/src/utils/common.ts:27](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/common.ts#L27)

___

### combineArrays

▸ **combineArrays**<`TValue`\>(...`arrays`): `TValue`[]

#### Type parameters

| Name |
| :------ |
| `TValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...arrays` | (`undefined` \| `TValue`[])[] |

#### Returns

`TValue`[]

#### Defined in

[lib/src/utils/common.ts:35](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/common.ts#L35)

___

### commandC

▸ **commandC**(`startPoint`, `control1`, `control2`, `endPoint`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `startPoint` | [`Point`](#point) |
| `control1` | [`Point`](#point) |
| `control2` | [`Point`](#point) |
| `endPoint` | [`Point`](#point) |

#### Returns

`string`

#### Defined in

[lib/src/linkConstructors/utils.ts:48](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/linkConstructors/utils.ts#L48)

___

### commandM

▸ **commandM**(`point`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](#point) |

#### Returns

`string`

#### Defined in

[lib/src/linkConstructors/utils.ts:44](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/linkConstructors/utils.ts#L44)

___

### coordinateFromPoint

▸ **coordinateFromPoint**(`point`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](#point) |

#### Returns

`string`

#### Defined in

[lib/src/linkConstructors/utils.ts:60](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/linkConstructors/utils.ts#L60)

___

### createArrowMarker

▸ **createArrowMarker**(`settings`): `React.FunctionComponent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`ISvgArrowMarkerSettings`](interfaces/ISvgArrowMarkerSettings) |

#### Returns

`React.FunctionComponent`

#### Defined in

[lib/src/components/link/Markers.tsx:73](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/link/Markers.tsx#L73)

___

### createCircleMarker

▸ **createCircleMarker**(`settings`): `React.FunctionComponent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`ISvgCircleMarkerSettings`](interfaces/ISvgCircleMarkerSettings) |

#### Returns

`React.FunctionComponent`

#### Defined in

[lib/src/components/link/Markers.tsx:33](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/link/Markers.tsx#L33)

___

### createCrossesImageGenerator

▸ `Const` **createCrossesImageGenerator**(`sizeMultiplicator`, `color`, `opacity`): [`BackgroundSvgImageGenerator`](#backgroundsvgimagegenerator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sizeMultiplicator` | `number` |
| `color` | `string` |
| `opacity` | `number` |

#### Returns

[`BackgroundSvgImageGenerator`](#backgroundsvgimagegenerator)

#### Defined in

[lib/src/components/background/SvgBackground.tsx:106](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/background/SvgBackground.tsx#L106)

___

### createCurvedLinkPathConstructor

▸ **createCurvedLinkPathConstructor**(`settings?`): [`ILinkPathConstructor`](#ilinkpathconstructor)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Partial`<[`ICurvedLinkPathConstructorSettings`](interfaces/ICurvedLinkPathConstructorSettings)\> |

#### Returns

[`ILinkPathConstructor`](#ilinkpathconstructor)

#### Defined in

[lib/src/linkConstructors/curved.ts:48](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/linkConstructors/curved.ts#L48)

___

### createDefaultMiniControl

▸ `Const` **createDefaultMiniControl**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`IMiniControlComponentProps`](interfaces/IMiniControlComponentProps)<`any`\>, [`IMiniControlDefaultSettings`](interfaces/IMiniControlDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Partial`<[`IMiniControlDefaultSettings`](interfaces/IMiniControlDefaultSettings)\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`IMiniControlComponentProps`](interfaces/IMiniControlComponentProps)<`any`\>, [`IMiniControlDefaultSettings`](interfaces/IMiniControlDefaultSettings)\>

#### Defined in

[lib/src/components/miniControl/MiniControlDefault.tsx:127](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/miniControl/MiniControlDefault.tsx#L127)

___

### createDotsImageGenerator

▸ `Const` **createDotsImageGenerator**(`sizeMultiplicator`, `dotsColor`, `dotsOpacity`, `dotsRadius`): [`BackgroundSvgImageGenerator`](#backgroundsvgimagegenerator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sizeMultiplicator` | `number` |
| `dotsColor` | `string` |
| `dotsOpacity` | `number` |
| `dotsRadius` | `number` |

#### Returns

[`BackgroundSvgImageGenerator`](#backgroundsvgimagegenerator)

#### Defined in

[lib/src/components/background/SvgBackground.tsx:76](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/background/SvgBackground.tsx#L76)

___

### createFullPortId

▸ **createFullPortId**(`nodeId`, `portId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |
| `portId` | `string` |

#### Returns

`string`

#### Defined in

[lib/src/states/portState.ts:288](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L288)

___

### createGridImageGenerator

▸ `Const` **createGridImageGenerator**(`sizeMultiplicator`, `linesColor`, `linesOpacity`): [`BackgroundSvgImageGenerator`](#backgroundsvgimagegenerator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sizeMultiplicator` | `number` |
| `linesColor` | `string` |
| `linesOpacity` | `number` |

#### Returns

[`BackgroundSvgImageGenerator`](#backgroundsvgimagegenerator)

#### Defined in

[lib/src/components/background/SvgBackground.tsx:46](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/background/SvgBackground.tsx#L46)

___

### createInputHorizontalNode

▸ `Const` **createInputHorizontalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Defined in

[lib/src/components/node/NodeDefault.tsx:110](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeDefault.tsx#L110)

___

### createInputOutputHorizontalNode

▸ `Const` **createInputOutputHorizontalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Defined in

[lib/src/components/node/NodeDefault.tsx:88](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeDefault.tsx#L88)

___

### createInputOutputVerticalNode

▸ `Const` **createInputOutputVerticalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Defined in

[lib/src/components/node/NodeDefault.tsx:99](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeDefault.tsx#L99)

___

### createInputVerticalNode

▸ `Const` **createInputVerticalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Defined in

[lib/src/components/node/NodeDefault.tsx:118](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeDefault.tsx#L118)

___

### createLinkDefault

▸ **createLinkDefault**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`ILinkVisualComponentProps`](interfaces/ILinkVisualComponentProps), `Partial`<[`ILinkDefaultSettings`](interfaces/ILinkDefaultSettings)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`ILinkDefaultSettings`](interfaces/ILinkDefaultSettings) |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`ILinkVisualComponentProps`](interfaces/ILinkVisualComponentProps), `Partial`<[`ILinkDefaultSettings`](interfaces/ILinkDefaultSettings)\>\>

#### Defined in

[lib/src/components/link/LinkDefault.tsx:109](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/link/LinkDefault.tsx#L109)

___

### createLinkPath

▸ **createLinkPath**(`rootStore`, `source`, `target`): [`ILinkPath`](interfaces/ILinkPath) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](classes/RootStore) |
| `source` | [`LinkPortEndpointState`](classes/LinkPortEndpointState) |
| `target` | [`LinkPortEndpointState`](classes/LinkPortEndpointState) \| [`LinkPointEndpointState`](classes/LinkPointEndpointState) |

#### Returns

[`ILinkPath`](interfaces/ILinkPath) \| `undefined`

#### Defined in

[lib/src/states/linkState.ts:143](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L143)

___

### createNode

▸ **createNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`INodeDefaultSettings`](interfaces/INodeDefaultSettings) |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Defined in

[lib/src/components/node/NodeDefault.tsx:68](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeDefault.tsx#L68)

___

### createOutputHorizontalNode

▸ `Const` **createOutputHorizontalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Defined in

[lib/src/components/node/NodeDefault.tsx:126](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeDefault.tsx#L126)

___

### createOutputVerticalNode

▸ `Const` **createOutputVerticalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Defined in

[lib/src/components/node/NodeDefault.tsx:134](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeDefault.tsx#L134)

___

### createPortInnerDefault

▸ **createPortInnerDefault**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`IPortVisualComponentProps`](interfaces/IPortVisualComponentProps), [`IPortInnerDefaultSettings`](interfaces/IPortInnerDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`IPortInnerDefaultSettings`](interfaces/IPortInnerDefaultSettings) |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`IPortVisualComponentProps`](interfaces/IPortVisualComponentProps), [`IPortInnerDefaultSettings`](interfaces/IPortInnerDefaultSettings)\>

#### Defined in

[lib/src/components/port/PortInnerDefault.tsx:64](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/port/PortInnerDefault.tsx#L64)

___

### createPortsContainer

▸ **createPortsContainer**(`settings?`): [`VisualComponent`](#visualcomponent)<[`IPortsContainerProps`](interfaces/IPortsContainerProps)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Partial`<[`IPortsContainerSettings`](interfaces/IPortsContainerSettings)\> |

#### Returns

[`VisualComponent`](#visualcomponent)<[`IPortsContainerProps`](interfaces/IPortsContainerProps)\>

#### Defined in

[lib/src/components/port/PortsContainer.tsx:92](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/port/PortsContainer.tsx#L92)

___

### createStarNode

▸ `Const` **createStarNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Defined in

[lib/src/components/node/NodeDefault.tsx:142](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/node/NodeDefault.tsx#L142)

___

### createStraightLinkPathConstructor

▸ **createStraightLinkPathConstructor**(): [`ILinkPathConstructor`](#ilinkpathconstructor)

#### Returns

[`ILinkPathConstructor`](#ilinkpathconstructor)

#### Defined in

[lib/src/linkConstructors/straight.ts:12](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/linkConstructors/straight.ts#L12)

___

### createSvgBackground

▸ `Const` **createSvgBackground**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`IBackgroundComponentProps`](interfaces/IBackgroundComponentProps)<`any`\>, [`ISvgBackgroundSettings`](interfaces/ISvgBackgroundSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Partial`<[`ISvgBackgroundSettings`](interfaces/ISvgBackgroundSettings)\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`IBackgroundComponentProps`](interfaces/IBackgroundComponentProps)<`any`\>, [`ISvgBackgroundSettings`](interfaces/ISvgBackgroundSettings)\>

#### Defined in

[lib/src/components/background/SvgBackground.tsx:118](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/components/background/SvgBackground.tsx#L118)

___

### createVector

▸ **createVector**(`point1`, `length`, `angleInRadian`): [`Point`](#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point1` | [`Point`](#point) |
| `length` | `number` |
| `angleInRadian` | `undefined` \| `number` |

#### Returns

[`Point`](#point)

#### Defined in

[lib/src/linkConstructors/utils.ts:32](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/linkConstructors/utils.ts#L32)

___

### deepCopy

▸ **deepCopy**<`TValue`\>(`value`): `TValue`

#### Type parameters

| Name |
| :------ |
| `TValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TValue` |

#### Returns

`TValue`

#### Defined in

[lib/src/utils/common.ts:31](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/common.ts#L31)

___

### distanceBetweenPoints

▸ `Const` **distanceBetweenPoints**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Point`](#point) |
| `b` | [`Point`](#point) |

#### Returns

`number`

#### Defined in

[lib/src/utils/point.ts:11](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/point.ts#L11)

___

### errorResult

▸ **errorResult**(`error?`): [`ErrorResult`](#errorresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `string` |

#### Returns

[`ErrorResult`](#errorresult)

#### Defined in

[lib/src/utils/result.ts:35](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/result.ts#L35)

___

### errorValueResult

▸ **errorValueResult**<`TErrorValue`\>(`value`, `error?`): [`ErrorResult`](#errorresult)<`TErrorValue`\>

#### Type parameters

| Name |
| :------ |
| `TErrorValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TErrorValue` |
| `error?` | `string` |

#### Returns

[`ErrorResult`](#errorresult)<`TErrorValue`\>

#### Defined in

[lib/src/utils/result.ts:39](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/result.ts#L39)

___

### eventPathContainsClass

▸ `Const` **eventPathContainsClass**(`event`, `className`, `exceptClassName?`): `boolean`

Check each element starting from the first one in composedPath() (see https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath),
if exceptClassName is the first class found -> return false,
if className is the first class found -> return true,
if neither exceptClassName nor className were found -> return false

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent` \| `PointerEvent`<`Element`\> |
| `className` | `string` |
| `exceptClassName?` | `string` |

#### Returns

`boolean`

#### Defined in

[lib/src/hooks/userInteractions/common.ts:15](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/common.ts#L15)

___

### generateTransform

▸ `Const` **generateTransform**(`translate`, `scale?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `translate` | [`Point`](#point) |
| `scale?` | `number` |

#### Returns

`string`

#### Defined in

[lib/src/utils/transformation.ts:3](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/transformation.ts#L3)

___

### getDegree

▸ **getDegree**(`dir`): `number` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `undefined` \| ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"right-down"`` \| ``"right-up"`` |

#### Returns

`number` \| `undefined`

#### Defined in

[lib/src/linkConstructors/utils.ts:4](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/linkConstructors/utils.ts#L4)

___

### getRadian

▸ **getRadian**(`dir`): `number` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `undefined` \| ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"right-down"`` \| ``"right-up"`` |

#### Returns

`number` \| `undefined`

#### Defined in

[lib/src/linkConstructors/utils.ts:27](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/linkConstructors/utils.ts#L27)

___

### guid

▸ **guid**(): `string`

#### Returns

`string`

#### Defined in

[lib/src/utils/guid.ts:7](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/guid.ts#L7)

___

### guidForcedUniqueness

▸ **guidForcedUniqueness**(`checkExistence`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `checkExistence` | (`id`: `string`) => `boolean` |

#### Returns

`string`

#### Defined in

[lib/src/utils/guid.ts:25](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/guid.ts#L25)

___

### isBoolean

▸ **isBoolean**(`value`): value is boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is boolean

#### Defined in

[lib/src/utils/common.ts:23](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/common.ts#L23)

___

### isError

▸ **isError**<`TValue`, `TErrorValue`\>(`result`): result is ErrorResult<TErrorValue\>

#### Type parameters

| Name |
| :------ |
| `TValue` |
| `TErrorValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`SuccessOrErrorResult`](#successorerrorresult)<`TValue`, `TErrorValue`\> |

#### Returns

result is ErrorResult<TErrorValue\>

#### Defined in

[lib/src/utils/result.ts:19](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/result.ts#L19)

___

### isNumber

▸ **isNumber**(`value`): value is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is number

#### Defined in

[lib/src/utils/common.ts:15](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/common.ts#L15)

___

### isObject

▸ **isObject**(`value`): value is object

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is object

#### Defined in

[lib/src/utils/common.ts:19](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/common.ts#L19)

___

### isPoint

▸ **isPoint**(`value`): value is Point

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Point

#### Defined in

[lib/src/utils/point.ts:3](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/point.ts#L3)

___

### isSuccess

▸ **isSuccess**<`TValue`, `TErrorValue`\>(`result`): result is SuccessResult<TValue\>

#### Type parameters

| Name |
| :------ |
| `TValue` |
| `TErrorValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | [`SuccessOrErrorResult`](#successorerrorresult)<`TValue`, `TErrorValue`\> |

#### Returns

result is SuccessResult<TValue\>

#### Defined in

[lib/src/utils/result.ts:13](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/result.ts#L13)

___

### linkPortEndpointsEquals

▸ **linkPortEndpointsEquals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ILinkPortEndpoint`](interfaces/ILinkPortEndpoint) |
| `b` | [`ILinkPortEndpoint`](interfaces/ILinkPortEndpoint) |

#### Returns

`boolean`

#### Defined in

[lib/src/states/linkPortEndpointState.ts:68](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkPortEndpointState.ts#L68)

___

### multiplyPoint

▸ `Const` **multiplyPoint**(`a`, `m`): [`Point`](#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Point`](#point) |
| `m` | `number` |

#### Returns

[`Point`](#point)

#### Defined in

[lib/src/utils/point.ts:33](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/point.ts#L33)

___

### roundPoint

▸ `Const` **roundPoint**(`point`): [`Point`](#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](#point) |

#### Returns

[`Point`](#point)

#### Defined in

[lib/src/utils/point.ts:14](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/point.ts#L14)

___

### subtractPoints

▸ `Const` **subtractPoints**(...`points`): [`Point`](#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...points` | [`Point`](#point)[] |

#### Returns

[`Point`](#point)

#### Defined in

[lib/src/utils/point.ts:28](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/point.ts#L28)

___

### successResult

▸ **successResult**(): [`SuccessResult`](#successresult)

#### Returns

[`SuccessResult`](#successresult)

#### Defined in

[lib/src/utils/result.ts:25](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/result.ts#L25)

___

### successValueResult

▸ **successValueResult**<`TValue`\>(`value`): [`SuccessResult`](#successresult)<`TValue`\>

#### Type parameters

| Name |
| :------ |
| `TValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `TValue` |

#### Returns

[`SuccessResult`](#successresult)<`TValue`\>

#### Defined in

[lib/src/utils/result.ts:29](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/utils/result.ts#L29)

___

### useCursor

▸ **useCursor**(`active`, `cursor`, `ref`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `cursor` | `undefined` \| `string` & {} \| ``"-moz-initial"`` \| ``"inherit"`` \| ``"initial"`` \| ``"revert"`` \| ``"unset"`` \| ``"-moz-grab"`` \| ``"-webkit-grab"`` \| ``"alias"`` \| ``"all-scroll"`` \| ``"auto"`` \| ``"cell"`` \| ``"col-resize"`` \| ``"context-menu"`` \| ``"copy"`` \| ``"crosshair"`` \| ``"default"`` \| ``"e-resize"`` \| ``"ew-resize"`` \| ``"grab"`` \| ``"grabbing"`` \| ``"help"`` \| ``"move"`` \| ``"n-resize"`` \| ``"ne-resize"`` \| ``"nesw-resize"`` \| ``"no-drop"`` \| ``"none"`` \| ``"not-allowed"`` \| ``"ns-resize"`` \| ``"nw-resize"`` \| ``"nwse-resize"`` \| ``"pointer"`` \| ``"progress"`` \| ``"row-resize"`` \| ``"s-resize"`` \| ``"se-resize"`` \| ``"sw-resize"`` \| ``"text"`` \| ``"vertical-text"`` \| ``"w-resize"`` \| ``"wait"`` \| ``"zoom-in"`` \| ``"zoom-out"`` |
| `ref` | ``null`` \| `HTMLDivElement` |

#### Returns

`void`

#### Defined in

[lib/src/hooks/userInteractions/useCursor.ts:4](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/useCursor.ts#L4)

___

### useDiagram

▸ `Const` **useDiagram**(`initState?`, `settings?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initState?` | [`IDiagramInitState`](interfaces/IDiagramInitState) |
| `settings?` | [`ISettings`](interfaces/ISettings) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `Diagram` | () => `Element` |
| `storeRef` | `MutableRefObject`<``null`` \| [`RootStore`](classes/RootStore)\> |

#### Defined in

[lib/src/hooks/useDiagram.tsx:8](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/useDiagram.tsx#L8)

___

### useDiagramCursor

▸ **useDiagramCursor**(`active`, `cursor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `cursor` | `undefined` \| `string` & {} \| ``"-moz-initial"`` \| ``"inherit"`` \| ``"initial"`` \| ``"revert"`` \| ``"unset"`` \| ``"-moz-grab"`` \| ``"-webkit-grab"`` \| ``"alias"`` \| ``"all-scroll"`` \| ``"auto"`` \| ``"cell"`` \| ``"col-resize"`` \| ``"context-menu"`` \| ``"copy"`` \| ``"crosshair"`` \| ``"default"`` \| ``"e-resize"`` \| ``"ew-resize"`` \| ``"grab"`` \| ``"grabbing"`` \| ``"help"`` \| ``"move"`` \| ``"n-resize"`` \| ``"ne-resize"`` \| ``"nesw-resize"`` \| ``"no-drop"`` \| ``"none"`` \| ``"not-allowed"`` \| ``"ns-resize"`` \| ``"nw-resize"`` \| ``"nwse-resize"`` \| ``"pointer"`` \| ``"progress"`` \| ``"row-resize"`` \| ``"s-resize"`` \| ``"se-resize"`` \| ``"sw-resize"`` \| ``"text"`` \| ``"vertical-text"`` \| ``"w-resize"`` \| ``"wait"`` \| ``"zoom-in"`` \| ``"zoom-out"`` |

#### Returns

`void`

#### Defined in

[lib/src/hooks/userInteractions/useCursor.ts:25](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/useCursor.ts#L25)

___

### useDiagramDragHandlers

▸ **useDiagramDragHandlers**(`cancelEvent?`): [`IDragHandlers`](interfaces/IDragHandlers)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancelEvent?` | (`event`: `PointerEvent` \| `PointerEvent`<`Element`\>) => `boolean` |

#### Returns

[`IDragHandlers`](interfaces/IDragHandlers)

#### Defined in

[lib/src/hooks/userInteractions/useDiagramDragHandlers.ts:19](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/useDiagramDragHandlers.ts#L19)

___

### useDiagramPinchHandlers

▸ **useDiagramPinchHandlers**(`cancel`): `IPinchHandlers`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancel` | (`event`: `PinchEvent`) => `boolean` |

#### Returns

`IPinchHandlers`

#### Defined in

[lib/src/hooks/userInteractions/useDiagramPinchHandlers.ts:23](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/useDiagramPinchHandlers.ts#L23)

___

### useDiagramUserInteraction

▸ `Const` **useDiagramUserInteraction**(): `void`

#### Returns

`void`

#### Defined in

[lib/src/hooks/userInteractions/useDiagramUserInteraction.ts:9](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/useDiagramUserInteraction.ts#L9)

___

### useDiagramWheelHandler

▸ **useDiagramWheelHandler**(`state`): `IWheelHandler`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`IUserInteractionTranslateAndZoom`](interfaces/IUserInteractionTranslateAndZoom) |

#### Returns

`IWheelHandler`

#### Defined in

[lib/src/hooks/userInteractions/useDiagramWheelHandler.ts:7](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/useDiagramWheelHandler.ts#L7)

___

### useLinkUserInteraction

▸ `Const` **useLinkUserInteraction**(`linkState`): [`IUseLinkUserInteractionResult`](interfaces/IUseLinkUserInteractionResult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkState` | [`LinkState`](classes/LinkState) \| [`LinkCreationState`](classes/LinkCreationState) |

#### Returns

[`IUseLinkUserInteractionResult`](interfaces/IUseLinkUserInteractionResult)

#### Defined in

[lib/src/hooks/userInteractions/useLinkUserInteraction.ts:11](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/useLinkUserInteraction.ts#L11)

___

### useNodeUserInteraction

▸ `Const` **useNodeUserInteraction**(`nodeState`): `RefObject`<`HTMLElement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeState` | [`NodeState`](classes/NodeState) |

#### Returns

`RefObject`<`HTMLElement`\>

#### Defined in

[lib/src/hooks/userInteractions/useNodeUserInteraction.ts:14](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/useNodeUserInteraction.ts#L14)

___

### useNotifyRef

▸ `Const` **useNotifyRef**<`TValue`\>(`init`): `MutableRefObject`<`TValue`\>

#### Type parameters

| Name |
| :------ |
| `TValue` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `TValue` |

#### Returns

`MutableRefObject`<`TValue`\>

#### Defined in

[lib/src/hooks/useNotifyRef.ts:3](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/useNotifyRef.ts#L3)

___

### usePortUserInteraction

▸ `Const` **usePortUserInteraction**(`portState?`): [`IUsePortUserInteractionResult`](interfaces/IUsePortUserInteractionResult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portState?` | [`PortState`](classes/PortState) |

#### Returns

[`IUsePortUserInteractionResult`](interfaces/IUsePortUserInteractionResult)

#### Defined in

[lib/src/hooks/userInteractions/usePortUserInteraction.ts:11](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/usePortUserInteraction.ts#L11)

___

### useRelativePositionStyles

▸ `Const` **useRelativePositionStyles**(`position?`, `offsetFromParentCenter?`, `offsetFromOrigin?`, `usePortCenterPivot?`): `Pick`<`Partial`<`CSSProperties`\>, ``"left"`` \| ``"top"`` \| ``"right"`` \| ``"bottom"`` \| ``"position"`` \| ``"width"`` \| ``"height"`` \| ``"transform"``\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `position?` | ``"left-top"`` \| ``"right-top"`` \| ``"right-bottom"`` \| ``"left-bottom"`` \| ``"left-center"`` \| ``"top-left"`` \| ``"top-center"`` \| ``"top-right"`` \| ``"right-center"`` \| ``"bottom-left"`` \| ``"bottom-center"`` \| ``"bottom-right"`` \| ``"diagonal-left-top"`` \| ``"diagonal-right-top"`` \| ``"diagonal-right-bottom"`` \| ``"diagonal-left-bottom"`` | `undefined` |
| `offsetFromParentCenter?` | `number` | `undefined` |
| `offsetFromOrigin?` | [`Point`](#point) | `undefined` |
| `usePortCenterPivot` | `boolean` | `true` |

#### Returns

`Pick`<`Partial`<`CSSProperties`\>, ``"left"`` \| ``"top"`` \| ``"right"`` \| ``"bottom"`` \| ``"position"`` \| ``"width"`` \| ``"height"`` \| ``"transform"``\>

#### Defined in

[lib/src/hooks/useRelativePositionStyles.ts:5](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/useRelativePositionStyles.ts#L5)

___

### useRootStore

▸ `Const` **useRootStore**(): [`RootStore`](classes/RootStore)

#### Returns

[`RootStore`](classes/RootStore)

#### Defined in

[lib/src/hooks/useRootStore.ts:5](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/useRootStore.ts#L5)

___

### useUpdateOrCreatePortState

▸ **useUpdateOrCreatePortState**(`port`): [`PortState`](classes/PortState) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `IPortStateWithNodeId` |

#### Returns

[`PortState`](classes/PortState) \| `undefined`

#### Defined in

[lib/src/hooks/useUpdateOrCreatePortState.ts:10](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/useUpdateOrCreatePortState.ts#L10)

___

### useUserAbilityToSelectSwitcher

▸ **useUserAbilityToSelectSwitcher**(`active`, `elementToSwitchUserSelectOn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `elementToSwitchUserSelectOn` | `undefined` \| `HTMLElement` |

#### Returns

`void`

#### Defined in

[lib/src/hooks/userInteractions/useUserAbilityToSelectSwitcher.ts:6](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/hooks/userInteractions/useUserAbilityToSelectSwitcher.ts#L6)
