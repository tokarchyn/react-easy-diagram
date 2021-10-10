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
| `rootStore` | [`RootStore`](RootStore) |
| `id` | `string` |
| `nodeId` | `string` |
| `state?` | [`IPortStateWithoutIds`](../interfaces/IPortStateWithoutIds) |

## Accessors

### componentDefinition

• `get` **componentDefinition**(): [`VisualComponentState`](VisualComponentState)<[`IPortVisualComponentProps`](../interfaces/IPortVisualComponentProps)<`any`\>\>

#### Returns

[`VisualComponentState`](VisualComponentState)<[`IPortVisualComponentProps`](../interfaces/IPortVisualComponentProps)<`any`\>\>

___

### connectedLinks

• `get` **connectedLinks**(): [`LinkState`](LinkState)[]

#### Returns

[`LinkState`](LinkState)[]

___

### connectedPorts

• `get` **connectedPorts**(): [`PortState`](PortState)[]

#### Returns

[`PortState`](PortState)[]

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

### extra

• `get` **extra**(): `any`

#### Returns

`any`

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

• `get` **node**(): [`NodeState`](NodeState)

#### Returns

[`NodeState`](NodeState)

___

### nodeId

• `get` **nodeId**(): `string`

#### Returns

`string`

___

### offsetRelativeToNode

• `get` **offsetRelativeToNode**(): ``null`` \| [`Point`](../#point)

#### Returns

``null`` \| [`Point`](../#point)

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

### sizeAndPositionRecalculationWithDelay

• `get` **sizeAndPositionRecalculationWithDelay**(): `number`

#### Returns

`number`

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

▸ **export**(): [`IPortStateWithIds`](../interfaces/IPortStateWithIds)

#### Returns

[`IPortStateWithIds`](../interfaces/IPortStateWithIds)

___

### import

▸ **import**(`state?`): `void`

Update all properties. If some property missing in `state` parameter, the default one will be used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | [`IPortStateWithoutIds`](../interfaces/IPortStateWithoutIds) |

#### Returns

`void`

___

### recalculateSizeAndPosition

▸ **recalculateSizeAndPosition**(): `void`

#### Returns

`void`

___

### recalculateSizeAndPositionWithoutDelay

▸ **recalculateSizeAndPositionWithoutDelay**(): `void`

#### Returns

`void`

___

### setComponent

▸ **setComponent**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | ``null`` \| [`VisualComponent`](../#visualcomponent)<[`IPortVisualComponentProps`](../interfaces/IPortVisualComponentProps)<`any`\>\> |

#### Returns

`void`

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
| `state?` | [`IPortStateWithoutIds`](../interfaces/IPortStateWithoutIds) |

#### Returns

`void`
