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

## Accessors

### componentDefinition

• `get` **componentDefinition**(): [`VisualComponentState`](VisualComponentState)<[`ILinkVisualComponentProps`](../interfaces/ILinkVisualComponentProps)<`any`\>\>

#### Returns

[`VisualComponentState`](VisualComponentState)<[`ILinkVisualComponentProps`](../interfaces/ILinkVisualComponentProps)<`any`\>\>

___

### hovered

• `get` **hovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState).[hovered](../interfaces/ILinkInteractionState#hovered)

___

### isLinking

• `get` **isLinking**(): `boolean`

#### Returns

`boolean`

___

### path

• `get` **path**(): `undefined` \| [`ILinkPath`](../interfaces/ILinkPath)

#### Returns

`undefined` \| [`ILinkPath`](../interfaces/ILinkPath)

___

### selected

• `get` **selected**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILinkInteractionState](../interfaces/ILinkInteractionState).[selected](../interfaces/ILinkInteractionState#selected)

___

### source

• `get` **source**(): ``null`` \| [`LinkPortEndpointState`](LinkPortEndpointState)

#### Returns

``null`` \| [`LinkPortEndpointState`](LinkPortEndpointState)

___

### target

• `get` **target**(): ``null`` \| [`LinkPointEndpointState`](LinkPointEndpointState)

#### Returns

``null`` \| [`LinkPointEndpointState`](LinkPointEndpointState)

___

### targetPortCandidate

• `get` **targetPortCandidate**(): ``null`` \| [`PortState`](PortState)

#### Returns

``null`` \| [`PortState`](PortState)

## Methods

### resetTargetPortCandidate

▸ **resetTargetPortCandidate**(`portState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `portState` | [`PortState`](PortState) |

#### Returns

`void`

___

### setTargetPortCandidate

▸ **setTargetPortCandidate**(`portState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `portState` | [`PortState`](PortState) |

#### Returns

`void`

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

___

### stopLinking

▸ **stopLinking**(): `void`

#### Returns

`void`
