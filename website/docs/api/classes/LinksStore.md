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

#### Defined in

[lib/src/states/linksStore.ts:25](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L25)

## Accessors

### linkCreation

• `get` **linkCreation**(): [`LinkCreationState`](LinkCreationState)

#### Returns

[`LinkCreationState`](LinkCreationState)

#### Defined in

[lib/src/states/linksStore.ts:51](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L51)

___

### links

• `get` **links**(): `ReadonlyMap`<`string`, [`LinkState`](LinkState)\>

#### Returns

`ReadonlyMap`<`string`, [`LinkState`](LinkState)\>

#### Defined in

[lib/src/states/linksStore.ts:47](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L47)

## Methods

### addLink

▸ **addLink**(`link`): [`LinkState`](LinkState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | [`ILinkState`](../interfaces/ILinkState) |

#### Returns

[`LinkState`](LinkState)

#### Defined in

[lib/src/states/linksStore.ts:96](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L96)

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

#### Defined in

[lib/src/states/linksStore.ts:204](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L204)

___

### export

▸ **export**(): [`ILinkState`](../interfaces/ILinkState)[]

#### Returns

[`ILinkState`](../interfaces/ILinkState)[]

#### Defined in

[lib/src/states/linksStore.ts:44](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L44)

___

### getEndpointPort

▸ **getEndpointPort**(`endpoint`): `undefined` \| [`PortState`](PortState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint) |

#### Returns

`undefined` \| [`PortState`](PortState)

#### Defined in

[lib/src/states/linksStore.ts:198](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L198)

___

### getEndpointPortOrError

▸ **getEndpointPortOrError**(`endpoint`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`PortState`](PortState), `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`PortState`](PortState), `undefined`\>

#### Defined in

[lib/src/states/linksStore.ts:181](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L181)

___

### getLink

▸ **getLink**(`id`): `undefined` \| [`LinkState`](LinkState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| [`LinkState`](LinkState)

#### Defined in

[lib/src/states/linksStore.ts:59](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L59)

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

#### Defined in

[lib/src/states/linksStore.ts:211](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L211)

___

### getNodeLinks

▸ **getNodeLinks**(`nodeId`): [`LinkState`](LinkState)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

#### Returns

[`LinkState`](LinkState)[]

#### Defined in

[lib/src/states/linksStore.ts:55](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L55)

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

#### Defined in

[lib/src/states/linksStore.ts:63](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L63)

___

### import

▸ **import**(`newLinks?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newLinks?` | [`ILinkState`](../interfaces/ILinkState)[] |

#### Returns

`void`

#### Defined in

[lib/src/states/linksStore.ts:32](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L32)

___

### removeLink

▸ **removeLink**(`linkId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `linkId` | `string` |

#### Returns

`boolean`

#### Defined in

[lib/src/states/linksStore.ts:118](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L118)

___

### removeNodeLinks

▸ **removeNodeLinks**(`nodeId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

#### Returns

`void`

#### Defined in

[lib/src/states/linksStore.ts:73](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L73)

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

#### Defined in

[lib/src/states/linksStore.ts:78](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L78)

___

### validateAndAddLink

▸ **validateAndAddLink**(`link`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`LinkState`](LinkState), `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | [`ILinkState`](../interfaces/ILinkState) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`LinkState`](LinkState), `undefined`\>

#### Defined in

[lib/src/states/linksStore.ts:109](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L109)

___

### validateLink

▸ **validateLink**(`link`): [`SuccessOrErrorResult`](../#successorerrorresult)<`undefined`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | [`ILinkState`](../interfaces/ILinkState) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<`undefined`, `undefined`\>

#### Defined in

[lib/src/states/linksStore.ts:138](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L138)

___

### validateLinkProperties

▸ **validateLinkProperties**(`link`): [`SuccessOrErrorResult`](../#successorerrorresult)<`undefined`, `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `link` | [`ILinkState`](../interfaces/ILinkState) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<`undefined`, `undefined`\>

#### Defined in

[lib/src/states/linksStore.ts:164](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksStore.ts#L164)
