---
id: "HtmlElementRefState"
title: "Class: HtmlElementRefState"
sidebar_label: "HtmlElementRefState"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new HtmlElementRefState**(`initValue`, `diagramState`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initValue` | ``null`` \| `HTMLDivElement` |
| `diagramState` | [`DiagramState`](DiagramState) |

## Accessors

### boundingRect

• `get` **boundingRect**(): ``null`` \| { `diagramZoom`: ``null`` \| `number` ; `rect`: `DOMRect`  }

#### Returns

``null`` \| { `diagramZoom`: ``null`` \| `number` ; `rect`: `DOMRect`  }

___

### current

• `get` **current**(): ``null`` \| `HTMLDivElement`

#### Returns

``null`` \| `HTMLDivElement`

• `set` **current**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `HTMLDivElement` |

#### Returns

`void`

___

### position

• `get` **position**(): ``null`` \| [`Point`](../#point)

Position excluding zoom.

#### Returns

``null`` \| [`Point`](../#point)

___

### size

• `get` **size**(): ``null`` \| [`Point`](../#point)

Size excluding zoom.

#### Returns

``null`` \| [`Point`](../#point)

## Methods

### getDataAttribute

▸ **getDataAttribute**(`name`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| `string`

___

### recalculateSizeAndPosition

▸ **recalculateSizeAndPosition**(): `void`

#### Returns

`void`
