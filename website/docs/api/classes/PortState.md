---
id: "PortState"
title: "Class: PortState"
sidebar_label: "PortState"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new PortState**(`rootStore`, `id`, `nodeId`, `state?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](RootStore.md) |
| `id` | `string` |
| `nodeId` | `string` |
| `state?` | [`IPortStateWithoutIds`](../interfaces/IPortStateWithoutIds.md) |

## Accessors

### componentDefinition

• `get` **componentDefinition**(): [`VisualComponentState`](VisualComponentState.md)<[`IPortVisualComponentProps`](../interfaces/IPortVisualComponentProps.md)<`any`\>, `any`\>

#### Returns

[`VisualComponentState`](VisualComponentState.md)<[`IPortVisualComponentProps`](../interfaces/IPortVisualComponentProps.md)<`any`\>, `any`\>

___

### connectedLinks

• `get` **connectedLinks**(): [`LinkState`](LinkState.md)[]

#### Returns

[`LinkState`](LinkState.md)[]

___

### connectedPorts

• `get` **connectedPorts**(): [`PortState`](PortState.md)[]

#### Returns

[`PortState`](PortState.md)[]

___

### data

• `get` **data**(): `any`

#### Returns

`any`

___

### dragging

• `get` **dragging**(): `boolean`

#### Returns

`boolean`

• `set` **dragging**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### fullId

• `get` **fullId**(): `string`

#### Returns

`string`

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

### isConnectionEnabled

• `get` **isConnectionEnabled**(): `boolean`

#### Returns

`boolean`

___

### label

• `get` **label**(): `string`

#### Returns

`string`

___

### linkDirection

• `get` **linkDirection**(): `undefined` \| ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"right-down"`` \| ``"right-up"``

#### Returns

`undefined` \| ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"right-down"`` \| ``"right-up"``

___

### node

• `get` **node**(): [`NodeState`](NodeState.md)

#### Returns

[`NodeState`](NodeState.md)

___

### nodeId

• `get` **nodeId**(): `string`

#### Returns

`string`

___

### offsetFromNodeCenter

• `get` **offsetFromNodeCenter**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

___

### offsetFromOrigin

• `get` **offsetFromOrigin**(): ``null`` \| [`Point`](../#point)

#### Returns

``null`` \| [`Point`](../#point)

___

### offsetRecalculationRequested

• `get` **offsetRecalculationRequested**(): `number`

Is used to trigger port rerendering and following offset recalculation

#### Returns

`number`

___

### offsetRelativeToNode

• `get` **offsetRelativeToNode**(): ``null`` \| [`Point`](../#point)

Offset relative to parent node, helps us to calculate positions of link endpoints for example.

#### Returns

``null`` \| [`Point`](../#point)

offset excluding zoom

___

### position

• `get` **position**(): ``null`` \| ``"left-top"`` \| ``"right-top"`` \| ``"right-bottom"`` \| ``"left-bottom"`` \| ``"left-center"`` \| ``"top-left"`` \| ``"top-center"`` \| ``"top-right"`` \| ``"right-center"`` \| ``"bottom-left"`` \| ``"bottom-center"`` \| ``"bottom-right"`` \| ``"diagonal-left-top"`` \| ``"diagonal-right-top"`` \| ``"diagonal-right-bottom"`` \| ``"diagonal-left-bottom"``

#### Returns

``null`` \| ``"left-top"`` \| ``"right-top"`` \| ``"right-bottom"`` \| ``"left-bottom"`` \| ``"left-center"`` \| ``"top-left"`` \| ``"top-center"`` \| ``"top-right"`` \| ``"right-center"`` \| ``"bottom-left"`` \| ``"bottom-center"`` \| ``"bottom-right"`` \| ``"diagonal-left-top"`` \| ``"diagonal-right-top"`` \| ``"diagonal-right-bottom"`` \| ``"diagonal-left-bottom"``

___

### ref

• `get` **ref**(): [`HtmlElementRefState`](HtmlElementRefState.md)

#### Returns

[`HtmlElementRefState`](HtmlElementRefState.md)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

___

### validForConnection

• `get` **validForConnection**(): `boolean`

#### Returns

`boolean`

• `set` **validForConnection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

## Methods

### export

▸ **export**(): [`IPortExport`](../interfaces/IPortExport.md)

#### Returns

[`IPortExport`](../interfaces/IPortExport.md)

___

### import

▸ **import**(`state?`): `void`

Update all properties. If some property missing in `state` parameter, the default one will be used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | [`IPortStateWithoutIds`](../interfaces/IPortStateWithoutIds.md) |

#### Returns

`void`

___

### recalculateOffset

▸ **recalculateOffset**(): `void`

#### Returns

`void`

___

### recalculateOffsetImmediately

▸ **recalculateOffsetImmediately**(): `void`

#### Returns

`void`

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

### setIsConnectionEnabled

▸ **setIsConnectionEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `boolean` |

#### Returns

`void`

___

### setLabel

▸ **setLabel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `string` |

#### Returns

`void`

___

### setLinkDirection

▸ **setLinkDirection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"right-down"`` \| ``"right-up"`` |

#### Returns

`void`

___

### setLinkDirectionIfNotYet

▸ **setLinkDirectionIfNotYet**(`direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`DirectionWithDiagonals`](../#directionwithdiagonals) |

#### Returns

`void`

___

### setOffsetFromNodeCenter

▸ **setOffsetFromNodeCenter**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `number` |

#### Returns

`void`

___

### setOffsetFromOrigin

▸ **setOffsetFromOrigin**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| [`Point`](../#point) |

#### Returns

`void`

___

### setPosition

▸ **setPosition**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| ``"left-top"`` \| ``"right-top"`` \| ``"right-bottom"`` \| ``"left-bottom"`` \| ``"left-center"`` \| ``"top-left"`` \| ``"top-center"`` \| ``"top-right"`` \| ``"right-center"`` \| ``"bottom-left"`` \| ``"bottom-center"`` \| ``"bottom-right"`` \| ``"diagonal-left-top"`` \| ``"diagonal-right-top"`` \| ``"diagonal-right-bottom"`` \| ``"diagonal-left-bottom"`` |

#### Returns

`void`

___

### setType

▸ **setType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `string` |

#### Returns

`void`

___

### update

▸ **update**(`state?`): `void`

Update only those properties presented in `state` parameter

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | [`IPortStateWithoutIds`](../interfaces/IPortStateWithoutIds.md) |

#### Returns

`void`
