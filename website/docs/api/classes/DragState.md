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
| `selectionState` | [`SelectionState`](SelectionState.md) |
| `callbacks` | [`Callbacks`](Callbacks.md) |

## Accessors

### isActive

• `get` **isActive**(): `boolean`

#### Returns

`boolean`

## Methods

### dragBy

▸ **dragBy**(`delta`): `void`

Drag by a difference between previous coordinate and current

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `delta` | [`Point`](../#point) | vector to drag by which takes into account diagram zoom |

#### Returns

`void`

___

### startDragging

▸ **startDragging**(`nodeToDrag`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeToDrag` | [`NodeState`](NodeState.md) |

#### Returns

`boolean`

___

### stopDragging

▸ **stopDragging**(): `void`

#### Returns

`void`
