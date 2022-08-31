---
id: "LinkState"
title: "Class: LinkState"
sidebar_label: "LinkState"
sidebar_position: 0
custom_edit_url: null
---

## Implements

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

___

### isSelectionEnabled

• `get` **isSelectionEnabled**(): `boolean`

#### Returns

`boolean`

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

• `get` **source**(): `undefined` \| [`LinkPortEndpointState`](LinkPortEndpointState.md)

#### Returns

`undefined` \| [`LinkPortEndpointState`](LinkPortEndpointState.md)

___

### sourceEndpoint

• `get` **sourceEndpoint**(): [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md)

#### Returns

[`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md)

___

### target

• `get` **target**(): `undefined` \| [`LinkPortEndpointState`](LinkPortEndpointState.md)

#### Returns

`undefined` \| [`LinkPortEndpointState`](LinkPortEndpointState.md)

___

### targetEndpoint

• `get` **targetEndpoint**(): [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md)

#### Returns

[`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

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
