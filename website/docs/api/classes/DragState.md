---
id: "DragState"
title: "Class: DragState"
sidebar_label: "DragState"
sidebar_position: 0
custom_edit_url: null
---

Encapsulate logic for dragging mechanism. Right now only nodes are supposed to be dragged.

## Constructors

### constructor

• **new DragState**(`selectionState`, `callbacks`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectionState` | [`SelectionState`](SelectionState) |
| `callbacks` | [`Callbacks`](Callbacks) |

#### Defined in

[lib/src/states/dragState.ts:18](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/dragState.ts#L18)

## Accessors

### isActive

• `get` **isActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/dragState.ts:24](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/dragState.ts#L24)

## Methods

### dragBy

▸ **dragBy**(`vector`): `void`

Drag by a vector

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Point`](../#point) | vector to drag by which takes into account diagram zoom |

#### Returns

`void`

#### Defined in

[lib/src/states/dragState.ts:54](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/dragState.ts#L54)

___

### startDragging

▸ **startDragging**(`nodeToDrag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeToDrag` | [`NodeState`](NodeState) |

#### Returns

`void`

#### Defined in

[lib/src/states/dragState.ts:28](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/dragState.ts#L28)

___

### stopDragging

▸ **stopDragging**(): `void`

#### Returns

`void`

#### Defined in

[lib/src/states/dragState.ts:66](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/dragState.ts#L66)
