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

#### Defined in

[lib/src/states/portState.ts:34](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L34)

## Accessors

### componentDefinition

• `get` **componentDefinition**(): [`VisualComponentState`](VisualComponentState)<[`IPortVisualComponentProps`](../interfaces/IPortVisualComponentProps)<`any`\>\>

#### Returns

[`VisualComponentState`](VisualComponentState)<[`IPortVisualComponentProps`](../interfaces/IPortVisualComponentProps)<`any`\>\>

#### Defined in

[lib/src/states/portState.ts:202](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L202)

___

### connectedLinks

• `get` **connectedLinks**(): [`LinkState`](LinkState)[]

#### Returns

[`LinkState`](LinkState)[]

#### Defined in

[lib/src/states/portState.ts:208](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L208)

___

### connectedPorts

• `get` **connectedPorts**(): [`PortState`](PortState)[]

#### Returns

[`PortState`](PortState)[]

#### Defined in

[lib/src/states/portState.ts:212](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L212)

___

### dragging

• `get` **dragging**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/portState.ts:78](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L78)

• `set` **dragging**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/portState.ts:82](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L82)

___

### extra

• `get` **extra**(): `any`

#### Returns

`any`

#### Defined in

[lib/src/states/portState.ts:155](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L155)

___

### fullId

• `get` **fullId**(): `string`

#### Returns

`string`

#### Defined in

[lib/src/states/portState.ts:70](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L70)

___

### hovered

• `get` **hovered**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/portState.ts:86](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L86)

• `set` **hovered**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/portState.ts:90](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L90)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[lib/src/states/portState.ts:62](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L62)

___

### isConnectionEnabled

• `get` **isConnectionEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/portState.ts:259](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L259)

___

### label

• `get` **label**(): `string`

#### Returns

`string`

#### Defined in

[lib/src/states/portState.ts:102](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L102)

___

### linkDirection

• `get` **linkDirection**(): `undefined` \| ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"right-down"`` \| ``"right-up"``

#### Returns

`undefined` \| ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"right-down"`` \| ``"right-up"``

#### Defined in

[lib/src/states/portState.ts:220](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L220)

___

### node

• `get` **node**(): [`NodeState`](NodeState)

#### Returns

[`NodeState`](NodeState)

#### Defined in

[lib/src/states/portState.ts:163](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L163)

___

### nodeId

• `get` **nodeId**(): `string`

#### Returns

`string`

#### Defined in

[lib/src/states/portState.ts:66](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L66)

___

### offsetRelativeToNode

• `get` **offsetRelativeToNode**(): ``null`` \| [`Point`](../#point)

#### Returns

``null`` \| [`Point`](../#point)

#### Defined in

[lib/src/states/portState.ts:169](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L169)

___

### realSize

• `get` **realSize**(): ``null`` \| [`Point`](../#point)

#### Returns

``null`` \| [`Point`](../#point)

Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
Value can be @type {null} in case reference to real DOM object is not set.

#### Defined in

[lib/src/states/portState.ts:186](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L186)

___

### ref

• `get` **ref**(): [`HtmlElementRefState`](HtmlElementRefState)

#### Returns

[`HtmlElementRefState`](HtmlElementRefState)

#### Defined in

[lib/src/states/portState.ts:74](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L74)

___

### sizeAndPositionRecalculationWithDelay

• `get` **sizeAndPositionRecalculationWithDelay**(): `number`

#### Returns

`number`

#### Defined in

[lib/src/states/portState.ts:255](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L255)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Defined in

[lib/src/states/portState.ts:110](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L110)

___

### validForConnection

• `get` **validForConnection**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/portState.ts:94](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L94)

• `set` **validForConnection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/portState.ts:98](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L98)

## Methods

### export

▸ **export**(): [`IPortStateWithIds`](../interfaces/IPortStateWithIds)

#### Returns

[`IPortStateWithIds`](../interfaces/IPortStateWithIds)

#### Defined in

[lib/src/states/portState.ts:145](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L145)

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

#### Defined in

[lib/src/states/portState.ts:121](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L121)

___

### recalculateSizeAndPosition

▸ **recalculateSizeAndPosition**(): `void`

#### Returns

`void`

#### Defined in

[lib/src/states/portState.ts:247](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L247)

___

### recalculateSizeAndPositionWithoutDelay

▸ **recalculateSizeAndPositionWithoutDelay**(): `void`

#### Returns

`void`

#### Defined in

[lib/src/states/portState.ts:251](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L251)

___

### setComponent

▸ **setComponent**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | ``null`` \| [`VisualComponent`](../#visualcomponent)<[`IPortVisualComponentProps`](../interfaces/IPortVisualComponentProps)<`any`\>\> |

#### Returns

`void`

#### Defined in

[lib/src/states/portState.ts:190](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L190)

___

### setExtra

▸ **setExtra**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[lib/src/states/portState.ts:159](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L159)

___

### setIsConnectionEnabled

▸ **setIsConnectionEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/portState.ts:265](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L265)

___

### setLabel

▸ **setLabel**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `string` |

#### Returns

`void`

#### Defined in

[lib/src/states/portState.ts:106](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L106)

___

### setLinkDirection

▸ **setLinkDirection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``"left"`` \| ``"right"`` \| ``"up"`` \| ``"down"`` \| ``"left-down"`` \| ``"left-up"`` \| ``"right-down"`` \| ``"right-up"`` |

#### Returns

`void`

#### Defined in

[lib/src/states/portState.ts:239](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L239)

___

### setLinkDirectionIfNotYet

▸ **setLinkDirectionIfNotYet**(`direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `direction` | [`DirectionWithDiagonals`](../#directionwithdiagonals) |

#### Returns

`void`

#### Defined in

[lib/src/states/portState.ts:243](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L243)

___

### setType

▸ **setType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `string` |

#### Returns

`void`

#### Defined in

[lib/src/states/portState.ts:114](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L114)

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

#### Defined in

[lib/src/states/portState.ts:133](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/portState.ts#L133)
