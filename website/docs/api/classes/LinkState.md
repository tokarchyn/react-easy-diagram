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

## Accessors

### componentDefinition

• `get` **componentDefinition**(): [`VisualComponentState`](VisualComponentState)<[`ILinkVisualComponentProps`](../interfaces/ILinkVisualComponentProps)<`any`\>\>

#### Returns

[`VisualComponentState`](VisualComponentState)<[`ILinkVisualComponentProps`](../interfaces/ILinkVisualComponentProps)<`any`\>\>

___

### extra

• `get` **extra**(): `any`

#### Returns

`any`

#### Implementation of

[ILinkState](../interfaces/ILinkState).[extra](../interfaces/ILinkState#extra)

___

### hovered

• `get` **hovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState).[hovered](../interfaces/ILinkInteractionState#hovered)

• `set` **hovered**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState).[hovered](../interfaces/ILinkInteractionState#hovered)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Implementation of

[ILinkState](../interfaces/ILinkState).[id](../interfaces/ILinkState#id)

___

### isSelectionEnabled

• `get` **isSelectionEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkState](../interfaces/ILinkState).[isSelectionEnabled](../interfaces/ILinkState#isselectionenabled)

___

### path

• `get` **path**(): `undefined` \| [`ILinkPath`](../interfaces/ILinkPath)

#### Returns

`undefined` \| [`ILinkPath`](../interfaces/ILinkPath)

___

### segments

• `get` **segments**(): [`ILinkSegment`](../interfaces/ILinkSegment)[]

#### Returns

[`ILinkSegment`](../interfaces/ILinkSegment)[]

#### Implementation of

[ILinkState](../interfaces/ILinkState).[segments](../interfaces/ILinkState#segments)

___

### selected

• `get` **selected**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState).[selected](../interfaces/ILinkInteractionState#selected)

• `set` **selected**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState).[selected](../interfaces/ILinkInteractionState#selected)

___

### source

• `get` **source**(): [`LinkPortEndpointState`](LinkPortEndpointState)

#### Returns

[`LinkPortEndpointState`](LinkPortEndpointState)

#### Implementation of

[ILinkState](../interfaces/ILinkState).[source](../interfaces/ILinkState#source)

___

### target

• `get` **target**(): [`LinkPortEndpointState`](LinkPortEndpointState)

#### Returns

[`LinkPortEndpointState`](LinkPortEndpointState)

#### Implementation of

[ILinkState](../interfaces/ILinkState).[target](../interfaces/ILinkState#target)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Implementation of

[ILinkState](../interfaces/ILinkState).[type](../interfaces/ILinkState#type)

## Methods

### export

▸ **export**(): [`ILinkStateWithId`](../interfaces/ILinkStateWithId)

#### Returns

[`ILinkStateWithId`](../interfaces/ILinkStateWithId)

___

### import

▸ **import**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ILinkStateWithoutId`](../interfaces/ILinkStateWithoutId) |

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
| `value` | `undefined` \| ``null`` \| [`ILinkSegment`](../interfaces/ILinkSegment)[] |

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
