---
id: "ICallbacks"
title: "Interface: ICallbacks"
sidebar_label: "ICallbacks"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### dragStateChanged

▸ `Optional` **dragStateChanged**(`nodes`, `started`, `rootStore`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`NodeState`](../classes/NodeState)[] |
| `started` | `boolean` |
| `rootStore` | [`RootStore`](../classes/RootStore) |

#### Returns

`void`

#### Defined in

[lib/src/states/callbacks.ts:96](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/callbacks.ts#L96)

___

### nodePositionChanged

▸ `Optional` **nodePositionChanged**(`node`, `oldPosition`, `newPosition`, `isDragActive`, `rootStore`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`NodeState`](../classes/NodeState) |
| `oldPosition` | [`Point`](../#point) |
| `newPosition` | [`Point`](../#point) |
| `isDragActive` | `boolean` |
| `rootStore` | [`RootStore`](../classes/RootStore) |

#### Returns

`void`

#### Defined in

[lib/src/states/callbacks.ts:89](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/callbacks.ts#L89)

___

### nodesAdded

▸ `Optional` **nodesAdded**(`addedNodes`, `failedToAdd`, `importing`, `rootStore`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addedNodes` | [`NodeState`](../classes/NodeState)[] |
| `failedToAdd` | { `error?`: `string` ; `success`: ``false`` ; `value`: [`INodeState`](INodeState)  }[] |
| `importing` | `boolean` |
| `rootStore` | [`RootStore`](../classes/RootStore) |

#### Returns

`void`

#### Defined in

[lib/src/states/callbacks.ts:83](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/callbacks.ts#L83)

___

### validateLinkEndpoints

▸ `Optional` **validateLinkEndpoints**(`source`, `target`, `rootStore`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`PortState`](../classes/PortState) |
| `target` | [`PortState`](../classes/PortState) |
| `rootStore` | [`RootStore`](../classes/RootStore) |

#### Returns

`boolean`

#### Defined in

[lib/src/states/callbacks.ts:78](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/callbacks.ts#L78)
