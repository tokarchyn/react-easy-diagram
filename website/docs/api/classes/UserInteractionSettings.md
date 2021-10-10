---
id: "UserInteractionSettings"
title: "Class: UserInteractionSettings"
sidebar_label: "UserInteractionSettings"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new UserInteractionSettings**()

#### Defined in

[lib/src/states/userInteractionSettings.ts:12](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L12)

## Accessors

### diagramPan

• `get` **diagramPan**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/userInteractionSettings.ts:35](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L35)

• `set` **diagramPan**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/userInteractionSettings.ts:39](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L39)

___

### diagramZoom

• `get` **diagramZoom**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/userInteractionSettings.ts:27](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L27)

• `set` **diagramZoom**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/userInteractionSettings.ts:31](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L31)

___

### linkSelection

• `get` **linkSelection**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/userInteractionSettings.ts:67](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L67)

• `set` **linkSelection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/userInteractionSettings.ts:71](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L71)

___

### multiselectionKey

• `get` **multiselectionKey**(): [`MultipleSelectionKey`](../#multipleselectionkey)

#### Returns

[`MultipleSelectionKey`](../#multipleselectionkey)

#### Defined in

[lib/src/states/userInteractionSettings.ts:75](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L75)

• `set` **multiselectionKey**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`MultipleSelectionKey`](../#multipleselectionkey) |

#### Returns

`void`

#### Defined in

[lib/src/states/userInteractionSettings.ts:79](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L79)

___

### nodeDrag

• `get` **nodeDrag**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/userInteractionSettings.ts:43](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L43)

• `set` **nodeDrag**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/userInteractionSettings.ts:47](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L47)

___

### nodeSelection

• `get` **nodeSelection**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/userInteractionSettings.ts:59](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L59)

• `set` **nodeSelection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/userInteractionSettings.ts:63](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L63)

___

### portConnection

• `get` **portConnection**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/userInteractionSettings.ts:51](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L51)

• `set` **portConnection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/userInteractionSettings.ts:55](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L55)

## Methods

### import

▸ **import**(`obj?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `Partial`<[`IUserInteraction`](../interfaces/IUserInteraction)\> |

#### Returns

`void`

#### Defined in

[lib/src/states/userInteractionSettings.ts:17](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L17)

___

### isCallbackMultiselectionActivated

▸ **isCallbackMultiselectionActivated**(`shiftKey`, `altKey`, `ctrlKey`, `metaKey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shiftKey` | `boolean` |
| `altKey` | `boolean` |
| `ctrlKey` | `boolean` |
| `metaKey` | `boolean` |

#### Returns

`boolean`

#### Defined in

[lib/src/states/userInteractionSettings.ts:83](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/userInteractionSettings.ts#L83)
