---
id: "RootStore"
title: "Class: RootStore"
sidebar_label: "RootStore"
sidebar_position: 0
custom_edit_url: null
---

## Constructors

### constructor

• **new RootStore**()

#### Defined in

[lib/src/states/rootStore.ts:30](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L30)

## Accessors

### callbacks

• `get` **callbacks**(): [`Callbacks`](Callbacks)

#### Returns

[`Callbacks`](Callbacks)

#### Defined in

[lib/src/states/rootStore.ts:74](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L74)

___

### commandExecutor

• `get` **commandExecutor**(): [`CommandExecutor`](CommandExecutor)

#### Returns

[`CommandExecutor`](CommandExecutor)

#### Defined in

[lib/src/states/rootStore.ts:86](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L86)

___

### diagramSettings

• `get` **diagramSettings**(): [`DiagramSettings`](DiagramSettings)

#### Returns

[`DiagramSettings`](DiagramSettings)

#### Defined in

[lib/src/states/rootStore.ts:58](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L58)

___

### diagramState

• `get` **diagramState**(): [`DiagramState`](DiagramState)

#### Returns

[`DiagramState`](DiagramState)

#### Defined in

[lib/src/states/rootStore.ts:46](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L46)

___

### dragState

• `get` **dragState**(): [`DragState`](DragState)

#### Returns

[`DragState`](DragState)

#### Defined in

[lib/src/states/rootStore.ts:82](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L82)

___

### linksSettings

• `get` **linksSettings**(): [`LinksSettings`](LinksSettings)

#### Returns

[`LinksSettings`](LinksSettings)

#### Defined in

[lib/src/states/rootStore.ts:66](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L66)

___

### linksStore

• `get` **linksStore**(): [`LinksStore`](LinksStore)

#### Returns

[`LinksStore`](LinksStore)

#### Defined in

[lib/src/states/rootStore.ts:54](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L54)

___

### nodesSettings

• `get` **nodesSettings**(): [`NodesSettings`](NodesSettings)

#### Returns

[`NodesSettings`](NodesSettings)

#### Defined in

[lib/src/states/rootStore.ts:62](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L62)

___

### nodesStore

• `get` **nodesStore**(): [`NodesStore`](NodesStore)

#### Returns

[`NodesStore`](NodesStore)

#### Defined in

[lib/src/states/rootStore.ts:50](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L50)

___

### portsSettings

• `get` **portsSettings**(): [`PortsSettings`](PortsSettings)

#### Returns

[`PortsSettings`](PortsSettings)

#### Defined in

[lib/src/states/rootStore.ts:70](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L70)

___

### selectionState

• `get` **selectionState**(): [`SelectionState`](SelectionState)

#### Returns

[`SelectionState`](SelectionState)

#### Defined in

[lib/src/states/rootStore.ts:78](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L78)

## Methods

### export

▸ **export**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `links` | [`ILinkState`](../interfaces/ILinkState)[] |
| `nodes` | [`INodeState`](../interfaces/INodeState)[] |

#### Defined in

[lib/src/states/rootStore.ts:95](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L95)

___

### importSettings

▸ **importSettings**(`settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`ISettings`](../interfaces/ISettings) |

#### Returns

`void`

#### Defined in

[lib/src/states/rootStore.ts:100](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L100)

___

### importState

▸ **importState**(`nodes?`, `links?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes?` | [`INodeState`](../interfaces/INodeState)[] |
| `links?` | [`ILinkState`](../interfaces/ILinkState)[] |

#### Returns

`void`

#### Defined in

[lib/src/states/rootStore.ts:90](https://github.com/tokarchyn/react-easy-diagram/blob/370fa2c/lib/src/states/rootStore.ts#L90)
