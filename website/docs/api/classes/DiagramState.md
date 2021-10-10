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

#### Defined in

[lib/src/states/diagramState.ts:20](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L20)

## Accessors

### diagramInnerRef

• `get` **diagramInnerRef**(): [`HtmlElementRefState`](HtmlElementRefState)

#### Returns

[`HtmlElementRefState`](HtmlElementRefState)

#### Defined in

[lib/src/states/diagramState.ts:102](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L102)

___

### offset

• `get` **offset**(): [`Point`](../#point)

#### Returns

[`Point`](../#point)

#### Implementation of

[IUserInteractionTranslateAndZoom](../interfaces/IUserInteractionTranslateAndZoom).[offset](../interfaces/IUserInteractionTranslateAndZoom#offset)

#### Defined in

[lib/src/states/diagramState.ts:106](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L106)

___

### renderedOffset

• `get` **renderedOffset**(): [`Point`](../#point)

#### Returns

[`Point`](../#point)

#### Defined in

[lib/src/states/diagramState.ts:114](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L114)

___

### renderedZoom

• `get` **renderedZoom**(): `number`

#### Returns

`number`

#### Defined in

[lib/src/states/diagramState.ts:118](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L118)

___

### zoom

• `get` **zoom**(): `number`

#### Returns

`number`

#### Implementation of

[IUserInteractionTranslateAndZoom](../interfaces/IUserInteractionTranslateAndZoom).[zoom](../interfaces/IUserInteractionTranslateAndZoom#zoom)

#### Defined in

[lib/src/states/diagramState.ts:110](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L110)

## Methods

### export

▸ **export**(): [`IDiagramState`](../interfaces/IDiagramState)

#### Returns

[`IDiagramState`](../interfaces/IDiagramState)

#### Defined in

[lib/src/states/diagramState.ts:38](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L38)

___

### import

▸ **import**(`state?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | [`IDiagramState`](../interfaces/IDiagramState) |

#### Returns

`void`

#### Defined in

[lib/src/states/diagramState.ts:33](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L33)

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

#### Defined in

[lib/src/states/diagramState.ts:125](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L125)

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

#### Defined in

[lib/src/states/diagramState.ts:44](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L44)

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

#### Defined in

[lib/src/states/diagramState.ts:77](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L77)

___

### setZoom

▸ **setZoom**(`newZoom`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newZoom` | `undefined` \| ``null`` \| `number` |

#### Returns

`void`

#### Defined in

[lib/src/states/diagramState.ts:48](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L48)

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

#### Defined in

[lib/src/states/diagramState.ts:86](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L86)

___

### translate

▸ **translate**(`translateBy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `translateBy` | [`Point`](../#point) |

#### Returns

`void`

#### Defined in

[lib/src/states/diagramState.ts:82](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L82)

___

### zoomIn

▸ **zoomIn**(): `void`

#### Returns

`void`

#### Defined in

[lib/src/states/diagramState.ts:55](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L55)

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

#### Defined in

[lib/src/states/diagramState.ts:59](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L59)

___

### zoomIntoCenter

▸ **zoomIntoCenter**(`zoomMultiplicator`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoomMultiplicator` | `number` |

#### Returns

`void`

#### Defined in

[lib/src/states/diagramState.ts:95](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L95)

___

### zoomOut

▸ **zoomOut**(): `void`

#### Returns

`void`

#### Defined in

[lib/src/states/diagramState.ts:56](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L56)

___

### zoomToFit

▸ **zoomToFit**(): `void`

#### Returns

`void`

#### Defined in

[lib/src/states/diagramState.ts:130](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramState.ts#L130)
