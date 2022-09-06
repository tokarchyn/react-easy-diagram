---
id: "index"
title: "react-easy-diagram"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Classes

- [Callbacks](classes/Callbacks.md)
- [CommandExecutor](classes/CommandExecutor.md)
- [DiagramSettings](classes/DiagramSettings.md)
- [DiagramState](classes/DiagramState.md)
- [DragState](classes/DragState.md)
- [HtmlElementRefState](classes/HtmlElementRefState.md)
- [LinkCreationState](classes/LinkCreationState.md)
- [LinkPointEndpointState](classes/LinkPointEndpointState.md)
- [LinkPortEndpointState](classes/LinkPortEndpointState.md)
- [LinkState](classes/LinkState.md)
- [LinksSettings](classes/LinksSettings.md)
- [LinksStore](classes/LinksStore.md)
- [NodeState](classes/NodeState.md)
- [NodesSettings](classes/NodesSettings.md)
- [NodesStore](classes/NodesStore.md)
- [PortState](classes/PortState.md)
- [PortsSettings](classes/PortsSettings.md)
- [RootStore](classes/RootStore.md)
- [SelectionState](classes/SelectionState.md)
- [UserInteractionSettings](classes/UserInteractionSettings.md)
- [VisualComponentState](classes/VisualComponentState.md)
- [VisualComponentWithDefault](classes/VisualComponentWithDefault.md)
- [VisualComponents](classes/VisualComponents.md)

## Interfaces

