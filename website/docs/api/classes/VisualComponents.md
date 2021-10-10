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

#### Defined in

[lib/src/states/visualComponents.ts:17](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/visualComponents.ts#L17)

## Methods

### getComponent

▸ **getComponent**(`type`): [`VisualComponentState`](VisualComponentState)<`TComponentProps`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `undefined` \| ``null`` \| `string` |

#### Returns

[`VisualComponentState`](VisualComponentState)<`TComponentProps`\>

#### Defined in

[lib/src/states/visualComponents.ts:36](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/visualComponents.ts#L36)

___

### import

▸ **import**(`obj?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | [`IVisualComponentsObject`](../interfaces/IVisualComponentsObject)<`TComponentProps`\> |

#### Returns

`void`

#### Defined in

[lib/src/states/visualComponents.ts:29](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/visualComponents.ts#L29)
