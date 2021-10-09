---
id: "LinkPortEndpointState"
title: "Class: LinkPortEndpointState"
sidebar_label: "LinkPortEndpointState"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint)

## Constructors

### constructor

• **new LinkPortEndpointState**(`nodeId`, `portId`, `rootStore`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |
| `portId` | `string` |
| `rootStore` | [`RootStore`](RootStore) |

#### Defined in

[lib/src/states/linkPortEndpointState.ts:14](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkPortEndpointState.ts#L14)

## Accessors

### node

• `get` **node**(): `undefined` \| [`NodeState`](NodeState)

#### Returns

`undefined` \| [`NodeState`](NodeState)

#### Defined in

[lib/src/states/linkPortEndpointState.ts:35](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkPortEndpointState.ts#L35)

___

### nodeId

• `get` **nodeId**(): `string`

#### Returns

`string`

#### Implementation of

[ILinkPortEndpoint](../interfaces/ILinkPortEndpoint).[nodeId](../interfaces/ILinkPortEndpoint#nodeid)

#### Defined in

[lib/src/states/linkPortEndpointState.ts:27](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkPortEndpointState.ts#L27)

___

### point

• `get` **point**(): `undefined` \| [`Point`](../#point)

#### Returns

`undefined` \| [`Point`](../#point)

#### Defined in

[lib/src/states/linkPortEndpointState.ts:43](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkPortEndpointState.ts#L43)

___

### port

• `get` **port**(): `undefined` \| [`PortState`](PortState)

#### Returns

`undefined` \| [`PortState`](PortState)

#### Defined in

[lib/src/states/linkPortEndpointState.ts:39](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkPortEndpointState.ts#L39)

___

### portId

• `get` **portId**(): `string`

#### Returns

`string`

#### Implementation of

[ILinkPortEndpoint](../interfaces/ILinkPortEndpoint).[portId](../interfaces/ILinkPortEndpoint#portid)

#### Defined in

[lib/src/states/linkPortEndpointState.ts:31](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkPortEndpointState.ts#L31)

## Methods

### export

▸ **export**(): [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint)

#### Returns

[`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint)

#### Defined in

[lib/src/states/linkPortEndpointState.ts:21](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkPortEndpointState.ts#L21)
