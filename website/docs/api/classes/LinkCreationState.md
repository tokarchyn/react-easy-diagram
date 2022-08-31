---
id: "LinkCreationState"
title: "Class: LinkCreationState"
sidebar_label: "LinkCreationState"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`ILinkInteractionState`](../interfaces/ILinkInteractionState.md)

## Constructors

### constructor

• **new LinkCreationState**(`rootStore`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](RootStore.md) |

## Accessors

### componentDefinition

• `get` **componentDefinition**(): [`VisualComponentState`](VisualComponentState.md)<[`ILinkVisualComponentProps`](../interfaces/ILinkVisualComponentProps.md)<`any`\>, `any`\>

#### Returns

[`VisualComponentState`](VisualComponentState.md)<[`ILinkVisualComponentProps`](../interfaces/ILinkVisualComponentProps.md)<`any`\>, `any`\>

___

### hovered

• `get` **hovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState.md).[hovered](../interfaces/ILinkInteractionState.md#hovered)

___

### isLinking

• `get` **isLinking**(): `boolean`

#### Returns

`boolean`

___

### path

• `get` **path**(): `undefined` \| [`ILinkPath`](../interfaces/ILinkPath.md)

#### Returns

`undefined` \| [`ILinkPath`](../interfaces/ILinkPath.md)

___

### selected

• `get` **selected**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState.md).[selected](../interfaces/ILinkInteractionState.md#selected)

___

### source

• `get` **source**(): `undefined` \| [`LinkPortEndpointState`](LinkPortEndpointState.md)

#### Returns

`undefined` \| [`LinkPortEndpointState`](LinkPortEndpointState.md)

___

### target

• `get` **target**(): `undefined` \| [`LinkPointEndpointState`](LinkPointEndpointState.md)

#### Returns

`undefined` \| [`LinkPointEndpointState`](LinkPointEndpointState.md)

___

### targetPortCandidate

• `get` **targetPortCandidate**(): `undefined` \| [`PortState`](PortState.md)

#### Returns

`undefined` \| [`PortState`](PortState.md)

## Methods

### resetTargetPortCandidate

▸ **resetTargetPortCandidate**(`portState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `portState` | [`PortState`](PortState.md) |

#### Returns

`void`

___

### setTargetPortCandidate

▸ **setTargetPortCandidate**(`portState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `portState` | [`PortState`](PortState.md) |

#### Returns

`void`

___

### startLinking

▸ **startLinking**(`portState`, `pointOnPort`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `portState` | [`PortState`](PortState.md) |
| `pointOnPort` | [`Point`](../#point) |

#### Returns

`boolean`

___

### stopLinking

▸ **stopLinking**(): `void`

#### Returns

`void`
