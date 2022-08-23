---
id: "LinkState"
title: "Class: LinkState"
sidebar_label: "LinkState"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`ILinkState`](../interfaces/ILinkState.md)
- [`ILinkInteractionState`](../interfaces/ILinkInteractionState.md)

## Constructors

### constructor

• **new LinkState**(`rootStore`, `id`, `state`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](RootStore.md) |
| `id` | `string` |
| `state` | [`ILinkStateWithoutId`](../interfaces/ILinkStateWithoutId.md) |

## Accessors

### componentDefinition

• `get` **componentDefinition**(): [`VisualComponentState`](VisualComponentState.md)<[`ILinkVisualComponentProps`](../interfaces/ILinkVisualComponentProps.md)<`any`\>, `any`\>

#### Returns

[`VisualComponentState`](VisualComponentState.md)<[`ILinkVisualComponentProps`](../interfaces/ILinkVisualComponentProps.md)<`any`\>, `any`\>

___

### data

• `get` **data**(): `any`

#### Returns

`any`

#### Implementation of

[ILinkState](../interfaces/ILinkState.md).[data](../interfaces/ILinkState.md#data)

___

### hovered

• `get` **hovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState.md).[hovered](../interfaces/ILinkInteractionState.md#hovered)

• `set` **hovered**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState.md).[hovered](../interfaces/ILinkInteractionState.md#hovered)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Implementation of

[ILinkState](../interfaces/ILinkState.md).[id](../interfaces/ILinkState.md#id)

___

### isSelectionEnabled

• `get` **isSelectionEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkState](../interfaces/ILinkState.md).[isSelectionEnabled](../interfaces/ILinkState.md#isselectionenabled)

___

### path

• `get` **path**(): `undefined` \| [`ILinkPath`](../interfaces/ILinkPath.md)

#### Returns

`undefined` \| [`ILinkPath`](../interfaces/ILinkPath.md)

___

### segments

• `get` **segments**(): [`ILinkSegment`](../interfaces/ILinkSegment.md)[]

#### Returns

[`ILinkSegment`](../interfaces/ILinkSegment.md)[]

#### Implementation of

[ILinkState](../interfaces/ILinkState.md).[segments](../interfaces/ILinkState.md#segments)

___

### selected

• `get` **selected**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState.md).[selected](../interfaces/ILinkInteractionState.md#selected)

• `set` **selected**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState.md).[selected](../interfaces/ILinkInteractionState.md#selected)

___

### source

• `get` **source**(): [`LinkPortEndpointState`](LinkPortEndpointState.md)

#### Returns

[`LinkPortEndpointState`](LinkPortEndpointState.md)

#### Implementation of

[ILinkState](../interfaces/ILinkState.md).[source](../interfaces/ILinkState.md#source)

___

### target

• `get` **target**(): [`LinkPortEndpointState`](LinkPortEndpointState.md)

#### Returns

[`LinkPortEndpointState`](LinkPortEndpointState.md)

#### Implementation of

[ILinkState](../interfaces/ILinkState.md).[target](../interfaces/ILinkState.md#target)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Implementation of

[ILinkState](../interfaces/ILinkState.md).[type](../interfaces/ILinkState.md#type)

## Methods

### export

▸ **export**(): [`ILinkStateWithId`](../interfaces/ILinkStateWithId.md)

#### Returns

[`ILinkStateWithId`](../interfaces/ILinkStateWithId.md)

___

### import

▸ **import**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ILinkStateWithoutId`](../interfaces/ILinkStateWithoutId.md) |

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

### setIsSelectionEnabled

▸ **setIsSelectionEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `boolean` |

#### Returns

`void`

___

### setSegments

▸ **setSegments**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| [`ILinkSegment`](../interfaces/ILinkSegment.md)[] |

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
