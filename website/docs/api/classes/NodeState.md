---
id: "NodeState"
title: "Class: NodeState"
sidebar_label: "NodeState"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new NodeState**(`rootStore`, `id`, `state?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rootStore` | [`RootStore`](RootStore) |
| `id` | `string` |
| `state?` | [`INodeStateWithoutId`](../interfaces/INodeStateWithoutId) |

#### Defined in

[lib/src/states/nodeState.ts:33](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L33)

## Accessors

### componentDefinition

• `get` **componentDefinition**(): [`VisualComponentState`](VisualComponentState)<[`INodeVisualComponentProps`](../interfaces/INodeVisualComponentProps)<`any`\>\>

#### Returns

[`VisualComponentState`](VisualComponentState)<[`INodeVisualComponentProps`](../interfaces/INodeVisualComponentProps)<`any`\>\>

#### Defined in

[lib/src/states/nodeState.ts:178](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L178)

___

### connectedExternalPorts

• `get` **connectedExternalPorts**(): [`Dictionary`](../interfaces/Dictionary)<[`PortState`](PortState)[]\>

#### Returns

[`Dictionary`](../interfaces/Dictionary)<[`PortState`](PortState)[]\>

#### Defined in

[lib/src/states/nodeState.ts:227](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L227)

___

### connectedLinks

• `get` **connectedLinks**(): [`LinkState`](LinkState)[]

#### Returns

[`LinkState`](LinkState)[]

#### Defined in

[lib/src/states/nodeState.ts:235](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L235)

___

### extra

• `get` **extra**(): `any`

#### Returns

`any`

#### Defined in

[lib/src/states/nodeState.ts:158](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L158)

___

### hovered

• `get` **hovered**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/nodeState.ts:150](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L150)

• `set` **hovered**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/nodeState.ts:154](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L154)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[lib/src/states/nodeState.ts:77](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L77)

___

### isDragActive

• `get` **isDragActive**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/nodeState.ts:265](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L265)

• `set` **isDragActive**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/nodeState.ts:269](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L269)

___

### isDragEnabled

• `get` **isDragEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/nodeState.ts:253](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L253)

___

### isSelectionEnabled

• `get` **isSelectionEnabled**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/nodeState.ts:243](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L243)

___

### label

• `get` **label**(): `string`

#### Returns

`string`

#### Defined in

[lib/src/states/nodeState.ts:81](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L81)

• `set` **label**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`void`

#### Defined in

[lib/src/states/nodeState.ts:85](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L85)

___

### ports

• `get` **ports**(): `ReadonlyMap`<`string`, [`PortState`](PortState)\>

#### Returns

`ReadonlyMap`<`string`, [`PortState`](PortState)\>

#### Defined in

[lib/src/states/nodeState.ts:170](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L170)

___

### position

• `get` **position**(): [`Point`](../#point)

#### Returns

[`Point`](../#point)

#### Defined in

[lib/src/states/nodeState.ts:89](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L89)

___

### realSize

• `get` **realSize**(): ``null`` \| [`Point`](../#point)

#### Returns

``null`` \| [`Point`](../#point)

Value is calculated without zoom taking into account, that is, the same as zoom would be '1'.
Value can be @type {null} in case reference to real DOM object is not set.

#### Defined in

[lib/src/states/nodeState.ts:187](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L187)

___

### ref

• `get` **ref**(): [`HtmlElementRefState`](HtmlElementRefState)

#### Returns

[`HtmlElementRefState`](HtmlElementRefState)

#### Defined in

[lib/src/states/nodeState.ts:166](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L166)

___

### selected

• `get` **selected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/src/states/nodeState.ts:139](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L139)

• `set` **selected**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/nodeState.ts:143](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L143)

___

### transformString

• `get` **transformString**(): `string`

#### Returns

`string`

#### Defined in

[lib/src/states/nodeState.ts:174](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L174)

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Defined in

[lib/src/states/nodeState.ts:131](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L131)

## Methods

### addPort

▸ **addPort**(`port`): [`SuccessOrErrorResult`](../#successorerrorresult)<[`PortState`](PortState), `undefined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | [`INodePortState`](../interfaces/INodePortState) |

#### Returns

[`SuccessOrErrorResult`](../#successorerrorresult)<[`PortState`](PortState), `undefined`\>

#### Defined in

[lib/src/states/nodeState.ts:197](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L197)

___

### export

▸ **export**(): [`INodeStateWithId`](../interfaces/INodeStateWithId)

#### Returns

[`INodeStateWithId`](../interfaces/INodeStateWithId)

#### Defined in

[lib/src/states/nodeState.ts:65](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L65)

___

### getPort

▸ **getPort**(`portId`): `undefined` \| [`PortState`](PortState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portId` | `string` |

#### Returns

`undefined` \| [`PortState`](PortState)

#### Defined in

[lib/src/states/nodeState.ts:191](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L191)

___

### getPortOrThrowException

▸ **getPortOrThrowException**(`portId`): [`PortState`](PortState)

#### Parameters

| Name | Type |
| :------ | :------ |
| `portId` | `string` |

#### Returns

[`PortState`](PortState)

#### Defined in

[lib/src/states/nodeState.ts:220](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L220)

___

### import

▸ **import**(`newState?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState?` | [`INodeStateWithoutId`](../interfaces/INodeStateWithoutId) |

#### Returns

`void`

#### Defined in

[lib/src/states/nodeState.ts:55](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L55)

___

### recalculatePortsSizeAndPosition

▸ **recalculatePortsSizeAndPosition**(): `void`

#### Returns

`void`

#### Defined in

[lib/src/states/nodeState.ts:239](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L239)

___

### removePort

▸ **removePort**(`portId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `portId` | `string` |

#### Returns

`boolean`

#### Defined in

[lib/src/states/nodeState.ts:211](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L211)

___

### setExtra

▸ **setExtra**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[lib/src/states/nodeState.ts:162](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L162)

___

### setIsDragEnabled

▸ **setIsDragEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/nodeState.ts:261](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L261)

___

### setIsSelectionEnabled

▸ **setIsSelectionEnabled**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `boolean` |

#### Returns

`void`

#### Defined in

[lib/src/states/nodeState.ts:249](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L249)

___

### setPosition

▸ **setPosition**(`newPosition`, `ignoreSnapping?`): `undefined` \| [`Point`](../#point)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `newPosition` | `undefined` \| ``null`` \| [`Point`](../#point) | `undefined` | new position |
| `ignoreSnapping` | `boolean` | `false` | do not take into account snapping to grid |

#### Returns

`undefined` \| [`Point`](../#point)

remainder in case snap to grid is turned on. For example if newPosition would be [22,17] and snap [10,10],
the node position would be set to [20,20] and remainder equals [2,-3]

#### Defined in

[lib/src/states/nodeState.ts:99](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L99)

___

### setType

▸ **setType**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `undefined` \| ``null`` \| `string` |

#### Returns

`void`

#### Defined in

[lib/src/states/nodeState.ts:135](https://github.com/tokarchyn/react-easy-diagram/blob/96a8c28/lib/src/states/nodeState.ts#L135)
