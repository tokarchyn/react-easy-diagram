---
id: "LinkCreationState"
title: "Class: LinkCreationState"
sidebar_label: "LinkCreationState"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`ILinkInteractionState`](../interfaces/ILinkInteractionState)

## Constructors

### constructor

• **new LinkCreationState**(`rootStore`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](RootStore) |

#### Defined in

[lib/src/states/linkCreationState.ts:21](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L21)

## Accessors

### componentDefinition

• `get` **componentDefinition**(): [`VisualComponentState`](VisualComponentState)<[`ILinkVisualComponentProps`](../interfaces/ILinkVisualComponentProps)<`any`\>\>

#### Returns

[`VisualComponentState`](VisualComponentState)<[`ILinkVisualComponentProps`](../interfaces/ILinkVisualComponentProps)<`any`\>\>

#### Defined in

[lib/src/states/linkCreationState.ts:128](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L128)

___

### hovered

• `get` **hovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState).[hovered](../interfaces/ILinkInteractionState#hovered)

#### Defined in

[lib/src/states/linkCreationState.ts:30](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L30)

___

### isLinking

• `get` **isLinking**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/linkCreationState.ts:46](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L46)

___

### path

• `get` **path**(): `undefined` \| [`ILinkPath`](../interfaces/ILinkPath)

#### Returns

`undefined` \| [`ILinkPath`](../interfaces/ILinkPath)

#### Defined in

[lib/src/states/linkCreationState.ts:133](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L133)

___

### selected

• `get` **selected**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState).[selected](../interfaces/ILinkInteractionState#selected)

#### Defined in

[lib/src/states/linkCreationState.ts:26](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L26)

___

### source

• `get` **source**(): ``null`` \| [`LinkPortEndpointState`](LinkPortEndpointState)

#### Returns

``null`` \| [`LinkPortEndpointState`](LinkPortEndpointState)

#### Defined in

[lib/src/states/linkCreationState.ts:34](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L34)

___

### target

• `get` **target**(): ``null`` \| [`LinkPointEndpointState`](LinkPointEndpointState)

#### Returns

``null`` \| [`LinkPointEndpointState`](LinkPointEndpointState)

#### Defined in

[lib/src/states/linkCreationState.ts:38](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L38)

___

### targetPortCandidate

• `get` **targetPortCandidate**(): ``null`` \| [`PortState`](PortState)

#### Returns

``null`` \| [`PortState`](PortState)

#### Defined in

[lib/src/states/linkCreationState.ts:42](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L42)

## Methods

### resetTargetPortCandidate

▸ **resetTargetPortCandidate**(`portState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `portState` | [`PortState`](PortState) |

#### Returns

`void`

#### Defined in

[lib/src/states/linkCreationState.ts:102](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L102)

___

### setTargetPortCandidate

▸ **setTargetPortCandidate**(`portState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `portState` | [`PortState`](PortState) |

#### Returns

`void`

#### Defined in

[lib/src/states/linkCreationState.ts:80](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L80)

___

### startLinking

▸ **startLinking**(`portState`, `pointOnPort`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `portState` | [`PortState`](PortState) |
| `pointOnPort` | [`Point`](../#point) |

#### Returns

`boolean`

#### Defined in

[lib/src/states/linkCreationState.ts:50](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L50)

___

### stopLinking

▸ **stopLinking**(): `void`

#### Returns

`void`

#### Defined in

[lib/src/states/linkCreationState.ts:109](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linkCreationState.ts#L109)