- [Dictionary](interfaces/Dictionary.md)
- [DragAndDropContainerProps](interfaces/DragAndDropContainerProps.md)
- [DragAndDropEvent](interfaces/DragAndDropEvent.md)
- [DragAndDropItemProps](interfaces/DragAndDropItemProps.md)
- [DragAndDropStartEvent](interfaces/DragAndDropStartEvent.md)
- [IBackgroundComponentProps](interfaces/IBackgroundComponentProps.md)
- [ICallbacks](interfaces/ICallbacks.md)
- [ICommand](interfaces/ICommand.md)
- [IComponentDefinition](interfaces/IComponentDefinition.md)
- [ICurvedLinkPathConstructorSettings](interfaces/ICurvedLinkPathConstructorSettings.md)
- [IDiagramInitState](interfaces/IDiagramInitState.md)
- [IDiagramInnerProps](interfaces/IDiagramInnerProps.md)
- [IDiagramSettings](interfaces/IDiagramSettings.md)
- [IDiagramState](interfaces/IDiagramState.md)
- [IDragHandlers](interfaces/IDragHandlers.md)
- [IHtmlElementRect](interfaces/IHtmlElementRect.md)
- [ILineStyling](interfaces/ILineStyling.md)
- [ILinkDefaultSettings](interfaces/ILinkDefaultSettings.md)
- [ILinkInteractionState](interfaces/ILinkInteractionState.md)
- [ILinkPath](interfaces/ILinkPath.md)
- [ILinkPathConstructorEndpointInfo](interfaces/ILinkPathConstructorEndpointInfo.md)
- [ILinkPortEndpoint](interfaces/ILinkPortEndpoint.md)
- [ILinkSegment](interfaces/ILinkSegment.md)
- [ILinkState](interfaces/ILinkState.md)
- [ILinkStateWithId](interfaces/ILinkStateWithId.md)
- [ILinkStateWithoutId](interfaces/ILinkStateWithoutId.md)
- [ILinkVisualComponentProps](interfaces/ILinkVisualComponentProps.md)
- [ILinksSettings](interfaces/ILinksSettings.md)
- [IMiniControlComponentProps](interfaces/IMiniControlComponentProps.md)
- [IMiniControlDefaultSettings](interfaces/IMiniControlDefaultSettings.md)
- [INodeComponentSettings](interfaces/INodeComponentSettings.md)
- [INodeDefaultSettings](interfaces/INodeDefaultSettings.md)
- [INodeExport](interfaces/INodeExport.md)
- [INodeState](interfaces/INodeState.md)
- [INodeStateWithId](interfaces/INodeStateWithId.md)
- [INodeStateWithoutId](interfaces/INodeStateWithoutId.md)
- [INodeVisualComponentProps](interfaces/INodeVisualComponentProps.md)
- [INodesSettings](interfaces/INodesSettings.md)
- [IPortExport](interfaces/IPortExport.md)
- [IPortFinalState](interfaces/IPortFinalState.md)
- [IPortInnerDefaultSettings](interfaces/IPortInnerDefaultSettings.md)
- [IPortProps](interfaces/IPortProps.md)
- [IPortState](interfaces/IPortState.md)
- [IPortStateWithoutIds](interfaces/IPortStateWithoutIds.md)
- [IPortVisualComponentProps](interfaces/IPortVisualComponentProps.md)
- [IPortsContainerProps](interfaces/IPortsContainerProps.md)
- [IPortsContainerSettings](interfaces/IPortsContainerSettings.md)
- [IPortsSettings](interfaces/IPortsSettings.md)
- [ISettings](interfaces/ISettings.md)
- [ISvgArrowMarkerSettings](interfaces/ISvgArrowMarkerSettings.md)
- [ISvgBackgroundSettings](interfaces/ISvgBackgroundSettings.md)
- [ISvgCircleMarkerSettings](interfaces/ISvgCircleMarkerSettings.md)
- [ISvgMarkerSettings](interfaces/ISvgMarkerSettings.md)
- [ITransformation](interfaces/ITransformation.md)
- [IUseLinkUserInteractionResult](interfaces/IUseLinkUserInteractionResult.md)
- [IUsePortUserInteractionResult](interfaces/IUsePortUserInteractionResult.md)
- [IUseStylingOptions](interfaces/IUseStylingOptions.md)
- [IUserInteraction](interfaces/IUserInteraction.md)
- [IUserInteractionTranslate](interfaces/IUserInteractionTranslate.md)
- [IUserInteractionTranslateAndZoom](interfaces/IUserInteractionTranslateAndZoom.md)
- [IVisualComponentProps](interfaces/IVisualComponentProps.md)
- [IVisualComponentsObject](interfaces/IVisualComponentsObject.md)
- [IZoomToFitSettings](interfaces/IZoomToFitSettings.md)
- [OnDrag](interfaces/OnDrag.md)
- [OnDragEnded](interfaces/OnDragEnded.md)
- [OnDragStarted](interfaces/OnDragStarted.md)
- [OnLinkValidation](interfaces/OnLinkValidation.md)
- [OnLinkingEnded](interfaces/OnLinkingEnded.md)
- [OnLinkingStarted](interfaces/OnLinkingStarted.md)
- [OnLinksAddResult](interfaces/OnLinksAddResult.md)
- [OnLinksRemoveResult](interfaces/OnLinksRemoveResult.md)
- [OnNodePositionChanged](interfaces/OnNodePositionChanged.md)
- [OnNodesAddResult](interfaces/OnNodesAddResult.md)
- [OnNodesRemoveResult](interfaces/OnNodesRemoveResult.md)

## Type Aliases

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

### IDiagramContextProps

Ƭ **IDiagramContextProps**: `React.PropsWithChildren`<{ `initState?`: [`IDiagramInitState`](interfaces/IDiagramInitState.md) ; `settings?`: [`ISettings`](interfaces/ISettings.md) ; `storeRef?`: `React.MutableRefObject`<[`RootStore`](classes/RootStore.md) \| ``null``\>  }\>

___

### IDiagramProps

