---
id: "LinkPortEndpointState"
title: "Class: LinkPortEndpointState"
sidebar_label: "LinkPortEndpointState"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md)

## Constructors

### constructor

• **new LinkPortEndpointState**(`nodeId`, `portId`, `rootStore`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |
| `portId` | `string` |
| `rootStore` | [`RootStore`](RootStore.md) |

## Accessors

### node

• `get` **node**(): `undefined` \| [`NodeState`](NodeState.md)

#### Returns

`undefined` \| [`NodeState`](NodeState.md)

___

### nodeId

• `get` **nodeId**(): `string`

#### Returns

`string`

#### Implementation of

[ILinkPortEndpoint](../interfaces/ILinkPortEndpoint.md).[nodeId](../interfaces/ILinkPortEndpoint.md#nodeid)

___

### point

• `get` **point**(): `undefined` \| [`Point`](../#point)

#### Returns

`undefined` \| [`Point`](../#point)

___

### port

• `get` **port**(): `undefined` \| [`PortState`](PortState.md)

#### Returns

`undefined` \| [`PortState`](PortState.md)

___

### portId

• `get` **portId**(): `string`

#### Returns

`string`

#### Implementation of

[ILinkPortEndpoint](../interfaces/ILinkPortEndpoint.md).[portId](../interfaces/ILinkPortEndpoint.md#portid)

## Methods

### export

▸ **export**(): [`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md)

#### Returns

[`ILinkPortEndpoint`](../interfaces/ILinkPortEndpoint.md)
