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

___

### BoundingBox

Ƭ **BoundingBox**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bottomRightCorner` | [`Point`](#point) |
| `size` | [`Point`](#point) |
| `topLeftCorner` | [`Point`](#point) |

___

### CornerPosition

Ƭ **CornerPosition**: ``"left-top"`` \| ``"right-top"`` \| ``"right-bottom"`` \| ``"left-bottom"``

___

### Direction

Ƭ **Direction**: ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"``

___

### DirectionWithDiagonals

Ƭ **DirectionWithDiagonals**: [`Direction`](#direction) \| ``"left-down"`` \| ``"left-up"`` \| ``"right-down"`` \| ``"right-up"``

___

### ErrorResult

Ƭ **ErrorResult**<`TValue`\>: `TValue` extends `undefined` ? { `error?`: `string` ; `success`: ``false``  } : { `error?`: `string` ; `success`: ``false`` ; `value`: `TValue`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `undefined` |

___

### GestureHandlers

Ƭ **GestureHandlers**: `Partial`<`UserHandlers`<`EventTypes`\> & `NativeHandlers`<`EventTypes`\>\>

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

___

### INodeDefaultSettingsWithoutPorts

Ƭ **INodeDefaultSettingsWithoutPorts**: `Omit`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"ports"``\>

___

### LinkDefaultSettingsByStates

Ƭ **LinkDefaultSettingsByStates**<`TValue`\>: { [key in LinkDefaultState]?: TValue }

#### Type parameters

| Name |
| :------ |
| `TValue` |

___

### LinkDefaultState

Ƭ **LinkDefaultState**: ``"base"`` \| ``"hovered"`` \| ``"selected"`` \| ``"selected-hovered"``

___

### MultipleSelectionKey

Ƭ **MultipleSelectionKey**: ``"ctrl"`` \| ``"alt"`` \| ``"meta"`` \| ``"shift"``

___

### NodeDefaultSettingsByStates

Ƭ **NodeDefaultSettingsByStates**<`TValue`\>: { [key in NodeDefaultState]?: TValue }

#### Type parameters

| Name |
| :------ |
| `TValue` |

___

### NodeDefaultState

Ƭ **NodeDefaultState**: ``"base"`` \| ``"hovered"`` \| ``"selected"`` \| ``"selected-hovered"``

___

### Optional

Ƭ **Optional**<`T`, `K`\>: `Pick`<`Partial`<`T`\>, `K`\> & `Omit`<`T`, `K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` |

___

### Point

Ƭ **Point**: [`number`, `number`]

___

### PortInnerDefaultSettingsByStates

Ƭ **PortInnerDefaultSettingsByStates**<`TValue`\>: { [key in PortInnerDefaultState]?: TValue }

#### Type parameters

| Name |
| :------ |
| `TValue` |

___

### PortInnerDefaultState

Ƭ **PortInnerDefaultState**: ``"base"`` \| ``"hovered"`` \| ``"dragging"`` \| ``"invalid"``

___

### PortPosition

Ƭ **PortPosition**: typeof [`portPositionValues`](#portpositionvalues)[`number`]

___

### Position

Ƭ **Position**: typeof [`positionValues`](#positionvalues)[`number`]

___

### SelectableItem

Ƭ **SelectableItem**: [`NodeState`](classes/NodeState) \| [`LinkState`](classes/LinkState)

___

### SuccessOrErrorResult

Ƭ **SuccessOrErrorResult**<`TValue`, `TErrorValue`\>: [`SuccessResult`](#successresult)<`TValue`\> \| [`ErrorResult`](#errorresult)<`TErrorValue`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `undefined` |
| `TErrorValue` | `undefined` |

___

### SuccessResult

Ƭ **SuccessResult**<`TValue`\>: `TValue` extends `undefined` ? { `success`: ``true``  } : { `success`: ``true`` ; `value`: `TValue`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TValue` | `undefined` |

___

### VisualComponent

Ƭ **VisualComponent**<`TComponentProps`\>: `React.FunctionComponent`<`TComponentProps`\>

#### Type parameters

| Name |
| :------ |
| `TComponentProps` |

## Variables

### BackgroundWrapper

• **BackgroundWrapper**: () => `Element` & { `displayName`: `string`  }

___

### Button

• **Button**: `React.FC`<`Object`\>

___

### COMPONENT\_DEFAULT\_TYPE

• **COMPONENT\_DEFAULT\_TYPE**: ``"default"``

