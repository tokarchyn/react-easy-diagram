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

#### Defined in

[lib/src/states/selectionState.ts:8](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/selectionState.ts#L8)

## Accessors

### selectedItems

• `get` **selectedItems**(): readonly [`SelectableItem`](../#selectableitem)[]

#### Returns

readonly [`SelectableItem`](../#selectableitem)[]

#### Defined in

[lib/src/states/selectionState.ts:12](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/selectionState.ts#L12)

___

### selectedNodes

• `get` **selectedNodes**(): [`NodeState`](NodeState)[]

#### Returns

[`NodeState`](NodeState)[]

#### Defined in

[lib/src/states/selectionState.ts:16](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/selectionState.ts#L16)

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

#### Defined in

[lib/src/states/selectionState.ts:22](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/selectionState.ts#L22)

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

#### Defined in

[lib/src/states/selectionState.ts:33](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/selectionState.ts#L33)

___

### unselect

▸ **unselect**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`SelectableItem`](../#selectableitem) |

#### Returns

`boolean`

#### Defined in

[lib/src/states/selectionState.ts:41](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/selectionState.ts#L41)

___

### unselectAll

▸ **unselectAll**(): `void`

#### Returns

`void`

#### Defined in

[lib/src/states/selectionState.ts:49](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/selectionState.ts#L49)

___

### unselectItems

▸ **unselectItems**(`itemsToClear`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemsToClear` | readonly [`SelectableItem`](../#selectableitem)[] |

#### Returns

`void`

#### Defined in

[lib/src/states/selectionState.ts:54](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/selectionState.ts#L54)
