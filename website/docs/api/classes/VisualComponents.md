---
id: "VisualComponents"
title: "Class: VisualComponents<TEntity, TComponentProps>"
sidebar_label: "VisualComponents"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | `TEntity` |
| `TComponentProps` | extends [`IVisualComponentProps`](../interfaces/IVisualComponentProps)<`TEntity`\> |

## Constructors

### constructor

• **new VisualComponents**<`TEntity`, `TComponentProps`\>(`defaultComponents`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | `TEntity` |
| `TComponentProps` | extends [`IVisualComponentProps`](../interfaces/IVisualComponentProps)<`TEntity`, `any`, `TComponentProps`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultComponents` | [`Dictionary`](../interfaces/Dictionary)<[`IComponentDefinition`](../interfaces/IComponentDefinition)<`TComponentProps`, `any`\> \| [`VisualComponent`](../#visualcomponent)<`TComponentProps`\>\> |

## Methods

### getComponent

▸ **getComponent**(`type`): [`VisualComponentState`](VisualComponentState)<`TComponentProps`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` \| ``null`` \| `string` |

#### Returns

[`VisualComponentState`](VisualComponentState)<`TComponentProps`\>

___

### import

▸ **import**(`obj?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | [`IVisualComponentsObject`](../interfaces/IVisualComponentsObject)<`TComponentProps`\> |

#### Returns

`void`
