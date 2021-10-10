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

## Accessors

### callbacks

• `get` **callbacks**(): [`Callbacks`](Callbacks)

#### Returns

[`Callbacks`](Callbacks)

___

### commandExecutor

• `get` **commandExecutor**(): [`CommandExecutor`](CommandExecutor)

#### Returns

[`CommandExecutor`](CommandExecutor)

___

### diagramSettings

• `get` **diagramSettings**(): [`DiagramSettings`](DiagramSettings)

#### Returns

[`DiagramSettings`](DiagramSettings)

___

### diagramState

• `get` **diagramState**(): [`DiagramState`](DiagramState)

#### Returns

[`DiagramState`](DiagramState)

___

### dragState

• `get` **dragState**(): [`DragState`](DragState)

#### Returns

[`DragState`](DragState)

___

### linksSettings

• `get` **linksSettings**(): [`LinksSettings`](LinksSettings)

#### Returns

[`LinksSettings`](LinksSettings)

___

### linksStore

• `get` **linksStore**(): [`LinksStore`](LinksStore)

#### Returns

[`LinksStore`](LinksStore)

___

### nodesSettings

• `get` **nodesSettings**(): [`NodesSettings`](NodesSettings)

#### Returns

[`NodesSettings`](NodesSettings)

___

### nodesStore

• `get` **nodesStore**(): [`NodesStore`](NodesStore)

#### Returns

[`NodesStore`](NodesStore)

___

### portsSettings

• `get` **portsSettings**(): [`PortsSettings`](PortsSettings)

#### Returns

[`PortsSettings`](PortsSettings)

___

### selectionState

• `get` **selectionState**(): [`SelectionState`](SelectionState)

#### Returns

[`SelectionState`](SelectionState)

## Methods

### export

▸ **export**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `links` | [`ILinkState`](../interfaces/ILinkState)[] |
| `nodes` | [`INodeState`](../interfaces/INodeState)[] |

___

### importSettings

▸ **importSettings**(`settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`ISettings`](../interfaces/ISettings) |

#### Returns

`void`

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
