---
id: "ILinkVisualComponentProps"
title: "Interface: ILinkVisualComponentProps<TSettings>"
sidebar_label: "ILinkVisualComponentProps"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSettings` | `any` |

## Hierarchy

- [`IVisualComponentProps`](IVisualComponentProps)<[`LinkState`](../classes/LinkState) \| [`LinkCreationState`](../classes/LinkCreationState), `TSettings`\>

  ↳ **`ILinkVisualComponentProps`**

## Properties

### entity

• **entity**: [`LinkState`](../classes/LinkState) \| [`LinkCreationState`](../classes/LinkCreationState)

#### Inherited from

[IVisualComponentProps](IVisualComponentProps).[entity](IVisualComponentProps#entity)

#### Defined in

[lib/src/states/visualComponentState.ts:51](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/visualComponentState.ts#L51)

___

### settings

• `Optional` **settings**: `TSettings`

#### Inherited from

[IVisualComponentProps](IVisualComponentProps).[settings](IVisualComponentProps#settings)

#### Defined in

[lib/src/states/visualComponentState.ts:52](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/visualComponentState.ts#L52)

## Methods

### bind

▸ **bind**(...`args`): `ReactEventHandlers`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`ReactEventHandlers`

#### Defined in

[lib/src/states/linksSettings.ts:116](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/linksSettings.ts#L116)