___

### CopyIcon

• **CopyIcon**: `React.FC`

___

### DISABLED\_USER\_SELECT\_CSS\_CLASS

• **DISABLED\_USER\_SELECT\_CSS\_CLASS**: ``"react_fast_diagram_disabled_user_select"``

___

### DISABLE\_NODE\_USER\_INTERACTION\_CLASS

• **DISABLE\_NODE\_USER\_INTERACTION\_CLASS**: ``"react_easy_diagram_disable_node_user_interaction"``

___

### DigramInner

• **DigramInner**: `FunctionComponent`<[`IDiagramInnerProps`](interfaces/IDiagramInnerProps)\>

___

### ENABLE\_NODE\_USER\_INTERACTION\_CLASS

• **ENABLE\_NODE\_USER\_INTERACTION\_CLASS**: ``"react_easy_diagram_enable_node_user_interaction"``

___

### FilterCenterFocusIcon

• **FilterCenterFocusIcon**: `React.FC`

___

### LINK\_CREATION\_COMPONENT\_TYPE

• **LINK\_CREATION\_COMPONENT\_TYPE**: `string` = `'linkCreation'`

___

### LinkDefault

• **LinkDefault**: `React.FC`<[`ILinkVisualComponentProps`](interfaces/ILinkVisualComponentProps)<[`ILinkDefaultSettings`](interfaces/ILinkDefaultSettings)\>\>

___

### LinkWrapper

• **LinkWrapper**: `FunctionComponent`<`Object`\>

___

### LinksLayer

• **LinksLayer**: `FunctionComponent`<`Object`\>

___

### MiniControlWrapper

• **MiniControlWrapper**: () => `Element` & { `displayName`: `string`  }

___

### NodeContext

• **NodeContext**: `Context`<``null`` \| [`NodeState`](classes/NodeState)\>

___

### NodeLabel

• **NodeLabel**: `React.FC`<`Object`\>

___

### NodeWrapper

• **NodeWrapper**: `FunctionComponent`<`Object`\>

___

### NodesLayer

• **NodesLayer**: `FunctionComponent`<`Object`\>

___

### Port

• **Port**: `React.FC`<[`IPortProps`](interfaces/IPortProps)\>

___

### RenderedPortsComponentsContext

• **RenderedPortsComponentsContext**: `Context`<`IRenderedPorts`\>

___

### RootStoreContext

• **RootStoreContext**: `Context`<``null`` \| [`RootStore`](classes/RootStore)\>

___

### RubbishBinIcon

• **RubbishBinIcon**: `React.FC`

___

### className

• **className**: `string`

___

### cloneSelectedNodesCommand

• **cloneSelectedNodesCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore)) => `void` |

___

### defaultLinkMainLineClasses

• **defaultLinkMainLineClasses**: [`LinkDefaultSettingsByStates`](#linkdefaultsettingsbystates)<`string`[]\>

___

### defaultLinkSecondaryLineClasses

• **defaultLinkSecondaryLineClasses**: [`LinkDefaultSettingsByStates`](#linkdefaultsettingsbystates)<`string`[]\>

___

### defaultNodeClasses

• **defaultNodeClasses**: [`NodeDefaultSettingsByStates`](#nodedefaultsettingsbystates)<`string`[]\>

___

### defaultPortInnerClasses

• **defaultPortInnerClasses**: [`PortInnerDefaultSettingsByStates`](#portinnerdefaultsettingsbystates)<`string`[]\>

___

### portPositionValues

• **portPositionValues**: readonly [``"left-top"``, ``"left-center"``, ``"left-bottom"``, ``"top-left"``, ``"top-center"``, ``"top-right"``, ``"right-top"``, ``"right-center"``, ``"right-bottom"``, ``"bottom-left"``, ``"bottom-center"``, ``"bottom-right"``, ``"diagonal-left-top"``, ``"diagonal-right-top"``, ``"diagonal-right-bottom"``, ``"diagonal-left-bottom"``]

___

### positionValues

• **positionValues**: readonly [``"left"``, ``"top"``, ``"right"``, ``"bottom"``]

___

### removeSelectedCommand

• **removeSelectedCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore)) => `void` |

___

### removeSelectedLinksCommand

• **removeSelectedLinksCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore)) => `void` |

___

### removeSelectedNodesCommand

• **removeSelectedNodesCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore)) => `void` |

## Functions

### Diagram

