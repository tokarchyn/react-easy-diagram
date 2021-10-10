---
id: "NodesStore"
title: "Class: NodesStore"
sidebar_label: "NodesStore"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new NodesStore**(`rootStore`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](RootStore) |

## Accessors

### nodes

• `get` **nodes**(): `ReadonlyMap`<`string`, [`NodeState`](NodeState)\>

#### Returns

`ReadonlyMap`<`string`, [`NodeState`](NodeState)\>

## Methods

### addNode

▸ **addNode**(`node`, `rewriteIfExists?`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`NodeState`](NodeState), [`INodeState`](../interfaces/INodeState)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `node` | [`INodeState`](../interfaces/INodeState) | `undefined` |
| `rewriteIfExists` | `boolean` | `false` |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`NodeState`](NodeState), [`INodeState`](../interfaces/INodeState)\>

___

### addNodes

▸ **addNodes**(`nodes`, `rewriteIfExists?`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`NodeState`](NodeState), [`INodeState`](../interfaces/INodeState)\>[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `nodes` | [`INodeState`](../interfaces/INodeState)[] | `undefined` |
| `rewriteIfExists` | `boolean` | `false` |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`NodeState`](NodeState), [`INodeState`](../interfaces/INodeState)\>[]

___

### export

▸ **export**(): [`INodeStateWithId`](../interfaces/INodeStateWithId)[]

#### Returns

[`INodeStateWithId`](../interfaces/INodeStateWithId)[]

___

### getNode

▸ **getNode**(`nodeId`): `undefined` \| [`NodeState`](NodeState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

#### Returns

`undefined` \| [`NodeState`](NodeState)

___

### getNodesBoundingBox

▸ **getNodesBoundingBox**(): [`BoundingBox`](../#boundingbox)

#### Returns

[`BoundingBox`](../#boundingbox)

Values are calculated without zoom taking into account, that is, the same as zoom would be '1'

___

### import

▸ **import**(`newNodes?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newNodes?` | [`INodeState`](../interfaces/INodeState)[] |

#### Returns

`void`

___

### removeNode

▸ **removeNode**(`nodeId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

#### Returns

`boolean`
