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
| `rootStore` | [`RootStore`](RootStore) |

## Methods

### dragStateChanged

▸ **dragStateChanged**(`nodes`, `started`): `undefined` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`NodeState`](NodeState)[] |
| `started` | `boolean` |

#### Returns

`undefined` \| `void`

___

### export

▸ **export**(): [`ICallbacks`](../interfaces/ICallbacks)

#### Returns

[`ICallbacks`](../interfaces/ICallbacks)

___

### import

▸ **import**(`callbacks?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbacks?` | [`ICallbacks`](../interfaces/ICallbacks) |

#### Returns

`void`

___

### nodePositionChanged

▸ **nodePositionChanged**(`node`, `oldPosition`, `newPosition`, `isDragActive`): `undefined` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`NodeState`](NodeState) |
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
| `addResults` | [`SuccessOrErrorResult`](../#successorerrorresult)<[`NodeState`](NodeState), [`INodeState`](../interfaces/INodeState)\>[] |
| `importing` | `boolean` |

#### Returns

`undefined` \| `void`

___

### validateLinkEndpoints

▸ **validateLinkEndpoints**(`source`, `target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`PortState`](PortState) |
| `target` | [`PortState`](PortState) |

#### Returns

`boolean`
