---
id: "NodeState"
title: "Class: NodeState"
sidebar_label: "NodeState"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new NodeState**(`rootStore`, `id`, `state?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](RootStore.md) |
| `id` | `string` |
| `state?` | [`INodeStateWithoutId`](../interfaces/INodeStateWithoutId.md) |

## Accessors

### componentDefinition

• `get` **componentDefinition**(): [`VisualComponentState`](VisualComponentState.md)<[`INodeVisualComponentProps`](../interfaces/INodeVisualComponentProps.md)<[`INodeComponentSettings`](../interfaces/INodeComponentSettings.md)\>, [`INodeComponentSettings`](../interfaces/INodeComponentSettings.md)\>

#### Returns

[`VisualComponentState`](VisualComponentState.md)<[`INodeVisualComponentProps`](../interfaces/INodeVisualComponentProps.md)<[`INodeComponentSettings`](../interfaces/INodeComponentSettings.md)\>, [`INodeComponentSettings`](../interfaces/INodeComponentSettings.md)\>

___

### connectedExternalPorts

• `get` **connectedExternalPorts**(): [`Dictionary`](../interfaces/Dictionary.md)<[`PortState`](PortState.md)[]\>

#### Returns

[`Dictionary`](../interfaces/Dictionary.md)<[`PortState`](PortState.md)[]\>

___

### connectedLinks

• `get` **connectedLinks**(): [`LinkState`](LinkState.md)[]

#### Returns

[`LinkState`](LinkState.md)[]

___

### data

• `get` **data**(): `any`

#### Returns

`any`

___

### hovered

• `get` **hovered**(): `boolean`

#### Returns

`boolean`

• `set` **hovered**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### id

• `get` **id**(): `string`

#### Returns

`string`

___

### isDragActive

• `get` **isDragActive**(): `boolean`

#### Returns

`boolean`

• `set` **isDragActive**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### isDragEnabled

• `get` **isDragEnabled**(): `boolean`

#### Returns

`boolean`

___

### isSelectionEnabled

• `get` **isSelectionEnabled**(): `boolean`

#### Returns

`boolean`

___

### label

• `get` **label**(): `string`

#### Returns

`string`

• `set` **label**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

___

### ports

• `get` **ports**(): `ReadonlyMap`<`string`, [`PortState`](PortState.md)\>

#### Returns

`ReadonlyMap`<`string`, [`PortState`](PortState.md)\>

___

### position

• `get` **position**(): [`Point`](../#point)

#### Returns

[`Point`](../#point)

___

### ref

• `get` **ref**(): [`HtmlElementRefState`](HtmlElementRefState.md)

#### Returns

[`HtmlElementRefState`](HtmlElementRefState.md)

___

### selected

• `get` **selected**(): `boolean`

#### Returns

`boolean`

• `set` **selected**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### transformString

• `get` **transformString**(): `string`

#### Returns

`string`

___

### type

• `get` **type**(): `string`

#### Returns

`string`

## Methods

### addPort

▸ **addPort**(`port`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`PortState`](PortState.md), `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | [`IPortState`](../interfaces/IPortState.md) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`PortState`](PortState.md), `undefined`\>

___

### export

▸ **export**(): [`INodeExport`](../interfaces/INodeExport.md)

#### Returns

[`INodeExport`](../interfaces/INodeExport.md)

___

### getPort

▸ **getPort**(`portId`): `undefined` \| [`PortState`](PortState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portId` | `string` |

#### Returns

`undefined` \| [`PortState`](PortState.md)

___

### getPortOrThrowException

▸ **getPortOrThrowException**(`portId`): [`PortState`](PortState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portId` | `string` |

#### Returns

[`PortState`](PortState.md)

___

### import

▸ **import**(`newState?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState?` | [`INodeStateWithoutId`](../interfaces/INodeStateWithoutId.md) |

#### Returns

`void`

___

### moveBy

▸ **moveBy**(`vector`, `ignoreSnapping?`): `undefined` \| [`Point`](../#point)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `vector` | [`Point`](../#point) | `undefined` | vector to move node by |
| `ignoreSnapping` | `boolean` | `false` | do not take into account snapping to grid |

#### Returns

`undefined` \| [`Point`](../#point)

remainder in case snap to grid is turned on. For example if vector
would be [3,9], node current position [10,10] and snap [5,5],
the node position would be set to [10,15] and remainder equals [3,4]

___

### recalculatePortsOffset

▸ **recalculatePortsOffset**(): `void`

#### Returns

`void`

___

### removePort

▸ **removePort**(`portId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `portId` | `string` |

#### Returns

`boolean`

___

### setData

▸ **setData**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

___

### setIsDragEnabled

▸ **setIsDragEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `boolean` |

#### Returns

`void`

___

### setIsSelectionEnabled

▸ **setIsSelectionEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `boolean` |

#### Returns

`void`

___

### setPorts

▸ **setPorts**(`nodePorts?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodePorts?` | [`IPortState`](../interfaces/IPortState.md)[] |

#### Returns

`void`

___

### setPosition

▸ **setPosition**(`newPosition`, `ignoreSnapping?`): `boolean`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `newPosition` | [`Point`](../#point) | `undefined` | new position |
| `ignoreSnapping` | `boolean` | `false` | do not take into account snapping to grid |

#### Returns

`boolean`

false if position did not change

___

### setType

▸ **setType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `string` |

#### Returns

`void`
