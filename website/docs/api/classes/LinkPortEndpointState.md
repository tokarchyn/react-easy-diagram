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

• **new LinkPortEndpointState**(`port`, `rootStore`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | [`PortState`](PortState.md) |
| `rootStore` | [`RootStore`](RootStore.md) |

## Accessors

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

• `get` **port**(): [`PortState`](PortState.md)

#### Returns

[`PortState`](PortState.md)

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
