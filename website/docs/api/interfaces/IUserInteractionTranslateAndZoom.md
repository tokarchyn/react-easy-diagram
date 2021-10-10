---
id: "IUserInteractionTranslateAndZoom"
title: "Interface: IUserInteractionTranslateAndZoom"
sidebar_label: "IUserInteractionTranslateAndZoom"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`DiagramState`](../classes/DiagramState)

## Properties

### offset

• **offset**: [`Point`](../#point)

#### Defined in

[lib/src/hooks/userInteractions/common.ts:55](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/hooks/userInteractions/common.ts#L55)

___

### zoom

• **zoom**: `number`

#### Defined in

[lib/src/hooks/userInteractions/common.ts:56](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/hooks/userInteractions/common.ts#L56)

## Methods

### tranlsateAndZoomInto

▸ **tranlsateAndZoomInto**(`translateBy`, `pointToZoomInto`, `changeZoomBy`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `translateBy` | [`Point`](../#point) |
| `pointToZoomInto` | [`Point`](../#point) |
| `changeZoomBy` | `number` |

#### Returns

`any`

#### Defined in

[lib/src/hooks/userInteractions/common.ts:57](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/hooks/userInteractions/common.ts#L57)
