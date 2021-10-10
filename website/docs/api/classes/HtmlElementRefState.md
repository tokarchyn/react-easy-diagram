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

#### Defined in

[lib/src/states/htmlElementRefState.ts:8](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/htmlElementRefState.ts#L8)

## Accessors

### current

• `get` **current**(): ``null`` \| `HTMLDivElement`

#### Returns

``null`` \| `HTMLDivElement`

#### Defined in

[lib/src/states/htmlElementRefState.ts:13](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/htmlElementRefState.ts#L13)

• `set` **current**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | ``null`` \| `HTMLDivElement` |

#### Returns

`void`

#### Defined in

[lib/src/states/htmlElementRefState.ts:17](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/htmlElementRefState.ts#L17)

___

### realSize

• `get` **realSize**(): ``null`` \| [`Point`](../#point)

#### Returns

``null`` \| [`Point`](../#point)

Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
Value can be @type {null} in case reference to real DOM object is not set.

#### Defined in

[lib/src/states/htmlElementRefState.ts:34](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/htmlElementRefState.ts#L34)

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

#### Defined in

[lib/src/states/htmlElementRefState.ts:21](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/htmlElementRefState.ts#L21)

___

### recalculateSizeAndPosition

▸ **recalculateSizeAndPosition**(): `void`

#### Returns

`void`

#### Defined in

[lib/src/states/htmlElementRefState.ts:43](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/htmlElementRefState.ts#L43)
