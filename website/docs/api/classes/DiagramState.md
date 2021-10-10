---
id: "DiagramState"
title: "Class: DiagramState"
sidebar_label: "DiagramState"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`IUserInteractionTranslate`](../interfaces/IUserInteractionTranslate)
- [`IUserInteractionTranslateAndZoom`](../interfaces/IUserInteractionTranslateAndZoom)

## Constructors

### constructor

• **new DiagramState**(`rootStore`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](RootStore) |

## Accessors

### diagramInnerRef

• `get` **diagramInnerRef**(): [`HtmlElementRefState`](HtmlElementRefState)

#### Returns

[`HtmlElementRefState`](HtmlElementRefState)

___

### offset

• `get` **offset**(): [`Point`](../#point)

#### Returns

[`Point`](../#point)

#### Implementation of

[IUserInteractionTranslateAndZoom](../interfaces/IUserInteractionTranslateAndZoom).[offset](../interfaces/IUserInteractionTranslateAndZoom#offset)

___

### renderedOffset

• `get` **renderedOffset**(): [`Point`](../#point)

#### Returns

[`Point`](../#point)

___

### renderedZoom

• `get` **renderedZoom**(): `number`

#### Returns

`number`

___

### zoom

• `get` **zoom**(): `number`

#### Returns

`number`

#### Implementation of

[IUserInteractionTranslateAndZoom](../interfaces/IUserInteractionTranslateAndZoom).[zoom](../interfaces/IUserInteractionTranslateAndZoom#zoom)

## Methods

### export

▸ **export**(): [`IDiagramState`](../interfaces/IDiagramState)

#### Returns

[`IDiagramState`](../interfaces/IDiagramState)

___

### import

▸ **import**(`state?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | [`IDiagramState`](../interfaces/IDiagramState) |

#### Returns

`void`

___

### renderOffsetAndZoom

▸ **renderOffsetAndZoom**(`offset`, `zoom`): `void`

Set offset and zoom values that were already rendered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | [`Point`](../#point) |
| `zoom` | `number` |

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

[IUserInteractionTranslate](../interfaces/IUserInteractionTranslate).[setOffset](../interfaces/IUserInteractionTranslate#setoffset)

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

[IUserInteractionTranslateAndZoom](../interfaces/IUserInteractionTranslateAndZoom).[tranlsateAndZoomInto](../interfaces/IUserInteractionTranslateAndZoom#tranlsateandzoominto)

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
