---
id: "DragAndDropItemProps"
title: "Interface: DragAndDropItemProps"
sidebar_label: "DragAndDropItemProps"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### draggable

• **draggable**: `Element`

Represents element to drag. It will be wrapped in another element with disabled user-select and touch-action.

___

### droppable

• `Optional` **droppable**: `Element`

Element to render while dragging. Same as draggable if not provided.

## Methods

### onDrag

▸ `Optional` **onDrag**(`event`): `any`

Callback that will be called during pointer movement.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragAndDropEvent`](DragAndDropEvent) |

#### Returns

`any`

___

### onDragStart

▸ `Optional` **onDragStart**(`state`): `boolean`

Callback that will be called on drag start. Return false to cancel drag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`DragAndDropStartEvent`](DragAndDropStartEvent) |

#### Returns

`boolean`

___

### onDrop

▸ **onDrop**(`event`): `any`

Callback that will be called on drop.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`DragAndDropEvent`](DragAndDropEvent) |

#### Returns

`any`
