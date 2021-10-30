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

## Accessors

### isActive

• `get` **isActive**(): `boolean`

#### Returns

`boolean`

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

___

### startDragging

▸ **startDragging**(`nodeToDrag`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeToDrag` | [`NodeState`](NodeState) |

#### Returns

`boolean`

___

### stopDragging

▸ **stopDragging**(): `void`

#### Returns

`void`
