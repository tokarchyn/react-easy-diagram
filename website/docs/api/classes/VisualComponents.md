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

[lib/src/states/visualComponents.ts:18](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponents.ts#L18)

## Accessors

### defaultType

• `get` **defaultType**(): `string`

#### Returns

`string`

#### Defined in

[lib/src/states/visualComponents.ts:48](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponents.ts#L48)

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

[lib/src/states/visualComponents.ts:39](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponents.ts#L39)

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

[lib/src/states/visualComponents.ts:30](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponents.ts#L30)

___

### setDefaultType

▸ **setDefaultType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `string` |

#### Returns

`void`

#### Defined in

[lib/src/states/visualComponents.ts:52](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponents.ts#L52)
