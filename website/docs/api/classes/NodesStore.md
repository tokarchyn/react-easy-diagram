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

#### Defined in

[lib/src/states/nodesStore.ts:19](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodesStore.ts#L19)

## Accessors

### nodes

• `get` **nodes**(): `ReadonlyMap`<`string`, [`NodeState`](NodeState)\>

#### Returns

`ReadonlyMap`<`string`, [`NodeState`](NodeState)\>

#### Defined in

[lib/src/states/nodesStore.ts:24](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodesStore.ts#L24)

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

#### Defined in

[lib/src/states/nodesStore.ts:62](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodesStore.ts#L62)

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

#### Defined in

[lib/src/states/nodesStore.ts:40](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodesStore.ts#L40)

___

### export

▸ **export**(): [`INodeStateWithId`](../interfaces/INodeStateWithId)[]

#### Returns

[`INodeStateWithId`](../interfaces/INodeStateWithId)[]

#### Defined in

[lib/src/states/nodesStore.ts:37](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodesStore.ts#L37)

___

### getNode

▸ **getNode**(`nodeId`): `undefined` \| [`NodeState`](NodeState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

#### Returns

`undefined` \| [`NodeState`](NodeState)

#### Defined in

[lib/src/states/nodesStore.ts:100](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodesStore.ts#L100)

___

### getNodesBoundingBox

▸ **getNodesBoundingBox**(): [`BoundingBox`](../#boundingbox)

#### Returns

[`BoundingBox`](../#boundingbox)

Values are calculated without zoom taking into account, that is, the same as zoom would be '1'

#### Defined in

[lib/src/states/nodesStore.ts:107](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodesStore.ts#L107)

___

### import

▸ **import**(`newNodes?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newNodes?` | [`INodeState`](../interfaces/INodeState)[] |

#### Returns

`void`

#### Defined in

[lib/src/states/nodesStore.ts:28](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodesStore.ts#L28)

___

### removeNode

▸ **removeNode**(`nodeId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

#### Returns

`boolean`

#### Defined in

[lib/src/states/nodesStore.ts:89](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodesStore.ts#L89)
