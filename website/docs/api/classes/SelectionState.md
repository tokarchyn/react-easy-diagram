---
id: "SelectionState"
title: "Class: SelectionState"
sidebar_label: "SelectionState"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new SelectionState**()

## Accessors

### selectedItems

• `get` **selectedItems**(): [`SelectableItem`](../#selectableitem)[]

#### Returns

[`SelectableItem`](../#selectableitem)[]

___

### selectedLinks

• `get` **selectedLinks**(): [`LinkState`](LinkState.md)[]

#### Returns

[`LinkState`](LinkState.md)[]

___

### selectedNodes

• `get` **selectedNodes**(): [`NodeState`](NodeState.md)[]

#### Returns

[`NodeState`](NodeState.md)[]

## Methods

### select

▸ **select**(`item`, `unselectOther?`): `boolean`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | [`SelectableItem`](../#selectableitem) | `undefined` |
| `unselectOther` | `boolean` | `false` |

#### Returns

`boolean`

___

### switch

▸ **switch**(`item`, `unselectOtherOnSelection?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `item` | [`SelectableItem`](../#selectableitem) | `undefined` |
| `unselectOtherOnSelection` | `boolean` | `false` |

#### Returns

`void`

___

### unselect

▸ **unselect**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`SelectableItem`](../#selectableitem) |

#### Returns

`boolean`

___

### unselectAll

▸ **unselectAll**(): `void`

#### Returns

`void`

___

### unselectItems

▸ **unselectItems**(`itemsToClear`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemsToClear` | readonly [`SelectableItem`](../#selectableitem)[] |

#### Returns

`void`
