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
| `nodes` | [`NodeState`](../classes/NodeState.md)[] |
| `started` | `boolean` |
| `rootStore` | [`RootStore`](../classes/RootStore.md) |

#### Returns

`void`

___

### importedStateRendered

▸ `Optional` **importedStateRendered**(`rootStore`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](../classes/RootStore.md) |

#### Returns

`void`

___

### nodePositionChanged

▸ `Optional` **nodePositionChanged**(`node`, `oldPosition`, `newPosition`, `isDragActive`, `rootStore`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`NodeState`](../classes/NodeState.md) |
| `oldPosition` | [`Point`](../#point) |
| `newPosition` | [`Point`](../#point) |
| `isDragActive` | `boolean` |
| `rootStore` | [`RootStore`](../classes/RootStore.md) |

#### Returns

`void`

___

### nodesAdded

▸ `Optional` **nodesAdded**(`addedNodes`, `failedToAdd`, `importing`, `rootStore`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addedNodes` | [`NodeState`](../classes/NodeState.md)[] |
| `failedToAdd` | { `error?`: `string` ; `success`: ``false`` ; `value`: [`INodeState`](INodeState.md)  }[] |
| `importing` | `boolean` |
| `rootStore` | [`RootStore`](../classes/RootStore.md) |

#### Returns

`void`

___

### onLinkingEnd

▸ `Optional` **onLinkingEnd**(`info`, `rootStore`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnLinkingEnd`](OnLinkingEnd.md) |
| `rootStore` | [`RootStore`](../classes/RootStore.md) |

#### Returns

`void`

___

### onLinkingStart

▸ `Optional` **onLinkingStart**(`info`, `rootStore`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnLinkingStart`](OnLinkingStart.md) |
| `rootStore` | [`RootStore`](../classes/RootStore.md) |

#### Returns

`void`

___

### validateLinkEndpoints

▸ `Optional` **validateLinkEndpoints**(`source`, `target`, `rootStore`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`PortState`](../classes/PortState.md) |
| `target` | [`PortState`](../classes/PortState.md) |
| `rootStore` | [`RootStore`](../classes/RootStore.md) |

#### Returns

`boolean`
