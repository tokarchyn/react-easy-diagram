---
id: "LinkState"
title: "Class: LinkState"
sidebar_label: "LinkState"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`ILinkState`](../interfaces/ILinkState)
- [`ILinkInteractionState`](../interfaces/ILinkInteractionState)

## Constructors

### constructor

• **new LinkState**(`rootStore`, `id`, `state`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](RootStore) |
| `id` | `string` |
| `state` | [`ILinkStateWithoutId`](../interfaces/ILinkStateWithoutId) |

#### Defined in

[lib/src/states/linkState.ts:26](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L26)

## Accessors

### componentDefinition

• `get` **componentDefinition**(): [`VisualComponentState`](VisualComponentState)<[`ILinkVisualComponentProps`](../interfaces/ILinkVisualComponentProps)<`any`\>\>

#### Returns

[`VisualComponentState`](VisualComponentState)<[`ILinkVisualComponentProps`](../interfaces/ILinkVisualComponentProps)<`any`\>\>

#### Defined in

[lib/src/states/linkState.ts:95](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L95)

___

### extra

• `get` **extra**(): `any`

#### Returns

`any`

#### Implementation of

[ILinkState](../interfaces/ILinkState).[extra](../interfaces/ILinkState#extra)

#### Defined in

[lib/src/states/linkState.ts:116](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L116)

___

### hovered

• `get` **hovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState).[hovered](../interfaces/ILinkInteractionState#hovered)

#### Defined in

[lib/src/states/linkState.ts:108](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L108)

• `set` **hovered**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState).[hovered](../interfaces/ILinkInteractionState#hovered)

#### Defined in

[lib/src/states/linkState.ts:112](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L112)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Implementation of

[ILinkState](../interfaces/ILinkState).[id](../interfaces/ILinkState#id)

#### Defined in

[lib/src/states/linkState.ts:71](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L71)

___

### isSelectionEnabled

• `get` **isSelectionEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkState](../interfaces/ILinkState).[isSelectionEnabled](../interfaces/ILinkState#isselectionenabled)

#### Defined in

[lib/src/states/linkState.ts:132](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L132)

___

### path

• `get` **path**(): `undefined` \| [`ILinkPath`](../interfaces/ILinkPath)

#### Returns

`undefined` \| [`ILinkPath`](../interfaces/ILinkPath)

#### Defined in

[lib/src/states/linkState.ts:91](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L91)

___

### segments

• `get` **segments**(): [`ILinkSegment`](../interfaces/ILinkSegment)[]

#### Returns

[`ILinkSegment`](../interfaces/ILinkSegment)[]

#### Implementation of

[ILinkState](../interfaces/ILinkState).[segments](../interfaces/ILinkState#segments)

#### Defined in

[lib/src/states/linkState.ts:83](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L83)

___

### selected

• `get` **selected**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState).[selected](../interfaces/ILinkInteractionState#selected)

#### Defined in

[lib/src/states/linkState.ts:100](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L100)

• `set` **selected**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState).[selected](../interfaces/ILinkInteractionState#selected)

#### Defined in

[lib/src/states/linkState.ts:104](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L104)

___

### source

• `get` **source**(): [`LinkPortEndpointState`](LinkPortEndpointState)

#### Returns

[`LinkPortEndpointState`](LinkPortEndpointState)

#### Implementation of

[ILinkState](../interfaces/ILinkState).[source](../interfaces/ILinkState#source)

#### Defined in

[lib/src/states/linkState.ts:120](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L120)

___

### target

• `get` **target**(): [`LinkPortEndpointState`](LinkPortEndpointState)

#### Returns

[`LinkPortEndpointState`](LinkPortEndpointState)

#### Implementation of

[ILinkState](../interfaces/ILinkState).[target](../interfaces/ILinkState#target)

#### Defined in

[lib/src/states/linkState.ts:124](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L124)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Implementation of

[ILinkState](../interfaces/ILinkState).[type](../interfaces/ILinkState#type)

#### Defined in

[lib/src/states/linkState.ts:75](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L75)

## Methods

### export

▸ **export**(): [`ILinkStateWithId`](../interfaces/ILinkStateWithId)

#### Returns

[`ILinkStateWithId`](../interfaces/ILinkStateWithId)

#### Defined in

[lib/src/states/linkState.ts:59](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L59)

___

### import

▸ **import**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ILinkStateWithoutId`](../interfaces/ILinkStateWithoutId) |

#### Returns

`void`

#### Defined in

[lib/src/states/linkState.ts:40](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L40)

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

[lib/src/states/linkState.ts:128](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L128)

___

### setIsSelectionEnabled

▸ **setIsSelectionEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/linkState.ts:138](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L138)

___

### setSegments

▸ **setSegments**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| [`ILinkSegment`](../interfaces/ILinkSegment)[] |

#### Returns

`void`

#### Defined in

[lib/src/states/linkState.ts:87](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L87)

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

[lib/src/states/linkState.ts:79](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkState.ts#L79)
