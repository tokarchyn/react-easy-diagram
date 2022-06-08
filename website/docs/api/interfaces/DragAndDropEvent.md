---
id: "DragAndDropEvent"
title: "Interface: DragAndDropEvent"
sidebar_label: "DragAndDropEvent"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `DragAndDropBaseEvent`

  ↳ **`DragAndDropEvent`**

## Properties

### pointerPosition

• **pointerPosition**: [`Point`](../#point)

Position of mouse or finger on the screen.

#### Inherited from

DragAndDropBaseEvent.pointerPosition

___

### position

• `Optional` **position**: [`Point`](../#point)

Position in diagram coordinates system (including zoom). Undefined if pointer is not above a diagram.

___

### store

• **store**: [`RootStore`](../classes/RootStore.md)

#### Inherited from

DragAndDropBaseEvent.store
