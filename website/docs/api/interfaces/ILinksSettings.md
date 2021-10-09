---
id: "ILinksSettings"
title: "Interface: ILinksSettings"
sidebar_label: "ILinksSettings"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`IVisualComponentsObject`](IVisualComponentsObject)<[`ILinkVisualComponentProps`](ILinkVisualComponentProps)\>

  ↳ **`ILinksSettings`**

## Properties

### components

• `Optional` **components**: [`Dictionary`](Dictionary)<[`IComponentDefinition`](IComponentDefinition)<[`ILinkVisualComponentProps`](ILinkVisualComponentProps)<`any`\>, `any`\> \| [`VisualComponent`](../#visualcomponent)<[`ILinkVisualComponentProps`](ILinkVisualComponentProps)<`any`\>\>\>

#### Inherited from

[IVisualComponentsObject](IVisualComponentsObject).[components](IVisualComponentsObject#components)

#### Defined in

[lib/src/states/visualComponents.ts:76](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponents.ts#L76)

___

### defaultType

• `Optional` **defaultType**: `string`

#### Inherited from

[IVisualComponentsObject](IVisualComponentsObject).[defaultType](IVisualComponentsObject#defaulttype)

#### Defined in

[lib/src/states/visualComponents.ts:75](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/visualComponents.ts#L75)

___

### pathConstructor

• `Optional` **pathConstructor**: [`ILinkPathConstructor`](../#ilinkpathconstructor)

#### Defined in

[lib/src/states/linksSettings.ts:121](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linksSettings.ts#L121)

___

### preferLinksDirection

• `Optional` **preferLinksDirection**: ``"horizontal"`` \| ``"vertical"`` \| ``"both"``

#### Defined in

[lib/src/states/linksSettings.ts:122](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linksSettings.ts#L122)

___

### svgMarkers

• `Optional` **svgMarkers**: `FunctionComponent`<`Object`\>[]

#### Defined in

[lib/src/states/linksSettings.ts:123](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/linksSettings.ts#L123)
