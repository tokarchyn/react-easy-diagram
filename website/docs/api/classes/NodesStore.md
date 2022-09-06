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
| `rootStore` | [`RootStore`](RootStore.md) |

## Accessors

### nodes

• `get` **nodes**(): `ReadonlyMap`<`string`, [`NodeState`](NodeState.md)\>

#### Returns

`ReadonlyMap`<`string`, [`NodeState`](NodeState.md)\>

## Methods

### addNode

▸ **addNode**(`node`, `rewriteIfExists?`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`NodeState`](NodeState.md), [`INodeState`](../interfaces/INodeState.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `node` | [`INodeState`](../interfaces/INodeState.md) | `undefined` |
| `rewriteIfExists` | `boolean` | `false` |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`NodeState`](NodeState.md), [`INodeState`](../interfaces/INodeState.md)\>

___

### addNodes

▸ **addNodes**(`nodes`, `rewriteIfExists?`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`NodeState`](NodeState.md), [`INodeState`](../interfaces/INodeState.md)\>[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `nodes` | [`INodeState`](../interfaces/INodeState.md)[] | `undefined` |
| `rewriteIfExists` | `boolean` | `false` |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`NodeState`](NodeState.md), [`INodeState`](../interfaces/INodeState.md)\>[]

___

### export

▸ **export**(): [`INodeStateWithId`](../interfaces/INodeStateWithId.md)[]

#### Returns

[`INodeStateWithId`](../interfaces/INodeStateWithId.md)[]

___

### getNode

▸ **getNode**(`nodeId`): `undefined` \| [`NodeState`](NodeState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

#### Returns

`undefined` \| [`NodeState`](NodeState.md)

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
| `newNodes?` | [`INodeState`](../interfaces/INodeState.md)[] |

#### Returns

`void`

___

### removeNode

▸ **removeNode**(`nodeId`): `undefined` \| [`INodeExport`](../interfaces/INodeExport.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeId` | `string` |

#### Returns

`undefined` \| [`INodeExport`](../interfaces/INodeExport.md)

___

### removeNodes

▸ **removeNodes**(`nodeIds`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`INodeExport`](../interfaces/INodeExport.md), `string`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeIds` | `string`[] |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`INodeExport`](../interfaces/INodeExport.md), `string`\>[]
