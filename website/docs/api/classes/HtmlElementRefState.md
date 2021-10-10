---
id: "HtmlElementRefState"
title: "Class: HtmlElementRefState"
sidebar_label: "HtmlElementRefState"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new HtmlElementRefState**(`initValue`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initValue` | ``null`` \| `HTMLDivElement` |

## Accessors

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

### realSize

• `get` **realSize**(): ``null`` \| [`Point`](../#point)

#### Returns

``null`` \| [`Point`](../#point)

Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
Value can be @type {null} in case reference to real DOM object is not set.

## Methods

### offsetRelativeToParent

▸ **offsetRelativeToParent**(`parent`, `zoom`): ``null`` \| [`Point`](../#point)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `HTMLElement` |
| `zoom` | `number` |

#### Returns

``null`` \| [`Point`](../#point)

___

### recalculateSizeAndPosition

▸ **recalculateSizeAndPosition**(): `void`

#### Returns

`void`
