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
| `TComponentProps` | extends [`IVisualComponentProps`](../interfaces/IVisualComponentProps.md)<`TEntity`\> |

## Constructors

### constructor

• **new VisualComponents**<`TEntity`, `TComponentProps`\>(`defaultComponents`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEntity` | `TEntity` |
| `TComponentProps` | extends [`IVisualComponentProps`](../interfaces/IVisualComponentProps.md)<`TEntity`, `any`, `TComponentProps`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultComponents` | [`Dictionary`](../interfaces/Dictionary.md)<[`IComponentDefinition`](../interfaces/IComponentDefinition.md)<`TComponentProps`, `any`\> \| [`VisualComponent`](../#visualcomponent)<`TComponentProps`\>\> |

## Methods

### getComponent

▸ **getComponent**(`type`): [`VisualComponentState`](VisualComponentState.md)<`TComponentProps`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` \| ``null`` \| `string` |

#### Returns

[`VisualComponentState`](VisualComponentState.md)<`TComponentProps`\>

___

### import

▸ **import**(`obj?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | [`IVisualComponentsObject`](../interfaces/IVisualComponentsObject.md)<`TComponentProps`\> |

#### Returns

`void`
