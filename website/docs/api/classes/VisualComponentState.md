---
id: "VisualComponentState"
title: "Class: VisualComponentState<TComponentProps>"
sidebar_label: "VisualComponentState"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name |
| :------ |
| `TComponentProps` |

## Constructors

### constructor

• **new VisualComponentState**<`TComponentProps`\>(`component`)

#### Type parameters

| Name |
| :------ |
| `TComponentProps` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`VisualComponent`](../#visualcomponent)<`TComponentProps`\> \| [`IComponentDefinition`](../interfaces/IComponentDefinition)<`TComponentProps`, `any`\> |

#### Defined in

[lib/src/states/visualComponentState.ts:13](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/visualComponentState.ts#L13)

## Accessors

### component

• `get` **component**(): [`VisualComponent`](../#visualcomponent)<`TComponentProps`\>

#### Returns

[`VisualComponent`](../#visualcomponent)<`TComponentProps`\>

#### Defined in

[lib/src/states/visualComponentState.ts:42](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/visualComponentState.ts#L42)

___

### settings

• `get` **settings**(): `any`

#### Returns

`any`

#### Defined in

[lib/src/states/visualComponentState.ts:45](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/visualComponentState.ts#L45)

## Methods

### import

▸ **import**(`newComponent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newComponent` | [`VisualComponent`](../#visualcomponent)<`TComponentProps`\> \| [`IComponentDefinition`](../interfaces/IComponentDefinition)<`TComponentProps`, `any`\> |

#### Returns

`void`

#### Defined in

[lib/src/states/visualComponentState.ts:28](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/visualComponentState.ts#L28)
