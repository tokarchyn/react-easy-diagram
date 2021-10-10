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

## Accessors

### node

• `get` **node**(): `undefined` \| [`NodeState`](NodeState)

#### Returns

`undefined` \| [`NodeState`](NodeState)

___

### nodeId

• `get` **nodeId**(): `string`

#### Returns

`string`

#### Implementation of

[ILinkPortEndpoint](../interfaces/ILinkPortEndpoint).[nodeId](../interfaces/ILinkPortEndpoint#nodeid)

___

### point

• `get` **point**(): `undefined` \| [`Point`](../#point)

#### Returns

`undefined` \| [`Point`](../#point)

___

### port

• `get` **port**(): `undefined` \| [`PortState`](PortState)

#### Returns

`undefined` \| [`PortState`](PortState)

___

### portId

• `get` **portId**(): `string`

#### Returns

`string`

#### Implementation of

[ILinkPortEndpoint](../interfaces/ILinkPortEndpoint).[portId](../interfaces/ILinkPortEndpoint#portid)

## Methods

### export

▸ **export**(): [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint)

#### Returns

[`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint)
