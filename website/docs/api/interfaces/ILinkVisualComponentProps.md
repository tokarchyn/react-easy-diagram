---
id: "ILinkVisualComponentProps"
title: "Interface: ILinkVisualComponentProps<TSettings>"
sidebar_label: "ILinkVisualComponentProps"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSettings` | `any` |

## Hierarchy

- [`IVisualComponentProps`](IVisualComponentProps.md)<[`LinkState`](../classes/LinkState.md) \| [`LinkCreationState`](../classes/LinkCreationState.md), `TSettings`\>

  ↳ **`ILinkVisualComponentProps`**

## Properties

### entity

• **entity**: [`LinkState`](../classes/LinkState.md) \| [`LinkCreationState`](../classes/LinkCreationState.md)

#### Inherited from

[IVisualComponentProps](IVisualComponentProps.md).[entity](IVisualComponentProps.md#entity)

___

### settings

• `Optional` **settings**: `TSettings`

#### Inherited from

[IVisualComponentProps](IVisualComponentProps.md).[settings](IVisualComponentProps.md#settings)

## Methods

### bind

▸ **bind**(...`args`): `Pick`<`DOMAttributes`<`EventTarget`\>, ``"onCopy"`` \| ``"onCopyCapture"`` \| ``"onCut"`` \| ``"onCutCapture"`` \| ``"onPaste"`` \| ``"onPasteCapture"`` \| ``"onCompositionEnd"`` \| ``"onCompositionEndCapture"`` \| ``"onCompositionStart"`` \| ``"onCompositionStartCapture"`` \| ``"onCompositionUpdate"`` \| ``"onCompositionUpdateCapture"`` \| ``"onFocus"`` \| ``"onFocusCapture"`` \| ``"onBlur"`` \| ``"onBlurCapture"`` \| ``"onChange"`` \| ``"onChangeCapture"`` \| ``"onBeforeInput"`` \| ``"onBeforeInputCapture"`` \| ``"onInput"`` \| ``"onInputCapture"`` \| ``"onReset"`` \| ``"onResetCapture"`` \| ``"onSubmit"`` \| ``"onSubmitCapture"`` \| ``"onInvalid"`` \| ``"onInvalidCapture"`` \| ``"onLoad"`` \| ``"onLoadCapture"`` \| ``"onError"`` \| ``"onErrorCapture"`` \| ``"onKeyDown"`` \| ``"onKeyDownCapture"`` \| ``"onKeyPress"`` \| ``"onKeyPressCapture"`` \| ``"onKeyUp"`` \| ``"onKeyUpCapture"`` \| ``"onAbort"`` \| ``"onAbortCapture"`` \| ``"onCanPlay"`` \| ``"onCanPlayCapture"`` \| ``"onCanPlayThrough"`` \| ``"onCanPlayThroughCapture"`` \| ``"onDurationChange"`` \| ``"onDurationChangeCapture"`` \| ``"onEmptied"`` \| ``"onEmptiedCapture"`` \| ``"onEncrypted"`` \| ``"onEncryptedCapture"`` \| ``"onEnded"`` \| ``"onEndedCapture"`` \| ``"onLoadedData"`` \| ``"onLoadedDataCapture"`` \| ``"onLoadedMetadata"`` \| ``"onLoadedMetadataCapture"`` \| ``"onLoadStart"`` \| ``"onLoadStartCapture"`` \| ``"onPause"`` \| ``"onPauseCapture"`` \| ``"onPlay"`` \| ``"onPlayCapture"`` \| ``"onPlaying"`` \| ``"onPlayingCapture"`` \| ``"onProgress"`` \| ``"onProgressCapture"`` \| ``"onRateChange"`` \| ``"onRateChangeCapture"`` \| ``"onSeeked"`` \| ``"onSeekedCapture"`` \| ``"onSeeking"`` \| ``"onSeekingCapture"`` \| ``"onStalled"`` \| ``"onStalledCapture"`` \| ``"onSuspend"`` \| ``"onSuspendCapture"`` \| ``"onTimeUpdate"`` \| ``"onTimeUpdateCapture"`` \| ``"onVolumeChange"`` \| ``"onVolumeChangeCapture"`` \| ``"onWaiting"`` \| ``"onWaitingCapture"`` \| ``"onAuxClick"`` \| ``"onAuxClickCapture"`` \| ``"onClick"`` \| ``"onClickCapture"`` \| ``"onContextMenu"`` \| ``"onContextMenuCapture"`` \| ``"onDoubleClick"`` \| ``"onDoubleClickCapture"`` \| ``"onDragCapture"`` \| ``"onDragEndCapture"`` \| ``"onDragEnter"`` \| ``"onDragEnterCapture"`` \| ``"onDragExit"`` \| ``"onDragExitCapture"`` \| ``"onDragLeave"`` \| ``"onDragLeaveCapture"`` \| ``"onDragOver"`` \| ``"onDragOverCapture"`` \| ``"onDragStartCapture"`` \| ``"onDrop"`` \| ``"onDropCapture"`` \| ``"onMouseDown"`` \| ``"onMouseDownCapture"`` \| ``"onMouseEnter"`` \| ``"onMouseLeave"`` \| ``"onMouseMove"`` \| ``"onMouseMoveCapture"`` \| ``"onMouseOut"`` \| ``"onMouseOutCapture"`` \| ``"onMouseOver"`` \| ``"onMouseOverCapture"`` \| ``"onMouseUp"`` \| ``"onMouseUpCapture"`` \| ``"onSelect"`` \| ``"onSelectCapture"`` \| ``"onTouchCancel"`` \| ``"onTouchCancelCapture"`` \| ``"onTouchEnd"`` \| ``"onTouchEndCapture"`` \| ``"onTouchMove"`` \| ``"onTouchMoveCapture"`` \| ``"onTouchStart"`` \| ``"onTouchStartCapture"`` \| ``"onPointerDown"`` \| ``"onPointerDownCapture"`` \| ``"onPointerMove"`` \| ``"onPointerMoveCapture"`` \| ``"onPointerUp"`` \| ``"onPointerUpCapture"`` \| ``"onPointerCancel"`` \| ``"onPointerCancelCapture"`` \| ``"onPointerEnter"`` \| ``"onPointerEnterCapture"`` \| ``"onPointerLeave"`` \| ``"onPointerLeaveCapture"`` \| ``"onPointerOver"`` \| ``"onPointerOverCapture"`` \| ``"onPointerOut"`` \| ``"onPointerOutCapture"`` \| ``"onGotPointerCapture"`` \| ``"onGotPointerCaptureCapture"`` \| ``"onLostPointerCapture"`` \| ``"onLostPointerCaptureCapture"`` \| ``"onScrollCapture"`` \| ``"onWheelCapture"`` \| ``"onAnimationStart"`` \| ``"onAnimationStartCapture"`` \| ``"onAnimationEnd"`` \| ``"onAnimationEndCapture"`` \| ``"onAnimationIteration"`` \| ``"onAnimationIterationCapture"`` \| ``"onTransitionEnd"`` \| ``"onTransitionEndCapture"``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Pick`<`DOMAttributes`<`EventTarget`\>, ``"onCopy"`` \| ``"onCopyCapture"`` \| ``"onCut"`` \| ``"onCutCapture"`` \| ``"onPaste"`` \| ``"onPasteCapture"`` \| ``"onCompositionEnd"`` \| ``"onCompositionEndCapture"`` \| ``"onCompositionStart"`` \| ``"onCompositionStartCapture"`` \| ``"onCompositionUpdate"`` \| ``"onCompositionUpdateCapture"`` \| ``"onFocus"`` \| ``"onFocusCapture"`` \| ``"onBlur"`` \| ``"onBlurCapture"`` \| ``"onChange"`` \| ``"onChangeCapture"`` \| ``"onBeforeInput"`` \| ``"onBeforeInputCapture"`` \| ``"onInput"`` \| ``"onInputCapture"`` \| ``"onReset"`` \| ``"onResetCapture"`` \| ``"onSubmit"`` \| ``"onSubmitCapture"`` \| ``"onInvalid"`` \| ``"onInvalidCapture"`` \| ``"onLoad"`` \| ``"onLoadCapture"`` \| ``"onError"`` \| ``"onErrorCapture"`` \| ``"onKeyDown"`` \| ``"onKeyDownCapture"`` \| ``"onKeyPress"`` \| ``"onKeyPressCapture"`` \| ``"onKeyUp"`` \| ``"onKeyUpCapture"`` \| ``"onAbort"`` \| ``"onAbortCapture"`` \| ``"onCanPlay"`` \| ``"onCanPlayCapture"`` \| ``"onCanPlayThrough"`` \| ``"onCanPlayThroughCapture"`` \| ``"onDurationChange"`` \| ``"onDurationChangeCapture"`` \| ``"onEmptied"`` \| ``"onEmptiedCapture"`` \| ``"onEncrypted"`` \| ``"onEncryptedCapture"`` \| ``"onEnded"`` \| ``"onEndedCapture"`` \| ``"onLoadedData"`` \| ``"onLoadedDataCapture"`` \| ``"onLoadedMetadata"`` \| ``"onLoadedMetadataCapture"`` \| ``"onLoadStart"`` \| ``"onLoadStartCapture"`` \| ``"onPause"`` \| ``"onPauseCapture"`` \| ``"onPlay"`` \| ``"onPlayCapture"`` \| ``"onPlaying"`` \| ``"onPlayingCapture"`` \| ``"onProgress"`` \| ``"onProgressCapture"`` \| ``"onRateChange"`` \| ``"onRateChangeCapture"`` \| ``"onSeeked"`` \| ``"onSeekedCapture"`` \| ``"onSeeking"`` \| ``"onSeekingCapture"`` \| ``"onStalled"`` \| ``"onStalledCapture"`` \| ``"onSuspend"`` \| ``"onSuspendCapture"`` \| ``"onTimeUpdate"`` \| ``"onTimeUpdateCapture"`` \| ``"onVolumeChange"`` \| ``"onVolumeChangeCapture"`` \| ``"onWaiting"`` \| ``"onWaitingCapture"`` \| ``"onAuxClick"`` \| ``"onAuxClickCapture"`` \| ``"onClick"`` \| ``"onClickCapture"`` \| ``"onContextMenu"`` \| ``"onContextMenuCapture"`` \| ``"onDoubleClick"`` \| ``"onDoubleClickCapture"`` \| ``"onDragCapture"`` \| ``"onDragEndCapture"`` \| ``"onDragEnter"`` \| ``"onDragEnterCapture"`` \| ``"onDragExit"`` \| ``"onDragExitCapture"`` \| ``"onDragLeave"`` \| ``"onDragLeaveCapture"`` \| ``"onDragOver"`` \| ``"onDragOverCapture"`` \| ``"onDragStartCapture"`` \| ``"onDrop"`` \| ``"onDropCapture"`` \| ``"onMouseDown"`` \| ``"onMouseDownCapture"`` \| ``"onMouseEnter"`` \| ``"onMouseLeave"`` \| ``"onMouseMove"`` \| ``"onMouseMoveCapture"`` \| ``"onMouseOut"`` \| ``"onMouseOutCapture"`` \| ``"onMouseOver"`` \| ``"onMouseOverCapture"`` \| ``"onMouseUp"`` \| ``"onMouseUpCapture"`` \| ``"onSelect"`` \| ``"onSelectCapture"`` \| ``"onTouchCancel"`` \| ``"onTouchCancelCapture"`` \| ``"onTouchEnd"`` \| ``"onTouchEndCapture"`` \| ``"onTouchMove"`` \| ``"onTouchMoveCapture"`` \| ``"onTouchStart"`` \| ``"onTouchStartCapture"`` \| ``"onPointerDown"`` \| ``"onPointerDownCapture"`` \| ``"onPointerMove"`` \| ``"onPointerMoveCapture"`` \| ``"onPointerUp"`` \| ``"onPointerUpCapture"`` \| ``"onPointerCancel"`` \| ``"onPointerCancelCapture"`` \| ``"onPointerEnter"`` \| ``"onPointerEnterCapture"`` \| ``"onPointerLeave"`` \| ``"onPointerLeaveCapture"`` \| ``"onPointerOver"`` \| ``"onPointerOverCapture"`` \| ``"onPointerOut"`` \| ``"onPointerOutCapture"`` \| ``"onGotPointerCapture"`` \| ``"onGotPointerCaptureCapture"`` \| ``"onLostPointerCapture"`` \| ``"onLostPointerCaptureCapture"`` \| ``"onScrollCapture"`` \| ``"onWheelCapture"`` \| ``"onAnimationStart"`` \| ``"onAnimationStartCapture"`` \| ``"onAnimationEnd"`` \| ``"onAnimationEndCapture"`` \| ``"onAnimationIteration"`` \| ``"onAnimationIterationCapture"`` \| ``"onTransitionEnd"`` \| ``"onTransitionEndCapture"``\>
