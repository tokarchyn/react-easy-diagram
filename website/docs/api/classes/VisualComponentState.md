---
id: "VisualComponentState"
title: "Class: VisualComponentState<TComponentProps, TSettings>"
sidebar_label: "VisualComponentState"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `TComponentProps` |
| `TSettings` |

## Constructors

### constructor

• **new VisualComponentState**<`TComponentProps`, `TSettings`\>(`component`)

#### Type parameters

| Name |
| :------ |
| `TComponentProps` |
| `TSettings` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`VisualComponent`](../#visualcomponent)<`TComponentProps`\> \| [`IComponentDefinition`](../interfaces/IComponentDefinition.md)<`TComponentProps`, `TSettings`\> |

## Accessors

### component

• `get` **component**(): [`VisualComponent`](../#visualcomponent)<`TComponentProps`\>

#### Returns

[`VisualComponent`](../#visualcomponent)<`TComponentProps`\>

___

### settings

• `get` **settings**(): ``null`` \| `TSettings`

#### Returns

``null`` \| `TSettings`

## Methods

### import

▸ **import**(`newComponent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newComponent` | [`VisualComponent`](../#visualcomponent)<`TComponentProps`\> \| [`IComponentDefinition`](../interfaces/IComponentDefinition.md)<`TComponentProps`, `TSettings`\> |

#### Returns

`void`
