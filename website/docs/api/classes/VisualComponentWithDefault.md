---
id: "VisualComponentWithDefault"
title: "Class: VisualComponentWithDefault<TComponentProps>"
sidebar_label: "VisualComponentWithDefault"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `TComponentProps` |

## Constructors

### constructor

• **new VisualComponentWithDefault**<`TComponentProps`\>(`defaultComponent`)

#### Type parameters

| Name |
| :------ |
| `TComponentProps` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `defaultComponent` | [`IComponentDefinition`](../interfaces/IComponentDefinition)<`TComponentProps`, `any`\> |

#### Defined in

[lib/src/states/visualComponentWithDefault.ts:12](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponentWithDefault.ts#L12)

## Accessors

### component

• `get` **component**(): [`VisualComponent`](../#visualcomponent)<`TComponentProps`\>

#### Returns

[`VisualComponent`](../#visualcomponent)<`TComponentProps`\>

#### Defined in

[lib/src/states/visualComponentWithDefault.ts:20](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponentWithDefault.ts#L20)

___

### settings

• `get` **settings**(): `any`

#### Returns

`any`

#### Defined in

[lib/src/states/visualComponentWithDefault.ts:24](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponentWithDefault.ts#L24)

## Methods

### import

▸ **import**(`newComponent?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newComponent?` | [`VisualComponent`](../#visualcomponent)<`TComponentProps`\> \| [`IComponentDefinition`](../interfaces/IComponentDefinition)<`TComponentProps`, `any`\> |

#### Returns

`void`

#### Defined in

[lib/src/states/visualComponentWithDefault.ts:28](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponentWithDefault.ts#L28)
