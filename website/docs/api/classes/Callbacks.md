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

### drag

▸ **drag**(`info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnDrag`](../interfaces/OnDrag.md) |

#### Returns

`void`

___

### dragEnded

▸ **dragEnded**(`info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnDragEnded`](../interfaces/OnDragEnded.md) |

#### Returns

`void`

___

### dragStarted

▸ **dragStarted**(`info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnDragStarted`](../interfaces/OnDragStarted.md) |

#### Returns

`void`

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

### linkValidation

▸ **linkValidation**(`info`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnLinkValidation`](../interfaces/OnLinkValidation.md) |

#### Returns

`boolean`

___

### linkingEnded

▸ **linkingEnded**(`info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnLinkingEnded`](../interfaces/OnLinkingEnded.md) |

#### Returns

`void`

___

### linkingStarted

▸ **linkingStarted**(`info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnLinkingStarted`](../interfaces/OnLinkingStarted.md) |

#### Returns

`void`

___

### linksAdded

▸ **linksAdded**(`info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnLinksAddResult`](../interfaces/OnLinksAddResult.md) |

#### Returns

`void`

___

### linksRemoved

▸ **linksRemoved**(`info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnLinksRemoveResult`](../interfaces/OnLinksRemoveResult.md) |

#### Returns

`void`

___

### nodePositionChanged

▸ **nodePositionChanged**(`info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnNodePositionChanged`](../interfaces/OnNodePositionChanged.md) |

#### Returns

`void`

___

### nodesAdded

▸ **nodesAdded**(`info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnNodesAddResult`](../interfaces/OnNodesAddResult.md) |

#### Returns

`void`

___

### nodesRemoved

▸ **nodesRemoved**(`info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`OnNodesRemoveResult`](../interfaces/OnNodesRemoveResult.md) |

#### Returns

`void`
