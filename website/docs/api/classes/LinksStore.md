---
id: "LinksStore"
title: "Class: LinksStore"
sidebar_label: "LinksStore"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new LinksStore**(`rootStore`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](RootStore.md) |

## Accessors

### linkCreation

• `get` **linkCreation**(): [`LinkCreationState`](LinkCreationState.md)

#### Returns

[`LinkCreationState`](LinkCreationState.md)

___

### links

• `get` **links**(): `ReadonlyMap`<`string`, [`LinkState`](LinkState.md)\>

#### Returns

`ReadonlyMap`<`string`, [`LinkState`](LinkState.md)\>

## Methods

### addLink

▸ **addLink**(`link`): [`LinkState`](LinkState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | [`ILinkState`](../interfaces/ILinkState.md) |

#### Returns

[`LinkState`](LinkState.md)

___

### areEndpointsConnected

▸ **areEndpointsConnected**(`source`, `target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md) |
| `target` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md) |

#### Returns

`boolean`

___

### export

▸ **export**(): [`ILinkState`](../interfaces/ILinkState.md)[]

#### Returns

[`ILinkState`](../interfaces/ILinkState.md)[]

___

### getEndpointPort

▸ **getEndpointPort**(`endpoint`): `undefined` \| [`PortState`](PortState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md) |

#### Returns

`undefined` \| [`PortState`](PortState.md)

___

### getEndpointPortOrError

▸ **getEndpointPortOrError**(`endpoint`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`PortState`](PortState.md), `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`PortState`](PortState.md), `undefined`\>

___

### getLink

▸ **getLink**(`id`): `undefined` \| [`LinkState`](LinkState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`LinkState`](LinkState.md)

___

### getLinkForEndpointsIfExists

▸ **getLinkForEndpointsIfExists**(`source`, `target`): `undefined` \| [`LinkState`](LinkState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md) |
| `target` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md) |

#### Returns

`undefined` \| [`LinkState`](LinkState.md)

___

### getNodeLinks

▸ **getNodeLinks**(`nodeId`): [`LinkState`](LinkState.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

#### Returns

[`LinkState`](LinkState.md)[]

___

### getPortLinks

▸ **getPortLinks**(`nodeId`, `portId`): [`LinkState`](LinkState.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |
| `portId` | `string` |

#### Returns

[`LinkState`](LinkState.md)[]

___

### import

▸ **import**(`newLinks?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newLinks?` | [`ILinkState`](../interfaces/ILinkState.md)[] |

#### Returns

`void`

___

### removeLink

▸ **removeLink**(`linkId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkId` | `string` |

#### Returns

`boolean`

___

### removeNodeLinks

▸ **removeNodeLinks**(`nodeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

#### Returns

`void`

___

### removePortLinks

▸ **removePortLinks**(`nodeId`, `portId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |
| `portId` | `string` |

#### Returns

`void`

___

### validateAndAddLink

▸ **validateAndAddLink**(`link`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`LinkState`](LinkState.md), `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | [`ILinkState`](../interfaces/ILinkState.md) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`LinkState`](LinkState.md), `undefined`\>

___

### validateLink

▸ **validateLink**(`link`): [`SuccessOrErrorResult`](../#successorerrorresult)<`undefined`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | [`ILinkState`](../interfaces/ILinkState.md) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<`undefined`, `undefined`\>

___

### validateLinkProperties

▸ **validateLinkProperties**(`link`): [`SuccessOrErrorResult`](../#successorerrorresult)<`undefined`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | [`ILinkState`](../interfaces/ILinkState.md) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<`undefined`, `undefined`\>
