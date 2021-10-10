---
id: "DiagramSettings"
title: "Class: DiagramSettings"
sidebar_label: "DiagramSettings"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new DiagramSettings**()

#### Defined in

[lib/src/states/diagramSettings.ts:20](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramSettings.ts#L20)

## Accessors

### backgroundComponentState

• `get` **backgroundComponentState**(): [`VisualComponentWithDefault`](VisualComponentWithDefault)<[`IBackgroundComponentProps`](../interfaces/IBackgroundComponentProps)<`any`\>\>

#### Returns

[`VisualComponentWithDefault`](VisualComponentWithDefault)<[`IBackgroundComponentProps`](../interfaces/IBackgroundComponentProps)<`any`\>\>

#### Defined in

[lib/src/states/diagramSettings.ts:42](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramSettings.ts#L42)

___

### miniControlComponentState

• `get` **miniControlComponentState**(): [`VisualComponentWithDefault`](VisualComponentWithDefault)<[`IMiniControlComponentProps`](../interfaces/IMiniControlComponentProps)<`any`\>\>

#### Returns

[`VisualComponentWithDefault`](VisualComponentWithDefault)<[`IMiniControlComponentProps`](../interfaces/IMiniControlComponentProps)<`any`\>\>

#### Defined in

[lib/src/states/diagramSettings.ts:46](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramSettings.ts#L46)

___

### userInteraction

• `get` **userInteraction**(): [`UserInteractionSettings`](UserInteractionSettings)

#### Returns

[`UserInteractionSettings`](UserInteractionSettings)

#### Defined in

[lib/src/states/diagramSettings.ts:62](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramSettings.ts#L62)

___

### zoomInterval

• `get` **zoomInterval**(): [`Point`](../#point)

#### Returns

[`Point`](../#point)

#### Defined in

[lib/src/states/diagramSettings.ts:50](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramSettings.ts#L50)

___

### zoomToFitSettings

• `get` **zoomToFitSettings**(): [`IZoomToFitSettings`](../interfaces/IZoomToFitSettings)

#### Returns

[`IZoomToFitSettings`](../interfaces/IZoomToFitSettings)

#### Defined in

[lib/src/states/diagramSettings.ts:54](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramSettings.ts#L54)

## Methods

### import

▸ **import**(`obj?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | [`IDiagramSettings`](../interfaces/IDiagramSettings) |

#### Returns

`void`

#### Defined in

[lib/src/states/diagramSettings.ts:31](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramSettings.ts#L31)

___

### setZoomInterval

▸ **setZoomInterval**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| [`Point`](../#point) |

#### Returns

`void`

#### Defined in

[lib/src/states/diagramSettings.ts:58](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/diagramSettings.ts#L58)