Ƭ **IDiagramProps**: [`IDiagramInnerProps`](interfaces/IDiagramInnerProps.md) & [`IDiagramContextProps`](#idiagramcontextprops)

___

### ILinkPathConstructor

Ƭ **ILinkPathConstructor**: (`source`: [`ILinkPathConstructorEndpointInfo`](interfaces/ILinkPathConstructorEndpointInfo.md), `target`: [`ILinkPathConstructorEndpointInfo`](interfaces/ILinkPathConstructorEndpointInfo.md)) => `string`

#### Type declaration

▸ (`source`, `target`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ILinkPathConstructorEndpointInfo`](interfaces/ILinkPathConstructorEndpointInfo.md) |
| `target` | [`ILinkPathConstructorEndpointInfo`](interfaces/ILinkPathConstructorEndpointInfo.md) |

##### Returns

`string`

___

### INodeDefaultSettingsWithoutPorts

Ƭ **INodeDefaultSettingsWithoutPorts**: `Omit`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md), ``"ports"``\>

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

Ƭ **PortInnerDefaultState**: ``"base"`` \| ``"hovered"`` \| ``"dragging"`` \| ``"invalid"`` \| ``"node-hovered"`` \| ``"node-selected"``

___

### PortPosition

Ƭ **PortPosition**: typeof [`portPositionValues`](#portpositionvalues)[`number`]

___

### Position

Ƭ **Position**: typeof [`positionValues`](#positionvalues)[`number`]

___

### SelectableItem

Ƭ **SelectableItem**: [`NodeState`](classes/NodeState.md) \| [`LinkState`](classes/LinkState.md)

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

___

### check

Ƭ **check**<`T`, `Key`\>: `undefined` extends `T`[`Key`] ? `EventTypes`[`Key`] : `T`[`Key`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `AnyHandlerEventTypes` |
| `Key` | extends `GestureKey` |

## Variables

### BackgroundWrapper

• `Const` **BackgroundWrapper**: () => `Element` & { `displayName`: `string`  }

___

### Button

• `Const` **Button**: `React.FC`<{ `children?`: `React.ReactNode` ; `size`: `number` ; `onClick`: () => `any`  }\>

___

### COMPONENT\_DEFAULT\_TYPE

• `Const` **COMPONENT\_DEFAULT\_TYPE**: ``"default"``

___

### CopyIcon

• `Const` **CopyIcon**: `React.FC`

___

### DISABLE\_NODE\_USER\_INTERACTION\_CLASS

• `Const` **DISABLE\_NODE\_USER\_INTERACTION\_CLASS**: ``"react_easy_diagram_disable_node_user_interaction"``

___

### DiagramContext

• `Const` **DiagramContext**: (`props`: `PropsWithChildren`<{ `initState?`: [`IDiagramInitState`](interfaces/IDiagramInitState.md) ; `settings?`: [`ISettings`](interfaces/ISettings.md) ; `storeRef?`: `MutableRefObject`<``null`` \| [`RootStore`](classes/RootStore.md)\>  }\>) => `Element` & { `displayName`: `string`  }

___

### DigramInner

• `Const` **DigramInner**: `FunctionComponent`<[`IDiagramInnerProps`](interfaces/IDiagramInnerProps.md)\>

___

### ENABLE\_NODE\_USER\_INTERACTION\_CLASS

• `Const` **ENABLE\_NODE\_USER\_INTERACTION\_CLASS**: ``"react_easy_diagram_enable_node_user_interaction"``

___

### FilterCenterFocusIcon

• `Const` **FilterCenterFocusIcon**: `React.FC`

___

### LINK\_CREATION\_COMPONENT\_TYPE

• `Const` **LINK\_CREATION\_COMPONENT\_TYPE**: `string` = `'linkCreation'`

___

### LinkDefault

• `Const` **LinkDefault**: `React.FC`<[`ILinkVisualComponentProps`](interfaces/ILinkVisualComponentProps.md)<[`ILinkDefaultSettings`](interfaces/ILinkDefaultSettings.md)\>\>

___

### LinkWrapper

• `Const` **LinkWrapper**: `FunctionComponent`<{ `link`: [`LinkState`](classes/LinkState.md) \| [`LinkCreationState`](classes/LinkCreationState.md)  }\>

___

### LinksLayer

• `Const` **LinksLayer**: `FunctionComponent`<{ `transform`: `string`  }\>

___

### LockIcon

• `Const` **LockIcon**: `React.FC`

___

### MiniControlWrapper

• `Const` **MiniControlWrapper**: () => `Element` & { `displayName`: `string`  }

___

### NodeContext

• `Const` **NodeContext**: `Context`<``null`` \| [`NodeState`](classes/NodeState.md)\>

___

### NodeLabel

• `Const` **NodeLabel**: `React.FC`<{ `node`: [`NodeState`](classes/NodeState.md)  }\>

___

### NodeWrapper

• `Const` **NodeWrapper**: `FunctionComponent`<{ `node`: [`NodeState`](classes/NodeState.md)  }\>

___

### NodesLayer

• `Const` **NodesLayer**: `FunctionComponent`<{ `transform`: `string`  }\>

___

### Port

• `Const` **Port**: `React.FC`<[`IPortProps`](interfaces/IPortProps.md)\>

___

### RootStoreContext

• `Const` **RootStoreContext**: `Context`<``null`` \| [`RootStore`](classes/RootStore.md)\>

___

### RubbishBinIcon

• `Const` **RubbishBinIcon**: `React.FC`

___

### UnlockIcon

• `Const` **UnlockIcon**: `React.FC`

___

### cloneSelectedNodesCommand

• `Const` **cloneSelectedNodesCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore.md)) => `void` |

___

### defaultLinkMainLineClasses

• `Const` **defaultLinkMainLineClasses**: [`LinkDefaultSettingsByStates`](#linkdefaultsettingsbystates)<`string`[]\>

___

### defaultLinkSecondaryLineClasses

• `Const` **defaultLinkSecondaryLineClasses**: [`LinkDefaultSettingsByStates`](#linkdefaultsettingsbystates)<`string`[]\>

___

### defaultNodeClasses

• `Const` **defaultNodeClasses**: [`NodeDefaultSettingsByStates`](#nodedefaultsettingsbystates)<`string`[]\>

___

### defaultPortInnerClasses

• `Const` **defaultPortInnerClasses**: [`PortInnerDefaultSettingsByStates`](#portinnerdefaultsettingsbystates)<`string`[]\>

___

### portPositionValues

• `Const` **portPositionValues**: readonly [``"left-top"``, ``"left-center"``, ``"left-bottom"``, ``"top-left"``, ``"top-center"``, ``"top-right"``, ``"right-top"``, ``"right-center"``, ``"right-bottom"``, ``"bottom-left"``, ``"bottom-center"``, ``"bottom-right"``, ``"diagonal-left-top"``, ``"diagonal-right-top"``, ``"diagonal-right-bottom"``, ``"diagonal-left-bottom"``]

___

### positionValues

• `Const` **positionValues**: readonly [``"left"``, ``"top"``, ``"right"``, ``"bottom"``]

___

### removeSelectedCommand

• `Const` **removeSelectedCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore.md)) => `void` |

___

### removeSelectedLinksCommand

• `Const` **removeSelectedLinksCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore.md)) => `void` |

___

### removeSelectedNodesCommand

• `Const` **removeSelectedNodesCommand**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore.md)) => `void` |

## Functions

### Diagram

▸ **Diagram**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IDiagramProps`](#idiagramprops) |

#### Returns

`Element`

___

### DragAndDropContainer

▸ **DragAndDropContainer**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DragAndDropContainerProps`](interfaces/DragAndDropContainerProps.md) |

#### Returns

`Element`

___

### DragAndDropItem

▸ **DragAndDropItem**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DragAndDropItemProps`](interfaces/DragAndDropItemProps.md) |

#### Returns

`Element`

___

### addNodeCommand

▸ **addNodeCommand**(`node`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`INodeState`](interfaces/INodeState.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `execute` | (`rootStore`: [`RootStore`](classes/RootStore.md)) => `void` |

___

### addPoints

▸ **addPoints**(...`points`): [`Point`](#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...points` | (`undefined` \| ``null`` \| [`Point`](#point))[] |

#### Returns

[`Point`](#point)

___

### arePointsEqual

▸ **arePointsEqual**(`a?`, `b?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a?` | [`Point`](#point) |
| `b?` | [`Point`](#point) |

#### Returns

`boolean`

___

### areTransformationsEqual

▸ **areTransformationsEqual**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ITransformation`](interfaces/ITransformation.md) |
| `b` | [`ITransformation`](interfaces/ITransformation.md) |

#### Returns

`boolean`

___

### canDragGestureBeTapInstead

▸ **canDragGestureBeTapInstead**(`movement`): `boolean`

Does gesture can be potentially a tap/click event?
Drag gesture will be tap/click gesture on mouse or touch release only when the drag displacement is inferior to 3 pixels.
See useGestures documentation for more information.

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
| `settings` | [`ISvgArrowMarkerSettings`](interfaces/ISvgArrowMarkerSettings.md) |

#### Returns

`React.FunctionComponent`

___

### createCircleMarker

▸ **createCircleMarker**(`settings`): `React.FunctionComponent`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`ISvgCircleMarkerSettings`](interfaces/ISvgCircleMarkerSettings.md) |

#### Returns

`React.FunctionComponent`

___

### createCrossesImageGenerator

▸ **createCrossesImageGenerator**(`sizeMultiplicator`, `color`, `opacity`): [`BackgroundSvgImageGenerator`](#backgroundsvgimagegenerator)

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
| `settings?` | `Partial`<[`ICurvedLinkPathConstructorSettings`](interfaces/ICurvedLinkPathConstructorSettings.md)\> |

#### Returns

[`ILinkPathConstructor`](#ilinkpathconstructor)

___

### createDefaultMiniControl

▸ **createDefaultMiniControl**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`IMiniControlComponentProps`](interfaces/IMiniControlComponentProps.md)<`any`\>, [`IMiniControlDefaultSettings`](interfaces/IMiniControlDefaultSettings.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Partial`<[`IMiniControlDefaultSettings`](interfaces/IMiniControlDefaultSettings.md)\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`IMiniControlComponentProps`](interfaces/IMiniControlComponentProps.md)<`any`\>, [`IMiniControlDefaultSettings`](interfaces/IMiniControlDefaultSettings.md)\>

___

### createDotsImageGenerator

▸ **createDotsImageGenerator**(`sizeMultiplicator`, `dotsColor`, `dotsOpacity`, `dotsRadius`): [`BackgroundSvgImageGenerator`](#backgroundsvgimagegenerator)

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

▸ **createGridImageGenerator**(`sizeMultiplicator`, `linesColor`, `linesOpacity`): [`BackgroundSvgImageGenerator`](#backgroundsvgimagegenerator)

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

▸ **createInputHorizontalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

___

### createInputOutputHorizontalNode

▸ **createInputOutputHorizontalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

___

### createInputOutputVerticalNode

▸ **createInputOutputVerticalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

___

### createInputVerticalNode

▸ **createInputVerticalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

___

### createLinkDefault

▸ **createLinkDefault**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`ILinkVisualComponentProps`](interfaces/ILinkVisualComponentProps.md), `Partial`<[`ILinkDefaultSettings`](interfaces/ILinkDefaultSettings.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`ILinkDefaultSettings`](interfaces/ILinkDefaultSettings.md) |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`ILinkVisualComponentProps`](interfaces/ILinkVisualComponentProps.md), `Partial`<[`ILinkDefaultSettings`](interfaces/ILinkDefaultSettings.md)\>\>

___

### createLinkPath

▸ **createLinkPath**(`rootStore`, `source`, `target`): [`ILinkPath`](interfaces/ILinkPath.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](classes/RootStore.md) |
| `source` | [`LinkPortEndpointState`](classes/LinkPortEndpointState.md) |
| `target` | [`LinkPortEndpointState`](classes/LinkPortEndpointState.md) \| [`LinkPointEndpointState`](classes/LinkPointEndpointState.md) |

#### Returns

[`ILinkPath`](interfaces/ILinkPath.md) \| `undefined`

___

### createNode

▸ **createNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md) |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

___

### createNodeOnDrop

▸ **createNodeOnDrop**(`node`): (`event`: [`DragAndDropEvent`](interfaces/DragAndDropEvent.md)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Pick`<[`INodeState`](interfaces/INodeState.md), ``"id"`` \| ``"label"`` \| ``"type"`` \| ``"data"`` \| ``"isSelectionEnabled"`` \| ``"isDragEnabled"`` \| ``"ports"``\> |

#### Returns

`fn`

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragAndDropEvent`](interfaces/DragAndDropEvent.md) |

##### Returns

`void`

___

### createOutputHorizontalNode

▸ **createOutputHorizontalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

___

### createOutputVerticalNode

▸ **createOutputVerticalNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

___

### createPortInnerDefault

▸ **createPortInnerDefault**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`IPortVisualComponentProps`](interfaces/IPortVisualComponentProps.md), [`IPortInnerDefaultSettings`](interfaces/IPortInnerDefaultSettings.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`IPortInnerDefaultSettings`](interfaces/IPortInnerDefaultSettings.md) |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`IPortVisualComponentProps`](interfaces/IPortVisualComponentProps.md), [`IPortInnerDefaultSettings`](interfaces/IPortInnerDefaultSettings.md)\>

___

### createPortsContainer

▸ **createPortsContainer**(`settings?`): [`VisualComponent`](#visualcomponent)<[`IPortsContainerProps`](interfaces/IPortsContainerProps.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Partial`<[`IPortsContainerSettings`](interfaces/IPortsContainerSettings.md)\> |

#### Returns

[`VisualComponent`](#visualcomponent)<[`IPortsContainerProps`](interfaces/IPortsContainerProps.md)\>

___

### createStarNode

▸ **createStarNode**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Pick`<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md), ``"innerNode"`` \| ``"removeDefaultClasses"`` \| ``"classes"`` \| ``"style"``\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`INodeVisualComponentProps`](interfaces/INodeVisualComponentProps.md)<[`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>, [`INodeDefaultSettings`](interfaces/INodeDefaultSettings.md)\>

___

### createStraightLinkPathConstructor

▸ **createStraightLinkPathConstructor**(): [`ILinkPathConstructor`](#ilinkpathconstructor)

#### Returns

[`ILinkPathConstructor`](#ilinkpathconstructor)

___

### createSvgBackground

▸ **createSvgBackground**(`settings?`): [`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`IBackgroundComponentProps`](interfaces/IBackgroundComponentProps.md)<`any`\>, [`ISvgBackgroundSettings`](interfaces/ISvgBackgroundSettings.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Partial`<[`ISvgBackgroundSettings`](interfaces/ISvgBackgroundSettings.md)\> |

#### Returns

[`IComponentDefinition`](interfaces/IComponentDefinition.md)<[`IBackgroundComponentProps`](interfaces/IBackgroundComponentProps.md)<`any`\>, [`ISvgBackgroundSettings`](interfaces/ISvgBackgroundSettings.md)\>

___

### createVector

▸ **createVector**(`p`, `length`, `angleInRadian`): [`Point`](#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | [`Point`](#point) |
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

▸ **distanceBetweenPoints**(`a`, `b`): `number`

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

▸ **eventPathContainsClass**(`event`, `className`, `exceptClassName?`): `boolean`

Check each element starting from the first one in composedPath() (see https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath),
if exceptClassName is the first class found -> return false,
if className is the first class found -> return true,
if neither exceptClassName nor className were found -> return false

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `PointerEvent` \| `MouseEvent` \| `TouchEvent` \| `KeyboardEvent` |
| `className` | `string` |
| `exceptClassName?` | `string` |

#### Returns

`boolean`

___

### generateTransform

▸ **generateTransform**(`translate`, `scale?`): `string`

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
| `a` | [`ILinkPortEndpoint`](interfaces/ILinkPortEndpoint.md) |
| `b` | [`ILinkPortEndpoint`](interfaces/ILinkPortEndpoint.md) |

#### Returns

`boolean`

___

### multiplyPoint

▸ **multiplyPoint**(`a`, `m`): [`Point`](#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Point`](#point) |
| `m` | `number` |

#### Returns

[`Point`](#point)

___

### roundPoint

▸ **roundPoint**(`point`): [`Point`](#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](#point) |

#### Returns

[`Point`](#point)

___

### subtractPoints

▸ **subtractPoints**(...`points`): [`Point`](#point)

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
| `cursor` | `undefined` \| ``"move"`` \| `string` & {} \| ``"-moz-initial"`` \| ``"inherit"`` \| ``"initial"`` \| ``"revert"`` \| ``"revert-layer"`` \| ``"unset"`` \| ``"-moz-grab"`` \| ``"-webkit-grab"`` \| ``"alias"`` \| ``"all-scroll"`` \| ``"auto"`` \| ``"cell"`` \| ``"col-resize"`` \| ``"context-menu"`` \| ``"copy"`` \| ``"crosshair"`` \| ``"default"`` \| ``"e-resize"`` \| ``"ew-resize"`` \| ``"grab"`` \| ``"grabbing"`` \| ``"help"`` \| ``"n-resize"`` \| ``"ne-resize"`` \| ``"nesw-resize"`` \| ``"no-drop"`` \| ``"none"`` \| ``"not-allowed"`` \| ``"ns-resize"`` \| ``"nw-resize"`` \| ``"nwse-resize"`` \| ``"pointer"`` \| ``"progress"`` \| ``"row-resize"`` \| ``"s-resize"`` \| ``"se-resize"`` \| ``"sw-resize"`` \| ``"text"`` \| ``"vertical-text"`` \| ``"w-resize"`` \| ``"wait"`` \| ``"zoom-in"`` \| ``"zoom-out"`` |
| `ref` | ``null`` \| `HTMLDivElement` |

#### Returns

`void`

___

### useDiagram

▸ **useDiagram**(`initState?`, `settings?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initState?` | [`IDiagramInitState`](interfaces/IDiagramInitState.md) |
| `settings?` | [`ISettings`](interfaces/ISettings.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `Diagram` | () => `Element` |
| `storeRef` | `MutableRefObject`<``null`` \| [`RootStore`](classes/RootStore.md)\> |

___

### useDiagramCursor

▸ **useDiagramCursor**(`active`, `cursor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |
| `cursor` | `undefined` \| ``"move"`` \| `string` & {} \| ``"-moz-initial"`` \| ``"inherit"`` \| ``"initial"`` \| ``"revert"`` \| ``"revert-layer"`` \| ``"unset"`` \| ``"-moz-grab"`` \| ``"-webkit-grab"`` \| ``"alias"`` \| ``"all-scroll"`` \| ``"auto"`` \| ``"cell"`` \| ``"col-resize"`` \| ``"context-menu"`` \| ``"copy"`` \| ``"crosshair"`` \| ``"default"`` \| ``"e-resize"`` \| ``"ew-resize"`` \| ``"grab"`` \| ``"grabbing"`` \| ``"help"`` \| ``"n-resize"`` \| ``"ne-resize"`` \| ``"nesw-resize"`` \| ``"no-drop"`` \| ``"none"`` \| ``"not-allowed"`` \| ``"ns-resize"`` \| ``"nw-resize"`` \| ``"nwse-resize"`` \| ``"pointer"`` \| ``"progress"`` \| ``"row-resize"`` \| ``"s-resize"`` \| ``"se-resize"`` \| ``"sw-resize"`` \| ``"text"`` \| ``"vertical-text"`` \| ``"w-resize"`` \| ``"wait"`` \| ``"zoom-in"`` \| ``"zoom-out"`` |

#### Returns

`void`

___

### useDiagramDragHandlers

▸ **useDiagramDragHandlers**(`cancelEvent`): [`IDragHandlers`](interfaces/IDragHandlers.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancelEvent` | (`event`: { `target`: ``null`` \| `EventTarget`  }) => `boolean` |

#### Returns

[`IDragHandlers`](interfaces/IDragHandlers.md)

___

### useDiagramPinchHandlers

▸ **useDiagramPinchHandlers**(`cancel`): `IPinchHandlers`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cancel` | (`event`: { `target`: ``null`` \| `EventTarget`  }) => `boolean` |

#### Returns

`IPinchHandlers`

___

### useDiagramUserInteraction

▸ **useDiagramUserInteraction**(): `void`

#### Returns

`void`

___

### useDiagramWheelHandler

▸ **useDiagramWheelHandler**(`state`): `IWheelHandler`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`IUserInteractionTranslateAndZoom`](interfaces/IUserInteractionTranslateAndZoom.md) |

#### Returns

`IWheelHandler`

___

### useLinkUserInteraction

▸ **useLinkUserInteraction**(`linkState`): [`IUseLinkUserInteractionResult`](interfaces/IUseLinkUserInteractionResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkState` | [`LinkState`](classes/LinkState.md) \| [`LinkCreationState`](classes/LinkCreationState.md) |

#### Returns

[`IUseLinkUserInteractionResult`](interfaces/IUseLinkUserInteractionResult.md)

___

### useNodeUserInteraction

▸ **useNodeUserInteraction**(`nodeState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeState` | [`NodeState`](classes/NodeState.md) |

#### Returns

`void`

___

### useNotifyRef

▸ **useNotifyRef**<`TValue`\>(`init`): `MutableRefObject`<`TValue`\>

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

▸ **usePortUserInteraction**(`portState?`): [`IUsePortUserInteractionResult`](interfaces/IUsePortUserInteractionResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portState?` | [`PortState`](classes/PortState.md) |

#### Returns

[`IUsePortUserInteractionResult`](interfaces/IUsePortUserInteractionResult.md)

___

### useRelativePositionStyles

▸ **useRelativePositionStyles**(`position?`, `offsetFromParentCenter?`, `offsetFromOrigin?`, `usePortCenterPivot?`): `Pick`<`Partial`<`CSSProperties`\>, ``"position"`` \| ``"transform"`` \| ``"left"`` \| ``"top"`` \| ``"right"`` \| ``"bottom"`` \| ``"width"`` \| ``"height"``\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `position?` | ``null`` \| ``"left-top"`` \| ``"right-top"`` \| ``"right-bottom"`` \| ``"left-bottom"`` \| ``"left-center"`` \| ``"top-left"`` \| ``"top-center"`` \| ``"top-right"`` \| ``"right-center"`` \| ``"bottom-left"`` \| ``"bottom-center"`` \| ``"bottom-right"`` \| ``"diagonal-left-top"`` \| ``"diagonal-right-top"`` \| ``"diagonal-right-bottom"`` \| ``"diagonal-left-bottom"`` | `undefined` |
| `offsetFromParentCenter?` | ``null`` \| `number` | `undefined` |
| `offsetFromOrigin?` | ``null`` \| [`Point`](#point) | `undefined` |
| `usePortCenterPivot` | `boolean` | `true` |

#### Returns

`Pick`<`Partial`<`CSSProperties`\>, ``"position"`` \| ``"transform"`` \| ``"left"`` \| ``"top"`` \| ``"right"`` \| ``"bottom"`` \| ``"width"`` \| ``"height"``\>

___

### useRootStore

▸ **useRootStore**(): [`RootStore`](classes/RootStore.md)

#### Returns

[`RootStore`](classes/RootStore.md)

___

### useStyling

▸ **useStyling**(`options`, `state`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IUseStylingOptions`](interfaces/IUseStylingOptions.md) |
| `state` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `className` | `string` |
| `style` | `CSSProperties` |
