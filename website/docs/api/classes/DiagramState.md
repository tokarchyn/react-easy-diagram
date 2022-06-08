---
id: "DiagramState"
title: "Class: DiagramState"
sidebar_label: "DiagramState"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`IUserInteractionTranslate`](../interfaces/IUserInteractionTranslate.md)
- [`IUserInteractionTranslateAndZoom`](../interfaces/IUserInteractionTranslateAndZoom.md)

## Constructors

### constructor

• **new DiagramState**(`rootStore`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](RootStore.md) |

## Accessors

### offset

• `get` **offset**(): [`Point`](../#point)

#### Returns

[`Point`](../#point)

#### Implementation of

[IUserInteractionTranslateAndZoom](../interfaces/IUserInteractionTranslateAndZoom.md).[offset](../interfaces/IUserInteractionTranslateAndZoom.md#offset)

___

### ref

• `get` **ref**(): [`HtmlElementRefState`](HtmlElementRefState.md)

#### Returns

[`HtmlElementRefState`](HtmlElementRefState.md)

___

### zoom

• `get` **zoom**(): `number`

#### Returns

`number`

#### Implementation of

[IUserInteractionTranslateAndZoom](../interfaces/IUserInteractionTranslateAndZoom.md).[zoom](../interfaces/IUserInteractionTranslateAndZoom.md#zoom)

## Methods

### export

▸ **export**(): [`IDiagramState`](../interfaces/IDiagramState.md)

#### Returns

[`IDiagramState`](../interfaces/IDiagramState.md)

___

### getPositionByPointer

▸ **getPositionByPointer**(`pointerPosition`): [`Point`](../#point)

Get position on Diagram in its coordinates system (including zoom) by mouse/touch position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointerPosition` | [`Point`](../#point) | position of mouse or finger on the screen |

#### Returns

[`Point`](../#point)

___

### getRenderedZoom

▸ **getRenderedZoom**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

___

### import

▸ **import**(`state?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | [`IDiagramState`](../interfaces/IDiagramState.md) |

#### Returns

`void`

___

### setOffset

▸ **setOffset**(`newOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOffset` | `undefined` \| ``null`` \| [`Point`](../#point) |

#### Returns

`void`

#### Implementation of

[IUserInteractionTranslate](../interfaces/IUserInteractionTranslate.md).[setOffset](../interfaces/IUserInteractionTranslate.md#setoffset)

___

### setTransformation

▸ **setTransformation**(`newOffset`, `newZoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newOffset` | [`Point`](../#point) |
| `newZoom` | `number` |

#### Returns

`void`

___

### setZoom

▸ **setZoom**(`newZoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newZoom` | `undefined` \| ``null`` \| `number` |

#### Returns

`void`

___

### tranlsateAndZoomInto

▸ **tranlsateAndZoomInto**(`translateBy`, `pointToZoomInto`, `zoomMultiplicator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `translateBy` | [`Point`](../#point) |
| `pointToZoomInto` | [`Point`](../#point) |
| `zoomMultiplicator` | `number` |

#### Returns

`void`

#### Implementation of

[IUserInteractionTranslateAndZoom](../interfaces/IUserInteractionTranslateAndZoom.md).[tranlsateAndZoomInto](../interfaces/IUserInteractionTranslateAndZoom.md#tranlsateandzoominto)

___

### translate

▸ **translate**(`translateBy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `translateBy` | [`Point`](../#point) |

#### Returns

`void`

___

### zoomIn

▸ **zoomIn**(): `void`

#### Returns

`void`

___

### zoomInto

▸ **zoomInto**(`pointToZoomInto`, `zoomMultiplicator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pointToZoomInto` | [`Point`](../#point) |
| `zoomMultiplicator` | `number` |

#### Returns

`void`

___

### zoomIntoCenter

▸ **zoomIntoCenter**(`zoomMultiplicator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoomMultiplicator` | `number` |

#### Returns

`void`

___

### zoomOut

▸ **zoomOut**(): `void`

#### Returns

`void`

___

### zoomToFit

▸ **zoomToFit**(): `void`

#### Returns

`void`
