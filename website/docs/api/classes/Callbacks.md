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

#### Defined in

[lib/src/states/callbacks.ts:20](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/callbacks.ts#L20)

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

#### Defined in

[lib/src/states/callbacks.ts:72](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/callbacks.ts#L72)

___

### export

▸ **export**(): [`ICallbacks`](../interfaces/ICallbacks)

#### Returns

[`ICallbacks`](../interfaces/ICallbacks)

#### Defined in

[lib/src/states/callbacks.ts:32](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/callbacks.ts#L32)

___

### import

▸ **import**(`callbacks?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbacks?` | [`ICallbacks`](../interfaces/ICallbacks) |

#### Returns

`void`

#### Defined in

[lib/src/states/callbacks.ts:25](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/callbacks.ts#L25)

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

#### Defined in

[lib/src/states/callbacks.ts:57](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/callbacks.ts#L57)

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

#### Defined in

[lib/src/states/callbacks.ts:45](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/callbacks.ts#L45)

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

#### Defined in

[lib/src/states/callbacks.ts:39](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/callbacks.ts#L39)
