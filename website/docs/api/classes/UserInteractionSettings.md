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

## Accessors

### arePointerInteractionsDisabled

• `get` **arePointerInteractionsDisabled**(): `boolean`

#### Returns

`boolean`

___

### diagramPan

• `get` **diagramPan**(): `boolean`

#### Returns

`boolean`

• `set` **diagramPan**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### diagramZoom

• `get` **diagramZoom**(): `boolean`

#### Returns

`boolean`

• `set` **diagramZoom**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### linkSelection

• `get` **linkSelection**(): `boolean`

#### Returns

`boolean`

• `set` **linkSelection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### multiselectionKey

• `get` **multiselectionKey**(): [`MultipleSelectionKey`](../#multipleselectionkey)

#### Returns

[`MultipleSelectionKey`](../#multipleselectionkey)

• `set` **multiselectionKey**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`MultipleSelectionKey`](../#multipleselectionkey) |

#### Returns

`void`

___

### nodeDrag

• `get` **nodeDrag**(): `boolean`

#### Returns

`boolean`

• `set` **nodeDrag**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### nodeSelection

• `get` **nodeSelection**(): `boolean`

#### Returns

`boolean`

• `set` **nodeSelection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

___

### portConnection

• `get` **portConnection**(): `boolean`

#### Returns

`boolean`

• `set` **portConnection**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

## Methods

### disableAllPointerInteractions

▸ **disableAllPointerInteractions**(`force?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`void`

___

### enableAllPointerInteractions

▸ **enableAllPointerInteractions**(`force?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`void`

___

### import

▸ **import**(`obj?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | `Partial`<[`IUserInteraction`](../interfaces/IUserInteraction)\> |

#### Returns

`void`

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
