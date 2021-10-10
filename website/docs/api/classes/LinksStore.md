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
| `rootStore` | [`RootStore`](RootStore) |

## Accessors

### linkCreation

• `get` **linkCreation**(): [`LinkCreationState`](LinkCreationState)

#### Returns

[`LinkCreationState`](LinkCreationState)

___

### links

• `get` **links**(): `ReadonlyMap`<`string`, [`LinkState`](LinkState)\>

#### Returns

`ReadonlyMap`<`string`, [`LinkState`](LinkState)\>

## Methods

### addLink

▸ **addLink**(`link`): [`LinkState`](LinkState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | [`ILinkState`](../interfaces/ILinkState) |

#### Returns

[`LinkState`](LinkState)

___

### areEndpointsConnected

▸ **areEndpointsConnected**(`source`, `target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint) |
| `target` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint) |

#### Returns

`boolean`

___

### export

▸ **export**(): [`ILinkState`](../interfaces/ILinkState)[]

#### Returns

[`ILinkState`](../interfaces/ILinkState)[]

___

### getEndpointPort

▸ **getEndpointPort**(`endpoint`): `undefined` \| [`PortState`](PortState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint) |

#### Returns

`undefined` \| [`PortState`](PortState)

___

### getEndpointPortOrError

▸ **getEndpointPortOrError**(`endpoint`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`PortState`](PortState), `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`PortState`](PortState), `undefined`\>

___

### getLink

▸ **getLink**(`id`): `undefined` \| [`LinkState`](LinkState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`LinkState`](LinkState)

___

### getLinkForEndpointsIfExists

▸ **getLinkForEndpointsIfExists**(`source`, `target`): `undefined` \| [`LinkState`](LinkState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint) |
| `target` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint) |

#### Returns

`undefined` \| [`LinkState`](LinkState)

___

### getNodeLinks

▸ **getNodeLinks**(`nodeId`): [`LinkState`](LinkState)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

#### Returns

[`LinkState`](LinkState)[]

___

### getPortLinks

▸ **getPortLinks**(`nodeId`, `portId`): [`LinkState`](LinkState)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |
| `portId` | `string` |

#### Returns

[`LinkState`](LinkState)[]

___

### import

▸ **import**(`newLinks?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newLinks?` | [`ILinkState`](../interfaces/ILinkState)[] |

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

▸ **validateAndAddLink**(`link`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`LinkState`](LinkState), `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | [`ILinkState`](../interfaces/ILinkState) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`LinkState`](LinkState), `undefined`\>

___

### validateLink

▸ **validateLink**(`link`): [`SuccessOrErrorResult`](../#successorerrorresult)<`undefined`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | [`ILinkState`](../interfaces/ILinkState) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<`undefined`, `undefined`\>

___

### validateLinkProperties

▸ **validateLinkProperties**(`link`): [`SuccessOrErrorResult`](../#successorerrorresult)<`undefined`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | [`ILinkState`](../interfaces/ILinkState) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<`undefined`, `undefined`\>
