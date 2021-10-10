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
| `rootStore` | [`RootStore`](RootStore) |
| `id` | `string` |
| `state?` | [`INodeStateWithoutId`](../interfaces/INodeStateWithoutId) |

## Accessors

### componentDefinition

• `get` **componentDefinition**(): [`VisualComponentState`](VisualComponentState)<[`INodeVisualComponentProps`](../interfaces/INodeVisualComponentProps)<`any`\>\>

#### Returns

[`VisualComponentState`](VisualComponentState)<[`INodeVisualComponentProps`](../interfaces/INodeVisualComponentProps)<`any`\>\>

___

### connectedExternalPorts

• `get` **connectedExternalPorts**(): [`Dictionary`](../interfaces/Dictionary)<[`PortState`](PortState)[]\>

#### Returns

[`Dictionary`](../interfaces/Dictionary)<[`PortState`](PortState)[]\>

___

### connectedLinks

• `get` **connectedLinks**(): [`LinkState`](LinkState)[]

#### Returns

[`LinkState`](LinkState)[]

___

### extra

• `get` **extra**(): `any`

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

• `get` **ports**(): `ReadonlyMap`<`string`, [`PortState`](PortState)\>

#### Returns

`ReadonlyMap`<`string`, [`PortState`](PortState)\>

___

### position

• `get` **position**(): [`Point`](../#point)

#### Returns

[`Point`](../#point)

___

### realSize

• `get` **realSize**(): ``null`` \| [`Point`](../#point)

#### Returns

``null`` \| [`Point`](../#point)

Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
Value can be @type {null} in case reference to real DOM object is not set.

___

### ref

• `get` **ref**(): [`HtmlElementRefState`](HtmlElementRefState)

#### Returns

[`HtmlElementRefState`](HtmlElementRefState)

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

▸ **addPort**(`port`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`PortState`](PortState), `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | [`INodePortState`](../interfaces/INodePortState) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`PortState`](PortState), `undefined`\>

___

### export

▸ **export**(): [`INodeStateWithId`](../interfaces/INodeStateWithId)

#### Returns

[`INodeStateWithId`](../interfaces/INodeStateWithId)

___

### getPort

▸ **getPort**(`portId`): `undefined` \| [`PortState`](PortState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portId` | `string` |

#### Returns

`undefined` \| [`PortState`](PortState)

___

### getPortOrThrowException

▸ **getPortOrThrowException**(`portId`): [`PortState`](PortState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portId` | `string` |

#### Returns

[`PortState`](PortState)

___

### import

▸ **import**(`newState?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState?` | [`INodeStateWithoutId`](../interfaces/INodeStateWithoutId) |

#### Returns

`void`

___

### recalculatePortsSizeAndPosition

▸ **recalculatePortsSizeAndPosition**(): `void`

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

### setExtra

▸ **setExtra**(`value`): `void`

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

### setPosition

▸ **setPosition**(`newPosition`, `ignoreSnapping?`): `undefined` \| [`Point`](../#point)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `newPosition` | `undefined` \| ``null`` \| [`Point`](../#point) | `undefined` | new position |
| `ignoreSnapping` | `boolean` | `false` | do not take into account snapping to grid |

#### Returns

`undefined` \| [`Point`](../#point)

remainder in case snap to grid is turned on. For example if newPosition would be [22,17] and snap [10,10],
the node position would be set to [20,20] and remainder equals [2,-3]

___

### setType

▸ **setType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `string` |

#### Returns

`void`
