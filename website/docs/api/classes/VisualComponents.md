---
id: "VisualComponents"
title: "Class: VisualComponents<TSettings, TComponentProps>"
sidebar_label: "VisualComponents"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `TSettings` |
| `TComponentProps` |

## Constructors

### constructor

• **new VisualComponents**<`TSettings`, `TComponentProps`\>(`defaultComponents`)

#### Type parameters

| Name |
| :------ |
| `TSettings` |
| `TComponentProps` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultComponents` | [`Dictionary`](../interfaces/Dictionary.md)<[`IComponentDefinition`](../interfaces/IComponentDefinition.md)<`TComponentProps`, `TSettings`\> \| [`VisualComponent`](../#visualcomponent)<`TComponentProps`\>\> |

## Methods

### getComponent

▸ **getComponent**(`type`): [`VisualComponentState`](VisualComponentState.md)<`TComponentProps`, `TSettings`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` \| ``null`` \| `string` |

#### Returns

[`VisualComponentState`](VisualComponentState.md)<`TComponentProps`, `TSettings`\>

___

### import

▸ **import**(`obj?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | [`IVisualComponentsObject`](../interfaces/IVisualComponentsObject.md)<`TSettings`, `TComponentProps`\> |

#### Returns

`void`
