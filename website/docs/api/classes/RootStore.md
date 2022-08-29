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

• `get` **callbacks**(): [`Callbacks`](Callbacks.md)

#### Returns

[`Callbacks`](Callbacks.md)

___

### commandExecutor

• `get` **commandExecutor**(): [`CommandExecutor`](CommandExecutor.md)

#### Returns

[`CommandExecutor`](CommandExecutor.md)

___

### diagramSettings

• `get` **diagramSettings**(): [`DiagramSettings`](DiagramSettings.md)

#### Returns

[`DiagramSettings`](DiagramSettings.md)

___

### diagramState

• `get` **diagramState**(): [`DiagramState`](DiagramState.md)

#### Returns

[`DiagramState`](DiagramState.md)

___

### dragState

• `get` **dragState**(): [`DragState`](DragState.md)

#### Returns

[`DragState`](DragState.md)

___

### linksSettings

• `get` **linksSettings**(): [`LinksSettings`](LinksSettings.md)

#### Returns

[`LinksSettings`](LinksSettings.md)

___

### linksStore

• `get` **linksStore**(): [`LinksStore`](LinksStore.md)

#### Returns

[`LinksStore`](LinksStore.md)

___

### nodesSettings

• `get` **nodesSettings**(): [`NodesSettings`](NodesSettings.md)

#### Returns

[`NodesSettings`](NodesSettings.md)

___

### nodesStore

• `get` **nodesStore**(): [`NodesStore`](NodesStore.md)

#### Returns

[`NodesStore`](NodesStore.md)

___

### portsSettings

• `get` **portsSettings**(): [`PortsSettings`](PortsSettings.md)

#### Returns

[`PortsSettings`](PortsSettings.md)

___

### selectionState

• `get` **selectionState**(): [`SelectionState`](SelectionState.md)

#### Returns

[`SelectionState`](SelectionState.md)

## Methods

### export

▸ **export**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `links` | [`ILinkState`](../interfaces/ILinkState.md)[] |
| `nodes` | [`INodeState`](../interfaces/INodeState.md)[] |

___

### importSettings

▸ **importSettings**(`settings?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | [`ISettings`](../interfaces/ISettings.md) |

#### Returns

`void`

___

### importState

▸ **importState**(`nodes?`, `links?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes?` | [`INodeState`](../interfaces/INodeState.md)[] |
| `links?` | [`ILinkState`](../interfaces/ILinkState.md)[] |

#### Returns

`void`