▸ **Diagram**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IDiagramProps`](interfaces/IDiagramProps) |

#### Returns

`Element`

___

### addPoints

▸ `Const` **addPoints**(...`points`): [`Point`](#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...points` | (`undefined` \| ``null`` \| [`Point`](#point))[] |

#### Returns

[`Point`](#point)

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

___

### commandM

▸ **commandM**(`point`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](#point) |

#### Returns

`string`

___

### coordinateFromPoint

▸ **coordinateFromPoint**(`point`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](#point) |

#### Returns

`string`

___

### createArrowMarker

▸ **createArrowMarker**(`settings`): `React.FunctionComponent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`ISvgArrowMarkerSettings`](interfaces/ISvgArrowMarkerSettings) |

#### Returns

`React.FunctionComponent`

___

### createCircleMarker

▸ **createCircleMarker**(`settings`): `React.FunctionComponent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`ISvgCircleMarkerSettings`](interfaces/ISvgCircleMarkerSettings) |

#### Returns

`React.FunctionComponent`

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

___

### createCurvedLinkPathConstructor

▸ **createCurvedLinkPathConstructor**(`settings?`): [`ILinkPathConstructor`](#ilinkpathconstructor)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Partial`<[`ICurvedLinkPathConstructorSettings`](interfaces/ICurvedLinkPathConstructorSettings)\> |

#### Returns

[`ILinkPathConstructor`](#ilinkpathconstructor)

___

### createDefaultMiniControl

▸ `Const` **createDefaultMiniControl**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`IMiniControlComponentProps`](interfaces/IMiniControlComponentProps)<`any`\>, [`IMiniControlDefaultSettings`](interfaces/IMiniControlDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Partial`<[`IMiniControlDefaultSettings`](interfaces/IMiniControlDefaultSettings)\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`IMiniControlComponentProps`](interfaces/IMiniControlComponentProps)<`any`\>, [`IMiniControlDefaultSettings`](interfaces/IMiniControlDefaultSettings)\>

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

___

### createInputHorizontalNode

▸ `Const` **createInputHorizontalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

___

### createInputOutputHorizontalNode

▸ `Const` **createInputOutputHorizontalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

___

### createInputOutputVerticalNode

▸ `Const` **createInputOutputVerticalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

___

### createInputVerticalNode

▸ `Const` **createInputVerticalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

___

### createLinkDefault

▸ **createLinkDefault**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`ILinkVisualComponentProps`](interfaces/ILinkVisualComponentProps), `Partial`<[`ILinkDefaultSettings`](interfaces/ILinkDefaultSettings)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`ILinkDefaultSettings`](interfaces/ILinkDefaultSettings) |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`ILinkVisualComponentProps`](interfaces/ILinkVisualComponentProps), `Partial`<[`ILinkDefaultSettings`](interfaces/ILinkDefaultSettings)\>\>

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

___

### createNode

▸ **createNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`INodeDefaultSettings`](interfaces/INodeDefaultSettings) |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

___

### createOutputHorizontalNode

▸ `Const` **createOutputHorizontalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

___

### createOutputVerticalNode

▸ `Const` **createOutputVerticalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

___

### createPortInnerDefault

▸ **createPortInnerDefault**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`IPortVisualComponentProps`](interfaces/IPortVisualComponentProps), [`IPortInnerDefaultSettings`](interfaces/IPortInnerDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`IPortInnerDefaultSettings`](interfaces/IPortInnerDefaultSettings) |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`IPortVisualComponentProps`](interfaces/IPortVisualComponentProps), [`IPortInnerDefaultSettings`](interfaces/IPortInnerDefaultSettings)\>

___

### createPortsContainer

▸ **createPortsContainer**(`settings?`): [`VisualComponent`](#visualcomponent)<[`IPortsContainerProps`](interfaces/IPortsContainerProps)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Partial`<[`IPortsContainerSettings`](interfaces/IPortsContainerSettings)\> |

#### Returns

[`VisualComponent`](#visualcomponent)<[`IPortsContainerProps`](interfaces/IPortsContainerProps)\>

___

### createStarNode

▸ `Const` **createStarNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings)\>

___

### createStraightLinkPathConstructor

▸ **createStraightLinkPathConstructor**(): [`ILinkPathConstructor`](#ilinkpathconstructor)

#### Returns

[`ILinkPathConstructor`](#ilinkpathconstructor)

___

### createSvgBackground

▸ `Const` **createSvgBackground**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition)<[`IBackgroundComponentProps`](interfaces/IBackgroundComponentProps)<`any`\>, [`ISvgBackgroundSettings`](interfaces/ISvgBackgroundSettings)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Partial`<[`ISvgBackgroundSettings`](interfaces/ISvgBackgroundSettings)\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition)<[`IBackgroundComponentProps`](interfaces/IBackgroundComponentProps)<`any`\>, [`ISvgBackgroundSettings`](interfaces/ISvgBackgroundSettings)\>

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

___

### errorResult

▸ **errorResult**(`error?`): [`ErrorResult`](#errorresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `string` |

#### Returns

[`ErrorResult`](#errorresult)

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

___

### getDegree

▸ **getDegree**(`dir`): `number` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `undefined` \| ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"right-down"`` \| ``"right-up"`` |

#### Returns

`number` \| `undefined`

___

### getRadian

▸ **getRadian**(`dir`): `number` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `undefined` \| ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"right-down"`` \| ``"right-up"`` |

#### Returns

`number` \| `undefined`

___

### guid

▸ **guid**(): `string`

#### Returns

`string`

___

### guidForcedUniqueness

▸ **guidForcedUniqueness**(`checkExistence`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `checkExistence` | (`id`: `string`) => `boolean` |

#### Returns

`string`

___

### isBoolean

▸ **isBoolean**(`value`): value is boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is boolean

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

___

### isNumber

▸ **isNumber**(`value`): value is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is number

___

### isObject

▸ **isObject**(`value`): value is object

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is object

___

### isPoint

▸ **isPoint**(`value`): value is Point

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Point

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

___

### roundPoint

▸ `Const` **roundPoint**(`point`): [`Point`](#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](#point) |

#### Returns

[`Point`](#point)

___

### subtractPoints

▸ `Const` **subtractPoints**(...`points`): [`Point`](#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...points` | [`Point`](#point)[] |

#### Returns

[`Point`](#point)

___

### successResult

▸ **successResult**(): [`SuccessResult`](#successresult)

#### Returns

[`SuccessResult`](#successresult)

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

___

### useDiagramDragHandlers

▸ **useDiagramDragHandlers**(`cancelEvent?`): [`IDragHandlers`](interfaces/IDragHandlers)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancelEvent?` | (`event`: `PointerEvent` \| `PointerEvent`<`Element`\>) => `boolean` |

#### Returns

[`IDragHandlers`](interfaces/IDragHandlers)

___

### useDiagramPinchHandlers

▸ **useDiagramPinchHandlers**(`cancel`): `IPinchHandlers`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancel` | (`event`: `PinchEvent`) => `boolean` |

#### Returns

`IPinchHandlers`

___

### useDiagramUserInteraction

▸ `Const` **useDiagramUserInteraction**(): `void`

#### Returns

`void`

___

### useDiagramWheelHandler

▸ **useDiagramWheelHandler**(`state`): `IWheelHandler`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`IUserInteractionTranslateAndZoom`](interfaces/IUserInteractionTranslateAndZoom) |

#### Returns

`IWheelHandler`

___

### useLinkUserInteraction

▸ `Const` **useLinkUserInteraction**(`linkState`): [`IUseLinkUserInteractionResult`](interfaces/IUseLinkUserInteractionResult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkState` | [`LinkState`](classes/LinkState) \| [`LinkCreationState`](classes/LinkCreationState) |

#### Returns

[`IUseLinkUserInteractionResult`](interfaces/IUseLinkUserInteractionResult)

___

### useNodeUserInteraction

▸ `Const` **useNodeUserInteraction**(`nodeState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeState` | [`NodeState`](classes/NodeState) |

#### Returns

`void`

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

___

### usePortUserInteraction

▸ `Const` **usePortUserInteraction**(`portState?`): [`IUsePortUserInteractionResult`](interfaces/IUsePortUserInteractionResult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portState?` | [`PortState`](classes/PortState) |

#### Returns

[`IUsePortUserInteractionResult`](interfaces/IUsePortUserInteractionResult)

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

___

### useRootStore

▸ `Const` **useRootStore**(): [`RootStore`](classes/RootStore)

#### Returns

[`RootStore`](classes/RootStore)

___

### useUpdateOrCreatePortState

▸ **useUpdateOrCreatePortState**(`port`): [`PortState`](classes/PortState) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `IPortStateWithNodeId` |

#### Returns

[`PortState`](classes/PortState) \| `undefined`

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
