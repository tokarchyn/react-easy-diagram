---
id: "Callbacks"
title: "Class: Callbacks"
sidebar_label: "Callbacks"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new Callbacks**(`rootStore`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](RootStore.md) |

## Methods

### dragStateChanged

▸ **dragStateChanged**(`nodes`, `started`): `undefined` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`NodeState`](NodeState.md)[] |
| `started` | `boolean` |

#### Returns

`undefined` \| `void`

___

### export

▸ **export**(): [`ICallbacks`](../interfaces/ICallbacks.md)

#### Returns

[`ICallbacks`](../interfaces/ICallbacks.md)

___

### import

▸ **import**(`callbacks?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbacks?` | [`ICallbacks`](../interfaces/ICallbacks.md) |

#### Returns

`void`

___

### importedStateRendered

▸ **importedStateRendered**(): `void`

#### Returns

`void`

___

### nodePositionChanged

▸ **nodePositionChanged**(`node`, `oldPosition`, `newPosition`, `isDragActive`): `undefined` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`NodeState`](NodeState.md) |
| `oldPosition` | [`Point`](../#point) |
| `newPosition` | [`Point`](../#point) |
| `isDragActive` | `boolean` |

#### Returns

`undefined` \| `void`

___

### nodesAdded

▸ **nodesAdded**(`addResults`, `importing`): `undefined` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addResults` | [`SuccessOrErrorResult`](../#successorerrorresult)<[`NodeState`](NodeState.md), [`INodeState`](../interfaces/INodeState.md)\>[] |
| `importing` | `boolean` |

#### Returns

`undefined` \| `void`

___

### validateLinkEndpoints

▸ **validateLinkEndpoints**(`source`, `target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`PortState`](PortState.md) |
| `target` | [`PortState`](PortState.md) |

#### Returns

`boolean`
