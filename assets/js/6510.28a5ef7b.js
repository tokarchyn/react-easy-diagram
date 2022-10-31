(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[6510],{

/***/ 3332:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "useGesture": function() { return /* binding */ useGesture; }
});

// UNUSED EXPORTS: ConfigResolverMap, EngineMap, createUseGesture, dragAction, hoverAction, moveAction, pinchAction, registerAction, rubberbandIfOutOfBounds, scrollAction, useDrag, useHover, useMove, usePinch, useScroll, useWheel, wheelAction

;// CONCATENATED MODULE: ../node_modules/@use-gesture/core/dist/maths-b28d9b98.esm.js
function clamp(v, min, max) {
  return Math.max(min, Math.min(v, max));
}
const V = {
  toVector(v, fallback) {
    if (v === undefined) v = fallback;
    return Array.isArray(v) ? v : [v, v];
  },
  add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
  },
  sub(v1, v2) {
    return [v1[0] - v2[0], v1[1] - v2[1]];
  },
  addTo(v1, v2) {
    v1[0] += v2[0];
    v1[1] += v2[1];
  },
  subTo(v1, v2) {
    v1[0] -= v2[0];
    v1[1] -= v2[1];
  }
};

function rubberband(distance, dimension, constant) {
  if (dimension === 0 || Math.abs(dimension) === Infinity) return Math.pow(distance, constant * 5);
  return distance * dimension * constant / (dimension + constant * distance);
}
function rubberbandIfOutOfBounds(position, min, max, constant = 0.15) {
  if (constant === 0) return clamp(position, min, max);
  if (position < min) return -rubberband(min - position, max - min, constant) + min;
  if (position > max) return +rubberband(position - max, max - min, constant) + max;
  return position;
}
function computeRubberband(bounds, [Vx, Vy], [Rx, Ry]) {
  const [[X0, X1], [Y0, Y1]] = bounds;
  return [rubberbandIfOutOfBounds(Vx, X0, X1, Rx), rubberbandIfOutOfBounds(Vy, Y0, Y1, Ry)];
}



;// CONCATENATED MODULE: ../node_modules/@use-gesture/core/dist/actions-71ad3053.esm.js


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

const EVENT_TYPE_MAP = {
  pointer: {
    start: 'down',
    change: 'move',
    end: 'up'
  },
  mouse: {
    start: 'down',
    change: 'move',
    end: 'up'
  },
  touch: {
    start: 'start',
    change: 'move',
    end: 'end'
  },
  gesture: {
    start: 'start',
    change: 'change',
    end: 'end'
  }
};
function capitalize(string) {
  if (!string) return '';
  return string[0].toUpperCase() + string.slice(1);
}
const actionsWithoutCaptureSupported = ['enter', 'leave'];
function hasCapture(capture = false, actionKey) {
  return capture && !actionsWithoutCaptureSupported.includes(actionKey);
}
function toHandlerProp(device, action = '', capture = false) {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return 'on' + capitalize(device) + capitalize(actionKey) + (hasCapture(capture, actionKey) ? 'Capture' : '');
}
const pointerCaptureEvents = ['gotpointercapture', 'lostpointercapture'];
function parseProp(prop) {
  let eventKey = prop.substring(2).toLowerCase();
  const passive = !!~eventKey.indexOf('passive');
  if (passive) eventKey = eventKey.replace('passive', '');
  const captureKey = pointerCaptureEvents.includes(eventKey) ? 'capturecapture' : 'capture';
  const capture = !!~eventKey.indexOf(captureKey);
  if (capture) eventKey = eventKey.replace('capture', '');
  return {
    device: eventKey,
    capture,
    passive
  };
}
function toDomEventType(device, action = '') {
  const deviceProps = EVENT_TYPE_MAP[device];
  const actionKey = deviceProps ? deviceProps[action] || action : action;
  return device + actionKey;
}
function isTouch(event) {
  return 'touches' in event;
}
function getPointerType(event) {
  if (isTouch(event)) return 'touch';
  if ('pointerType' in event) return event.pointerType;
  return 'mouse';
}
function getCurrentTargetTouchList(event) {
  return Array.from(event.touches).filter(e => {
    var _event$currentTarget, _event$currentTarget$;
    return e.target === event.currentTarget || ((_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 ? void 0 : (_event$currentTarget$ = _event$currentTarget.contains) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.call(_event$currentTarget, e.target));
  });
}
function getTouchList(event) {
  return event.type === 'touchend' || event.type === 'touchcancel' ? event.changedTouches : event.targetTouches;
}
function getValueEvent(event) {
  return isTouch(event) ? getTouchList(event)[0] : event;
}
function distanceAngle(P1, P2) {
  const dx = P2.clientX - P1.clientX;
  const dy = P2.clientY - P1.clientY;
  const cx = (P2.clientX + P1.clientX) / 2;
  const cy = (P2.clientY + P1.clientY) / 2;
  const distance = Math.hypot(dx, dy);
  const angle = -(Math.atan2(dx, dy) * 180) / Math.PI;
  const origin = [cx, cy];
  return {
    angle,
    distance,
    origin
  };
}
function touchIds(event) {
  return getCurrentTargetTouchList(event).map(touch => touch.identifier);
}
function touchDistanceAngle(event, ids) {
  const [P1, P2] = Array.from(event.touches).filter(touch => ids.includes(touch.identifier));
  return distanceAngle(P1, P2);
}
function pointerId(event) {
  const valueEvent = getValueEvent(event);
  return isTouch(event) ? valueEvent.identifier : valueEvent.pointerId;
}
function pointerValues(event) {
  const valueEvent = getValueEvent(event);
  return [valueEvent.clientX, valueEvent.clientY];
}

const LINE_HEIGHT = 40;
const PAGE_HEIGHT = 800;
function wheelValues(event) {
  let {
    deltaX,
    deltaY,
    deltaMode
  } = event;
  if (deltaMode === 1) {
    deltaX *= LINE_HEIGHT;
    deltaY *= LINE_HEIGHT;
  } else if (deltaMode === 2) {
    deltaX *= PAGE_HEIGHT;
    deltaY *= PAGE_HEIGHT;
  }
  return [deltaX, deltaY];
}
function scrollValues(event) {
  var _ref, _ref2;
  const {
    scrollX,
    scrollY,
    scrollLeft,
    scrollTop
  } = event.currentTarget;
  return [(_ref = scrollX !== null && scrollX !== void 0 ? scrollX : scrollLeft) !== null && _ref !== void 0 ? _ref : 0, (_ref2 = scrollY !== null && scrollY !== void 0 ? scrollY : scrollTop) !== null && _ref2 !== void 0 ? _ref2 : 0];
}
function getEventDetails(event) {
  const payload = {};
  if ('buttons' in event) payload.buttons = event.buttons;
  if ('shiftKey' in event) {
    const {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    } = event;
    Object.assign(payload, {
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    });
  }
  return payload;
}

function call(v, ...args) {
  if (typeof v === 'function') {
    return v(...args);
  } else {
    return v;
  }
}
function noop() {}
function chain(...fns) {
  if (fns.length === 0) return noop;
  if (fns.length === 1) return fns[0];
  return function () {
    let result;
    for (const fn of fns) {
      result = fn.apply(this, arguments) || result;
    }
    return result;
  };
}
function assignDefault(value, fallback) {
  return Object.assign({}, fallback, value || {});
}

const BEFORE_LAST_KINEMATICS_DELAY = 32;

class Engine {

  constructor(ctrl, args, key) {
    this.ctrl = ctrl;
    this.args = args;
    this.key = key;
    if (!this.state) {
      this.state = {};
      this.computeValues([0, 0]);
      this.computeInitial();
      if (this.init) this.init();
      this.reset();
    }
  }

  get state() {
    return this.ctrl.state[this.key];
  }
  set state(state) {
    this.ctrl.state[this.key] = state;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    const {
      state,
      shared,
      ingKey,
      args
    } = this;
    shared[ingKey] = state._active = state.active = state._blocked = state._force = false;
    state._step = [false, false];
    state.intentional = false;
    state._movement = [0, 0];
    state._distance = [0, 0];
    state._direction = [0, 0];
    state._delta = [0, 0];
    state._bounds = [[-Infinity, Infinity], [-Infinity, Infinity]];
    state.args = args;
    state.axis = undefined;
    state.memo = undefined;
    state.elapsedTime = 0;
    state.direction = [0, 0];
    state.distance = [0, 0];
    state.overflow = [0, 0];
    state._movementBound = [false, false];
    state.velocity = [0, 0];
    state.movement = [0, 0];
    state.delta = [0, 0];
    state.timeStamp = 0;
  }
  start(event) {
    const state = this.state;
    const config = this.config;
    if (!state._active) {
      this.reset();
      this.computeInitial();
      state._active = true;
      state.target = event.target;
      state.currentTarget = event.currentTarget;
      state.lastOffset = config.from ? call(config.from, state) : state.offset;
      state.offset = state.lastOffset;
    }
    state.startTime = state.timeStamp = event.timeStamp;
  }

  computeValues(values) {
    const state = this.state;
    state._values = values;
    state.values = this.config.transform(values);
  }

  computeInitial() {
    const state = this.state;
    state._initial = state._values;
    state.initial = state.values;
  }

  compute(event) {
    const {
      state,
      config,
      shared
    } = this;
    state.args = this.args;
    let dt = 0;
    if (event) {
      state.event = event;
      if (config.preventDefault && event.cancelable) state.event.preventDefault();
      state.type = event.type;
      shared.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size;
      shared.locked = !!document.pointerLockElement;
      Object.assign(shared, getEventDetails(event));
      shared.down = shared.pressed = shared.buttons % 2 === 1 || shared.touches > 0;

      dt = event.timeStamp - state.timeStamp;
      state.timeStamp = event.timeStamp;
      state.elapsedTime = state.timeStamp - state.startTime;
    }

    if (state._active) {
      const _absoluteDelta = state._delta.map(Math.abs);
      V.addTo(state._distance, _absoluteDelta);
    }

    if (this.axisIntent) this.axisIntent(event);

    const [_m0, _m1] = state._movement;
    const [t0, t1] = config.threshold;
    const {
      _step,
      values
    } = state;
    if (config.hasCustomTransform) {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && values[0];
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && values[1];
    } else {
      if (_step[0] === false) _step[0] = Math.abs(_m0) >= t0 && Math.sign(_m0) * t0;
      if (_step[1] === false) _step[1] = Math.abs(_m1) >= t1 && Math.sign(_m1) * t1;
    }
    state.intentional = _step[0] !== false || _step[1] !== false;
    if (!state.intentional) return;
    const movement = [0, 0];
    if (config.hasCustomTransform) {
      const [v0, v1] = values;
      movement[0] = _step[0] !== false ? v0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? v1 - _step[1] : 0;
    } else {
      movement[0] = _step[0] !== false ? _m0 - _step[0] : 0;
      movement[1] = _step[1] !== false ? _m1 - _step[1] : 0;
    }
    if (this.restrictToAxis && !state._blocked) this.restrictToAxis(movement);
    const previousOffset = state.offset;
    const gestureIsActive = state._active && !state._blocked || state.active;
    if (gestureIsActive) {
      state.first = state._active && !state.active;
      state.last = !state._active && state.active;
      state.active = shared[this.ingKey] = state._active;
      if (event) {
        if (state.first) {
          if ('bounds' in config) state._bounds = call(config.bounds, state);
          if (this.setup) this.setup();
        }
        state.movement = movement;
        this.computeOffset();
      }
    }
    const [ox, oy] = state.offset;
    const [[x0, x1], [y0, y1]] = state._bounds;
    state.overflow = [ox < x0 ? -1 : ox > x1 ? 1 : 0, oy < y0 ? -1 : oy > y1 ? 1 : 0];

    state._movementBound[0] = state.overflow[0] ? state._movementBound[0] === false ? state._movement[0] : state._movementBound[0] : false;
    state._movementBound[1] = state.overflow[1] ? state._movementBound[1] === false ? state._movement[1] : state._movementBound[1] : false;

    const rubberband = state._active ? config.rubberband || [0, 0] : [0, 0];
    state.offset = computeRubberband(state._bounds, state.offset, rubberband);
    state.delta = V.sub(state.offset, previousOffset);
    this.computeMovement();
    if (gestureIsActive && (!state.last || dt > BEFORE_LAST_KINEMATICS_DELAY)) {
      state.delta = V.sub(state.offset, previousOffset);
      const absoluteDelta = state.delta.map(Math.abs);
      V.addTo(state.distance, absoluteDelta);
      state.direction = state.delta.map(Math.sign);
      state._direction = state._delta.map(Math.sign);
      if (!state.first && dt > 0) {
        state.velocity = [absoluteDelta[0] / dt, absoluteDelta[1] / dt];
      }
    }
  }
  emit() {
    const state = this.state;
    const shared = this.shared;
    const config = this.config;
    if (!state._active) this.clean();

    if ((state._blocked || !state.intentional) && !state._force && !config.triggerAllEvents) return;

    const memo = this.handler(_objectSpread2(_objectSpread2(_objectSpread2({}, shared), state), {}, {
      [this.aliasKey]: state.values
    }));

    if (memo !== undefined) state.memo = memo;
  }
  clean() {
    this.eventStore.clean();
    this.timeoutStore.clean();
  }
}

function selectAxis([dx, dy], threshold) {
  const absDx = Math.abs(dx);
  const absDy = Math.abs(dy);
  if (absDx > absDy && absDx > threshold) {
    return 'x';
  }
  if (absDy > absDx && absDy > threshold) {
    return 'y';
  }
  return undefined;
}
class CoordinatesEngine extends Engine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "aliasKey", 'xy');
  }
  reset() {
    super.reset();
    this.state.axis = undefined;
  }
  init() {
    this.state.offset = [0, 0];
    this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = V.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = V.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(event) {
    const state = this.state;
    const config = this.config;
    if (!state.axis && event) {
      const threshold = typeof config.axisThreshold === 'object' ? config.axisThreshold[getPointerType(event)] : config.axisThreshold;
      state.axis = selectAxis(state._movement, threshold);
    }

    state._blocked = (config.lockDirection || !!config.axis) && !state.axis || !!config.axis && config.axis !== state.axis;
  }
  restrictToAxis(v) {
    if (this.config.axis || this.config.lockDirection) {
      switch (this.state.axis) {
        case 'x':
          v[1] = 0;
          break;
        case 'y':
          v[0] = 0;
          break;
      }
    }
  }
}

const identity = v => v;
const DEFAULT_RUBBERBAND = 0.15;
const commonConfigResolver = {
  enabled(value = true) {
    return value;
  },
  eventOptions(value, _k, config) {
    return _objectSpread2(_objectSpread2({}, config.shared.eventOptions), value);
  },
  preventDefault(value = false) {
    return value;
  },
  triggerAllEvents(value = false) {
    return value;
  },
  rubberband(value = 0) {
    switch (value) {
      case true:
        return [DEFAULT_RUBBERBAND, DEFAULT_RUBBERBAND];
      case false:
        return [0, 0];
      default:
        return V.toVector(value);
    }
  },
  from(value) {
    if (typeof value === 'function') return value;
    if (value != null) return V.toVector(value);
  },
  transform(value, _k, config) {
    const transform = value || config.shared.transform;
    this.hasCustomTransform = !!transform;
    if (false) {}
    return transform || identity;
  },
  threshold(value) {
    return V.toVector(value, 0);
  }
};
if (false) {}

const DEFAULT_AXIS_THRESHOLD = 0;
const coordinatesConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  axis(_v, _k, {
    axis
  }) {
    this.lockDirection = axis === 'lock';
    if (!this.lockDirection) return axis;
  },
  axisThreshold(value = DEFAULT_AXIS_THRESHOLD) {
    return value;
  },
  bounds(value = {}) {
    if (typeof value === 'function') {
      return state => coordinatesConfigResolver.bounds(value(state));
    }
    if ('current' in value) {
      return () => value.current;
    }
    if (typeof HTMLElement === 'function' && value instanceof HTMLElement) {
      return value;
    }
    const {
      left = -Infinity,
      right = Infinity,
      top = -Infinity,
      bottom = Infinity
    } = value;
    return [[left, right], [top, bottom]];
  }
});

const DISPLACEMENT = 10;
const KEYS_DELTA_MAP = {
  ArrowRight: (factor = 1) => [DISPLACEMENT * factor, 0],
  ArrowLeft: (factor = 1) => [-DISPLACEMENT * factor, 0],
  ArrowUp: (factor = 1) => [0, -DISPLACEMENT * factor],
  ArrowDown: (factor = 1) => [0, DISPLACEMENT * factor]
};
class DragEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", 'dragging');
  }
  reset() {
    super.reset();
    const state = this.state;
    state._pointerId = undefined;
    state._pointerActive = false;
    state._keyboardActive = false;
    state._preventScroll = false;
    state._delayed = false;
    state.swipe = [0, 0];
    state.tap = false;
    state.canceled = false;
    state.cancel = this.cancel.bind(this);
  }
  setup() {
    const state = this.state;
    if (state._bounds instanceof HTMLElement) {
      const boundRect = state._bounds.getBoundingClientRect();
      const targetRect = state.currentTarget.getBoundingClientRect();
      const _bounds = {
        left: boundRect.left - targetRect.left + state.offset[0],
        right: boundRect.right - targetRect.right + state.offset[0],
        top: boundRect.top - targetRect.top + state.offset[1],
        bottom: boundRect.bottom - targetRect.bottom + state.offset[1]
      };
      state._bounds = coordinatesConfigResolver.bounds(_bounds);
    }
  }
  cancel() {
    const state = this.state;
    if (state.canceled) return;
    state.canceled = true;
    state._active = false;
    setTimeout(() => {
      this.compute();
      this.emit();
    }, 0);
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }

  clean() {
    this.pointerClean();
    this.state._pointerActive = false;
    this.state._keyboardActive = false;
    super.clean();
  }
  pointerDown(event) {
    const config = this.config;
    const state = this.state;
    if (event.buttons != null && (
    Array.isArray(config.pointerButtons) ? !config.pointerButtons.includes(event.buttons) :
    config.pointerButtons !== -1 && config.pointerButtons !== event.buttons)) return;
    const ctrlIds = this.ctrl.setEventIds(event);
    if (config.pointerCapture) {
      event.target.setPointerCapture(event.pointerId);
    }
    if (
    ctrlIds && ctrlIds.size > 1 && state._pointerActive) return;
    this.start(event);
    this.setupPointer(event);
    state._pointerId = pointerId(event);
    state._pointerActive = true;
    this.computeValues(pointerValues(event));
    this.computeInitial();
    if (config.preventScrollAxis && getPointerType(event) !== 'mouse') {
      state._active = false;
      this.setupScrollPrevention(event);
    } else if (config.delay > 0) {
      this.setupDelayTrigger(event);
      if (config.triggerAllEvents) {
        this.compute(event);
        this.emit();
      }
    } else {
      this.startPointerDrag(event);
    }
  }
  startPointerDrag(event) {
    const state = this.state;
    state._active = true;
    state._preventScroll = true;
    state._delayed = false;
    this.compute(event);
    this.emit();
  }
  pointerMove(event) {
    const state = this.state;
    const config = this.config;
    if (!state._pointerActive) return;

    if (state.type === event.type && event.timeStamp === state.timeStamp) return;
    const id = pointerId(event);
    if (state._pointerId !== undefined && id !== state._pointerId) return;
    const _values = pointerValues(event);
    if (document.pointerLockElement === event.target) {
      state._delta = [event.movementX, event.movementY];
    } else {
      state._delta = V.sub(_values, state._values);
      this.computeValues(_values);
    }
    V.addTo(state._movement, state._delta);
    this.compute(event);

    if (state._delayed && state.intentional) {
      this.timeoutStore.remove('dragDelay');
      state.active = false;
      this.startPointerDrag(event);
      return;
    }
    if (config.preventScrollAxis && !state._preventScroll) {
      if (state.axis) {
        if (state.axis === config.preventScrollAxis || config.preventScrollAxis === 'xy') {
          state._active = false;
          this.clean();
          return;
        } else {
          this.timeoutStore.remove('startPointerDrag');
          this.startPointerDrag(event);
          return;
        }
      } else {
        return;
      }
    }
    this.emit();
  }
  pointerUp(event) {
    this.ctrl.setEventIds(event);
    try {
      if (this.config.pointerCapture && event.target.hasPointerCapture(event.pointerId)) {
        ;
        event.target.releasePointerCapture(event.pointerId);
      }
    } catch (_unused) {
      if (false) {}
    }
    const state = this.state;
    const config = this.config;
    if (!state._active || !state._pointerActive) return;
    const id = pointerId(event);
    if (state._pointerId !== undefined && id !== state._pointerId) return;
    this.state._pointerActive = false;
    this.setActive();
    this.compute(event);
    const [dx, dy] = state._distance;
    state.tap = dx <= config.tapsThreshold && dy <= config.tapsThreshold;
    if (state.tap && config.filterTaps) {
      state._force = true;
    } else {
      const [dirx, diry] = state.direction;
      const [vx, vy] = state.velocity;
      const [mx, my] = state.movement;
      const [svx, svy] = config.swipe.velocity;
      const [sx, sy] = config.swipe.distance;
      const sdt = config.swipe.duration;
      if (state.elapsedTime < sdt) {
        if (Math.abs(vx) > svx && Math.abs(mx) > sx) state.swipe[0] = dirx;
        if (Math.abs(vy) > svy && Math.abs(my) > sy) state.swipe[1] = diry;
      }
    }
    this.emit();
  }
  pointerClick(event) {
    if (!this.state.tap && event.detail > 0) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  setupPointer(event) {
    const config = this.config;
    const device = config.device;
    if (false) {}
    if (config.pointerLock) {
      event.currentTarget.requestPointerLock();
    }
    if (!config.pointerCapture) {
      this.eventStore.add(this.sharedConfig.window, device, 'change', this.pointerMove.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, 'end', this.pointerUp.bind(this));
      this.eventStore.add(this.sharedConfig.window, device, 'cancel', this.pointerUp.bind(this));
    }
  }
  pointerClean() {
    if (this.config.pointerLock && document.pointerLockElement === this.state.currentTarget) {
      document.exitPointerLock();
    }
  }
  preventScroll(event) {
    if (this.state._preventScroll && event.cancelable) {
      event.preventDefault();
    }
  }
  setupScrollPrevention(event) {
    this.state._preventScroll = false;
    persistEvent(event);
    const remove = this.eventStore.add(this.sharedConfig.window, 'touch', 'change', this.preventScroll.bind(this), {
      passive: false
    });
    this.eventStore.add(this.sharedConfig.window, 'touch', 'end', remove);
    this.eventStore.add(this.sharedConfig.window, 'touch', 'cancel', remove);
    this.timeoutStore.add('startPointerDrag', this.startPointerDrag.bind(this), this.config.preventScrollDelay, event);
  }
  setupDelayTrigger(event) {
    this.state._delayed = true;
    this.timeoutStore.add('dragDelay', () => {
      this.state._step = [0, 0];
      this.startPointerDrag(event);
    }, this.config.delay);
  }
  keyDown(event) {
    const deltaFn = KEYS_DELTA_MAP[event.key];
    if (deltaFn) {
      const state = this.state;
      const factor = event.shiftKey ? 10 : event.altKey ? 0.1 : 1;
      this.start(event);
      state._delta = deltaFn(factor);
      state._keyboardActive = true;
      V.addTo(state._movement, state._delta);
      this.compute(event);
      this.emit();
    }
  }
  keyUp(event) {
    if (!(event.key in KEYS_DELTA_MAP)) return;
    this.state._keyboardActive = false;
    this.setActive();
    this.compute(event);
    this.emit();
  }
  bind(bindFunction) {
    const device = this.config.device;
    bindFunction(device, 'start', this.pointerDown.bind(this));
    if (this.config.pointerCapture) {
      bindFunction(device, 'change', this.pointerMove.bind(this));
      bindFunction(device, 'end', this.pointerUp.bind(this));
      bindFunction(device, 'cancel', this.pointerUp.bind(this));
      bindFunction('lostPointerCapture', '', this.pointerUp.bind(this));
    }
    if (this.config.keys) {
      bindFunction('key', 'down', this.keyDown.bind(this));
      bindFunction('key', 'up', this.keyUp.bind(this));
    }
    if (this.config.filterTaps) {
      bindFunction('click', '', this.pointerClick.bind(this), {
        capture: true,
        passive: false
      });
    }
  }
}
function persistEvent(event) {
  'persist' in event && typeof event.persist === 'function' && event.persist();
}

const isBrowser = typeof window !== 'undefined' && window.document && window.document.createElement;
function supportsTouchEvents() {
  return isBrowser && 'ontouchstart' in window;
}
function isTouchScreen() {
  return supportsTouchEvents() || isBrowser && window.navigator.maxTouchPoints > 1;
}
function supportsPointerEvents() {
  return isBrowser && 'onpointerdown' in window;
}
function supportsPointerLock() {
  return isBrowser && 'exitPointerLock' in window.document;
}
function supportsGestureEvents() {
  try {
    return 'constructor' in GestureEvent;
  } catch (e) {
    return false;
  }
}
const SUPPORT = {
  isBrowser,
  gesture: supportsGestureEvents(),
  touch: isTouchScreen(),
  touchscreen: isTouchScreen(),
  pointer: supportsPointerEvents(),
  pointerLock: supportsPointerLock()
};

const DEFAULT_PREVENT_SCROLL_DELAY = 250;
const DEFAULT_DRAG_DELAY = 180;
const DEFAULT_SWIPE_VELOCITY = 0.5;
const DEFAULT_SWIPE_DISTANCE = 50;
const DEFAULT_SWIPE_DURATION = 250;
const DEFAULT_DRAG_AXIS_THRESHOLD = {
  mouse: 0,
  touch: 0,
  pen: 8
};
const dragConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  device(_v, _k, {
    pointer: {
      touch = false,
      lock = false,
      mouse = false
    } = {}
  }) {
    this.pointerLock = lock && SUPPORT.pointerLock;
    if (SUPPORT.touch && touch) return 'touch';
    if (this.pointerLock) return 'mouse';
    if (SUPPORT.pointer && !mouse) return 'pointer';
    if (SUPPORT.touch) return 'touch';
    return 'mouse';
  },
  preventScrollAxis(value, _k, {
    preventScroll
  }) {
    this.preventScrollDelay = typeof preventScroll === 'number' ? preventScroll : preventScroll || preventScroll === undefined && value ? DEFAULT_PREVENT_SCROLL_DELAY : undefined;
    if (!SUPPORT.touchscreen || preventScroll === false) return undefined;
    return value ? value : preventScroll !== undefined ? 'y' : undefined;
  },
  pointerCapture(_v, _k, {
    pointer: {
      capture = true,
      buttons = 1
    } = {}
  }) {
    this.pointerButtons = buttons;
    return !this.pointerLock && this.device === 'pointer' && capture;
  },
  keys(value = true) {
    return value;
  },
  threshold(value, _k, {
    filterTaps = false,
    tapsThreshold = 3,
    axis = undefined
  }) {
    const threshold = V.toVector(value, filterTaps ? tapsThreshold : axis ? 1 : 0);
    this.filterTaps = filterTaps;
    this.tapsThreshold = tapsThreshold;
    return threshold;
  },
  swipe({
    velocity = DEFAULT_SWIPE_VELOCITY,
    distance = DEFAULT_SWIPE_DISTANCE,
    duration = DEFAULT_SWIPE_DURATION
  } = {}) {
    return {
      velocity: this.transform(V.toVector(velocity)),
      distance: this.transform(V.toVector(distance)),
      duration
    };
  },
  delay(value = 0) {
    switch (value) {
      case true:
        return DEFAULT_DRAG_DELAY;
      case false:
        return 0;
      default:
        return value;
    }
  },
  axisThreshold(value) {
    if (!value) return DEFAULT_DRAG_AXIS_THRESHOLD;
    return _objectSpread2(_objectSpread2({}, DEFAULT_DRAG_AXIS_THRESHOLD), value);
  }
});
if (false) {}

function clampStateInternalMovementToBounds(state) {
  const [ox, oy] = state.overflow;
  const [dx, dy] = state._delta;
  const [dirx, diry] = state._direction;
  if (ox < 0 && dx > 0 && dirx < 0 || ox > 0 && dx < 0 && dirx > 0) {
    state._movement[0] = state._movementBound[0];
  }
  if (oy < 0 && dy > 0 && diry < 0 || oy > 0 && dy < 0 && diry > 0) {
    state._movement[1] = state._movementBound[1];
  }
}

const SCALE_ANGLE_RATIO_INTENT_DEG = 30;
const PINCH_WHEEL_RATIO = 100;
class PinchEngine extends Engine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", 'pinching');
    _defineProperty(this, "aliasKey", 'da');
  }
  init() {
    this.state.offset = [1, 0];
    this.state.lastOffset = [1, 0];
    this.state._pointerEvents = new Map();
  }

  reset() {
    super.reset();
    const state = this.state;
    state._touchIds = [];
    state.canceled = false;
    state.cancel = this.cancel.bind(this);
    state.turns = 0;
  }
  computeOffset() {
    const {
      type,
      movement,
      lastOffset
    } = this.state;
    if (type === 'wheel') {
      this.state.offset = V.add(movement, lastOffset);
    } else {
      this.state.offset = [(1 + movement[0]) * lastOffset[0], movement[1] + lastOffset[1]];
    }
  }
  computeMovement() {
    const {
      offset,
      lastOffset
    } = this.state;
    this.state.movement = [offset[0] / lastOffset[0], offset[1] - lastOffset[1]];
  }
  axisIntent() {
    const state = this.state;
    const [_m0, _m1] = state._movement;
    if (!state.axis) {
      const axisMovementDifference = Math.abs(_m0) * SCALE_ANGLE_RATIO_INTENT_DEG - Math.abs(_m1);
      if (axisMovementDifference < 0) state.axis = 'angle';else if (axisMovementDifference > 0) state.axis = 'scale';
    }
  }
  restrictToAxis(v) {
    if (this.config.lockDirection) {
      if (this.state.axis === 'scale') v[1] = 0;else if (this.state.axis === 'angle') v[0] = 0;
    }
  }
  cancel() {
    const state = this.state;
    if (state.canceled) return;
    setTimeout(() => {
      state.canceled = true;
      state._active = false;
      this.compute();
      this.emit();
    }, 0);
  }
  touchStart(event) {
    this.ctrl.setEventIds(event);
    const state = this.state;
    const ctrlTouchIds = this.ctrl.touchIds;
    if (state._active) {
      if (state._touchIds.every(id => ctrlTouchIds.has(id))) return;
    }

    if (ctrlTouchIds.size < 2) return;
    this.start(event);
    state._touchIds = Array.from(ctrlTouchIds).slice(0, 2);
    const payload = touchDistanceAngle(event, state._touchIds);
    this.pinchStart(event, payload);
  }
  pointerStart(event) {
    if (event.buttons != null && event.buttons % 2 !== 1) return;
    this.ctrl.setEventIds(event);
    event.target.setPointerCapture(event.pointerId);
    const state = this.state;
    const _pointerEvents = state._pointerEvents;
    const ctrlPointerIds = this.ctrl.pointerIds;
    if (state._active) {
      if (Array.from(_pointerEvents.keys()).every(id => ctrlPointerIds.has(id))) return;
    }
    if (_pointerEvents.size < 2) {
      _pointerEvents.set(event.pointerId, event);
    }
    if (state._pointerEvents.size < 2) return;
    this.start(event);

    const payload = distanceAngle(...Array.from(_pointerEvents.values()));
    this.pinchStart(event, payload);
  }
  pinchStart(event, payload) {
    const state = this.state;
    state.origin = payload.origin;
    this.computeValues([payload.distance, payload.angle]);
    this.computeInitial();
    this.compute(event);
    this.emit();
  }
  touchMove(event) {
    if (!this.state._active) return;
    const payload = touchDistanceAngle(event, this.state._touchIds);
    this.pinchMove(event, payload);
  }
  pointerMove(event) {
    const _pointerEvents = this.state._pointerEvents;
    if (_pointerEvents.has(event.pointerId)) {
      _pointerEvents.set(event.pointerId, event);
    }
    if (!this.state._active) return;
    const payload = distanceAngle(...Array.from(_pointerEvents.values()));
    this.pinchMove(event, payload);
  }
  pinchMove(event, payload) {
    const state = this.state;
    const prev_a = state._values[1];
    const delta_a = payload.angle - prev_a;
    let delta_turns = 0;
    if (Math.abs(delta_a) > 270) delta_turns += Math.sign(delta_a);
    this.computeValues([payload.distance, payload.angle - 360 * delta_turns]);
    state.origin = payload.origin;
    state.turns = delta_turns;
    state._movement = [state._values[0] / state._initial[0] - 1, state._values[1] - state._initial[1]];
    this.compute(event);
    this.emit();
  }
  touchEnd(event) {
    this.ctrl.setEventIds(event);
    if (!this.state._active) return;
    if (this.state._touchIds.some(id => !this.ctrl.touchIds.has(id))) {
      this.state._active = false;
      this.compute(event);
      this.emit();
    }
  }
  pointerEnd(event) {
    const state = this.state;
    this.ctrl.setEventIds(event);
    try {
      event.target.releasePointerCapture(event.pointerId);
    } catch (_unused) {}
    if (state._pointerEvents.has(event.pointerId)) {
      state._pointerEvents.delete(event.pointerId);
    }
    if (!state._active) return;
    if (state._pointerEvents.size < 2) {
      state._active = false;
      this.compute(event);
      this.emit();
    }
  }
  gestureStart(event) {
    if (event.cancelable) event.preventDefault();
    const state = this.state;
    if (state._active) return;
    this.start(event);
    this.computeValues([event.scale, event.rotation]);
    state.origin = [event.clientX, event.clientY];
    this.compute(event);
    this.emit();
  }
  gestureMove(event) {
    if (event.cancelable) event.preventDefault();
    if (!this.state._active) return;
    const state = this.state;
    this.computeValues([event.scale, event.rotation]);
    state.origin = [event.clientX, event.clientY];
    const _previousMovement = state._movement;
    state._movement = [event.scale - 1, event.rotation];
    state._delta = V.sub(state._movement, _previousMovement);
    this.compute(event);
    this.emit();
  }
  gestureEnd(event) {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute(event);
    this.emit();
  }
  wheel(event) {
    const modifierKey = this.config.modifierKey;
    if (modifierKey && !event[modifierKey]) return;
    if (!this.state._active) this.wheelStart(event);else this.wheelChange(event);
    this.timeoutStore.add('wheelEnd', this.wheelEnd.bind(this));
  }
  wheelStart(event) {
    this.start(event);
    this.wheelChange(event);
  }
  wheelChange(event) {
    const isR3f = ('uv' in event);
    if (!isR3f) {
      if (event.cancelable) {
        event.preventDefault();
      }
      if (false) {}
    }
    const state = this.state;
    state._delta = [-wheelValues(event)[1] / PINCH_WHEEL_RATIO * state.offset[0], 0];
    V.addTo(state._movement, state._delta);

    clampStateInternalMovementToBounds(state);
    this.state.origin = [event.clientX, event.clientY];
    this.compute(event);
    this.emit();
  }
  wheelEnd() {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    const device = this.config.device;
    if (!!device) {
      bindFunction(device, 'start', this[device + 'Start'].bind(this));
      bindFunction(device, 'change', this[device + 'Move'].bind(this));
      bindFunction(device, 'end', this[device + 'End'].bind(this));
      bindFunction(device, 'cancel', this[device + 'End'].bind(this));
    }
    if (this.config.pinchOnWheel) {
      bindFunction('wheel', '', this.wheel.bind(this), {
        passive: false
      });
    }
  }
}

const pinchConfigResolver = _objectSpread2(_objectSpread2({}, commonConfigResolver), {}, {
  device(_v, _k, {
    shared,
    pointer: {
      touch = false
    } = {}
  }) {
    const sharedConfig = shared;
    if (sharedConfig.target && !SUPPORT.touch && SUPPORT.gesture) return 'gesture';
    if (SUPPORT.touch && touch) return 'touch';
    if (SUPPORT.touchscreen) {
      if (SUPPORT.pointer) return 'pointer';
      if (SUPPORT.touch) return 'touch';
    }
  },

  bounds(_v, _k, {
    scaleBounds = {},
    angleBounds = {}
  }) {
    const _scaleBounds = state => {
      const D = assignDefault(call(scaleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [D.min, D.max];
    };
    const _angleBounds = state => {
      const A = assignDefault(call(angleBounds, state), {
        min: -Infinity,
        max: Infinity
      });
      return [A.min, A.max];
    };
    if (typeof scaleBounds !== 'function' && typeof angleBounds !== 'function') return [_scaleBounds(), _angleBounds()];
    return state => [_scaleBounds(state), _angleBounds(state)];
  },
  threshold(value, _k, config) {
    this.lockDirection = config.axis === 'lock';
    const threshold = V.toVector(value, this.lockDirection ? [0.1, 3] : 0);
    return threshold;
  },
  modifierKey(value) {
    if (value === undefined) return 'ctrlKey';
    return value;
  },
  pinchOnWheel(value = true) {
    return value;
  }
});

class MoveEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", 'moving');
  }
  move(event) {
    if (this.config.mouseOnly && event.pointerType !== 'mouse') return;
    if (!this.state._active) this.moveStart(event);else this.moveChange(event);
    this.timeoutStore.add('moveEnd', this.moveEnd.bind(this));
  }
  moveStart(event) {
    this.start(event);
    this.computeValues(pointerValues(event));
    this.compute(event);
    this.computeInitial();
    this.emit();
  }
  moveChange(event) {
    if (!this.state._active) return;
    const values = pointerValues(event);
    const state = this.state;
    state._delta = V.sub(values, state._values);
    V.addTo(state._movement, state._delta);
    this.computeValues(values);
    this.compute(event);
    this.emit();
  }
  moveEnd(event) {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute(event);
    this.emit();
  }
  bind(bindFunction) {
    bindFunction('pointer', 'change', this.move.bind(this));
    bindFunction('pointer', 'leave', this.moveEnd.bind(this));
  }
}

const moveConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});

class ScrollEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", 'scrolling');
  }
  scroll(event) {
    if (!this.state._active) this.start(event);
    this.scrollChange(event);
    this.timeoutStore.add('scrollEnd', this.scrollEnd.bind(this));
  }
  scrollChange(event) {
    if (event.cancelable) event.preventDefault();
    const state = this.state;
    const values = scrollValues(event);
    state._delta = V.sub(values, state._values);
    V.addTo(state._movement, state._delta);
    this.computeValues(values);
    this.compute(event);
    this.emit();
  }
  scrollEnd() {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    bindFunction('scroll', '', this.scroll.bind(this));
  }
}

const scrollConfigResolver = coordinatesConfigResolver;

class WheelEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", 'wheeling');
  }
  wheel(event) {
    if (!this.state._active) this.start(event);
    this.wheelChange(event);
    this.timeoutStore.add('wheelEnd', this.wheelEnd.bind(this));
  }
  wheelChange(event) {
    const state = this.state;
    state._delta = wheelValues(event);
    V.addTo(state._movement, state._delta);

    clampStateInternalMovementToBounds(state);
    this.compute(event);
    this.emit();
  }
  wheelEnd() {
    if (!this.state._active) return;
    this.state._active = false;
    this.compute();
    this.emit();
  }
  bind(bindFunction) {
    bindFunction('wheel', '', this.wheel.bind(this));
  }
}

const wheelConfigResolver = coordinatesConfigResolver;

class HoverEngine extends CoordinatesEngine {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "ingKey", 'hovering');
  }
  enter(event) {
    if (this.config.mouseOnly && event.pointerType !== 'mouse') return;
    this.start(event);
    this.computeValues(pointerValues(event));
    this.compute(event);
    this.emit();
  }
  leave(event) {
    if (this.config.mouseOnly && event.pointerType !== 'mouse') return;
    const state = this.state;
    if (!state._active) return;
    state._active = false;
    const values = pointerValues(event);
    state._movement = state._delta = V.sub(values, state._values);
    this.computeValues(values);
    this.compute(event);
    state.delta = state.movement;
    this.emit();
  }
  bind(bindFunction) {
    bindFunction('pointer', 'enter', this.enter.bind(this));
    bindFunction('pointer', 'leave', this.leave.bind(this));
  }
}

const hoverConfigResolver = _objectSpread2(_objectSpread2({}, coordinatesConfigResolver), {}, {
  mouseOnly: (value = true) => value
});

const EngineMap = new Map();
const ConfigResolverMap = new Map();
function actions_71ad3053_esm_registerAction(action) {
  EngineMap.set(action.key, action.engine);
  ConfigResolverMap.set(action.key, action.resolver);
}
const actions_71ad3053_esm_dragAction = {
  key: 'drag',
  engine: DragEngine,
  resolver: dragConfigResolver
};
const actions_71ad3053_esm_hoverAction = {
  key: 'hover',
  engine: HoverEngine,
  resolver: hoverConfigResolver
};
const actions_71ad3053_esm_moveAction = {
  key: 'move',
  engine: MoveEngine,
  resolver: moveConfigResolver
};
const actions_71ad3053_esm_pinchAction = {
  key: 'pinch',
  engine: PinchEngine,
  resolver: pinchConfigResolver
};
const actions_71ad3053_esm_scrollAction = {
  key: 'scroll',
  engine: ScrollEngine,
  resolver: scrollConfigResolver
};
const actions_71ad3053_esm_wheelAction = {
  key: 'wheel',
  engine: WheelEngine,
  resolver: wheelConfigResolver
};



// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
;// CONCATENATED MODULE: ../node_modules/@use-gesture/core/dist/use-gesture-core.esm.js



function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

const sharedConfigResolver = {
  target(value) {
    if (value) {
      return () => 'current' in value ? value.current : value;
    }
    return undefined;
  },
  enabled(value = true) {
    return value;
  },
  window(value = SUPPORT.isBrowser ? window : undefined) {
    return value;
  },
  eventOptions({
    passive = true,
    capture = false
  } = {}) {
    return {
      passive,
      capture
    };
  },
  transform(value) {
    return value;
  }
};

const _excluded = ["target", "eventOptions", "window", "enabled", "transform"];
function resolveWith(config = {}, resolvers) {
  const result = {};
  for (const [key, resolver] of Object.entries(resolvers)) {
    switch (typeof resolver) {
      case 'function':
        if (false) {} else {
          result[key] = resolver.call(result, config[key], key, config);
        }
        break;
      case 'object':
        result[key] = resolveWith(config[key], resolver);
        break;
      case 'boolean':
        if (resolver) result[key] = config[key];
        break;
    }
  }
  return result;
}
function parse(newConfig, gestureKey, _config = {}) {
  const _ref = newConfig,
    {
      target,
      eventOptions,
      window,
      enabled,
      transform
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  _config.shared = resolveWith({
    target,
    eventOptions,
    window,
    enabled,
    transform
  }, sharedConfigResolver);
  if (gestureKey) {
    const resolver = ConfigResolverMap.get(gestureKey);
    _config[gestureKey] = resolveWith(_objectSpread2({
      shared: _config.shared
    }, rest), resolver);
  } else {
    for (const key in rest) {
      const resolver = ConfigResolverMap.get(key);
      if (resolver) {
        _config[key] = resolveWith(_objectSpread2({
          shared: _config.shared
        }, rest[key]), resolver);
      } else if (false) {}
    }
  }
  return _config;
}

class EventStore {
  constructor(ctrl, gestureKey) {
    _defineProperty(this, "_listeners", new Set());
    this._ctrl = ctrl;
    this._gestureKey = gestureKey;
  }
  add(element, device, action, handler, options) {
    const listeners = this._listeners;
    const type = toDomEventType(device, action);
    const _options = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {};
    const eventOptions = _objectSpread2(_objectSpread2({}, _options), options);
    element.addEventListener(type, handler, eventOptions);
    const remove = () => {
      element.removeEventListener(type, handler, eventOptions);
      listeners.delete(remove);
    };
    listeners.add(remove);
    return remove;
  }
  clean() {
    this._listeners.forEach(remove => remove());
    this._listeners.clear();
  }
}

class TimeoutStore {
  constructor() {
    _defineProperty(this, "_timeouts", new Map());
  }
  add(key, callback, ms = 140, ...args) {
    this.remove(key);
    this._timeouts.set(key, window.setTimeout(callback, ms, ...args));
  }
  remove(key) {
    const timeout = this._timeouts.get(key);
    if (timeout) window.clearTimeout(timeout);
  }
  clean() {
    this._timeouts.forEach(timeout => void window.clearTimeout(timeout));
    this._timeouts.clear();
  }
}

class Controller {

  constructor(handlers) {
    _defineProperty(this, "gestures", new Set());
    _defineProperty(this, "_targetEventStore", new EventStore(this));
    _defineProperty(this, "gestureEventStores", {});
    _defineProperty(this, "gestureTimeoutStores", {});
    _defineProperty(this, "handlers", {});
    _defineProperty(this, "config", {});
    _defineProperty(this, "pointerIds", new Set());
    _defineProperty(this, "touchIds", new Set());
    _defineProperty(this, "state", {
      shared: {
        shiftKey: false,
        metaKey: false,
        ctrlKey: false,
        altKey: false
      }
    });
    resolveGestures(this, handlers);
  }
  setEventIds(event) {
    if (isTouch(event)) {
      this.touchIds = new Set(touchIds(event));
      return this.touchIds;
    } else if ('pointerId' in event) {
      if (event.type === 'pointerup' || event.type === 'pointercancel') this.pointerIds.delete(event.pointerId);else if (event.type === 'pointerdown') this.pointerIds.add(event.pointerId);
      return this.pointerIds;
    }
  }
  applyHandlers(handlers, nativeHandlers) {
    this.handlers = handlers;
    this.nativeHandlers = nativeHandlers;
  }
  applyConfig(config, gestureKey) {
    this.config = parse(config, gestureKey, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (const key of this.gestures) {
      this.gestureEventStores[key].clean();
      this.gestureTimeoutStores[key].clean();
    }
  }
  effect() {
    if (this.config.shared.target) this.bind();
    return () => this._targetEventStore.clean();
  }
  bind(...args) {
    const sharedConfig = this.config.shared;
    const props = {};
    let target;
    if (sharedConfig.target) {
      target = sharedConfig.target();
      if (!target) return;
    }
    if (sharedConfig.enabled) {
      for (const gestureKey of this.gestures) {
        const gestureConfig = this.config[gestureKey];
        const bindFunction = bindToProps(props, gestureConfig.eventOptions, !!target);
        if (gestureConfig.enabled) {
          const Engine = EngineMap.get(gestureKey);
          new Engine(this, args, gestureKey).bind(bindFunction);
        }
      }

      const nativeBindFunction = bindToProps(props, sharedConfig.eventOptions, !!target);
      for (const eventKey in this.nativeHandlers) {
        nativeBindFunction(eventKey, '',
        event => this.nativeHandlers[eventKey](_objectSpread2(_objectSpread2({}, this.state.shared), {}, {
          event,
          args
        })), undefined, true);
      }
    }

    for (const handlerProp in props) {
      props[handlerProp] = chain(...props[handlerProp]);
    }

    if (!target) return props;

    for (const handlerProp in props) {
      const {
        device,
        capture,
        passive
      } = parseProp(handlerProp);
      this._targetEventStore.add(target, device, '', props[handlerProp], {
        capture,
        passive
      });
    }
  }
}
function setupGesture(ctrl, gestureKey) {
  ctrl.gestures.add(gestureKey);
  ctrl.gestureEventStores[gestureKey] = new EventStore(ctrl, gestureKey);
  ctrl.gestureTimeoutStores[gestureKey] = new TimeoutStore();
}
function resolveGestures(ctrl, internalHandlers) {
  if (internalHandlers.drag) setupGesture(ctrl, 'drag');
  if (internalHandlers.wheel) setupGesture(ctrl, 'wheel');
  if (internalHandlers.scroll) setupGesture(ctrl, 'scroll');
  if (internalHandlers.move) setupGesture(ctrl, 'move');
  if (internalHandlers.pinch) setupGesture(ctrl, 'pinch');
  if (internalHandlers.hover) setupGesture(ctrl, 'hover');
}
const bindToProps = (props, eventOptions, withPassiveOption) => (device, action, handler, options = {}, isNative = false) => {
  var _options$capture, _options$passive;
  const capture = (_options$capture = options.capture) !== null && _options$capture !== void 0 ? _options$capture : eventOptions.capture;
  const passive = (_options$passive = options.passive) !== null && _options$passive !== void 0 ? _options$passive : eventOptions.passive;
  let handlerProp = isNative ? device : toHandlerProp(device, action, capture);
  if (withPassiveOption && passive) handlerProp += 'Passive';
  props[handlerProp] = props[handlerProp] || [];
  props[handlerProp].push(handler);
};

const RE_NOT_NATIVE = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function sortHandlers(_handlers) {
  const native = {};
  const handlers = {};
  const actions = new Set();
  for (let key in _handlers) {
    if (RE_NOT_NATIVE.test(key)) {
      actions.add(RegExp.lastMatch);
      handlers[key] = _handlers[key];
    } else {
      native[key] = _handlers[key];
    }
  }
  return [handlers, native, actions];
}
function registerGesture(actions, handlers, handlerKey, key, internalHandlers, config) {
  if (!actions.has(handlerKey)) return;
  if (!EngineMap.has(key)) {
    if (false) {}
    return;
  }
  const startKey = handlerKey + 'Start';
  const endKey = handlerKey + 'End';
  const fn = state => {
    let memo = undefined;
    if (state.first && startKey in handlers) handlers[startKey](state);
    if (handlerKey in handlers) memo = handlers[handlerKey](state);
    if (state.last && endKey in handlers) handlers[endKey](state);
    return memo;
  };
  internalHandlers[key] = fn;
  config[key] = config[key] || {};
}
function parseMergedHandlers(mergedHandlers, mergedConfig) {
  const [handlers, nativeHandlers, actions] = sortHandlers(mergedHandlers);
  const internalHandlers = {};
  registerGesture(actions, handlers, 'onDrag', 'drag', internalHandlers, mergedConfig);
  registerGesture(actions, handlers, 'onWheel', 'wheel', internalHandlers, mergedConfig);
  registerGesture(actions, handlers, 'onScroll', 'scroll', internalHandlers, mergedConfig);
  registerGesture(actions, handlers, 'onPinch', 'pinch', internalHandlers, mergedConfig);
  registerGesture(actions, handlers, 'onMove', 'move', internalHandlers, mergedConfig);
  registerGesture(actions, handlers, 'onHover', 'hover', internalHandlers, mergedConfig);
  return {
    handlers: internalHandlers,
    config: mergedConfig,
    nativeHandlers
  };
}



;// CONCATENATED MODULE: ../node_modules/@use-gesture/react/dist/use-gesture-react.esm.js







function useRecognizers(handlers, config = {}, gestureKey, nativeHandlers) {
  const ctrl = react.useMemo(() => new Controller(handlers), []);
  ctrl.applyHandlers(handlers, nativeHandlers);
  ctrl.applyConfig(config, gestureKey);
  react.useEffect(ctrl.effect.bind(ctrl));
  react.useEffect(() => {
    return ctrl.clean.bind(ctrl);
  }, []);

  if (config.target === undefined) {
    return ctrl.bind.bind(ctrl);
  }
  return undefined;
}

function useDrag(handler, config) {
  registerAction(dragAction);
  return useRecognizers({
    drag: handler
  }, config || {}, 'drag');
}

function usePinch(handler, config) {
  registerAction(pinchAction);
  return useRecognizers({
    pinch: handler
  }, config || {}, 'pinch');
}

function useWheel(handler, config) {
  registerAction(wheelAction);
  return useRecognizers({
    wheel: handler
  }, config || {}, 'wheel');
}

function useScroll(handler, config) {
  registerAction(scrollAction);
  return useRecognizers({
    scroll: handler
  }, config || {}, 'scroll');
}

function useMove(handler, config) {
  registerAction(moveAction);
  return useRecognizers({
    move: handler
  }, config || {}, 'move');
}

function useHover(handler, config) {
  registerAction(hoverAction);
  return useRecognizers({
    hover: handler
  }, config || {}, 'hover');
}

function createUseGesture(actions) {
  actions.forEach(actions_71ad3053_esm_registerAction);
  return function useGesture(_handlers, _config) {
    const {
      handlers,
      nativeHandlers,
      config
    } = parseMergedHandlers(_handlers, _config || {});
    return useRecognizers(handlers, config, undefined, nativeHandlers);
  };
}

function useGesture(handlers, config) {
  const hook = createUseGesture([actions_71ad3053_esm_dragAction, actions_71ad3053_esm_pinchAction, actions_71ad3053_esm_scrollAction, actions_71ad3053_esm_wheelAction, actions_71ad3053_esm_moveAction, actions_71ad3053_esm_hoverAction]);
  return hook(handlers, config || {});
}




/***/ }),

/***/ 3786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_CodeBlock; }
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(5773);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ./src/theme/Playground/index.js + 1 modules
var Playground = __webpack_require__(3244);
// EXTERNAL MODULE: ./src/theme/ReactLiveScope/index.js
var ReactLiveScope = __webpack_require__(7477);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(808);
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(6457);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(8944);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(5421);
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(624);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */function usePrismTheme(){var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),prism=_useThemeConfig.prism;var _useColorMode=(0,contexts_colorMode/* useColorMode */.I)(),colorMode=_useColorMode.colorMode;var lightModeTheme=prism.theme;var darkModeTheme=prism.darkTheme||lightModeTheme;var prismTheme=colorMode==='dark'?darkModeTheme:lightModeTheme;return prismTheme;}
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/wrapRegExp.js + 2 modules
var wrapRegExp = __webpack_require__(9616);
// EXTERNAL MODULE: ../node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(6324);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var codeBlockTitleRegex=/*#__PURE__*/(0,wrapRegExp/* default */.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2});var metastringLinesRangeRegex=/*#__PURE__*/(0,wrapRegExp/* default */.Z)(/\{([\d,-]+)\}/,{range:1});// Supported types of highlight comments
var commentPatterns={js:{start:'\\/\\/',end:''},jsBlock:{start:'\\/\\*',end:'\\*\\/'},jsx:{start:'\\{\\s*\\/\\*',end:'\\*\\/\\s*\\}'},bash:{start:'#',end:''},html:{start:'<!--',end:'-->'}};function getCommentPattern(languages,magicCommentDirectives){// To be more reliable, the opening and closing comment must match
var commentPattern=languages.map(function(lang){var _commentPatterns$lang=commentPatterns[lang],start=_commentPatterns$lang.start,end=_commentPatterns$lang.end;return"(?:"+start+"\\s*("+magicCommentDirectives.flatMap(function(d){var _d$block,_d$block2;return[d.line,(_d$block=d.block)==null?void 0:_d$block.start,(_d$block2=d.block)==null?void 0:_d$block2.end].filter(Boolean);}).join('|')+")\\s*"+end+")";}).join('|');// White space is allowed, but otherwise it should be on it's own line
return new RegExp("^\\s*(?:"+commentPattern+")\\s*$");}/**
 * Select comment styles based on language
 */function getAllMagicCommentDirectiveStyles(lang,magicCommentDirectives){switch(lang){case'js':case'javascript':case'ts':case'typescript':return getCommentPattern(['js','jsBlock'],magicCommentDirectives);case'jsx':case'tsx':return getCommentPattern(['js','jsBlock','jsx'],magicCommentDirectives);case'html':return getCommentPattern(['js','jsBlock','html'],magicCommentDirectives);case'python':case'py':case'bash':return getCommentPattern(['bash'],magicCommentDirectives);case'markdown':case'md':// Text uses HTML, front matter uses bash
return getCommentPattern(['html','jsx','bash'],magicCommentDirectives);default:// All comment types
return getCommentPattern(Object.keys(commentPatterns),magicCommentDirectives);}}function parseCodeBlockTitle(metastring){var _metastring$match$gro,_metastring$match;return(_metastring$match$gro=metastring==null?void 0:(_metastring$match=metastring.match(codeBlockTitleRegex))==null?void 0:_metastring$match.groups.title)!=null?_metastring$match$gro:'';}function containsLineNumbers(metastring){return Boolean(metastring==null?void 0:metastring.includes('showLineNumbers'));}/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */function parseLanguage(className){var languageClassName=className.split(' ').find(function(str){return str.startsWith('language-');});return languageClassName==null?void 0:languageClassName.replace(/language-/,'');}/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 *
 * @param content The raw code with magic comments. Trailing newline will be
 * trimmed upfront.
 * @param options Options for parsing behavior.
 */function parseLines(content,options){var code=content.replace(/\n$/,'');var language=options.language,magicComments=options.magicComments,metastring=options.metastring;// Highlighted lines specified in props: don't parse the content
if(metastring&&metastringLinesRangeRegex.test(metastring)){var linesRange=metastring.match(metastringLinesRangeRegex).groups.range;if(magicComments.length===0){throw new Error("A highlight range has been given in code block's metastring (``` "+metastring+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");}var metastringRangeClassName=magicComments[0].className;var _lines=parse_numeric_range_default()(linesRange).filter(function(n){return n>0;}).map(function(n){return[n-1,[metastringRangeClassName]];});return{lineClassNames:Object.fromEntries(_lines),code:code};}if(language===undefined){return{lineClassNames:{},code:code};}var directiveRegex=getAllMagicCommentDirectiveStyles(language,magicComments);// Go through line by line
var lines=code.split('\n');var blocks=Object.fromEntries(magicComments.map(function(d){return[d.className,{start:0,range:''}];}));var lineToClassName=Object.fromEntries(magicComments.filter(function(d){return d.line;}).map(function(_ref){var className=_ref.className,line=_ref.line;return[line,className];}));var blockStartToClassName=Object.fromEntries(magicComments.filter(function(d){return d.block;}).map(function(_ref2){var className=_ref2.className,block=_ref2.block;return[block.start,className];}));var blockEndToClassName=Object.fromEntries(magicComments.filter(function(d){return d.block;}).map(function(_ref3){var className=_ref3.className,block=_ref3.block;return[block.end,className];}));for(var lineNumber=0;lineNumber<lines.length;){var line=lines[lineNumber];var match=line.match(directiveRegex);if(!match){// Lines without directives are unchanged
lineNumber+=1;continue;}var directive=match.slice(1).find(function(item){return item!==undefined;});if(lineToClassName[directive]){blocks[lineToClassName[directive]].range+=lineNumber+",";}else if(blockStartToClassName[directive]){blocks[blockStartToClassName[directive]].start=lineNumber;}else if(blockEndToClassName[directive]){blocks[blockEndToClassName[directive]].range+=blocks[blockEndToClassName[directive]].start+"-"+(lineNumber-1)+",";}lines.splice(lineNumber,1);}code=lines.join('\n');var lineClassNames={};Object.entries(blocks).forEach(function(_ref4){var className=_ref4[0],range=_ref4[1].range;parse_numeric_range_default()(range).forEach(function(l){var _lineClassNames$l;(_lineClassNames$l=lineClassNames[l])!=null?_lineClassNames$l:lineClassNames[l]=[];lineClassNames[l].push(className);});});return{lineClassNames:lineClassNames,code:code};}function getPrismCssVariables(prismTheme){var mapping={color:'--prism-color',backgroundColor:'--prism-background-color'};var properties={};Object.entries(prismTheme.plain).forEach(function(_ref5){var key=_ref5[0],value=_ref5[1];var varName=mapping[key];if(varName&&typeof value==='string'){properties[varName]=value;}});return properties;}
// EXTERNAL MODULE: ../node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(5484);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"codeBlockContainer":"codeBlockContainer_mQmQ"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/index.js
var _excluded=["as"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockContainer(_ref){var As=_ref.as,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,_excluded);var prismTheme=usePrismTheme();var prismCssVariables=getPrismCssVariables(prismTheme);return/*#__PURE__*/react.createElement(As// Polymorphic components are hard to type, without `oneOf` generics
,(0,esm_extends/* default */.Z)({},props,{style:prismCssVariables,className:(0,clsx_m/* default */.Z)(props.className,styles_module.codeBlockContainer,ThemeClassNames/* ThemeClassNames.common.codeBlock */.k.common.codeBlock)}));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Content_styles_module = ({"codeBlockContent":"codeBlockContent_D5yF","codeBlockTitle":"codeBlockTitle_x_ju","codeBlock":"codeBlock_RMoD","codeBlockStandalone":"codeBlockStandalone_wQog","codeBlockLines":"codeBlockLines_AclH","codeBlockLinesWithNumbering":"codeBlockLinesWithNumbering_O625","buttonGroup":"buttonGroup_aaMX"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// <pre> tags in markdown map to CodeBlocks. They may contain JSX children. When
// the children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX(_ref){var children=_ref.children,className=_ref.className;return/*#__PURE__*/react.createElement(CodeBlockContainer,{as:"pre",tabIndex:0,className:(0,clsx_m/* default */.Z)(Content_styles_module.codeBlockStandalone,'thin-scrollbar',className)},/*#__PURE__*/react.createElement("code",{className:Content_styles_module.codeBlockLines},children));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-common/lib/hooks/useCodeWordWrap.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useCodeWordWrap(){var _useState=(0,react.useState)(false),isEnabled=_useState[0],setIsEnabled=_useState[1];var _useState2=(0,react.useState)(false),isCodeScrollable=_useState2[0],setIsCodeScrollable=_useState2[1];var codeBlockRef=(0,react.useRef)(null);var toggle=(0,react.useCallback)(function(){var codeElement=codeBlockRef.current.querySelector('code');if(isEnabled){codeElement.removeAttribute('style');}else{codeElement.style.whiteSpace='pre-wrap';}setIsEnabled(function(value){return!value;});},[codeBlockRef,isEnabled]);var updateCodeIsScrollable=(0,react.useCallback)(function(){var _codeBlockRef$current=codeBlockRef.current,scrollWidth=_codeBlockRef$current.scrollWidth,clientWidth=_codeBlockRef$current.clientWidth;var isScrollable=scrollWidth>clientWidth||codeBlockRef.current.querySelector('code').hasAttribute('style');setIsCodeScrollable(isScrollable);},[codeBlockRef]);(0,react.useEffect)(function(){updateCodeIsScrollable();},[isEnabled,updateCodeIsScrollable]);(0,react.useEffect)(function(){window.addEventListener('resize',updateCodeIsScrollable,{passive:true});return function(){window.removeEventListener('resize',updateCodeIsScrollable);};},[updateCodeIsScrollable]);return{codeBlockRef:codeBlockRef,isEnabled:isEnabled,isCodeScrollable:isCodeScrollable,toggle:toggle};}
// EXTERNAL MODULE: ../node_modules/prism-react-renderer/dist/index.js + 1 modules
var dist = __webpack_require__(5620);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Line_styles_module = ({"codeLine":"codeLine_FAqz","codeLineNumber":"codeLineNumber_BE9Z","codeLineContent":"codeLineContent_EF2y"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockLine(_ref){var line=_ref.line,classNames=_ref.classNames,showLineNumbers=_ref.showLineNumbers,getLineProps=_ref.getLineProps,getTokenProps=_ref.getTokenProps;if(line.length===1&&line[0].content==='\n'){line[0].content='';}var lineProps=getLineProps({line:line,className:(0,clsx_m/* default */.Z)(classNames,showLineNumbers&&Line_styles_module.codeLine)});var lineTokens=line.map(function(token,key){return/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.Z)({key:key},getTokenProps({token:token,key:key})));});return/*#__PURE__*/react.createElement("span",lineProps,showLineNumbers?/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("span",{className:Line_styles_module.codeLineNumber}),/*#__PURE__*/react.createElement("span",{className:Line_styles_module.codeLineContent},lineTokens)):/*#__PURE__*/react.createElement(react.Fragment,null,lineTokens,/*#__PURE__*/react.createElement("br",null)));}
;// CONCATENATED MODULE: ../node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(input,_temp){var _ref=_temp===void 0?{}:_temp,_ref$target=_ref.target,target=_ref$target===void 0?document.body:_ref$target;var element=document.createElement('textarea');var previouslyFocusedElement=document.activeElement;element.value=input;// Prevent keyboard from showing on mobile
element.setAttribute('readonly','');element.style.contain='strict';element.style.position='absolute';element.style.left='-9999px';element.style.fontSize='12pt';// Prevent zooming on iOS
var selection=document.getSelection();var originalRange=false;if(selection.rangeCount>0){originalRange=selection.getRangeAt(0);}target.append(element);element.select();// Explicit selection workaround for iOS
element.selectionStart=0;element.selectionEnd=input.length;var isSuccess=false;try{isSuccess=document.execCommand('copy');}catch(_unused){}element.remove();if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}// Get the focus back on the previously focused element, if any
if(previouslyFocusedElement){previouslyFocusedElement.focus();}return isSuccess;}
// EXTERNAL MODULE: ../node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(9213);
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/CopyButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var CopyButton_styles_module = ({"copyButtonCopied":"copyButtonCopied_TYdd","copyButtonIcons":"copyButtonIcons_z5j7","copyButtonIcon":"copyButtonIcon_FoOz","copyButtonSuccessIcon":"copyButtonSuccessIcon_L0B6"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/CopyButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CopyButton(_ref){var code=_ref.code,className=_ref.className;var _useState=(0,react.useState)(false),isCopied=_useState[0],setIsCopied=_useState[1];var copyTimeout=(0,react.useRef)(undefined);var handleCopyCode=(0,react.useCallback)(function(){copyTextToClipboard(code);setIsCopied(true);copyTimeout.current=window.setTimeout(function(){setIsCopied(false);},1000);},[code]);(0,react.useEffect)(function(){return function(){return window.clearTimeout(copyTimeout.current);};},[]);return/*#__PURE__*/react.createElement("button",{type:"button","aria-label":isCopied?(0,Translate/* translate */.I)({id:'theme.CodeBlock.copied',message:'Copied',description:'The copied button label on code blocks'}):(0,Translate/* translate */.I)({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'}),title:(0,Translate/* translate */.I)({id:'theme.CodeBlock.copy',message:'Copy',description:'The copy button label on code blocks'}),className:(0,clsx_m/* default */.Z)('clean-btn',className,CopyButton_styles_module.copyButton,isCopied&&CopyButton_styles_module.copyButtonCopied),onClick:handleCopyCode},/*#__PURE__*/react.createElement("span",{className:CopyButton_styles_module.copyButtonIcons,"aria-hidden":"true"},/*#__PURE__*/react.createElement("svg",{className:CopyButton_styles_module.copyButtonIcon,viewBox:"0 0 24 24"},/*#__PURE__*/react.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),/*#__PURE__*/react.createElement("svg",{className:CopyButton_styles_module.copyButtonSuccessIcon,viewBox:"0 0 24 24"},/*#__PURE__*/react.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/WordWrapButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var WordWrapButton_styles_module = ({"wordWrapButtonIcon":"wordWrapButtonIcon_HV9T","wordWrapButtonEnabled":"wordWrapButtonEnabled_XzR1"});
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/WordWrapButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function WordWrapButton(_ref){var className=_ref.className,onClick=_ref.onClick,isEnabled=_ref.isEnabled;var title=(0,Translate/* translate */.I)({id:'theme.CodeBlock.wordWrapToggle',message:'Toggle word wrap',description:'The title attribute for toggle word wrapping button of code block lines'});return/*#__PURE__*/react.createElement("button",{type:"button",onClick:onClick,className:(0,clsx_m/* default */.Z)('clean-btn',className,isEnabled&&WordWrapButton_styles_module.wordWrapButtonEnabled),"aria-label":title,title:title},/*#__PURE__*/react.createElement("svg",{className:WordWrapButton_styles_module.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},/*#__PURE__*/react.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/String.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function CodeBlockString(_ref){var _ref2;var children=_ref.children,_ref$className=_ref.className,blockClassName=_ref$className===void 0?'':_ref$className,metastring=_ref.metastring,titleProp=_ref.title,showLineNumbersProp=_ref.showLineNumbers,languageProp=_ref.language;var _useThemeConfig=(0,useThemeConfig/* useThemeConfig */.L)(),_useThemeConfig$prism=_useThemeConfig.prism,defaultLanguage=_useThemeConfig$prism.defaultLanguage,magicComments=_useThemeConfig$prism.magicComments;var language=(_ref2=languageProp!=null?languageProp:parseLanguage(blockClassName))!=null?_ref2:defaultLanguage;var prismTheme=usePrismTheme();var wordWrap=useCodeWordWrap();// We still parse the metastring in case we want to support more syntax in the
// future. Note that MDX doesn't strip quotes when parsing metastring:
// "title=\"xyz\"" => title: "\"xyz\""
var title=parseCodeBlockTitle(metastring)||titleProp;var _parseLines=parseLines(children,{metastring:metastring,language:language,magicComments:magicComments}),lineClassNames=_parseLines.lineClassNames,code=_parseLines.code;var showLineNumbers=showLineNumbersProp!=null?showLineNumbersProp:containsLineNumbers(metastring);return/*#__PURE__*/react.createElement(CodeBlockContainer,{as:"div",className:(0,clsx_m/* default */.Z)(blockClassName,language&&!blockClassName.includes("language-"+language)&&"language-"+language)},title&&/*#__PURE__*/react.createElement("div",{className:Content_styles_module.codeBlockTitle},title),/*#__PURE__*/react.createElement("div",{className:Content_styles_module.codeBlockContent},/*#__PURE__*/react.createElement(dist/* default */.ZP,(0,esm_extends/* default */.Z)({},dist/* defaultProps */.lG,{theme:prismTheme,code:code,language:language!=null?language:'text'}),function(_ref3){var className=_ref3.className,tokens=_ref3.tokens,getLineProps=_ref3.getLineProps,getTokenProps=_ref3.getTokenProps;return/*#__PURE__*/react.createElement("pre",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,ref:wordWrap.codeBlockRef,className:(0,clsx_m/* default */.Z)(className,Content_styles_module.codeBlock,'thin-scrollbar')},/*#__PURE__*/react.createElement("code",{className:(0,clsx_m/* default */.Z)(Content_styles_module.codeBlockLines,showLineNumbers&&Content_styles_module.codeBlockLinesWithNumbering)},tokens.map(function(line,i){return/*#__PURE__*/react.createElement(CodeBlockLine,{key:i,line:line,getLineProps:getLineProps,getTokenProps:getTokenProps,classNames:lineClassNames[i],showLineNumbers:showLineNumbers});})));}),/*#__PURE__*/react.createElement("div",{className:Content_styles_module.buttonGroup},(wordWrap.isEnabled||wordWrap.isCodeScrollable)&&/*#__PURE__*/react.createElement(WordWrapButton,{className:Content_styles_module.codeButton,onClick:function onClick(){return wordWrap.toggle();},isEnabled:wordWrap.isEnabled}),/*#__PURE__*/react.createElement(CopyButton,{className:Content_styles_module.codeButton,code:code}))));}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js
var CodeBlock_excluded=["children"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *//**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */function maybeStringifyChildren(children){if(react.Children.toArray(children).some(function(el){return/*#__PURE__*/(0,react.isValidElement)(el);})){return children;}// The children is now guaranteed to be one/more plain strings
return Array.isArray(children)?children.join(''):children;}function CodeBlock(_ref){var rawChildren=_ref.children,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref,CodeBlock_excluded);// The Prism theme on SSR is always the default theme but the site theme can
// be in a different mode. React hydration doesn't update DOM styles that come
// from SSR. Hence force a re-render after mounting to apply the current
// relevant styles.
var isBrowser=(0,useIsBrowser/* default */.Z)();var children=maybeStringifyChildren(rawChildren);var CodeBlockComp=typeof children==='string'?CodeBlockString:CodeBlockJSX;return/*#__PURE__*/react.createElement(CodeBlockComp,(0,esm_extends/* default */.Z)({key:String(isBrowser)},props),children);}
;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-live-codeblock/lib/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var withLiveEditor=function withLiveEditor(Component){function WrappedComponent(props){if(props.live){// @ts-expect-error: we have deliberately widened the type of language prop
return/*#__PURE__*/react.createElement(Playground/* default */.Z,(0,esm_extends/* default */.Z)({scope:ReactLiveScope/* default */.Z},props));}return/*#__PURE__*/react.createElement(Component,props);}return WrappedComponent;};/* harmony default export */ var theme_CodeBlock = (withLiveEditor(CodeBlock));

/***/ }),

/***/ 5229:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pi": function() { return /* reexport */ observer; }
});

// UNUSED EXPORTS: Observer, clearTimers, enableStaticRendering, isObserverBatched, isUsingStaticRendering, observerBatching, useAsObservableSource, useLocalObservable, useLocalStore, useObserver, useStaticRendering

// EXTERNAL MODULE: ../node_modules/mobx/dist/mobx.esm.js
var mobx_esm = __webpack_require__(9588);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/assertEnvironment.js


if (!react.useState) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx_esm/* makeObservable */.rC) {
    throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
}
//# sourceMappingURL=assertEnvironment.js.map
// EXTERNAL MODULE: ../node_modules/react-dom/index.js
var react_dom = __webpack_require__(1542);
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js

//# sourceMappingURL=reactBatchedUpdates.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/observerBatching.js

function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (false) {}
    }
    (0,mobx_esm/* configure */.jQ)({ reactionScheduler: reactionScheduler });
}
var isObserverBatched = function () {
    if (false) {}
    return true;
};
//# sourceMappingURL=observerBatching.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/printDebugValue.js

function printDebugValue(v) {
    return (0,mobx_esm/* getDependencyTree */.Gf)(v);
}
//# sourceMappingURL=printDebugValue.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/FinalizationRegistryWrapper.js
var FinalizationRegistryLocal = typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry;

//# sourceMappingURL=FinalizationRegistryWrapper.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/reactionCleanupTrackingCommon.js
function createTrackingData(reaction) {
    var trackingData = {
        reaction: reaction,
        mounted: false,
        changedBeforeMount: false,
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;
//# sourceMappingURL=reactionCleanupTrackingCommon.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/createReactionCleanupTrackingUsingFinalizationRegister.js

/**
 * FinalizationRegistry-based uncommitted reaction cleanup
 */
function createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistry) {
    var cleanupTokenToReactionTrackingMap = new Map();
    var globalCleanupTokensCounter = 1;
    var registry = new FinalizationRegistry(function cleanupFunction(token) {
        var trackedReaction = cleanupTokenToReactionTrackingMap.get(token);
        if (trackedReaction) {
            trackedReaction.reaction.dispose();
            cleanupTokenToReactionTrackingMap.delete(token);
        }
    });
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, objectRetainedByReact) {
            var token = globalCleanupTokensCounter++;
            registry.register(objectRetainedByReact, token, reactionTrackingRef);
            reactionTrackingRef.current = createTrackingData(reaction);
            reactionTrackingRef.current.finalizationRegistryCleanupToken = token;
            cleanupTokenToReactionTrackingMap.set(token, reactionTrackingRef.current);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: function (reactionRef) {
            registry.unregister(reactionRef);
            if (reactionRef.current && reactionRef.current.finalizationRegistryCleanupToken) {
                cleanupTokenToReactionTrackingMap.delete(reactionRef.current.finalizationRegistryCleanupToken);
            }
        },
        forceCleanupTimerToRunNowForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        },
        resetCleanupScheduleForTests: function () {
            // When FinalizationRegistry in use, this this is no-op
        }
    };
}
//# sourceMappingURL=createReactionCleanupTrackingUsingFinalizationRegister.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/createTimerBasedReactionCleanupTracking.js
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

/**
 * timers, gc-style, uncommitted reaction cleanup
 */
function createTimerBasedReactionCleanupTracking() {
    /**
     * Reactions created by components that have yet to be fully mounted.
     */
    var uncommittedReactionRefs = new Set();
    /**
     * Latest 'uncommitted reactions' cleanup timer handle.
     */
    var reactionCleanupHandle;
    /* istanbul ignore next */
    /**
     * Only to be used by test functions; do not export outside of mobx-react-lite
     */
    function forceCleanupTimerToRunNowForTests() {
        // This allows us to control the execution of the cleanup timer
        // to force it to run at awkward times in unit tests.
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            cleanUncommittedReactions();
        }
    }
    /* istanbul ignore next */
    function resetCleanupScheduleForTests() {
        var e_1, _a;
        if (uncommittedReactionRefs.size > 0) {
            try {
                for (var uncommittedReactionRefs_1 = __values(uncommittedReactionRefs), uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next(); !uncommittedReactionRefs_1_1.done; uncommittedReactionRefs_1_1 = uncommittedReactionRefs_1.next()) {
                    var ref = uncommittedReactionRefs_1_1.value;
                    var tracking = ref.current;
                    if (tracking) {
                        tracking.reaction.dispose();
                        ref.current = null;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (uncommittedReactionRefs_1_1 && !uncommittedReactionRefs_1_1.done && (_a = uncommittedReactionRefs_1.return)) _a.call(uncommittedReactionRefs_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            uncommittedReactionRefs.clear();
        }
        if (reactionCleanupHandle) {
            clearTimeout(reactionCleanupHandle);
            reactionCleanupHandle = undefined;
        }
    }
    function ensureCleanupTimerRunning() {
        if (reactionCleanupHandle === undefined) {
            reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
        }
    }
    function scheduleCleanupOfReactionIfLeaked(ref) {
        uncommittedReactionRefs.add(ref);
        ensureCleanupTimerRunning();
    }
    function recordReactionAsCommitted(reactionRef) {
        uncommittedReactionRefs.delete(reactionRef);
    }
    /**
     * Run by the cleanup timer to dispose any outstanding reactions
     */
    function cleanUncommittedReactions() {
        reactionCleanupHandle = undefined;
        // Loop through all the candidate leaked reactions; those older
        // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
        var now = Date.now();
        uncommittedReactionRefs.forEach(function (ref) {
            var tracking = ref.current;
            if (tracking) {
                if (now >= tracking.cleanAt) {
                    // It's time to tidy up this leaked reaction.
                    tracking.reaction.dispose();
                    ref.current = null;
                    uncommittedReactionRefs.delete(ref);
                }
            }
        });
        if (uncommittedReactionRefs.size > 0) {
            // We've just finished a round of cleanups but there are still
            // some leak candidates outstanding.
            ensureCleanupTimerRunning();
        }
    }
    return {
        addReactionToTrack: function (reactionTrackingRef, reaction, 
        /**
         * On timer based implementation we don't really need this object,
         * but we keep the same api
         */
        objectRetainedByReact) {
            reactionTrackingRef.current = createTrackingData(reaction);
            scheduleCleanupOfReactionIfLeaked(reactionTrackingRef);
            return reactionTrackingRef.current;
        },
        recordReactionAsCommitted: recordReactionAsCommitted,
        forceCleanupTimerToRunNowForTests: forceCleanupTimerToRunNowForTests,
        resetCleanupScheduleForTests: resetCleanupScheduleForTests
    };
}
//# sourceMappingURL=createTimerBasedReactionCleanupTracking.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/utils/reactionCleanupTracking.js



var _a = FinalizationRegistryLocal
    ? createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistryLocal)
    : createTimerBasedReactionCleanupTracking(), addReactionToTrack = _a.addReactionToTrack, recordReactionAsCommitted = _a.recordReactionAsCommitted, resetCleanupScheduleForTests = _a.resetCleanupScheduleForTests, forceCleanupTimerToRunNowForTests = _a.forceCleanupTimerToRunNowForTests;

//# sourceMappingURL=reactionCleanupTracking.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/staticRendering.js
var globalIsUsingStaticRendering = false;
function staticRendering_enableStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}
//# sourceMappingURL=staticRendering.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/useObserver.js
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





function observerComponentNameFor(baseComponentName) {
    return "observer".concat(baseComponentName);
}
/**
 * We use class to make it easier to detect in heap snapshots by name
 */
var ObjectToBeRetainedByReact = /** @class */ (function () {
    function ObjectToBeRetainedByReact() {
    }
    return ObjectToBeRetainedByReact;
}());
function objectToBeRetainedByReactFactory() {
    return new ObjectToBeRetainedByReact();
}
function useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (isUsingStaticRendering()) {
        return fn();
    }
    var _a = __read(react.useState(objectToBeRetainedByReactFactory), 1), objectRetainedByReact = _a[0];
    // Force update, see #2982
    var _b = __read(react.useState(), 2), setState = _b[1];
    var forceUpdate = function () { return setState([]); };
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = react.useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction = new mobx_esm/* Reaction */.le(observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                forceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.
                trackingData_1.changedBeforeMount = true;
            }
        });
        var trackingData_1 = addReactionToTrack(reactionTrackingRef, newReaction, objectRetainedByReact);
    }
    var reaction = reactionTrackingRef.current.reaction;
    react.useDebugValue(reaction, printDebugValue);
    react.useEffect(function () {
        // Called on first mount only
        recordReactionAsCommitted(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
            // Got a change before first mount, force an update
            if (reactionTrackingRef.current.changedBeforeMount) {
                reactionTrackingRef.current.changedBeforeMount = false;
                forceUpdate();
            }
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This can be due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new mobx_esm/* Reaction */.le(observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    forceUpdate();
                }),
                mounted: true,
                changedBeforeMount: false,
                cleanAt: Infinity
            };
            forceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        throw exception; // re-throw any exceptions caught during rendering
    }
    return rendering;
}
//# sourceMappingURL=useObserver.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/observer.js



var warnObserverOptionsDeprecated = true;
var hasSymbol = typeof Symbol === "function" && Symbol.for;
// Using react-is had some issues (and operates on elements, not on types), see #608 / #609
var ReactForwardRefSymbol = hasSymbol
    ? Symbol.for("react.forward_ref")
    : typeof react.forwardRef === "function" && (0,react.forwardRef)(function (props) { return null; })["$$typeof"];
var ReactMemoSymbol = hasSymbol
    ? Symbol.for("react.memo")
    : typeof react.memo === "function" && (0,react.memo)(function (props) { return null; })["$$typeof"];
// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, 
// TODO remove in next major
options) {
    var _a;
    if (false) {}
    if (ReactMemoSymbol && baseComponent["$$typeof"] === ReactMemoSymbol) {
        throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
    }
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (isUsingStaticRendering()) {
        return baseComponent;
    }
    var useForwardRef = (_a = options === null || options === void 0 ? void 0 : options.forwardRef) !== null && _a !== void 0 ? _a : false;
    var render = baseComponent;
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    // If already wrapped with forwardRef, unwrap,
    // so we can patch render and apply memo
    if (ReactForwardRefSymbol && baseComponent["$$typeof"] === ReactForwardRefSymbol) {
        useForwardRef = true;
        render = baseComponent["render"];
        if (typeof render !== "function") {
            throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
        }
    }
    var observerComponent = function (props, ref) {
        return useObserver(function () { return render(props, ref); }, baseComponentName);
    };
    // Don't set `displayName` for anonymous components,
    // so the `displayName` can be customized by user, see #3192.
    if (baseComponentName !== "") {
        ;
        observerComponent.displayName = baseComponentName;
    }
    // Support legacy context: `contextTypes` must be applied before `memo`
    if (baseComponent.contextTypes) {
        ;
        observerComponent.contextTypes = baseComponent.contextTypes;
    }
    if (useForwardRef) {
        // `forwardRef` must be applied prior `memo`
        // `forwardRef(observer(cmp))` throws:
        // "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))"
        observerComponent = (0,react.forwardRef)(observerComponent);
    }
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    observerComponent = (0,react.memo)(observerComponent);
    copyStaticProperties(baseComponent, observerComponent);
    if (false) {}
    return observerComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true,
    // Don't redefine `displayName`,
    // it's defined as getter-setter pair on `memo` (see #3192).
    displayName: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}
//# sourceMappingURL=observer.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/ObserverComponent.js

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return useObserver(component);
}
if (false) {}
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}
//# sourceMappingURL=ObserverComponent.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/useLocalObservable.js


function useLocalObservable(initializer, annotations) {
    return useState(function () { return observable(initializer(), annotations, { autoBind: true }); })[0];
}
//# sourceMappingURL=useLocalObservable.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/useAsObservableSource.js
var useAsObservableSource_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSource_useAsObservableSource(current) {
    if (false)
        {}
    var _a = useAsObservableSource_read(useState(function () { return observable(current, {}, { deep: false }); }), 1), res = _a[0];
    runInAction(function () {
        Object.assign(res, current);
    });
    return res;
}
//# sourceMappingURL=useAsObservableSource.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/useLocalStore.js




function useLocalStore(initializer, current) {
    if (false)
        {}
    var source = current && useAsObservableSource(current);
    return useState(function () { return observable(initializer(source), undefined, { autoBind: true }); })[0];
}
//# sourceMappingURL=useLocalStore.js.map
;// CONCATENATED MODULE: ../node_modules/mobx-react-lite/es/index.js






observerBatching(react_dom.unstable_batchedUpdates);







function es_useObserver(fn, baseComponentName) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (false) {}
    return useObserverOriginal(fn, baseComponentName);
}

function useStaticRendering(enable) {
    if (false) {}
    enableStaticRendering(enable);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9588:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fl": function() { return /* binding */ computed; },
/* harmony export */   "Gf": function() { return /* binding */ getDependencyTree; },
/* harmony export */   "LO": function() { return /* binding */ observable; },
/* harmony export */   "U5": function() { return /* binding */ reaction; },
/* harmony export */   "aD": function() { return /* binding */ action; },
/* harmony export */   "jQ": function() { return /* binding */ configure; },
/* harmony export */   "ky": function() { return /* binding */ makeAutoObservable; },
/* harmony export */   "le": function() { return /* binding */ Reaction; },
/* harmony export */   "rC": function() { return /* binding */ makeObservable; }
/* harmony export */ });
/* unused harmony exports $mobx, FlowCancellationError, ObservableMap, ObservableSet, _allowStateChanges, _allowStateChangesInsideComputed, _allowStateReadsEnd, _allowStateReadsStart, _autoAction, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, autorun, comparer, createAtom, defineProperty, entries, extendObservable, flow, flowResult, get, getAtom, getDebugName, getObserverTree, has, intercept, isAction, isBoxedObservable, isComputed, isComputedProp, isFlow, isFlowCancellationError, isObservable, isObservableArray, isObservableMap, isObservableObject, isObservableProp, isObservableSet, keys, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, override, ownKeys, remove, runInAction, set, spy, toJS, trace, transaction, untracked, values, when */
var niceErrors = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function _(annotationType, key) {
    return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
  },

  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function _(index, length) {
    return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function _(other) {
    return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
  },
  20: function _(other) {
    return "Cannot initialize map from " + other;
  },
  21: function _(dataStructure) {
    return "Cannot convert to map from '" + dataStructure + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function _(thing) {
    return "Cannot obtain administration from " + thing;
  },
  25: function _(property, name) {
    return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
  },
  26: "please specify a property",
  27: function _(property, name) {
    return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
  },
  28: function _(thing) {
    return "Cannot obtain atom from " + thing;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function _(name, derivation) {
    return "Cycle detected in computation " + name + ": " + derivation;
  },
  33: function _(name) {
    return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function _(name) {
    return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function _(method) {
    return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
};
var errors =  false ? 0 : {};
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (false) { var e; }

  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}

var mockGlobal = {};
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }

  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof __webpack_require__.g !== "undefined") {
    return __webpack_require__.g;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}

var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /*#__PURE__*/Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die( false ? 0 : "Proxy not available");
  }
}
function warnAboutProxyRequirement(msg) {
  if (false) {}
}
function getNextId() {
  return ++globalState.mobxGuid;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */

function once(func) {
  var invoked = false;
  return function () {
    if (invoked) {
      return;
    }

    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop() {};
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  var t = typeof value;

  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }

  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }

  var proto = Object.getPrototypeOf(value);

  if (proto == null) {
    return true;
  }

  var protoConstructor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
} // https://stackoverflow.com/a/37865170

function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;

  if (!constructor) {
    return false;
  }

  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) {
    return true;
  }

  return false;
}
function addHiddenProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}
function addHiddenFinalProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}
function isES6Map(thing) {
  return thing instanceof Map;
}
function isES6Set(thing) {
  return thing instanceof Set;
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
/**
 * Returns the following: own enumerable keys and symbols.
 */

function getPlainObjectKeys(object) {
  var keys = Object.keys(object); // Not supported in IE, so there are not going to be symbol props anyway...

  if (!hasGetOwnPropertySymbols) {
    return keys;
  }

  var symbols = Object.getOwnPropertySymbols(object);

  if (!symbols.length) {
    return keys;
  }

  return [].concat(keys, symbols.filter(function (s) {
    return objectPrototype.propertyIsEnumerable.call(object, s);
  }));
} // From Immer utils
// Returns all own keys, including non-enumerable and symbolic

var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function (obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} :
/* istanbul ignore next */
Object.getOwnPropertyNames;
function stringifyKey(key) {
  if (typeof key === "string") {
    return key;
  }

  if (typeof key === "symbol") {
    return key.toString();
  }

  return new String(key).toString();
}
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
} // From Immer utils

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
  // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
  var res = {}; // Note: without polyfill for ownKeys, symbols won't be picked up

  ownKeys(target).forEach(function (key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var storedAnnotationsSymbol = /*#__PURE__*/Symbol("mobx-stored-annotations");
/**
 * Creates a function that acts as
 * - decorator
 * - annotation object
 */

function createDecoratorAnnotation(annotation) {
  function decorator(target, property) {
    storeAnnotation(target, property, annotation);
  }

  return Object.assign(decorator, annotation);
}
/**
 * Stores annotation to prototype,
 * so it can be inspected later by `makeObservable` called from constructor
 */

function storeAnnotation(prototype, key, annotation) {
  if (!hasProp(prototype, storedAnnotationsSymbol)) {
    addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
  } // @override must override something


  if (false) { var fieldName; } // Cannot re-decorate


  assertNotDecorated(prototype, annotation, key); // Ignore override

  if (!isOverride(annotation)) {
    prototype[storedAnnotationsSymbol][key] = annotation;
  }
}

function assertNotDecorated(prototype, annotation, key) {
  if (false) { var requestedAnnotationType, currentAnnotationType, fieldName; }
}
/**
 * Collects annotations from prototypes and stores them on target (instance)
 */


function collectStoredAnnotations(target) {
  if (!hasProp(target, storedAnnotationsSymbol)) {
    if (false) {} // We need a copy as we will remove annotation from the list once it's applied.


    addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
  }

  return target[storedAnnotationsSymbol];
}

var $mobx = /*#__PURE__*/Symbol("mobx administration");
var Atom = /*#__PURE__*/function () {
  // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name_) {
    if (name_ === void 0) {
      name_ =  false ? 0 : "Atom";
    }

    this.name_ = void 0;
    this.isPendingUnobservation_ = false;
    this.isBeingObserved_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  } // onBecomeObservedListeners


  var _proto = Atom.prototype;

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */
  ;

  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  }
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */
  ;

  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };

  _proto.toString = function toString() {
    return this.name_;
  };

  return Atom;
}();
var isAtom = /*#__PURE__*/createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }

  var atom = new Atom(name); // default `noop` listener will not initialize the hook Set

  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }

  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }

  return atom;
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}

function defaultComparer(a, b) {
  if (Object.is) {
    return Object.is(a, b);
  }

  return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) {
    return v;
  } // something that can be converted and mutated?


  if (Array.isArray(v)) {
    return observable.array(v, {
      name: name
    });
  }

  if (isPlainObject(v)) {
    return observable.object(v, undefined, {
      name: name
    });
  }

  if (isES6Map(v)) {
    return observable.map(v, {
      name: name
    });
  }

  if (isES6Set(v)) {
    return observable.set(v, {
      name: name
    });
  }

  if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
    if (isGenerator(v)) {
      return flow(v);
    } else {
      return autoAction(name, v);
    }
  }

  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) {
    return v;
  }

  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) {
    return v;
  }

  if (Array.isArray(v)) {
    return observable.array(v, {
      name: name,
      deep: false
    });
  }

  if (isPlainObject(v)) {
    return observable.object(v, undefined, {
      name: name,
      deep: false
    });
  }

  if (isES6Map(v)) {
    return observable.map(v, {
      name: name,
      deep: false
    });
  }

  if (isES6Set(v)) {
    return observable.set(v, {
      name: name,
      deep: false
    });
  }

  if (false) {}
}
function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if (false) {}

  if (deepEqual(v, oldValue)) {
    return oldValue;
  }

  return v;
}

var OVERRIDE = "override";
var override = /*#__PURE__*/createDecoratorAnnotation({
  annotationType_: OVERRIDE,
  make_: make_,
  extend_: extend_
});
function isOverride(annotation) {
  return annotation.annotationType_ === OVERRIDE;
}

function make_(adm, key) {
  // Must not be plain object
  if (false) {} // Must override something


  if (false) {}

  return 0
  /* Cancel */
  ;
}

function extend_(adm, key, descriptor, proxyTrap) {
  die("'" + this.annotationType_ + "' can only be used with 'makeObservable'");
}

function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$1,
    extend_: extend_$1
  };
}

function make_$1(adm, key, descriptor, source) {
  var _this$options_;

  // bound
  if ((_this$options_ = this.options_) != null && _this$options_.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 1
    /* Break */
    ;
  } // own


  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 2
    /* Continue */
    ;
  } // prototype


  if (isAction(descriptor.value)) {
    // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1
    /* Break */
    ;
  }

  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return 2
  /* Continue */
  ;
}

function extend_$1(adm, key, descriptor, proxyTrap) {
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}

function assertActionDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;

  if (false) {}
}

function createActionDescriptor(adm, annotation, key, descriptor, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
  var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;

  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }

  assertActionDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;

  if ((_annotation$options_ = annotation.options_) != null && _annotation$options_.bound) {
    var _adm$proxy_;

    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return {
    value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false, // https://github.com/mobxjs/mobx/discussions/3140
    (_annotation$options_4 = annotation.options_) != null && _annotation$options_4.bound ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : undefined),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}

function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$2,
    extend_: extend_$2
  };
}

function make_$2(adm, key, descriptor, source) {
  var _this$options_;

  // own
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 2
    /* Continue */
    ;
  } // prototype
  // bound - must annotate protos to support super.flow()


  if ((_this$options_ = this.options_) != null && _this$options_.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
    if (this.extend_(adm, key, descriptor, false) === null) {
      return 0
      /* Cancel */
      ;
    }
  }

  if (isFlow(descriptor.value)) {
    // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1
    /* Break */
    ;
  }

  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return 2
  /* Continue */
  ;
}

function extend_$2(adm, key, descriptor, proxyTrap) {
  var _this$options_2;

  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}

function assertFlowDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;

  if (false) {}
}

function createFlowDescriptor(adm, annotation, key, descriptor, bound, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }

  assertFlowDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value; // In case of flow.bound, the descriptor can be from already annotated prototype

  if (!isFlow(value)) {
    value = flow(value);
  }

  if (bound) {
    var _adm$proxy_;

    // We do not keep original function around, so we bind the existing flow
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_); // This is normally set by `flow`, but `bind` returns new function...

    value.isMobXFlow = true;
  }

  return {
    value: value,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}

function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$3,
    extend_: extend_$3
  };
}

function make_$3(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0
  /* Cancel */
  : 1
  /* Break */
  ;
}

function extend_$3(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(key, _extends({}, this.options_, {
    get: descriptor.get,
    set: descriptor.set
  }), proxyTrap);
}

function assertComputedDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var get = _ref2.get;

  if (false) {}
}

function createObservableAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$4,
    extend_: extend_$4
  };
}

function make_$4(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0
  /* Cancel */
  : 1
  /* Break */
  ;
}

function extend_$4(adm, key, descriptor, proxyTrap) {
  var _this$options_$enhanc, _this$options_;

  assertObservableDescriptor(adm, this, key, descriptor);
  return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}

function assertObservableDescriptor(adm, _ref, key, descriptor) {
  var annotationType_ = _ref.annotationType_;

  if (false) {}
}

var AUTO = "true";
var autoAnnotation = /*#__PURE__*/createAutoAnnotation();
function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_: make_$5,
    extend_: extend_$5
  };
}

function make_$5(adm, key, descriptor, source) {
  var _this$options_3, _this$options_4;

  // getter -> computed
  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  } // lone setter -> action setter


  if (descriptor.set) {
    // TODO make action applicable to setter and delegate to action.make_
    var set = createAction(key.toString(), descriptor.set); // own

    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: set
      }) === null ? 0
      /* Cancel */
      : 2
      /* Continue */
      ;
    } // proto


    defineProperty(source, key, {
      configurable: true,
      set: set
    });
    return 2
    /* Continue */
    ;
  } // function on proto -> autoAction/flow


  if (source !== adm.target_ && typeof descriptor.value === "function") {
    var _this$options_2;

    if (isGenerator(descriptor.value)) {
      var _this$options_;

      var flowAnnotation = (_this$options_ = this.options_) != null && _this$options_.autoBind ? flow.bound : flow;
      return flowAnnotation.make_(adm, key, descriptor, source);
    }

    var actionAnnotation = (_this$options_2 = this.options_) != null && _this$options_2.autoBind ? autoAction.bound : autoAction;
    return actionAnnotation.make_(adm, key, descriptor, source);
  } // other -> observable
  // Copy props from proto as well, see test:
  // "decorate should work with Object.create"


  var observableAnnotation = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable; // if function respect autoBind option

  if (typeof descriptor.value === "function" && (_this$options_4 = this.options_) != null && _this$options_4.autoBind) {
    var _adm$proxy_;

    descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return observableAnnotation.make_(adm, key, descriptor, source);
}

function extend_$5(adm, key, descriptor, proxyTrap) {
  var _this$options_5, _this$options_6;

  // getter -> computed
  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  } // lone setter -> action setter


  if (descriptor.set) {
    // TODO make action applicable to setter and delegate to action.extend_
    return adm.defineProperty_(key, {
      configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
      set: createAction(key.toString(), descriptor.set)
    }, proxyTrap);
  } // other -> observable
  // if function respect autoBind option


  if (typeof descriptor.value === "function" && (_this$options_5 = this.options_) != null && _this$options_5.autoBind) {
    var _adm$proxy_2;

    descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
  }

  var observableAnnotation = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
  return observableAnnotation.extend_(adm, key, descriptor, proxyTrap);
}

var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct"; // Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases

var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
var observableAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE);
var observableRefAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_REF, {
  enhancer: referenceEnhancer
});
var observableShallowAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_SHALLOW, {
  enhancer: shallowEnhancer
});
var observableStructAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_STRUCT, {
  enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /*#__PURE__*/createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
  var _options$defaultDecor;

  return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : undefined;
}
function getEnhancerFromAnnotation(annotation) {
  var _annotation$options_$, _annotation$options_;

  return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */

function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (isStringish(arg2)) {
    storeAnnotation(v, arg2, observableAnnotation);
    return;
  } // already observable - ignore


  if (isObservable(v)) {
    return v;
  } // plain object


  if (isPlainObject(v)) {
    return observable.object(v, arg2, arg3);
  } // Array


  if (Array.isArray(v)) {
    return observable.array(v, arg2);
  } // Map


  if (isES6Map(v)) {
    return observable.map(v, arg2);
  } // Set


  if (isES6Set(v)) {
    return observable.set(v, arg2);
  } // other object - ignore


  if (typeof v === "object" && v !== null) {
    return v;
  } // anything else


  return observable.box(v, arg2);
}

Object.assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
  box: function box(value, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  array: function array(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map: function map(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  set: function set(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function object(props, decorators, options) {
    return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
  },
  ref: /*#__PURE__*/createDecoratorAnnotation(observableRefAnnotation),
  shallow: /*#__PURE__*/createDecoratorAnnotation(observableShallowAnnotation),
  deep: observableDecoratorAnnotation,
  struct: /*#__PURE__*/createDecoratorAnnotation(observableStructAnnotation)
}; // eslint-disable-next-line

var observable = /*#__PURE__*/assign(createObservable, observableFactories);

var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED_STRUCT, {
  equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2) {
  if (isStringish(arg2)) {
    // @computed
    return storeAnnotation(arg1, arg2, computedAnnotation);
  }

  if (isPlainObject(arg1)) {
    // @computed({ options })
    return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  } // computed(expr, options?)


  if (false) {}

  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name || (opts.name = arg1.name || "");
  /* for generated name */

  return new ComputedValue(opts);
};
Object.assign(computed, computedAnnotation);
computed.struct = /*#__PURE__*/createDecoratorAnnotation(computedStructAnnotation);

var _getDescriptor$config, _getDescriptor;
// mobx versions

var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/getDescriptor(function () {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false; // we can safely recycle this object

var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction, ref) {
  if (autoAction === void 0) {
    autoAction = false;
  }

  if (false) {}

  function res() {
    return executeAction(actionName, autoAction, fn, ref || this, arguments);
  }

  res.isMobxAction = true;

  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor);
  }

  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);

  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, // true for autoAction
scope, args) {
  var notifySpy_ =  false && 0;
  var startTime_ = 0;

  if (false) { var flattenedArgs; }

  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow

  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }

  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_: prevDerivation_,
    prevAllowStateChanges_: prevAllowStateChanges_,
    prevAllowStateReads_: prevAllowStateReads_,
    notifySpy_: notifySpy_,
    startTime_: startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }

  currentActionId = runInfo.parentActionId_;

  if (runInfo.error_ !== undefined) {
    globalState.suppressReactionErrors = true;
  }

  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();

  if (runInfo.runAsAction_) {
    untrackedEnd(runInfo.prevDerivation_);
  }

  if (false) {}

  globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);

  try {
    return func();
  } finally {
    allowStateChangesEnd(prev);
  }
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

var _Symbol$toPrimitive;
var CREATE = "create";
_Symbol$toPrimitive = Symbol.toPrimitive;
var ObservableValue = /*#__PURE__*/function (_Atom) {
  _inheritsLoose(ObservableValue, _Atom);

  function ObservableValue(value, enhancer, name_, notifySpy, equals) {
    var _this;

    if (name_ === void 0) {
      name_ =  false ? 0 : "ObservableValue";
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    if (equals === void 0) {
      equals = comparer["default"];
    }

    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, undefined, name_);

    if (false) {}

    return _this;
  }

  var _proto = ObservableValue.prototype;

  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.set = function set(newValue) {
    var oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if (false) {}

      this.setNewValue_(newValue);

      if (false) {}
    }
  };

  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue: newValue
      });

      if (!change) {
        return globalState.UNCHANGED;
      }

      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };

  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  _proto.get = function get() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately) {
      listener({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: UPDATE,
        newValue: this.value_,
        oldValue: undefined
      });
    }

    return registerListener(this, listener);
  };

  _proto.raw = function raw() {
    // used by MST ot get undehanced value
    return this.value_;
  };

  _proto.toJSON = function toJSON() {
    return this.get();
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.value_ + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive] = function () {
    return this.valueOf();
  };

  return ObservableValue;
}(Atom);
var isObservableValue = /*#__PURE__*/(/* unused pure expression or super */ null && (createInstanceofPredicate("ObservableValue", ObservableValue)));

var _Symbol$toPrimitive$1;
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */

_Symbol$toPrimitive$1 = Symbol.toPrimitive;
var ComputedValue = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  // during tracking it's an array with new observed observers
  // to check for cycles
  // N.B: unminified as it is used by MST

  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.isBeingObserved_ = false;
    this.isPendingUnobservation_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.isComputing_ = false;
    this.isRunningSetter_ = false;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;

    if (!options.get) {
      die(31);
    }

    this.derivation = options.get;
    this.name_ = options.name || ( false ? 0 : "ComputedValue");

    if (options.set) {
      this.setter_ = createAction( false ? 0 : "ComputedValue-setter", options.set);
    }

    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }

  var _proto = ComputedValue.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */
  ;

  _proto.get = function get() {
    if (this.isComputing_) {
      die(32, this.name_, this.derivation);
    }

    if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch(); // See perf test 'computed memoization'

        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);

      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;

        if (this.keepAlive_ && !prevTrackingContext) {
          globalState.trackingContext = this;
        }

        if (this.trackAndCompute()) {
          propagateChangeConfirmed(this);
        }

        globalState.trackingContext = prevTrackingContext;
      }
    }

    var result = this.value_;

    if (isCaughtException(result)) {
      throw result.cause;
    }

    return result;
  };

  _proto.set = function set(value) {
    if (this.setter_) {
      if (this.isRunningSetter_) {
        die(33, this.name_);
      }

      this.isRunningSetter_ = true;

      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter_ = false;
      }
    } else {
      die(34, this.name_);
    }
  };

  _proto.trackAndCompute = function trackAndCompute() {
    // N.B: unminified as it is used by MST
    var oldValue = this.value_;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
    var newValue = this.computeValue_(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);

    if (changed) {
      this.value_ = newValue;

      if (false) {}
    }

    return changed;
  };

  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing_ = true; // don't allow state changes during computation

    var prev = allowStateChangesStart(false);
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }

    allowStateChangesEnd(prev);
    this.isComputing_ = false;
    return res;
  };

  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = undefined; // don't hold on to computed value!

      if (false) {}
    }
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    if (true) {
      return;
    }

    if (this.isTracing_ !== TraceMode.NONE) {
      console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }

    if (typeof this.requiresReaction_ === "boolean" ? this.requiresReaction_ : globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive$1] = function () {
    return this.valueOf();
  };

  return ComputedValue;
}();
var isComputedValue = /*#__PURE__*/createInstanceofPredicate("ComputedValue", ComputedValue);

var IDerivationState_;

(function (IDerivationState_) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException = function CaughtException(cause) {
  this.cause = void 0;
  this.cause = cause; // Empty
};
function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */

function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;

    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;

    case IDerivationState_.POSSIBLY_STALE_:
      {
        // state propagation can occur outside of action/reactive context #2195
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing_,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
  }
}
function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
  if (true) {
    return;
  }

  var hasObservers = atom.observers_.size > 0; // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) {
    console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
  }
}
function checkIfStateReadsAreAllowed(observable) {
  if (false) {}
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */

function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies

  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(derivation.observing_.length + 100);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;

  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }

  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}

function warnAboutDerivationWithoutDependencies(derivation) {
  if (true) {
    return;
  }

  if (derivation.observing_.length !== 0) {
    return;
  }

  if (typeof derivation.requiresObservable_ === "boolean" ? derivation.requiresObservable_ : globalState.reactionRequiresObservable) {
    console.warn("[mobx] Derivation '" + derivation.name_ + "' is created/updated without reading any observable value.");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount_;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;

      if (i0 !== i) {
        observing[i0] = dep;
      }

      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }

  observing.length = i0;
  derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var _dep = prevObserving[l];

    if (_dep.diffValue_ === 0) {
      removeObserver(_dep, derivation);
    }

    _dep.diffValue_ = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var _dep2 = observing[i0];

    if (_dep2.diffValue_ === 1) {
      _dep2.diffValue_ = 0;
      addObserver(_dep2, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;

  while (i--) {
    removeObserver(obs[i], derivation);
  }

  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action) {
  var prev = untrackedStart();

  try {
    return action();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */

function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
    return;
  }

  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}

/**
 * These values will persist if global state is reset
 */

var persistentKeys = (/* unused pure expression or super */ null && (["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED", "useProxies"]));
var MobXGlobals = function MobXGlobals() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
  this.safeDescriptors = true;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /*#__PURE__*/function () {
  var global = /*#__PURE__*/getGlobal();

  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) {
    canMergeGlobalState = false;
  }

  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) {
    canMergeGlobalState = false;
  }

  if (!canMergeGlobalState) {
    // Because this is a IIFE we need to let isolateCalled a chance to change
    // so we run it after the event loop completed at least 1 iteration
    setTimeout(function () {
      if (!isolateCalled) {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;

    if (!global.__mobxGlobals.UNCHANGED) {
      global.__mobxGlobals.UNCHANGED = {};
    } // make merge backward compatible


    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = /*#__PURE__*/new MobXGlobals();
  }
}();
function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) {
    die(36);
  }

  isolateCalled = true;

  if (canMergeGlobalState) {
    var global = getGlobal();

    if (--global.__mobxInstanceCount === 0) {
      global.__mobxGlobals = undefined;
    }

    globalState = new MobXGlobals();
  }
}
function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */

function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) {
      globalState[key] = defaultGlobals[key];
    }
  }

  globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
  return observable.observers_ && observable.observers_.size > 0;
}
function getObservers(observable) {
  return observable.observers_;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }

function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  observable.observers_.add(node);

  if (observable.lowestObserverState_ > node.dependenciesState_) {
    observable.lowestObserverState_ = node.dependenciesState_;
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");

}
function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  observable.observers_["delete"](node);

  if (observable.observers_.size === 0) {
    // deleting last observer
    queueForUnobservation(observable);
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}
function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation_ === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation_ = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */

function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation_ = false;

      if (observable.observers_.size === 0) {
        if (observable.isBeingObserved_) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved_ = false;
          observable.onBUO();
        }

        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend_();
        }
      }
    }

    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId_ !== observable.lastAccessedBy_) {
      observable.lastAccessedBy_ = derivation.runId_; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...

      derivation.newObserving_[derivation.unboundDepsCount_++] = observable;

      if (!observable.isBeingObserved_ && globalState.trackingContext) {
        observable.isBeingObserved_ = true;
        observable.onBO();
      }
    }

    return true;
  } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes

function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }

  observable.lowestObserverState_ = IDerivationState_.STALE_; // Ideally we use for..of here, but the downcompiled version is really slow...

  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      if (false) {}

      d.onBecomeStale_();
    }

    d.dependenciesState_ = IDerivationState_.STALE_;
  }); // invariantLOS(observable, "changed end");
} // Called by ComputedValue when it recalculate and its value changed

function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }

  observable.lowestObserverState_ = IDerivationState_.STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d.dependenciesState_ = IDerivationState_.STALE_;

      if (false) {}
    } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) {
      observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  }); // invariantLOS(observable, "confirmed end");
} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.

function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) {
    return;
  }

  observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d.onBecomeStale_();
    }
  }); // invariantLOS(observable, "maybe end");
}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");

  if (derivation.isTracing_ === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + "\t".repeat(depth - 1) + tree.name);

  if (tree.dependencies) {
    tree.dependencies.forEach(function (child) {
      return printDepTree(child, lines, depth + 1);
    });
  }
}

var Reaction = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ =  false ? 0 : "Reaction";
    }

    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.isDisposed_ = false;
    this.isScheduled_ = false;
    this.isTrackPending_ = false;
    this.isRunning_ = false;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }

  var _proto = Reaction.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };

  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  _proto.isScheduled = function isScheduled() {
    return this.isScheduled_;
  }
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */
  ;

  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed_) {
      startBatch();
      this.isScheduled_ = false;
      var prev = globalState.trackingContext;
      globalState.trackingContext = this;

      if (shouldCompute(this)) {
        this.isTrackPending_ = true;

        try {
          this.onInvalidate_();

          if (false) {}
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }

      globalState.trackingContext = prev;
      endBatch();
    }
  };

  _proto.track = function track(fn) {
    if (this.isDisposed_) {
      return; // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
    }

    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if (false) {}

    this.isRunning_ = true;
    var prevReaction = globalState.trackingContext; // reactions could create reactions...

    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, undefined);
    globalState.trackingContext = prevReaction;
    this.isRunning_ = false;
    this.isTrackPending_ = false;

    if (this.isDisposed_) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) {
      this.reportExceptionInDerivation_(result.cause);
    }

    if (false) {}

    endBatch();
  };

  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;

    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }

    if (globalState.disableErrorBoundaries) {
      throw error;
    }

    var message =  false ? 0 : "[mobx] uncaught error in '" + this + "'";

    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    } else if (false) {} // prettier-ignore


    if (false) {}

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  _proto.dispose = function dispose() {
    if (!this.isDisposed_) {
      this.isDisposed_ = true;

      if (!this.isRunning_) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  _proto.getDisposer_ = function getDisposer_() {
    var r = this.dispose.bind(this);
    r[$mobx] = this;
    return r;
  };

  _proto.toString = function toString() {
    return "Reaction[" + this.name_ + "]";
  };

  _proto.trace = function trace$1(enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();
function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);

    if (idx >= 0) {
      globalState.globalReactionErrorHandlers.splice(idx, 1);
    }
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */

var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) {
    return;
  }

  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error( false ? 0 : "[mobx] cycle in reaction: " + allReactions[0]);
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }

  globalState.isRunningReactions = false;
}

var isReaction = /*#__PURE__*/createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled() {
  return  false && 0;
}
function spyReport(event) {
  if (true) {
    return;
  } // dead code elimination can do the rest


  if (!globalState.spyListeners.length) {
    return;
  }

  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  if (true) {
    return;
  }

  var change = _extends({}, event, {
    spyReportStart: true
  });

  spyReport(change);
}
var END_EVENT = {
  type: "report-end",
  spyReportEnd: true
};
function spyReportEnd(change) {
  if (true) {
    return;
  }

  if (change) {
    spyReport(_extends({}, change, {
      type: "report-end",
      spyReportEnd: true
    }));
  } else {
    spyReport(END_EVENT);
  }
}
function spy(listener) {
  if (true) {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function () {};
  } else {}
}

var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /*#__PURE__*/createActionAnnotation(ACTION);
var actionBoundAnnotation = /*#__PURE__*/createActionAnnotation(ACTION_BOUND, {
  bound: true
});
var autoActionAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION, {
  autoAction: true
});
var autoActionBoundAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});

function createActionFactory(autoAction) {
  var res = function action(arg1, arg2) {
    // action(fn() {})
    if (isFunction(arg1)) {
      return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction);
    } // action("name", fn() {})


    if (isFunction(arg2)) {
      return createAction(arg1, arg2, autoAction);
    } // @action


    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation);
    } // action("name") & @action("name")


    if (isStringish(arg1)) {
      return createDecoratorAnnotation(createActionAnnotation(autoAction ? AUTOACTION : ACTION, {
        name: arg1,
        autoAction: autoAction
      }));
    }

    if (false) {}
  };

  return res;
}

var action = /*#__PURE__*/createActionFactory(false);
Object.assign(action, actionAnnotation);
var autoAction = /*#__PURE__*/createActionFactory(true);
Object.assign(autoAction, autoActionAnnotation);
action.bound = /*#__PURE__*/createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /*#__PURE__*/createDecoratorAnnotation(autoActionBoundAnnotation);
function runInAction(fn) {
  return executeAction(fn.name || DEFAULT_ACTION_NAME, false, fn, this, undefined);
}
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */

function autorun(view, opts) {
  var _opts$name, _opts;

  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (false) {}

  var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name :  false ? 0 : "Autorun";
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;

  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function () {
          isScheduled = false;

          if (!reaction.isDisposed_) {
            reaction.track(reactionRunner);
          }
        });
      }
    }, opts.onError, opts.requiresObservable);
  }

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule_();
  return reaction.getDisposer_();
}

var run = function run(f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction(expression, effect, opts) {
  var _opts$name2;

  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (false) {}

  var name = (_opts$name2 = opts.name) != null ? _opts$name2 :  false ? 0 : "Reaction";
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var oldValue;
  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);

  function reactionRunner() {
    isScheduled = false;

    if (r.isDisposed_) {
      return;
    }

    var changed = false;
    r.track(function () {
      var nextValue = allowStateChanges(false, function () {
        return expression(r);
      });
      changed = firstTime || !equals(value, nextValue);
      oldValue = value;
      value = nextValue;
    });

    if (firstTime && opts.fireImmediately) {
      effectAction(value, oldValue, r);
    } else if (!firstTime && changed) {
      effectAction(value, oldValue, r);
    }

    firstTime = false;
  }

  r.schedule_();
  return r.getDisposer_();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";

  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }

  return function () {
    var hookListeners = atom[listenersKey];

    if (hookListeners) {
      hookListeners["delete"](cb);

      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}

var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed"; // const IF_AVAILABLE = "ifavailable"

function configure(options) {
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }

  var useProxies = options.useProxies,
      enforceActions = options.enforceActions;

  if (useProxies !== undefined) {
    globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
  }

  if (useProxies === "ifavailable") {
    globalState.verifyProxies = true;
  }

  if (enforceActions !== undefined) {
    var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function (key) {
    if (key in options) {
      globalState[key] = !!options[key];
    }
  });
  globalState.allowStateReads = !globalState.observableRequiresReaction;

  if (false) {}

  if (options.reactionScheduler) {
    setReactionScheduler(options.reactionScheduler);
  }
}

function extendObservable(target, properties, annotations, options) {
  if (false) {} // Pull descriptors first, so we don't have to deal with props added by administration ($mobx)


  var descriptors = getOwnPropertyDescriptors(properties);
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();

  try {
    ownKeys(descriptors).forEach(function (key) {
      adm.extend_(key, descriptors[key], // must pass "undefined" for { key: undefined }
      !annotations ? true : key in annotations ? annotations[key] : true);
    });
  } finally {
    endBatch();
  }

  return target;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name_
  };

  if (node.observing_ && node.observing_.length > 0) {
    result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
  }

  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name_
  };

  if (hasObservers(node)) {
    result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
  }

  return result;
}

function unique(list) {
  return Array.from(new Set(list));
}

var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /*#__PURE__*/Object.create(Error.prototype);
function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}
var flowAnnotation = /*#__PURE__*/createFlowAnnotation("flow");
var flowBoundAnnotation = /*#__PURE__*/createFlowAnnotation("flow.bound", {
  bound: true
});
var flow = /*#__PURE__*/Object.assign(function flow(arg1, arg2) {
  // @flow
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, flowAnnotation);
  } // flow(fn)


  if (false) {}

  var generator = arg1;
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  var res = function res() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var promise = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) {
          return resolve(ret.value);
        }

        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the process
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) {
          cancelPromise(pendingPromise);
        } // Finally block can return (or yield) stuff..


        var _res = gen["return"](undefined); // eat anything that promise would do, it's cancelled!


        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return promise;
  };

  res.isMobXFlow = true;
  return res;
}, flowAnnotation);
flow.bound = /*#__PURE__*/createDecoratorAnnotation(flowBoundAnnotation);

function cancelPromise(promise) {
  if (isFunction(promise.cancel)) {
    promise.cancel();
  }
}

function flowResult(result) {
  return result; // just tricking TypeScript :)
}
function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if (false) {}

    target = getAdministration(thing, propOrHandler);
  } else if (false) {}

  if (false) {}

  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept(thing, propOrHandler, handler) {
  if (isFunction(handler)) {
    return interceptProperty(thing, propOrHandler, handler);
  } else {
    return interceptInterceptable(thing, propOrHandler);
  }
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept_(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept_(handler);
}

function _isComputed(value, property) {
  if (property === undefined) {
    return isComputedValue(value);
  }

  if (isObservableObject(value) === false) {
    return false;
  }

  if (!value[$mobx].values_.has(property)) {
    return false;
  }

  var atom = getAtom(value, property);
  return isComputedValue(atom);
}
function isComputed(value) {
  if (false) {}

  return _isComputed(value);
}
function isComputedProp(value, propName) {
  if (false) {}

  return _isComputed(value, propName);
}

function _isObservable(value, property) {
  if (!value) {
    return false;
  }

  if (property !== undefined) {
    if (false) {}

    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property);
    }

    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function isObservable(value) {
  if (false) {}

  return _isObservable(value);
}
function isObservableProp(value, propName) {
  if (false) {}

  return _isObservable(value, propName);
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].keys_();
  }

  if (isObservableMap(obj) || isObservableSet(obj)) {
    return Array.from(obj.keys());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  die(5);
}
function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.values());
  }

  if (isObservableArray(obj)) {
    return obj.slice();
  }

  die(6);
}
function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.entries());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  die(7);
}
function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var _values = key;

    try {
      for (var _key in _values) {
        set(obj, _key, _values[_key]);
      }
    } finally {
      endBatch();
    }

    return;
  }

  if (isObservableObject(obj)) {
    obj[$mobx].set_(key, value);
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") {
      key = parseInt(key, 10);
    }

    if (key < 0) {
      die("Invalid index: '" + key + "'");
    }

    startBatch();

    if (key >= obj.length) {
      obj.length = key + 1;
    }

    obj[key] = value;
    endBatch();
  } else {
    die(8);
  }
}
function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj[$mobx].delete_(key);
  } else if (isObservableMap(obj)) {
    obj["delete"](key);
  } else if (isObservableSet(obj)) {
    obj["delete"](key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") {
      key = parseInt(key, 10);
    }

    obj.splice(key, 1);
  } else {
    die(9);
  }
}
function has(obj, key) {
  if (isObservableObject(obj)) {
    return obj[$mobx].has_(key);
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  }

  die(10);
}
function get(obj, key) {
  if (!has(obj, key)) {
    return undefined;
  }

  if (isObservableObject(obj)) {
    return obj[$mobx].get_(key);
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  }

  die(11);
}
function apiDefineProperty(obj, key, descriptor) {
  if (isObservableObject(obj)) {
    return obj[$mobx].defineProperty_(key, descriptor);
  }

  die(39);
}
function apiOwnKeys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].ownKeys_();
  }

  die(38);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (isFunction(cbOrFire)) {
    return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
  } else {
    return observeObservable(thing, propOrCb, cbOrFire);
  }
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe_(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe_(listener, fireImmediately);
}

function cache(map, key, value) {
  map.set(key, value);
  return value;
}

function toJSHelper(source, __alreadySeen) {
  if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) {
    return source;
  }

  if (isObservableValue(source) || isComputedValue(source)) {
    return toJSHelper(source.get(), __alreadySeen);
  }

  if (__alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray(source)) {
    var res = cache(__alreadySeen, source, new Array(source.length));
    source.forEach(function (value, idx) {
      res[idx] = toJSHelper(value, __alreadySeen);
    });
    return res;
  }

  if (isObservableSet(source)) {
    var _res = cache(__alreadySeen, source, new Set());

    source.forEach(function (value) {
      _res.add(toJSHelper(value, __alreadySeen));
    });
    return _res;
  }

  if (isObservableMap(source)) {
    var _res2 = cache(__alreadySeen, source, new Map());

    source.forEach(function (value, key) {
      _res2.set(key, toJSHelper(value, __alreadySeen));
    });
    return _res2;
  } else {
    // must be observable object
    var _res3 = cache(__alreadySeen, source, {});

    apiOwnKeys(source).forEach(function (key) {
      if (objectPrototype.propertyIsEnumerable.call(source, key)) {
        _res3[key] = toJSHelper(source[key], __alreadySeen);
      }
    });
    return _res3;
  }
}
/**
 * Recursively converts an observable to it's non-observable native counterpart.
 * It does NOT recurse into non-observables, these are left as they are, even if they contain observables.
 * Computed and other non-enumerable properties are completely ignored.
 * Complex scenarios require custom solution, eg implementing `toJSON` or using `serializr` lib.
 */


function toJS(source, options) {
  if (false) {}

  return toJSHelper(source, new Map());
}

function trace() {
  if (true) {
    die("trace() is not available in production builds");
  }

  var enterBreakPoint = false;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[args.length - 1] === "boolean") {
    enterBreakPoint = args.pop();
  }

  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing_ === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
  }

  derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */

function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && typeof arg1 === "object") {
    return whenPromise(predicate, arg1);
  }

  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    var error = new Error("WHEN_TIMEOUT");
    timeoutHandle = setTimeout(function () {
      if (!disposer[$mobx].isDisposed_) {
        disposer();

        if (opts.onError) {
          opts.onError(error);
        } else {
          throw error;
        }
      }
    }, opts.timeout);
  }

  opts.name =  false ? 0 : "When";
  var effectAction = createAction( false ? 0 : "When-effect", effect); // eslint-disable-next-line

  var disposer = autorun(function (r) {
    // predicate should not change state
    var cond = allowStateChanges(false, predicate);

    if (cond) {
      r.dispose();

      if (timeoutHandle) {
        clearTimeout(timeoutHandle);
      }

      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if (false) {}

  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, _extends({}, opts, {
      onError: reject
    }));

    cancel = function cancel() {
      disposer();
      reject(new Error("WHEN_CANCELLED"));
    };
  });
  res.cancel = cancel;
  return res;
}

function getAdm(target) {
  return target[$mobx];
} // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!


var objectProxyTraps = {
  has: function has(target, name) {
    if (false) {}

    return getAdm(target).has_(name);
  },
  get: function get(target, name) {
    return getAdm(target).get_(name);
  },
  set: function set(target, name, value) {
    var _getAdm$set_;

    if (!isStringish(name)) {
      return false;
    }

    if (false) {} // null (intercepted) -> true (success)


    return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
  },
  deleteProperty: function deleteProperty(target, name) {
    var _getAdm$delete_;

    if (false) {}

    if (!isStringish(name)) {
      return false;
    } // null (intercepted) -> true (success)


    return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
  },
  defineProperty: function defineProperty(target, name, descriptor) {
    var _getAdm$definePropert;

    if (false) {} // null (intercepted) -> true (success)


    return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
  },
  ownKeys: function ownKeys(target) {
    if (false) {}

    return getAdm(target).ownKeys_();
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};
function asDynamicObservableObject(target, options) {
  var _target$$mobx, _target$$mobx$proxy_;

  assertProxies();
  target = asObservableObject(target, options);
  return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
}

function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);

    if (idx !== -1) {
      interceptors.splice(idx, 1);
    }
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
    var interceptors = [].concat(interceptable.interceptors_ || []);

    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);

      if (change && !change.type) {
        die(14);
      }

      if (!change) {
        break;
      }
    }

    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);

    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;

  if (!listeners) {
    return;
  }

  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

function makeObservable(target, annotations, options) {
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();

  try {
    var _annotations;

    if (false) {} // Default to decorators


    (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target); // Annotate

    ownKeys(annotations).forEach(function (key) {
      return adm.make_(key, annotations[key]);
    });
  } finally {
    endBatch();
  }

  return target;
} // proto[keysSymbol] = new Set<PropertyKey>()

var keysSymbol = /*#__PURE__*/Symbol("mobx-keys");
function makeAutoObservable(target, overrides, options) {
  if (false) {} // Optimization: avoid visiting protos
  // Assumes that annotation.make_/.extend_ works the same for plain objects


  if (isPlainObject(target)) {
    return extendObservable(target, target, overrides, options);
  }

  var adm = asObservableObject(target, options)[$mobx]; // Optimization: cache keys on proto
  // Assumes makeAutoObservable can be called only once per object and can't be used in subclass

  if (!target[keysSymbol]) {
    var proto = Object.getPrototypeOf(target);
    var keys = new Set([].concat(ownKeys(target), ownKeys(proto)));
    keys["delete"]("constructor");
    keys["delete"]($mobx);
    addHiddenProp(proto, keysSymbol, keys);
  }

  startBatch();

  try {
    target[keysSymbol].forEach(function (key) {
      return adm.make_(key, // must pass "undefined" for { key: undefined }
      !overrides ? true : key in overrides ? overrides[key] : true);
    });
  } finally {
    endBatch();
  }

  return target;
}

var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

var arrayTraps = {
  get: function get(target, name) {
    var adm = target[$mobx];

    if (name === $mobx) {
      return adm;
    }

    if (name === "length") {
      return adm.getArrayLength_();
    }

    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }

    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }

    return target[name];
  },
  set: function set(target, name, value) {
    var adm = target[$mobx];

    if (name === "length") {
      adm.setArrayLength_(value);
    }

    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      // numeric string
      adm.set_(parseInt(name), value);
    }

    return true;
  },
  preventExtensions: function preventExtensions() {
    die(15);
  }
};
var ObservableArrayAdministration = /*#__PURE__*/function () {
  // this is the prop that gets proxied, so can't replace it!
  function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
    if (name === void 0) {
      name =  false ? 0 : "ObservableArray";
    }

    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV,  false ? 0 : "ObservableArray[..]");
    };
  }

  var _proto = ObservableArrayAdministration.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== undefined && values.length > 0) {
      return values.map(this.dehancer);
    }

    return values;
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };

  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) {
      die("Out of range: " + newLength);
    }

    var currentLength = this.values_.length;

    if (newLength === currentLength) {
      return;
    } else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray_(currentLength, 0, newItems);
    } else {
      this.spliceWithArray_(newLength, currentLength - newLength);
    }
  };

  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_) {
      die(16);
    }

    this.lastKnownLength_ += delta;

    if (this.legacyMode_ && delta > 0) {
      reserveArrayBuffer(oldLength + delta + 1);
    }
  };

  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;

    if (index === undefined) {
      index = 0;
    } else if (index > length) {
      index = length;
    } else if (index < 0) {
      index = Math.max(0, length + index);
    }

    if (arguments.length === 1) {
      deleteCount = length - index;
    } else if (deleteCount === undefined || deleteCount === null) {
      deleteCount = 0;
    } else {
      deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    }

    if (newItems === undefined) {
      newItems = EMPTY_ARRAY;
    }

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index: index,
        removedCount: deleteCount,
        added: newItems
      });

      if (!change) {
        return EMPTY_ARRAY;
      }

      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer_(v, undefined);
    });

    if (this.legacyMode_ || "production" !== "production") {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
    }

    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);

    if (deleteCount !== 0 || newItems.length !== 0) {
      this.notifyArraySplice_(index, newItems, res);
    }

    return this.dehanceValues_(res);
  };

  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;

      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      // The items removed by the splice
      var res = this.values_.slice(index, index + deleteCount); // The items that that should remain at the end of the array

      var oldItems = this.values_.slice(index + deleteCount); // New length is the previous length + addition count - deletion count

      this.values_.length += newItems.length - deleteCount;

      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }

      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }

      return res;
    }
  };

  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
    // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled

    if (false) {}

    this.atom_.reportChanged();

    if (notify) {
      notifyListeners(this, change);
    }

    if (false) {}
  };

  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;

    if (false) {}

    this.atom_.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) {
      notifyListeners(this, change);
    }

    if (false) {}
  };

  _proto.get_ = function get_(index) {
    if (index < this.values_.length) {
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    }

    console.warn( false ? 0 : "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
  };

  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          index: index,
          newValue: newValue
        });

        if (!change) {
          return;
        }

        newValue = change.newValue;
      }

      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      this.spliceWithArray_(index, 0, [newValue]);
    } else {
      // out of bounds
      die(17, index, values.length);
    }
  };

  return ObservableArrayAdministration;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name =  false ? 0 : "ObservableArray";
  }

  if (owned === void 0) {
    owned = false;
  }

  assertProxies();
  var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
  addHiddenFinalProp(adm.values_, $mobx, adm);
  var proxy = new Proxy(adm.values_, arrayTraps);
  adm.proxy_ = proxy;

  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart(true);
    adm.spliceWithArray_(0, 0, initialValues);
    allowStateChangesEnd(prev);
  }

  return proxy;
} // eslint-disable-next-line

var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  // Used by JSON.stringify
  toJSON: function toJSON() {
    return this.slice();
  },

  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }

    var adm = this[$mobx];

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return adm.spliceWithArray_(index);

      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }

    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];

    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];

    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }

    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }

    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }

    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  }
};
/**
 * Wrap function from prototype
 * Without this, everything works as well, but this works
 * faster as everything works on unproxied values
 */

addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc); // map

addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc); // reduce

addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);

function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
} // Report and delegate to dehanced array


function simpleFunc(funcName) {
  return function () {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
} // Make sure callbacks recieve correct array arg #2326


function mapLikeFunc(funcName) {
  return function (callback, thisArg) {
    var _this2 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function (element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
} // Make sure callbacks recieve correct array arg #2326


function reduceLikeFunc(funcName) {
  return function () {
    var _this3 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_); // #2432 - reduce behavior depends on arguments.length

    var callback = arguments[0];

    arguments[0] = function (accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };

    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}

var isObservableArrayAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _Symbol$iterator, _Symbol$toStringTag;
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete"; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556

_Symbol$iterator = Symbol.iterator;
_Symbol$toStringTag = Symbol.toStringTag;
var ObservableMap = /*#__PURE__*/function () {
  // hasMap, not hashMap >-).
  function ObservableMap(initialData, enhancer_, name_) {
    var _this = this;

    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ =  false ? 0 : "ObservableMap";
    }

    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;

    if (!isFunction(Map)) {
      die(18);
    }

    this.keysAtom_ = createAtom( false ? 0 : "ObservableMap.keys()");
    this.data_ = new Map();
    this.hasMap_ = new Map();
    allowStateChanges(true, function () {
      _this.merge(initialData);
    });
  }

  var _proto = ObservableMap.prototype;

  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };

  _proto.has = function has(key) {
    var _this2 = this;

    if (!globalState.trackingDerivation) {
      return this.has_(key);
    }

    var entry = this.hasMap_.get(key);

    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer,  false ? 0 : "ObservableMap.key?", false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function () {
        return _this2.hasMap_["delete"](key);
      });
    }

    return entry.get();
  };

  _proto.set = function set(key, value) {
    var hasKey = this.has_(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });

      if (!change) {
        return this;
      }

      value = change.newValue;
    }

    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }

    return this;
  };

  _proto["delete"] = function _delete(key) {
    var _this3 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });

      if (!change) {
        return false;
      }
    }

    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;

      if (false) {} // TODO fix type


      transaction(function () {
        var _this3$hasMap_$get;

        _this3.keysAtom_.reportChanged();

        (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null ? void 0 : _this3$hasMap_$get.setNewValue_(false);

        var observable = _this3.data_.get(key);

        observable.setNewValue_(undefined);

        _this3.data_["delete"](key);
      });

      if (notify) {
        notifyListeners(this, _change);
      }

      if (false) {}

      return true;
    }

    return false;
  };

  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable = this.data_.get(key);
    newValue = observable.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;

      if (false) {} // TODO fix type


      observable.setNewValue_(newValue);

      if (notify) {
        notifyListeners(this, change);
      }

      if (false) {}
    }
  };

  _proto.addValue_ = function addValue_(key, newValue) {
    var _this4 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function () {
      var _this4$hasMap_$get;

      var observable = new ObservableValue(newValue, _this4.enhancer_,  false ? 0 : "ObservableMap.key", false);

      _this4.data_.set(key, observable);

      newValue = observable.value_; // value might have been changed

      (_this4$hasMap_$get = _this4.hasMap_.get(key)) == null ? void 0 : _this4$hasMap_$get.setNewValue_(true);

      _this4.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue: newValue
    } : null;

    if (false) {} // TODO fix type


    if (notify) {
      notifyListeners(this, change);
    }

    if (false) {}
  };

  _proto.get = function get(key) {
    if (this.has(key)) {
      return this.dehanceValue_(this.data_.get(key).get());
    }

    return this.dehanceValue_(undefined);
  };

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };

  _proto.values = function values() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next = keys.next(),
            done = _keys$next.done,
            value = _keys$next.value;

        return {
          done: done,
          value: done ? undefined : self.get(value)
        };
      }
    });
  };

  _proto.entries = function entries() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next2 = keys.next(),
            done = _keys$next2.done,
            value = _keys$next2.value;

        return {
          done: done,
          value: done ? undefined : [value, self.get(value)]
        };
      }
    });
  };

  _proto[_Symbol$iterator] = function () {
    return this.entries();
  };

  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  }
  /** Merge another object into this object, returns this. */
  ;

  _proto.merge = function merge(other) {
    var _this5 = this;

    if (isObservableMap(other)) {
      other = new Map(other);
    }

    transaction(function () {
      if (isPlainObject(other)) {
        getPlainObjectKeys(other).forEach(function (key) {
          return _this5.set(key, other[key]);
        });
      } else if (Array.isArray(other)) {
        other.forEach(function (_ref) {
          var key = _ref[0],
              value = _ref[1];
          return _this5.set(key, value);
        });
      } else if (isES6Map(other)) {
        if (other.constructor !== Map) {
          die(19, other);
        }

        other.forEach(function (value, key) {
          return _this5.set(key, value);
        });
      } else if (other !== null && other !== undefined) {
        die(20, other);
      }
    });
    return this;
  };

  _proto.clear = function clear() {
    var _this6 = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_this6.keys()), _step2; !(_step2 = _iterator2()).done;) {
          var key = _step2.value;

          _this6["delete"](key);
        }
      });
    });
  };

  _proto.replace = function replace(values) {
    var _this7 = this;

    // Implementation requirements:
    // - respect ordering of replacement map
    // - allow interceptors to run and potentially prevent individual operations
    // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
    // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
    // - note that result map may differ from replacement map due to the interceptors
    transaction(function () {
      // Convert to map so we can do quick key lookups
      var replacementMap = convertToMap(values);
      var orderedData = new Map(); // Used for optimization

      var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
      // if the key deletion is prevented by interceptor
      // add entry at the beginning of the result map

      for (var _iterator3 = _createForOfIteratorHelperLoose(_this7.data_.keys()), _step3; !(_step3 = _iterator3()).done;) {
        var key = _step3.value;

        // Concurrently iterating/deleting keys
        // iterator should handle this correctly
        if (!replacementMap.has(key)) {
          var deleted = _this7["delete"](key); // Was the key removed?


          if (deleted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          } else {
            // Delete prevented by interceptor
            var value = _this7.data_.get(key);

            orderedData.set(key, value);
          }
        }
      } // Merge entries


      for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;) {
        var _step4$value = _step4.value,
            _key = _step4$value[0],
            _value = _step4$value[1];

        // We will want to know whether a new key is added
        var keyExisted = _this7.data_.has(_key); // Add or update value


        _this7.set(_key, _value); // The addition could have been prevent by interceptor


        if (_this7.data_.has(_key)) {
          // The update could have been prevented by interceptor
          // and also we want to preserve existing values
          // so use value from _data map (instead of replacement map)
          var _value2 = _this7.data_.get(_key);

          orderedData.set(_key, _value2); // Was a new key added?

          if (!keyExisted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          }
        }
      } // Check for possible key order change


      if (!keysReportChangedCalled) {
        if (_this7.data_.size !== orderedData.size) {
          // If size differs, keys are definitely modified
          _this7.keysAtom_.reportChanged();
        } else {
          var iter1 = _this7.data_.keys();

          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();

          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this7.keysAtom_.reportChanged();

              break;
            }

            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      } // Use correctly ordered map


      _this7.data_ = orderedData;
    });
    return this;
  };

  _proto.toString = function toString() {
    return "[object ObservableMap]";
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (false) {}

    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _createClass(ObservableMap, [{
    key: "size",
    get: function get() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return "Map";
    }
  }]);

  return ObservableMap;
}(); // eslint-disable-next-line

var isObservableMap = /*#__PURE__*/createInstanceofPredicate("ObservableMap", ObservableMap);

function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map = new Map();

    for (var key in dataStructure) {
      map.set(key, dataStructure[key]);
    }

    return map;
  } else {
    return die(21, dataStructure);
  }
}

var _Symbol$iterator$1, _Symbol$toStringTag$1;
var ObservableSetMarker = {};
_Symbol$iterator$1 = Symbol.iterator;
_Symbol$toStringTag$1 = Symbol.toStringTag;
var ObservableSet = /*#__PURE__*/function () {
  function ObservableSet(initialData, enhancer, name_) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ =  false ? 0 : "ObservableSet";
    }

    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;

    if (!isFunction(Set)) {
      die(22);
    }

    this.atom_ = createAtom(this.name_);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, name_);
    };

    if (initialData) {
      this.replace(initialData);
    }
  }

  var _proto = ObservableSet.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.clear = function clear() {
    var _this = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done;) {
          var value = _step.value;

          _this["delete"](value);
        }
      });
    });
  };

  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };

  _proto.add = function add(value) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.atom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });

      if (!change) {
        return this;
      } // ideally, value = change.value would be done here, so that values can be
      // changed by interceptor. Same applies for other Set and Map api's.

    }

    if (!this.has(value)) {
      transaction(function () {
        _this2.data_.add(_this2.enhancer_(value, undefined));

        _this2.atom_.reportChanged();
      });
      var notifySpy =  false && 0;
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;

      if (notifySpy && "production" !== "production") {}

      if (notify) {
        notifyListeners(this, _change);
      }

      if (notifySpy && "production" !== "production") {}
    }

    return this;
  };

  _proto["delete"] = function _delete(value) {
    var _this3 = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });

      if (!change) {
        return false;
      }
    }

    if (this.has(value)) {
      var notifySpy =  false && 0;
      var notify = hasListeners(this);

      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;

      if (notifySpy && "production" !== "production") {}

      transaction(function () {
        _this3.atom_.reportChanged();

        _this3.data_["delete"](value);
      });

      if (notify) {
        notifyListeners(this, _change2);
      }

      if (notifySpy && "production" !== "production") {}

      return true;
    }

    return false;
  };

  _proto.has = function has(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };

  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.keys = function keys() {
    return this.values();
  };

  _proto.values = function values() {
    this.atom_.reportObserved();
    var self = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.replace = function replace(other) {
    var _this4 = this;

    if (isObservableSet(other)) {
      other = new Set(other);
    }

    transaction(function () {
      if (Array.isArray(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (isES6Set(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (other !== null && other !== undefined) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    // ... 'fireImmediately' could also be true?
    if (false) {}

    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  _proto.toString = function toString() {
    return "[object ObservableSet]";
  };

  _proto[_Symbol$iterator$1] = function () {
    return this.values();
  };

  _createClass(ObservableSet, [{
    key: "size",
    get: function get() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag$1,
    get: function get() {
      return "Set";
    }
  }]);

  return ObservableSet;
}(); // eslint-disable-next-line

var isObservableSet = /*#__PURE__*/createInstanceofPredicate("ObservableSet", ObservableSet);

var descriptorCache = /*#__PURE__*/Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration = /*#__PURE__*/function () {
  function ObservableObjectAdministration(target_, values_, name_, // Used anytime annotation is not explicitely provided
  defaultAnnotation_) {
    if (values_ === void 0) {
      values_ = new Map();
    }

    if (defaultAnnotation_ === void 0) {
      defaultAnnotation_ = autoAnnotation;
    }

    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultAnnotation_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.isPlainObject_ = void 0;
    this.appliedAnnotations_ = void 0;
    this.pendingKeys_ = void 0;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom( false ? 0 : "ObservableObject.keys"); // Optimization: we use this frequently

    this.isPlainObject_ = isPlainObject(this.target_);

    if (false) {}

    if (false) {}
  }

  var _proto = ObservableObjectAdministration.prototype;

  _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
    return this.values_.get(key).get();
  };

  _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
    var observable = this.values_.get(key);

    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return true;
    } // intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: newValue
      });

      if (!change) {
        return null;
      }

      newValue = change.newValue;
    }

    newValue = observable.prepareNewValue_(newValue); // notify spy & observers

    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy =  false && 0;

      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;

      if (false) {}
      observable.setNewValue_(newValue);

      if (notify) {
        notifyListeners(this, _change);
      }

      if (false) {}
    }

    return true;
  };

  _proto.get_ = function get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      // Key doesn't exist yet, subscribe for it in case it's added later
      this.has_(key);
    }

    return this.target_[key];
  }
  /**
   * @param {PropertyKey} key
   * @param {any} value
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.set_ = function set_(key, value, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    // Don't use .has(key) - we care about own
    if (hasProp(this.target_, key)) {
      // Existing prop
      if (this.values_.has(key)) {
        // Observable (can be intercepted)
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        // Non-observable - proxy
        return Reflect.set(this.target_, key, value);
      } else {
        // Non-observable
        this.target_[key] = value;
        return true;
      }
    } else {
      // New prop
      return this.extend_(key, {
        value: value,
        enumerable: true,
        writable: true,
        configurable: true
      }, this.defaultAnnotation_, proxyTrap);
    }
  } // Trap for "in"
  ;

  _proto.has_ = function has_(key) {
    if (!globalState.trackingDerivation) {
      // Skip key subscription outside derivation
      return key in this.target_;
    }

    this.pendingKeys_ || (this.pendingKeys_ = new Map());
    var entry = this.pendingKeys_.get(key);

    if (!entry) {
      entry = new ObservableValue(key in this.target_, referenceEnhancer,  false ? 0 : "ObservableObject.key?", false);
      this.pendingKeys_.set(key, entry);
    }

    return entry.get();
  }
  /**
   * @param {PropertyKey} key
   * @param {Annotation|boolean} annotation true - use default annotation, false - ignore prop
   */
  ;

  _proto.make_ = function make_(key, annotation) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }

    if (annotation === false) {
      return;
    }

    assertAnnotable(this, annotation, key);

    if (!(key in this.target_)) {
      var _this$target_$storedA;

      // Throw on missing key, except for decorators:
      // Decorator annotations are collected from whole prototype chain.
      // When called from super() some props may not exist yet.
      // However we don't have to worry about missing prop,
      // because the decorator must have been applied to something.
      if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) != null && _this$target_$storedA[key]) {
        return; // will be annotated by subclass constructor
      } else {
        die(1, annotation.annotationType_, this.name_ + "." + key.toString());
      }
    }

    var source = this.target_;

    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);

      if (descriptor) {
        var outcome = annotation.make_(this, key, descriptor, source);

        if (outcome === 0
        /* Cancel */
        ) {
          return;
        }

        if (outcome === 1
        /* Break */
        ) {
          break;
        }
      }

      source = Object.getPrototypeOf(source);
    }

    recordAnnotationApplied(this, annotation, key);
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }

    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }

    assertAnnotable(this, annotation, key);
    var outcome = annotation.extend_(this, key, descriptor, proxyTrap);

    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }

    return outcome;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });

        if (!change) {
          return null;
        }

        var newValue = change.newValue;

        if (descriptor.value !== newValue) {
          descriptor = _extends({}, descriptor, {
            value: newValue
          });
        }
      } // Define


      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      } // Notify


      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }

    return true;
  } // If original descriptor becomes relevant, move this to annotation directly
  ;

  _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });

        if (!change) {
          return null;
        }

        value = change.newValue;
      }

      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      }; // Define

      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }

      var observable = new ObservableValue(value, enhancer,  false ? 0 : "ObservableObject.key", false);
      this.values_.set(key, observable); // Notify (value possibly changed by ObservableValue)

      this.notifyPropertyAddition_(key, observable.value_);
    } finally {
      endBatch();
    }

    return true;
  } // If original descriptor becomes relevant, move this to annotation directly
  ;

  _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: undefined
        });

        if (!change) {
          return null;
        }
      }

      options.name || (options.name =  false ? 0 : "ObservableObject.key");
      options.context = this.proxy_ || this.target_;
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      }; // Define

      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }

      this.values_.set(key, new ComputedValue(options)); // Notify

      this.notifyPropertyAddition_(key, undefined);
    } finally {
      endBatch();
    }

    return true;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.delete_ = function delete_(key, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    // No such prop
    if (!hasProp(this.target_, key)) {
      return true;
    } // Intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      }); // Cancelled

      if (!change) {
        return null;
      }
    } // Delete


    try {
      var _this$pendingKeys_, _this$pendingKeys_$ge;

      startBatch();
      var notify = hasListeners(this);
      var notifySpy =  false && 0;
      var observable = this.values_.get(key); // Value needed for spies/listeners

      var value = undefined; // Optimization: don't pull the value unless we will need it

      if (!observable && (notify || notifySpy)) {
        var _getDescriptor;

        value = (_getDescriptor = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor.value;
      } // delete prop (do first, may fail)


      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      } // Allow re-annotating this field


      if (false) {} // Clear observable


      if (observable) {
        this.values_["delete"](key); // for computed, value is undefined

        if (observable instanceof ObservableValue) {
          value = observable.value_;
        } // Notify: autorun(() => obj[key]), see #1796


        propagateChanged(observable);
      } // Notify "keys/entries/values" observers


      this.keysAtom_.reportChanged(); // Notify "has" observers
      // "in" as it may still exist in proto

      (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_); // Notify spies/listeners

      if (notify || notifySpy) {
        var _change2 = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };

        if (false) {}

        if (notify) {
          notifyListeners(this, _change2);
        }

        if (false) {}
      }
    } finally {
      endBatch();
    }

    return true;
  }
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  ;

  _proto.observe_ = function observe_(callback, fireImmediately) {
    if (false) {}

    return registerListener(this, callback);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
    var _this$pendingKeys_2, _this$pendingKeys_2$g;

    var notify = hasListeners(this);
    var notifySpy =  false && 0;

    if (notify || notifySpy) {
      var change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;

      if (false) {}

      if (notify) {
        notifyListeners(this, change);
      }

      if (false) {}
    }

    (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true); // Notify "keys/entries/values" observers

    this.keysAtom_.reportChanged();
  };

  _proto.ownKeys_ = function ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  };

  _proto.keys_ = function keys_() {
    // Returns enumerable && own, but unfortunately keysAtom will report on ANY key change.
    // There is no way to distinguish between Object.keys(object) and Reflect.ownKeys(object) - both are handled by ownKeys trap.
    // We can either over-report in Object.keys(object) or under-report in Reflect.ownKeys(object)
    // We choose to over-report in Object.keys(object), because:
    // - typically it's used with simple data objects
    // - when symbolic/non-enumerable keys are relevant Reflect.ownKeys works as expected
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  };

  return ObservableObjectAdministration;
}();
function asObservableObject(target, options) {
  var _options$name;

  if (false) {}

  if (hasProp(target, $mobx)) {
    if (false) {}

    return target;
  }

  if (false) {}

  var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name :  false ? 0 : "ObservableObject";
  var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
  addHiddenProp(target, $mobx, adm);
  return target;
}
var isObservableObjectAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);

function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get: function get() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set: function set(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}

function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }

  return false;
}
function recordAnnotationApplied(adm, annotation, key) {
  var _adm$target_$storedAn;

  if (false) {} // Remove applied decorator annotation so we don't try to apply it again in subclass constructor


  (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
}

function assertAnnotable(adm, annotation, key) {
  // Valid annotation
  if (false) {}
  /*
  // Configurable, not sealed, not frozen
  // Possibly not needed, just a little better error then the one thrown by engine.
  // Cases where this would be useful the most (subclass field initializer) are not interceptable by this.
  if (__DEV__) {
      const configurable = getDescriptor(adm.target_, key)?.configurable
      const frozen = Object.isFrozen(adm.target_)
      const sealed = Object.isSealed(adm.target_)
      if (!configurable || frozen || sealed) {
          const fieldName = `${adm.name_}.${key.toString()}`
          const requestedAnnotationType = annotation.annotationType_
          let error = `Cannot apply '${requestedAnnotationType}' to '${fieldName}':`
          if (frozen) {
              error += `\nObject is frozen.`
          }
          if (sealed) {
              error += `\nObject is sealed.`
          }
          if (!configurable) {
              error += `\nproperty is not configurable.`
              // Mention only if caused by us to avoid confusion
              if (hasProp(adm.appliedAnnotations!, key)) {
                  error += `\nTo prevent accidental re-definition of a field by a subclass, `
                  error += `all annotated fields of non-plain objects (classes) are not configurable.`
              }
          }
          die(error)
      }
  }
  */
  // Not annotated


  if (false) { var requestedAnnotationType, currentAnnotationType, fieldName; }
}

/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */

var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

var StubArray = function StubArray() {};

function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== undefined) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}

inherit(StubArray, Array.prototype); // Weex proto freeze protection was here,
// but it is unclear why the hack is need as MobX never changed the prototype
// anyway, so removed it in V6

var LegacyObservableArray = /*#__PURE__*/function (_StubArray, _Symbol$toStringTag, _Symbol$iterator) {
  _inheritsLoose(LegacyObservableArray, _StubArray);

  function LegacyObservableArray(initialValues, enhancer, name, owned) {
    var _this;

    if (name === void 0) {
      name =  false ? 0 : "ObservableArray";
    }

    if (owned === void 0) {
      owned = false;
    }

    _this = _StubArray.call(this) || this;
    var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
    adm.proxy_ = _assertThisInitialized(_this);
    addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true); // @ts-ignore

      _this.spliceWithArray(0, 0, initialValues);

      allowStateChangesEnd(prev);
    }

    return _this;
  }

  var _proto = LegacyObservableArray.prototype;

  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();

    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }

    return Array.prototype.concat.apply(this.slice(), //@ts-ignore
    arrays.map(function (a) {
      return isObservableArray(a) ? a.slice() : a;
    }));
  };

  _proto[_Symbol$iterator] = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        return nextIndex < self.length ? {
          value: self[nextIndex++],
          done: false
        } : {
          done: true,
          value: undefined
        };
      }
    });
  };

  _createClass(LegacyObservableArray, [{
    key: "length",
    get: function get() {
      return this[$mobx].getArrayLength_();
    },
    set: function set(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return "Array";
    }
  }]);

  return LegacyObservableArray;
}(StubArray, Symbol.toStringTag, Symbol.iterator);

Object.entries(arrayExtensions).forEach(function (_ref) {
  var prop = _ref[0],
      fn = _ref[1];

  if (prop !== "concat") {
    addHiddenProp(LegacyObservableArray.prototype, prop, fn);
  }
});

function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get() {
      return this[$mobx].get_(index);
    },
    set: function set(value) {
      this[$mobx].set_(index, value);
    }
  };
}

function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}

function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }

    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}
reserveArrayBuffer(1000);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}

function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) {
        die(23);
      }

      return thing[$mobx].atom_;
    }

    if (isObservableSet(thing)) {
      return thing[$mobx];
    }

    if (isObservableMap(thing)) {
      if (property === undefined) {
        return thing.keysAtom_;
      }

      var observable = thing.data_.get(property) || thing.hasMap_.get(property);

      if (!observable) {
        die(25, property, getDebugName(thing));
      }

      return observable;
    }


    if (isObservableObject(thing)) {
      if (!property) {
        return die(26);
      }

      var _observable = thing[$mobx].values_.get(property);

      if (!_observable) {
        die(27, property, getDebugName(thing));
      }

      return _observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      // disposer function
      return thing[$mobx];
    }
  }

  die(28);
}
function getAdministration(thing, property) {
  if (!thing) {
    die(29);
  }

  if (property !== undefined) {
    return getAdministration(getAtom(thing, property));
  }

  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
    return thing;
  }

  if (isObservableMap(thing) || isObservableSet(thing)) {
    return thing;
  }

  if (thing[$mobx]) {
    return thing[$mobx];
  }

  die(24, thing);
}
function getDebugName(thing, property) {
  var named;

  if (property !== undefined) {
    named = getAtom(thing, property);
  } else if (isAction(thing)) {
    return thing.name;
  } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
    named = getAdministration(thing);
  } else {
    // valid for arrays as well
    named = getAtom(thing);
  }

  return named.name_;
}

var toString = objectPrototype.toString;
function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }

  return eq(a, b, depth);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.

function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) {
    return a !== 0 || 1 / a === 1 / b;
  } // `null` or `undefined` only equal to itself (strict comparison).


  if (a == null || b == null) {
    return false;
  } // `NaN`s are equivalent, but non-reflexive.


  if (a !== a) {
    return b !== b;
  } // Exhaust primitive checks


  var type = typeof a;

  if (type !== "function" && type !== "object" && typeof b != "object") {
    return false;
  } // Compare `[[Class]]` names.


  var className = toString.call(a);

  if (className !== toString.call(b)) {
    return false;
  }

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) {
        return +b !== +b;
      } // An `egal` comparison is performed for other numeric values.


      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);

    case "[object Map]":
    case "[object Set]":
      // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
      // Hide this extra level by increasing the depth.
      if (depth >= 0) {
        depth++;
      }

      break;
  } // Unwrap any wrapped objects.


  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") {
      return false;
    } // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.


    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }

  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) {
      return bStack[length] === b;
    }
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;

    if (length !== b.length) {
      return false;
    } // Deep compare the contents, ignoring non-numeric properties.


    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) {
        return false;
      }
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var key;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) {
      return false;
    }

    while (length--) {
      // Deep compare each member
      key = keys[length];

      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) {
        return false;
      }
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) {
    return a.slice();
  }

  if (isES6Map(a) || isObservableMap(a)) {
    return Array.from(a.entries());
  }

  if (isES6Set(a) || isObservableSet(a)) {
    return Array.from(a.entries());
  }

  return a;
}

function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}

function getSelf() {
  return this;
}

function isAnnotation(thing) {
  return (// Can be function
    thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_)
  );
}

/**
 * (c) Michel Weststrate 2015 - 2020
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get a global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
["Symbol", "Map", "Set"].forEach(function (m) {
  var g = getGlobal();

  if (typeof g[m] === "undefined") {
    die("MobX requires global '" + m + "' to be available or polyfilled");
  }
});

if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
}


//# sourceMappingURL=mobx.esm.js.map


/***/ }),

/***/ 6324:
/***/ (function(module, exports) {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


/***/ }),

/***/ 5620:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": function() { return /* binding */ dist; },
  "lG": function() { return /* binding */ defaultProps; }
});

// UNUSED EXPORTS: Prism

// EXTERNAL MODULE: ../node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(2349);
;// CONCATENATED MODULE: ../node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ var duotoneDark = (theme);

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
;// CONCATENATED MODULE: ../node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism/* default */.Z,
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ var dist = (Highlight);



/***/ }),

/***/ 8431:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uz": function() { return /* binding */ LiveEditor; },
  "IF": function() { return /* binding */ LiveError; },
  "i5": function() { return /* binding */ LivePreview; },
  "nu": function() { return /* binding */ LiveProvider; }
});

// UNUSED EXPORTS: Editor, LiveContext, generateElement, renderElementAsync, withLive

// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/react-simple-code-editor/lib/index.js
var lib = __webpack_require__(2062);
// EXTERNAL MODULE: ../node_modules/prism-react-renderer/dist/index.js + 1 modules
var dist = __webpack_require__(5620);
// EXTERNAL MODULE: ../node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(2349);
;// CONCATENATED MODULE: ../node_modules/@philpl/buble/dist/buble.es.js
var t={3:"abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",5:"class enum extends super const export import",6:"enum",strict:"implements interface let package private protected public static yield",strictBind:"eval arguments"},e="break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",i={5:e,6:e+" const class extends export import super"},s=/^in(stanceof)?$/,r="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",n="‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",a=new RegExp("["+r+"]"),o=new RegExp("["+r+n+"]");r=n=null;var p=[0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,477,28,11,0,9,21,190,52,76,44,33,24,27,35,30,0,12,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,54,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,86,26,230,43,117,63,32,0,257,0,11,39,8,0,22,0,12,39,3,3,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,270,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,68,12,0,67,12,65,1,31,6129,15,754,9486,286,82,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,4149,196,60,67,1213,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,15,7472,3104,541],h=[509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,525,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,4,9,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,280,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1016,45,17,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,2214,6,110,6,6,9,792487,239];function c(t,e){for(var i=65536,s=0;s<e.length;s+=2){if((i+=e[s])>t)return!1;if((i+=e[s+1])>=t)return!0}}function l(t,e){return t<65?36===t:t<91||(t<97?95===t:t<123||(t<=65535?t>=170&&a.test(String.fromCharCode(t)):!1!==e&&c(t,p)))}function u(t,e){return t<48?36===t:t<58||!(t<65)&&(t<91||(t<97?95===t:t<123||(t<=65535?t>=170&&o.test(String.fromCharCode(t)):!1!==e&&(c(t,p)||c(t,h)))))}var d=function(t,e){void 0===e&&(e={}),this.label=t,this.keyword=e.keyword,this.beforeExpr=!!e.beforeExpr,this.startsExpr=!!e.startsExpr,this.isLoop=!!e.isLoop,this.isAssign=!!e.isAssign,this.prefix=!!e.prefix,this.postfix=!!e.postfix,this.binop=e.binop||null,this.updateContext=null};function f(t,e){return new d(t,{beforeExpr:!0,binop:e})}var m={beforeExpr:!0},g={startsExpr:!0},y={};function v(t,e){return void 0===e&&(e={}),e.keyword=t,y[t]=new d(t,e)}var x={num:new d("num",g),regexp:new d("regexp",g),string:new d("string",g),name:new d("name",g),eof:new d("eof"),bracketL:new d("[",{beforeExpr:!0,startsExpr:!0}),bracketR:new d("]"),braceL:new d("{",{beforeExpr:!0,startsExpr:!0}),braceR:new d("}"),parenL:new d("(",{beforeExpr:!0,startsExpr:!0}),parenR:new d(")"),comma:new d(",",m),semi:new d(";",m),colon:new d(":",m),dot:new d("."),question:new d("?",m),arrow:new d("=>",m),template:new d("template"),invalidTemplate:new d("invalidTemplate"),ellipsis:new d("...",m),backQuote:new d("`",g),dollarBraceL:new d("${",{beforeExpr:!0,startsExpr:!0}),eq:new d("=",{beforeExpr:!0,isAssign:!0}),assign:new d("_=",{beforeExpr:!0,isAssign:!0}),incDec:new d("++/--",{prefix:!0,postfix:!0,startsExpr:!0}),prefix:new d("!/~",{beforeExpr:!0,prefix:!0,startsExpr:!0}),logicalOR:f("||",1),logicalAND:f("&&",2),bitwiseOR:f("|",3),bitwiseXOR:f("^",4),bitwiseAND:f("&",5),equality:f("==/!=/===/!==",6),relational:f("</>/<=/>=",7),bitShift:f("<</>>/>>>",8),plusMin:new d("+/-",{beforeExpr:!0,binop:9,prefix:!0,startsExpr:!0}),modulo:f("%",10),star:f("*",10),slash:f("/",10),starstar:new d("**",{beforeExpr:!0}),_break:v("break"),_case:v("case",m),_catch:v("catch"),_continue:v("continue"),_debugger:v("debugger"),_default:v("default",m),_do:v("do",{isLoop:!0,beforeExpr:!0}),_else:v("else",m),_finally:v("finally"),_for:v("for",{isLoop:!0}),_function:v("function",g),_if:v("if"),_return:v("return",m),_switch:v("switch"),_throw:v("throw",m),_try:v("try"),_var:v("var"),_const:v("const"),_while:v("while",{isLoop:!0}),_with:v("with"),_new:v("new",{beforeExpr:!0,startsExpr:!0}),_this:v("this",g),_super:v("super",g),_class:v("class",g),_extends:v("extends",m),_export:v("export"),_import:v("import"),_null:v("null",g),_true:v("true",g),_false:v("false",g),_in:v("in",{beforeExpr:!0,binop:7}),_instanceof:v("instanceof",{beforeExpr:!0,binop:7}),_typeof:v("typeof",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_void:v("void",{beforeExpr:!0,prefix:!0,startsExpr:!0}),_delete:v("delete",{beforeExpr:!0,prefix:!0,startsExpr:!0})},b=/\r\n?|\n|\u2028|\u2029/,_=new RegExp(b.source,"g");function S(t,e){return 10===t||13===t||!e&&(8232===t||8233===t)}var k=/[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,w=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,E=Object.prototype,C=E.hasOwnProperty,A=E.toString;function I(t,e){return C.call(t,e)}var L=Array.isArray||function(t){return"[object Array]"===A.call(t)};function N(t){return new RegExp("^(?:"+t.replace(/ /g,"|")+")$")}var P=function(t,e){this.line=t,this.column=e};P.prototype.offset=function(t){return new P(this.line,this.column+t)};var T=function(t,e,i){this.start=e,this.end=i,null!==t.sourceFile&&(this.source=t.sourceFile)};function R(t,e){for(var i=1,s=0;;){_.lastIndex=s;var r=_.exec(t);if(!(r&&r.index<e))return new P(i,e-s);++i,s=r.index+r[0].length}}var O={ecmaVersion:9,sourceType:"script",onInsertedSemicolon:null,onTrailingComma:null,allowReserved:null,allowReturnOutsideFunction:!1,allowImportExportEverywhere:!1,allowAwaitOutsideFunction:!1,allowHashBang:!1,locations:!1,onToken:null,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null,preserveParens:!1},j=2,V=1|j,D=4,B=8;function F(t,e){return j|(t?D:0)|(e?B:0)}var M=function(e,s,r){this.options=e=function(t){var e={};for(var i in O)e[i]=t&&I(t,i)?t[i]:O[i];if(e.ecmaVersion>=2015&&(e.ecmaVersion-=2009),null==e.allowReserved&&(e.allowReserved=e.ecmaVersion<5),L(e.onToken)){var s=e.onToken;e.onToken=function(t){return s.push(t)}}return L(e.onComment)&&(e.onComment=function(t,e){return function(i,s,r,n,a,o){var p={type:i?"Block":"Line",value:s,start:r,end:n};t.locations&&(p.loc=new T(this,a,o)),t.ranges&&(p.range=[r,n]),e.push(p)}}(e,e.onComment)),e}(e),this.sourceFile=e.sourceFile,this.keywords=N(i[e.ecmaVersion>=6?6:5]);var n="";if(!e.allowReserved){for(var a=e.ecmaVersion;!(n=t[a]);a--);"module"===e.sourceType&&(n+=" await")}this.reservedWords=N(n);var o=(n?n+" ":"")+t.strict;this.reservedWordsStrict=N(o),this.reservedWordsStrictBind=N(o+" "+t.strictBind),this.input=String(s),this.containsEsc=!1,r?(this.pos=r,this.lineStart=this.input.lastIndexOf("\n",r-1)+1,this.curLine=this.input.slice(0,this.lineStart).split(b).length):(this.pos=this.lineStart=0,this.curLine=1),this.type=x.eof,this.value=null,this.start=this.end=this.pos,this.startLoc=this.endLoc=this.curPosition(),this.lastTokEndLoc=this.lastTokStartLoc=null,this.lastTokStart=this.lastTokEnd=this.pos,this.context=this.initialContext(),this.exprAllowed=!0,this.inModule="module"===e.sourceType,this.strict=this.inModule||this.strictDirective(this.pos),this.potentialArrowAt=-1,this.yieldPos=this.awaitPos=this.awaitIdentPos=0,this.labels=[],this.undefinedExports={},0===this.pos&&e.allowHashBang&&"#!"===this.input.slice(0,2)&&this.skipLineComment(2),this.scopeStack=[],this.enterScope(1),this.regexpState=null},U={inFunction:{configurable:!0},inGenerator:{configurable:!0},inAsync:{configurable:!0},allowSuper:{configurable:!0},allowDirectSuper:{configurable:!0},treatFunctionsAsVar:{configurable:!0}};M.prototype.parse=function(){var t=this.options.program||this.startNode();return this.nextToken(),this.parseTopLevel(t)},U.inFunction.get=function(){return(this.currentVarScope().flags&j)>0},U.inGenerator.get=function(){return(this.currentVarScope().flags&B)>0},U.inAsync.get=function(){return(this.currentVarScope().flags&D)>0},U.allowSuper.get=function(){return(64&this.currentThisScope().flags)>0},U.allowDirectSuper.get=function(){return(128&this.currentThisScope().flags)>0},U.treatFunctionsAsVar.get=function(){return this.treatFunctionsAsVarInScope(this.currentScope())},M.prototype.inNonArrowFunction=function(){return(this.currentThisScope().flags&j)>0},M.extend=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];for(var i=this,s=0;s<t.length;s++)i=t[s](i);return i},M.parse=function(t,e){return new this(e,t).parse()},M.parseExpressionAt=function(t,e,i){var s=new this(i,t,e);return s.nextToken(),s.parseExpression()},M.tokenizer=function(t,e){return new this(e,t)},Object.defineProperties(M.prototype,U);var q=M.prototype,X=/^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;function J(){this.shorthandAssign=this.trailingComma=this.parenthesizedAssign=this.parenthesizedBind=this.doubleProto=-1}q.strictDirective=function(t){for(;;){w.lastIndex=t,t+=w.exec(this.input)[0].length;var e=X.exec(this.input.slice(t));if(!e)return!1;if("use strict"===(e[1]||e[2]))return!0;w.lastIndex=t+=e[0].length,t+=w.exec(this.input)[0].length,";"===this.input[t]&&t++}},q.eat=function(t){return this.type===t&&(this.next(),!0)},q.isContextual=function(t){return this.type===x.name&&this.value===t&&!this.containsEsc},q.eatContextual=function(t){return!!this.isContextual(t)&&(this.next(),!0)},q.expectContextual=function(t){this.eatContextual(t)||this.unexpected()},q.canInsertSemicolon=function(){return this.type===x.eof||this.type===x.braceR||b.test(this.input.slice(this.lastTokEnd,this.start))},q.insertSemicolon=function(){if(this.canInsertSemicolon())return this.options.onInsertedSemicolon&&this.options.onInsertedSemicolon(this.lastTokEnd,this.lastTokEndLoc),!0},q.semicolon=function(){this.eat(x.semi)||this.insertSemicolon()||this.unexpected()},q.afterTrailingComma=function(t,e){if(this.type===t)return this.options.onTrailingComma&&this.options.onTrailingComma(this.lastTokStart,this.lastTokStartLoc),e||this.next(),!0},q.expect=function(t){this.eat(t)||this.unexpected()},q.unexpected=function(t){this.raise(null!=t?t:this.start,"Unexpected token")},q.checkPatternErrors=function(t,e){if(t){t.trailingComma>-1&&this.raiseRecoverable(t.trailingComma,"Comma is not permitted after the rest element");var i=e?t.parenthesizedAssign:t.parenthesizedBind;i>-1&&this.raiseRecoverable(i,"Parenthesized pattern")}},q.checkExpressionErrors=function(t,e){if(!t)return!1;var i=t.shorthandAssign,s=t.doubleProto;if(!e)return i>=0||s>=0;i>=0&&this.raise(i,"Shorthand property assignments are valid only in destructuring patterns"),s>=0&&this.raiseRecoverable(s,"Redefinition of __proto__ property")},q.checkYieldAwaitInDefaultParams=function(){this.yieldPos&&(!this.awaitPos||this.yieldPos<this.awaitPos)&&this.raise(this.yieldPos,"Yield expression cannot be a default value"),this.awaitPos&&this.raise(this.awaitPos,"Await expression cannot be a default value")},q.isSimpleAssignTarget=function(t){return"ParenthesizedExpression"===t.type?this.isSimpleAssignTarget(t.expression):"Identifier"===t.type||"MemberExpression"===t.type};var W=M.prototype;W.parseTopLevel=function(t){var e={};for(t.body||(t.body=[]);this.type!==x.eof;){var i=this.parseStatement(null,!0,e);t.body.push(i)}if(this.inModule)for(var s=0,r=Object.keys(this.undefinedExports);s<r.length;s+=1){var n=r[s];this.raiseRecoverable(this.undefinedExports[n].start,"Export '"+n+"' is not defined")}return this.adaptDirectivePrologue(t.body),this.next(),this.options.ecmaVersion>=6&&(t.sourceType=this.options.sourceType),this.finishNode(t,"Program")};var z={kind:"loop"},H={kind:"switch"};W.isLet=function(t){if(this.options.ecmaVersion<6||!this.isContextual("let"))return!1;w.lastIndex=this.pos;var e=w.exec(this.input),i=this.pos+e[0].length,r=this.input.charCodeAt(i);if(91===r)return!0;if(t)return!1;if(123===r)return!0;if(l(r,!0)){for(var n=i+1;u(this.input.charCodeAt(n),!0);)++n;var a=this.input.slice(i,n);if(!s.test(a))return!0}return!1},W.isAsyncFunction=function(){if(this.options.ecmaVersion<8||!this.isContextual("async"))return!1;w.lastIndex=this.pos;var t=w.exec(this.input),e=this.pos+t[0].length;return!(b.test(this.input.slice(this.pos,e))||"function"!==this.input.slice(e,e+8)||e+8!==this.input.length&&u(this.input.charAt(e+8)))},W.parseStatement=function(t,e,i){var s,r=this.type,n=this.startNode();switch(this.isLet(t)&&(r=x._var,s="let"),r){case x._break:case x._continue:return this.parseBreakContinueStatement(n,r.keyword);case x._debugger:return this.parseDebuggerStatement(n);case x._do:return this.parseDoStatement(n);case x._for:return this.parseForStatement(n);case x._function:return t&&(this.strict||"if"!==t&&"label"!==t)&&this.options.ecmaVersion>=6&&this.unexpected(),this.parseFunctionStatement(n,!1,!t);case x._class:return t&&this.unexpected(),this.parseClass(n,!0);case x._if:return this.parseIfStatement(n);case x._return:return this.parseReturnStatement(n);case x._switch:return this.parseSwitchStatement(n);case x._throw:return this.parseThrowStatement(n);case x._try:return this.parseTryStatement(n);case x._const:case x._var:return s=s||this.value,t&&"var"!==s&&this.unexpected(),this.parseVarStatement(n,s);case x._while:return this.parseWhileStatement(n);case x._with:return this.parseWithStatement(n);case x.braceL:return this.parseBlock(!0,n);case x.semi:return this.parseEmptyStatement(n);case x._export:case x._import:return this.options.allowImportExportEverywhere||(e||this.raise(this.start,"'import' and 'export' may only appear at the top level"),this.inModule||this.raise(this.start,"'import' and 'export' may appear only with 'sourceType: module'")),r===x._import?this.parseImport(n):this.parseExport(n,i);default:if(this.isAsyncFunction())return t&&this.unexpected(),this.next(),this.parseFunctionStatement(n,!0,!t);var a=this.value,o=this.parseExpression();return r===x.name&&"Identifier"===o.type&&this.eat(x.colon)?this.parseLabeledStatement(n,a,o,t):this.parseExpressionStatement(n,o)}},W.parseBreakContinueStatement=function(t,e){var i="break"===e;this.next(),this.eat(x.semi)||this.insertSemicolon()?t.label=null:this.type!==x.name?this.unexpected():(t.label=this.parseIdent(),this.semicolon());for(var s=0;s<this.labels.length;++s){var r=this.labels[s];if(null==t.label||r.name===t.label.name){if(null!=r.kind&&(i||"loop"===r.kind))break;if(t.label&&i)break}}return s===this.labels.length&&this.raise(t.start,"Unsyntactic "+e),this.finishNode(t,i?"BreakStatement":"ContinueStatement")},W.parseDebuggerStatement=function(t){return this.next(),this.semicolon(),this.finishNode(t,"DebuggerStatement")},W.parseDoStatement=function(t){return this.next(),this.labels.push(z),t.body=this.parseStatement("do"),this.labels.pop(),this.expect(x._while),t.test=this.parseParenExpression(),this.options.ecmaVersion>=6?this.eat(x.semi):this.semicolon(),this.finishNode(t,"DoWhileStatement")},W.parseForStatement=function(t){this.next();var e=this.options.ecmaVersion>=9&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction)&&this.eatContextual("await")?this.lastTokStart:-1;if(this.labels.push(z),this.enterScope(0),this.expect(x.parenL),this.type===x.semi)return e>-1&&this.unexpected(e),this.parseFor(t,null);var i=this.isLet();if(this.type===x._var||this.type===x._const||i){var s=this.startNode(),r=i?"let":this.value;return this.next(),this.parseVar(s,!0,r),this.finishNode(s,"VariableDeclaration"),!(this.type===x._in||this.options.ecmaVersion>=6&&this.isContextual("of"))||1!==s.declarations.length||"var"!==r&&s.declarations[0].init?(e>-1&&this.unexpected(e),this.parseFor(t,s)):(this.options.ecmaVersion>=9&&(this.type===x._in?e>-1&&this.unexpected(e):t.await=e>-1),this.parseForIn(t,s))}var n=new J,a=this.parseExpression(!0,n);return this.type===x._in||this.options.ecmaVersion>=6&&this.isContextual("of")?(this.options.ecmaVersion>=9&&(this.type===x._in?e>-1&&this.unexpected(e):t.await=e>-1),this.toAssignable(a,!1,n),this.checkLVal(a),this.parseForIn(t,a)):(this.checkExpressionErrors(n,!0),e>-1&&this.unexpected(e),this.parseFor(t,a))},W.parseFunctionStatement=function(t,e,i){return this.next(),this.parseFunction(t,Q|(i?0:K),!1,e)},W.parseIfStatement=function(t){return this.next(),t.test=this.parseParenExpression(),t.consequent=this.parseStatement("if"),t.alternate=this.eat(x._else)?this.parseStatement("if"):null,this.finishNode(t,"IfStatement")},W.parseReturnStatement=function(t){return this.inFunction||this.options.allowReturnOutsideFunction||this.raise(this.start,"'return' outside of function"),this.next(),this.eat(x.semi)||this.insertSemicolon()?t.argument=null:(t.argument=this.parseExpression(),this.semicolon()),this.finishNode(t,"ReturnStatement")},W.parseSwitchStatement=function(t){var e;this.next(),t.discriminant=this.parseParenExpression(),t.cases=[],this.expect(x.braceL),this.labels.push(H),this.enterScope(0);for(var i=!1;this.type!==x.braceR;)if(this.type===x._case||this.type===x._default){var s=this.type===x._case;e&&this.finishNode(e,"SwitchCase"),t.cases.push(e=this.startNode()),e.consequent=[],this.next(),s?e.test=this.parseExpression():(i&&this.raiseRecoverable(this.lastTokStart,"Multiple default clauses"),i=!0,e.test=null),this.expect(x.colon)}else e||this.unexpected(),e.consequent.push(this.parseStatement(null));return this.exitScope(),e&&this.finishNode(e,"SwitchCase"),this.next(),this.labels.pop(),this.finishNode(t,"SwitchStatement")},W.parseThrowStatement=function(t){return this.next(),b.test(this.input.slice(this.lastTokEnd,this.start))&&this.raise(this.lastTokEnd,"Illegal newline after throw"),t.argument=this.parseExpression(),this.semicolon(),this.finishNode(t,"ThrowStatement")};var G=[];W.parseTryStatement=function(t){if(this.next(),t.block=this.parseBlock(),t.handler=null,this.type===x._catch){var e=this.startNode();if(this.next(),this.eat(x.parenL)){e.param=this.parseBindingAtom();var i="Identifier"===e.param.type;this.enterScope(i?32:0),this.checkLVal(e.param,i?4:2),this.expect(x.parenR)}else this.options.ecmaVersion<10&&this.unexpected(),e.param=null,this.enterScope(0);e.body=this.parseBlock(!1),this.exitScope(),t.handler=this.finishNode(e,"CatchClause")}return t.finalizer=this.eat(x._finally)?this.parseBlock():null,t.handler||t.finalizer||this.raise(t.start,"Missing catch or finally clause"),this.finishNode(t,"TryStatement")},W.parseVarStatement=function(t,e){return this.next(),this.parseVar(t,!1,e),this.semicolon(),this.finishNode(t,"VariableDeclaration")},W.parseWhileStatement=function(t){return this.next(),t.test=this.parseParenExpression(),this.labels.push(z),t.body=this.parseStatement("while"),this.labels.pop(),this.finishNode(t,"WhileStatement")},W.parseWithStatement=function(t){return this.strict&&this.raise(this.start,"'with' in strict mode"),this.next(),t.object=this.parseParenExpression(),t.body=this.parseStatement("with"),this.finishNode(t,"WithStatement")},W.parseEmptyStatement=function(t){return this.next(),this.finishNode(t,"EmptyStatement")},W.parseLabeledStatement=function(t,e,i,s){for(var r=0,n=this.labels;r<n.length;r+=1)n[r].name===e&&this.raise(i.start,"Label '"+e+"' is already declared");for(var a=this.type.isLoop?"loop":this.type===x._switch?"switch":null,o=this.labels.length-1;o>=0;o--){var p=this.labels[o];if(p.statementStart!==t.start)break;p.statementStart=this.start,p.kind=a}return this.labels.push({name:e,kind:a,statementStart:this.start}),t.body=this.parseStatement(s?-1===s.indexOf("label")?s+"label":s:"label"),this.labels.pop(),t.label=i,this.finishNode(t,"LabeledStatement")},W.parseExpressionStatement=function(t,e){return t.expression=e,this.semicolon(),this.finishNode(t,"ExpressionStatement")},W.parseBlock=function(t,e){for(void 0===t&&(t=!0),void 0===e&&(e=this.startNode()),e.body=[],this.expect(x.braceL),t&&this.enterScope(0);!this.eat(x.braceR);){var i=this.parseStatement(null);e.body.push(i)}return t&&this.exitScope(),this.finishNode(e,"BlockStatement")},W.parseFor=function(t,e){return t.init=e,this.expect(x.semi),t.test=this.type===x.semi?null:this.parseExpression(),this.expect(x.semi),t.update=this.type===x.parenR?null:this.parseExpression(),this.expect(x.parenR),t.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(t,"ForStatement")},W.parseForIn=function(t,e){var i=this.type===x._in?"ForInStatement":"ForOfStatement";return this.next(),"ForInStatement"===i&&("AssignmentPattern"===e.type||"VariableDeclaration"===e.type&&null!=e.declarations[0].init&&(this.strict||"Identifier"!==e.declarations[0].id.type))&&this.raise(e.start,"Invalid assignment in for-in loop head"),t.left=e,t.right="ForInStatement"===i?this.parseExpression():this.parseMaybeAssign(),this.expect(x.parenR),t.body=this.parseStatement("for"),this.exitScope(),this.labels.pop(),this.finishNode(t,i)},W.parseVar=function(t,e,i){for(t.declarations=[],t.kind=i;;){var s=this.startNode();if(this.parseVarId(s,i),this.eat(x.eq)?s.init=this.parseMaybeAssign(e):"const"!==i||this.type===x._in||this.options.ecmaVersion>=6&&this.isContextual("of")?"Identifier"===s.id.type||e&&(this.type===x._in||this.isContextual("of"))?s.init=null:this.raise(this.lastTokEnd,"Complex binding patterns require an initialization value"):this.unexpected(),t.declarations.push(this.finishNode(s,"VariableDeclarator")),!this.eat(x.comma))break}return t},W.parseVarId=function(t,e){"const"!==e&&"let"!==e||!this.isContextual("let")||this.raiseRecoverable(this.start,"let is disallowed as a lexically bound name"),t.id=this.parseBindingAtom(),this.checkLVal(t.id,"var"===e?1:2,!1)};var Q=1,K=2;W.parseFunction=function(t,e,i,s){this.initFunction(t),(this.options.ecmaVersion>=9||this.options.ecmaVersion>=6&&!s)&&(this.type===x.star&&e&K&&this.unexpected(),t.generator=this.eat(x.star)),this.options.ecmaVersion>=8&&(t.async=!!s),e&Q&&(t.id=4&e&&this.type!==x.name?null:this.parseIdent(),!t.id||e&K||this.checkLVal(t.id,this.strict||t.generator||t.async?this.treatFunctionsAsVar?1:2:3));var r=this.yieldPos,n=this.awaitPos,a=this.awaitIdentPos;return this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(F(t.async,t.generator)),e&Q||(t.id=this.type===x.name?this.parseIdent():null),this.parseFunctionParams(t),this.parseFunctionBody(t,i,!1),this.yieldPos=r,this.awaitPos=n,this.awaitIdentPos=a,this.finishNode(t,e&Q?"FunctionDeclaration":"FunctionExpression")},W.parseFunctionParams=function(t){this.expect(x.parenL),t.params=this.parseBindingList(x.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams()},W.parseClass=function(t,e){this.next();var i=this.strict;this.strict=!0,this.parseClassId(t,e),this.parseClassSuper(t);var s=this.startNode(),r=!1;for(s.body=[],this.expect(x.braceL);!this.eat(x.braceR);){var n=this.parseClassElement(null!==t.superClass);n&&(s.body.push(n),"MethodDefinition"===n.type&&"constructor"===n.kind&&(r&&this.raise(n.start,"Duplicate constructor in the same class"),r=!0))}return t.body=this.finishNode(s,"ClassBody"),this.strict=i,this.finishNode(t,e?"ClassDeclaration":"ClassExpression")},W.parseClassElement=function(t){var e=this;if(this.eat(x.semi))return null;var i=this.startNode(),s=function(t,s){void 0===s&&(s=!1);var r=e.start,n=e.startLoc;return!(!e.eatContextual(t)||(e.type===x.parenL||s&&e.canInsertSemicolon())&&(i.key&&e.unexpected(),i.computed=!1,i.key=e.startNodeAt(r,n),i.key.name=t,e.finishNode(i.key,"Identifier"),1))};i.kind="method",i.static=s("static");var r=this.eat(x.star),n=!1;r||(this.options.ecmaVersion>=8&&s("async",!0)?(n=!0,r=this.options.ecmaVersion>=9&&this.eat(x.star)):s("get")?i.kind="get":s("set")&&(i.kind="set")),i.key||this.parsePropertyName(i);var a=i.key,o=!1;return i.computed||i.static||!("Identifier"===a.type&&"constructor"===a.name||"Literal"===a.type&&"constructor"===a.value)?i.static&&"Identifier"===a.type&&"prototype"===a.name&&this.raise(a.start,"Classes may not have a static property named prototype"):("method"!==i.kind&&this.raise(a.start,"Constructor can't have get/set modifier"),r&&this.raise(a.start,"Constructor can't be a generator"),n&&this.raise(a.start,"Constructor can't be an async method"),i.kind="constructor",o=t),this.parseClassMethod(i,r,n,o),"get"===i.kind&&0!==i.value.params.length&&this.raiseRecoverable(i.value.start,"getter should have no params"),"set"===i.kind&&1!==i.value.params.length&&this.raiseRecoverable(i.value.start,"setter should have exactly one param"),"set"===i.kind&&"RestElement"===i.value.params[0].type&&this.raiseRecoverable(i.value.params[0].start,"Setter cannot use rest params"),i},W.parseClassMethod=function(t,e,i,s){return t.value=this.parseMethod(e,i,s),this.finishNode(t,"MethodDefinition")},W.parseClassId=function(t,e){this.type===x.name?(t.id=this.parseIdent(),e&&this.checkLVal(t.id,2,!1)):(!0===e&&this.unexpected(),t.id=null)},W.parseClassSuper=function(t){t.superClass=this.eat(x._extends)?this.parseExprSubscripts():null},W.parseExport=function(t,e){if(this.next(),this.eat(x.star))return this.expectContextual("from"),this.type!==x.string&&this.unexpected(),t.source=this.parseExprAtom(),this.semicolon(),this.finishNode(t,"ExportAllDeclaration");if(this.eat(x._default)){var i;if(this.checkExport(e,"default",this.lastTokStart),this.type===x._function||(i=this.isAsyncFunction())){var s=this.startNode();this.next(),i&&this.next(),t.declaration=this.parseFunction(s,4|Q,!1,i)}else if(this.type===x._class){var r=this.startNode();t.declaration=this.parseClass(r,"nullableID")}else t.declaration=this.parseMaybeAssign(),this.semicolon();return this.finishNode(t,"ExportDefaultDeclaration")}if(this.shouldParseExportStatement())t.declaration=this.parseStatement(null),"VariableDeclaration"===t.declaration.type?this.checkVariableExport(e,t.declaration.declarations):this.checkExport(e,t.declaration.id.name,t.declaration.id.start),t.specifiers=[],t.source=null;else{if(t.declaration=null,t.specifiers=this.parseExportSpecifiers(e),this.eatContextual("from"))this.type!==x.string&&this.unexpected(),t.source=this.parseExprAtom();else{for(var n=0,a=t.specifiers;n<a.length;n+=1){var o=a[n];this.checkUnreserved(o.local),this.checkLocalExport(o.local)}t.source=null}this.semicolon()}return this.finishNode(t,"ExportNamedDeclaration")},W.checkExport=function(t,e,i){t&&(I(t,e)&&this.raiseRecoverable(i,"Duplicate export '"+e+"'"),t[e]=!0)},W.checkPatternExport=function(t,e){var i=e.type;if("Identifier"===i)this.checkExport(t,e.name,e.start);else if("ObjectPattern"===i)for(var s=0,r=e.properties;s<r.length;s+=1)this.checkPatternExport(t,r[s]);else if("ArrayPattern"===i)for(var n=0,a=e.elements;n<a.length;n+=1){var o=a[n];o&&this.checkPatternExport(t,o)}else"Property"===i?this.checkPatternExport(t,e.value):"AssignmentPattern"===i?this.checkPatternExport(t,e.left):"RestElement"===i?this.checkPatternExport(t,e.argument):"ParenthesizedExpression"===i&&this.checkPatternExport(t,e.expression)},W.checkVariableExport=function(t,e){if(t)for(var i=0,s=e;i<s.length;i+=1)this.checkPatternExport(t,s[i].id)},W.shouldParseExportStatement=function(){return"var"===this.type.keyword||"const"===this.type.keyword||"class"===this.type.keyword||"function"===this.type.keyword||this.isLet()||this.isAsyncFunction()},W.parseExportSpecifiers=function(t){var e=[],i=!0;for(this.expect(x.braceL);!this.eat(x.braceR);){if(i)i=!1;else if(this.expect(x.comma),this.afterTrailingComma(x.braceR))break;var s=this.startNode();s.local=this.parseIdent(!0),s.exported=this.eatContextual("as")?this.parseIdent(!0):s.local,this.checkExport(t,s.exported.name,s.exported.start),e.push(this.finishNode(s,"ExportSpecifier"))}return e},W.parseImport=function(t){return this.next(),this.type===x.string?(t.specifiers=G,t.source=this.parseExprAtom()):(t.specifiers=this.parseImportSpecifiers(),this.expectContextual("from"),t.source=this.type===x.string?this.parseExprAtom():this.unexpected()),this.semicolon(),this.finishNode(t,"ImportDeclaration")},W.parseImportSpecifiers=function(){var t=[],e=!0;if(this.type===x.name){var i=this.startNode();if(i.local=this.parseIdent(),this.checkLVal(i.local,2),t.push(this.finishNode(i,"ImportDefaultSpecifier")),!this.eat(x.comma))return t}if(this.type===x.star){var s=this.startNode();return this.next(),this.expectContextual("as"),s.local=this.parseIdent(),this.checkLVal(s.local,2),t.push(this.finishNode(s,"ImportNamespaceSpecifier")),t}for(this.expect(x.braceL);!this.eat(x.braceR);){if(e)e=!1;else if(this.expect(x.comma),this.afterTrailingComma(x.braceR))break;var r=this.startNode();r.imported=this.parseIdent(!0),this.eatContextual("as")?r.local=this.parseIdent():(this.checkUnreserved(r.imported),r.local=r.imported),this.checkLVal(r.local,2),t.push(this.finishNode(r,"ImportSpecifier"))}return t},W.adaptDirectivePrologue=function(t){for(var e=0;e<t.length&&this.isDirectiveCandidate(t[e]);++e)t[e].directive=t[e].expression.raw.slice(1,-1)},W.isDirectiveCandidate=function(t){return"ExpressionStatement"===t.type&&"Literal"===t.expression.type&&"string"==typeof t.expression.value&&('"'===this.input[t.start]||"'"===this.input[t.start])};var $=M.prototype;$.toAssignable=function(t,e,i){if(this.options.ecmaVersion>=6&&t)switch(t.type){case"Identifier":this.inAsync&&"await"===t.name&&this.raise(t.start,"Cannot use 'await' as identifier inside an async function");break;case"ObjectPattern":case"ArrayPattern":case"RestElement":break;case"ObjectExpression":t.type="ObjectPattern",i&&this.checkPatternErrors(i,!0);for(var s=0,r=t.properties;s<r.length;s+=1){var n=r[s];this.toAssignable(n,e),"RestElement"!==n.type||"ArrayPattern"!==n.argument.type&&"ObjectPattern"!==n.argument.type||this.raise(n.argument.start,"Unexpected token")}break;case"Property":"init"!==t.kind&&this.raise(t.key.start,"Object pattern can't contain getter or setter"),this.toAssignable(t.value,e);break;case"ArrayExpression":t.type="ArrayPattern",i&&this.checkPatternErrors(i,!0),this.toAssignableList(t.elements,e);break;case"SpreadElement":t.type="RestElement",this.toAssignable(t.argument,e),"AssignmentPattern"===t.argument.type&&this.raise(t.argument.start,"Rest elements cannot have a default value");break;case"AssignmentExpression":"="!==t.operator&&this.raise(t.left.end,"Only '=' operator can be used for specifying default value."),t.type="AssignmentPattern",delete t.operator,this.toAssignable(t.left,e);case"AssignmentPattern":break;case"ParenthesizedExpression":this.toAssignable(t.expression,e,i);break;case"MemberExpression":if(!e)break;default:this.raise(t.start,"Assigning to rvalue")}else i&&this.checkPatternErrors(i,!0);return t},$.toAssignableList=function(t,e){for(var i=t.length,s=0;s<i;s++){var r=t[s];r&&this.toAssignable(r,e)}if(i){var n=t[i-1];6===this.options.ecmaVersion&&e&&n&&"RestElement"===n.type&&"Identifier"!==n.argument.type&&this.unexpected(n.argument.start)}return t},$.parseSpread=function(t){var e=this.startNode();return this.next(),e.argument=this.parseMaybeAssign(!1,t),this.finishNode(e,"SpreadElement")},$.parseRestBinding=function(){var t=this.startNode();return this.next(),6===this.options.ecmaVersion&&this.type!==x.name&&this.unexpected(),t.argument=this.parseBindingAtom(),this.finishNode(t,"RestElement")},$.parseBindingAtom=function(){if(this.options.ecmaVersion>=6)switch(this.type){case x.bracketL:var t=this.startNode();return this.next(),t.elements=this.parseBindingList(x.bracketR,!0,!0),this.finishNode(t,"ArrayPattern");case x.braceL:return this.parseObj(!0)}return this.parseIdent()},$.parseBindingList=function(t,e,i){for(var s=[],r=!0;!this.eat(t);)if(r?r=!1:this.expect(x.comma),e&&this.type===x.comma)s.push(null);else{if(i&&this.afterTrailingComma(t))break;if(this.type===x.ellipsis){var n=this.parseRestBinding();this.parseBindingListItem(n),s.push(n),this.type===x.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.expect(t);break}var a=this.parseMaybeDefault(this.start,this.startLoc);this.parseBindingListItem(a),s.push(a)}return s},$.parseBindingListItem=function(t){return t},$.parseMaybeDefault=function(t,e,i){if(i=i||this.parseBindingAtom(),this.options.ecmaVersion<6||!this.eat(x.eq))return i;var s=this.startNodeAt(t,e);return s.left=i,s.right=this.parseMaybeAssign(),this.finishNode(s,"AssignmentPattern")},$.checkLVal=function(t,e,i){switch(void 0===e&&(e=0),t.type){case"Identifier":this.strict&&this.reservedWordsStrictBind.test(t.name)&&this.raiseRecoverable(t.start,(e?"Binding ":"Assigning to ")+t.name+" in strict mode"),i&&(I(i,t.name)&&this.raiseRecoverable(t.start,"Argument name clash"),i[t.name]=!0),0!==e&&5!==e&&this.declareName(t.name,e,t.start);break;case"MemberExpression":e&&this.raiseRecoverable(t.start,"Binding member expression");break;case"ObjectPattern":for(var s=0,r=t.properties;s<r.length;s+=1)this.checkLVal(r[s],e,i);break;case"Property":this.checkLVal(t.value,e,i);break;case"ArrayPattern":for(var n=0,a=t.elements;n<a.length;n+=1){var o=a[n];o&&this.checkLVal(o,e,i)}break;case"AssignmentPattern":this.checkLVal(t.left,e,i);break;case"RestElement":this.checkLVal(t.argument,e,i);break;case"ParenthesizedExpression":this.checkLVal(t.expression,e,i);break;default:this.raise(t.start,(e?"Binding":"Assigning to")+" rvalue")}};var Y=M.prototype;Y.checkPropClash=function(t,e,i){if(!(this.options.ecmaVersion>=9&&"SpreadElement"===t.type||this.options.ecmaVersion>=6&&(t.computed||t.method||t.shorthand))){var s,r=t.key;switch(r.type){case"Identifier":s=r.name;break;case"Literal":s=String(r.value);break;default:return}var n=t.kind;if(this.options.ecmaVersion>=6)"__proto__"===s&&"init"===n&&(e.proto&&(i&&i.doubleProto<0?i.doubleProto=r.start:this.raiseRecoverable(r.start,"Redefinition of __proto__ property")),e.proto=!0);else{var a=e[s="$"+s];a?("init"===n?this.strict&&a.init||a.get||a.set:a.init||a[n])&&this.raiseRecoverable(r.start,"Redefinition of property"):a=e[s]={init:!1,get:!1,set:!1},a[n]=!0}}},Y.parseExpression=function(t,e){var i=this.start,s=this.startLoc,r=this.parseMaybeAssign(t,e);if(this.type===x.comma){var n=this.startNodeAt(i,s);for(n.expressions=[r];this.eat(x.comma);)n.expressions.push(this.parseMaybeAssign(t,e));return this.finishNode(n,"SequenceExpression")}return r},Y.parseMaybeAssign=function(t,e,i){if(this.isContextual("yield")){if(this.inGenerator)return this.parseYield(t);this.exprAllowed=!1}var s=!1,r=-1,n=-1,a=-1;e?(r=e.parenthesizedAssign,n=e.trailingComma,a=e.shorthandAssign,e.parenthesizedAssign=e.trailingComma=e.shorthandAssign=-1):(e=new J,s=!0);var o=this.start,p=this.startLoc;this.type!==x.parenL&&this.type!==x.name||(this.potentialArrowAt=this.start);var h=this.parseMaybeConditional(t,e);if(i&&(h=i.call(this,h,o,p)),this.type.isAssign){var c=this.startNodeAt(o,p);return c.operator=this.value,c.left=this.type===x.eq?this.toAssignable(h,!1,e):h,s||J.call(e),e.shorthandAssign=-1,this.checkLVal(h),this.next(),c.right=this.parseMaybeAssign(t),this.finishNode(c,"AssignmentExpression")}return s&&this.checkExpressionErrors(e,!0),r>-1&&(e.parenthesizedAssign=r),n>-1&&(e.trailingComma=n),a>-1&&(e.shorthandAssign=a),h},Y.parseMaybeConditional=function(t,e){var i=this.start,s=this.startLoc,r=this.parseExprOps(t,e);if(this.checkExpressionErrors(e))return r;if(this.eat(x.question)){var n=this.startNodeAt(i,s);return n.test=r,n.consequent=this.parseMaybeAssign(),this.expect(x.colon),n.alternate=this.parseMaybeAssign(t),this.finishNode(n,"ConditionalExpression")}return r},Y.parseExprOps=function(t,e){var i=this.start,s=this.startLoc,r=this.parseMaybeUnary(e,!1);return this.checkExpressionErrors(e)?r:r.start===i&&"ArrowFunctionExpression"===r.type?r:this.parseExprOp(r,i,s,-1,t)},Y.parseExprOp=function(t,e,i,s,r){var n=this.type.binop;if(null!=n&&(!r||this.type!==x._in)&&n>s){var a=this.type===x.logicalOR||this.type===x.logicalAND,o=this.value;this.next();var p=this.start,h=this.startLoc,c=this.parseExprOp(this.parseMaybeUnary(null,!1),p,h,n,r),l=this.buildBinary(e,i,t,c,o,a);return this.parseExprOp(l,e,i,s,r)}return t},Y.buildBinary=function(t,e,i,s,r,n){var a=this.startNodeAt(t,e);return a.left=i,a.operator=r,a.right=s,this.finishNode(a,n?"LogicalExpression":"BinaryExpression")},Y.parseMaybeUnary=function(t,e){var i,s=this.start,r=this.startLoc;if(this.isContextual("await")&&(this.inAsync||!this.inFunction&&this.options.allowAwaitOutsideFunction))i=this.parseAwait(),e=!0;else if(this.type.prefix){var n=this.startNode(),a=this.type===x.incDec;n.operator=this.value,n.prefix=!0,this.next(),n.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(t,!0),a?this.checkLVal(n.argument):this.strict&&"delete"===n.operator&&"Identifier"===n.argument.type?this.raiseRecoverable(n.start,"Deleting local variable in strict mode"):e=!0,i=this.finishNode(n,a?"UpdateExpression":"UnaryExpression")}else{if(i=this.parseExprSubscripts(t),this.checkExpressionErrors(t))return i;for(;this.type.postfix&&!this.canInsertSemicolon();){var o=this.startNodeAt(s,r);o.operator=this.value,o.prefix=!1,o.argument=i,this.checkLVal(i),this.next(),i=this.finishNode(o,"UpdateExpression")}}return!e&&this.eat(x.starstar)?this.buildBinary(s,r,i,this.parseMaybeUnary(null,!1),"**",!1):i},Y.parseExprSubscripts=function(t){var e=this.start,i=this.startLoc,s=this.parseExprAtom(t),r="ArrowFunctionExpression"===s.type&&")"!==this.input.slice(this.lastTokStart,this.lastTokEnd);if(this.checkExpressionErrors(t)||r)return s;var n=this.parseSubscripts(s,e,i);return t&&"MemberExpression"===n.type&&(t.parenthesizedAssign>=n.start&&(t.parenthesizedAssign=-1),t.parenthesizedBind>=n.start&&(t.parenthesizedBind=-1)),n},Y.parseSubscripts=function(t,e,i,s){for(var r=this.options.ecmaVersion>=8&&"Identifier"===t.type&&"async"===t.name&&this.lastTokEnd===t.end&&!this.canInsertSemicolon()&&"async"===this.input.slice(t.start,t.end);;){var n=this.parseSubscript(t,e,i,s,r);if(n===t||"ArrowFunctionExpression"===n.type)return n;t=n}},Y.parseSubscript=function(t,e,i,s,r){var n=this.eat(x.bracketL);if(n||this.eat(x.dot)){var a=this.startNodeAt(e,i);a.object=t,a.property=n?this.parseExpression():this.parseIdent(!0),a.computed=!!n,n&&this.expect(x.bracketR),t=this.finishNode(a,"MemberExpression")}else if(!s&&this.eat(x.parenL)){var o=new J,p=this.yieldPos,h=this.awaitPos,c=this.awaitIdentPos;this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0;var l=this.parseExprList(x.parenR,this.options.ecmaVersion>=8,!1,o);if(r&&!this.canInsertSemicolon()&&this.eat(x.arrow))return this.checkPatternErrors(o,!1),this.checkYieldAwaitInDefaultParams(),this.awaitIdentPos>0&&this.raise(this.awaitIdentPos,"Cannot use 'await' as identifier inside an async function"),this.yieldPos=p,this.awaitPos=h,this.awaitIdentPos=c,this.parseArrowExpression(this.startNodeAt(e,i),l,!0);this.checkExpressionErrors(o,!0),this.yieldPos=p||this.yieldPos,this.awaitPos=h||this.awaitPos,this.awaitIdentPos=c||this.awaitIdentPos;var u=this.startNodeAt(e,i);u.callee=t,u.arguments=l,t=this.finishNode(u,"CallExpression")}else if(this.type===x.backQuote){var d=this.startNodeAt(e,i);d.tag=t,d.quasi=this.parseTemplate({isTagged:!0}),t=this.finishNode(d,"TaggedTemplateExpression")}return t},Y.parseExprAtom=function(t){this.type===x.slash&&this.readRegexp();var e,i=this.potentialArrowAt===this.start;switch(this.type){case x._super:return this.allowSuper||this.raise(this.start,"'super' keyword outside a method"),e=this.startNode(),this.next(),this.type!==x.parenL||this.allowDirectSuper||this.raise(e.start,"super() call outside constructor of a subclass"),this.type!==x.dot&&this.type!==x.bracketL&&this.type!==x.parenL&&this.unexpected(),this.finishNode(e,"Super");case x._this:return e=this.startNode(),this.next(),this.finishNode(e,"ThisExpression");case x.name:var s=this.start,r=this.startLoc,n=this.containsEsc,a=this.parseIdent(!1);if(this.options.ecmaVersion>=8&&!n&&"async"===a.name&&!this.canInsertSemicolon()&&this.eat(x._function))return this.parseFunction(this.startNodeAt(s,r),0,!1,!0);if(i&&!this.canInsertSemicolon()){if(this.eat(x.arrow))return this.parseArrowExpression(this.startNodeAt(s,r),[a],!1);if(this.options.ecmaVersion>=8&&"async"===a.name&&this.type===x.name&&!n)return a=this.parseIdent(!1),!this.canInsertSemicolon()&&this.eat(x.arrow)||this.unexpected(),this.parseArrowExpression(this.startNodeAt(s,r),[a],!0)}return a;case x.regexp:var o=this.value;return(e=this.parseLiteral(o.value)).regex={pattern:o.pattern,flags:o.flags},e;case x.num:case x.string:return this.parseLiteral(this.value);case x._null:case x._true:case x._false:return(e=this.startNode()).value=this.type===x._null?null:this.type===x._true,e.raw=this.type.keyword,this.next(),this.finishNode(e,"Literal");case x.parenL:var p=this.start,h=this.parseParenAndDistinguishExpression(i);return t&&(t.parenthesizedAssign<0&&!this.isSimpleAssignTarget(h)&&(t.parenthesizedAssign=p),t.parenthesizedBind<0&&(t.parenthesizedBind=p)),h;case x.bracketL:return e=this.startNode(),this.next(),e.elements=this.parseExprList(x.bracketR,!0,!0,t),this.finishNode(e,"ArrayExpression");case x.braceL:return this.parseObj(!1,t);case x._function:return e=this.startNode(),this.next(),this.parseFunction(e,0);case x._class:return this.parseClass(this.startNode(),!1);case x._new:return this.parseNew();case x.backQuote:return this.parseTemplate();default:this.unexpected()}},Y.parseLiteral=function(t){var e=this.startNode();return e.value=t,e.raw=this.input.slice(this.start,this.end),this.next(),this.finishNode(e,"Literal")},Y.parseParenExpression=function(){this.expect(x.parenL);var t=this.parseExpression();return this.expect(x.parenR),t},Y.parseParenAndDistinguishExpression=function(t){var e,i=this.start,s=this.startLoc,r=this.options.ecmaVersion>=8;if(this.options.ecmaVersion>=6){this.next();var n,a=this.start,o=this.startLoc,p=[],h=!0,c=!1,l=new J,u=this.yieldPos,d=this.awaitPos;for(this.yieldPos=0,this.awaitPos=0;this.type!==x.parenR;){if(h?h=!1:this.expect(x.comma),r&&this.afterTrailingComma(x.parenR,!0)){c=!0;break}if(this.type===x.ellipsis){n=this.start,p.push(this.parseParenItem(this.parseRestBinding())),this.type===x.comma&&this.raise(this.start,"Comma is not permitted after the rest element");break}p.push(this.parseMaybeAssign(!1,l,this.parseParenItem))}var f=this.start,m=this.startLoc;if(this.expect(x.parenR),t&&!this.canInsertSemicolon()&&this.eat(x.arrow))return this.checkPatternErrors(l,!1),this.checkYieldAwaitInDefaultParams(),this.yieldPos=u,this.awaitPos=d,this.parseParenArrowList(i,s,p);p.length&&!c||this.unexpected(this.lastTokStart),n&&this.unexpected(n),this.checkExpressionErrors(l,!0),this.yieldPos=u||this.yieldPos,this.awaitPos=d||this.awaitPos,p.length>1?((e=this.startNodeAt(a,o)).expressions=p,this.finishNodeAt(e,"SequenceExpression",f,m)):e=p[0]}else e=this.parseParenExpression();if(this.options.preserveParens){var g=this.startNodeAt(i,s);return g.expression=e,this.finishNode(g,"ParenthesizedExpression")}return e},Y.parseParenItem=function(t){return t},Y.parseParenArrowList=function(t,e,i){return this.parseArrowExpression(this.startNodeAt(t,e),i)};var Z=[];Y.parseNew=function(){var t=this.startNode(),e=this.parseIdent(!0);if(this.options.ecmaVersion>=6&&this.eat(x.dot)){t.meta=e;var i=this.containsEsc;return t.property=this.parseIdent(!0),("target"!==t.property.name||i)&&this.raiseRecoverable(t.property.start,"The only valid meta property for new is new.target"),this.inNonArrowFunction()||this.raiseRecoverable(t.start,"new.target can only be used in functions"),this.finishNode(t,"MetaProperty")}var s=this.start,r=this.startLoc;return t.callee=this.parseSubscripts(this.parseExprAtom(),s,r,!0),t.arguments=this.eat(x.parenL)?this.parseExprList(x.parenR,this.options.ecmaVersion>=8,!1):Z,this.finishNode(t,"NewExpression")},Y.parseTemplateElement=function(t){var e=t.isTagged,i=this.startNode();return this.type===x.invalidTemplate?(e||this.raiseRecoverable(this.start,"Bad escape sequence in untagged template literal"),i.value={raw:this.value,cooked:null}):i.value={raw:this.input.slice(this.start,this.end).replace(/\r\n?/g,"\n"),cooked:this.value},this.next(),i.tail=this.type===x.backQuote,this.finishNode(i,"TemplateElement")},Y.parseTemplate=function(t){void 0===t&&(t={});var e=t.isTagged;void 0===e&&(e=!1);var i=this.startNode();this.next(),i.expressions=[];var s=this.parseTemplateElement({isTagged:e});for(i.quasis=[s];!s.tail;)this.type===x.eof&&this.raise(this.pos,"Unterminated template literal"),this.expect(x.dollarBraceL),i.expressions.push(this.parseExpression()),this.expect(x.braceR),i.quasis.push(s=this.parseTemplateElement({isTagged:e}));return this.next(),this.finishNode(i,"TemplateLiteral")},Y.isAsyncProp=function(t){return!t.computed&&"Identifier"===t.key.type&&"async"===t.key.name&&(this.type===x.name||this.type===x.num||this.type===x.string||this.type===x.bracketL||this.type.keyword||this.options.ecmaVersion>=9&&this.type===x.star)&&!b.test(this.input.slice(this.lastTokEnd,this.start))},Y.parseObj=function(t,e){var i=this.startNode(),s=!0,r={};for(i.properties=[],this.next();!this.eat(x.braceR);){if(s)s=!1;else if(this.expect(x.comma),this.afterTrailingComma(x.braceR))break;var n=this.parseProperty(t,e);t||this.checkPropClash(n,r,e),i.properties.push(n)}return this.finishNode(i,t?"ObjectPattern":"ObjectExpression")},Y.parseProperty=function(t,e){var i,s,r,n,a=this.startNode();if(this.options.ecmaVersion>=9&&this.eat(x.ellipsis))return t?(a.argument=this.parseIdent(!1),this.type===x.comma&&this.raise(this.start,"Comma is not permitted after the rest element"),this.finishNode(a,"RestElement")):(this.type===x.parenL&&e&&(e.parenthesizedAssign<0&&(e.parenthesizedAssign=this.start),e.parenthesizedBind<0&&(e.parenthesizedBind=this.start)),a.argument=this.parseMaybeAssign(!1,e),this.type===x.comma&&e&&e.trailingComma<0&&(e.trailingComma=this.start),this.finishNode(a,"SpreadElement"));this.options.ecmaVersion>=6&&(a.method=!1,a.shorthand=!1,(t||e)&&(r=this.start,n=this.startLoc),t||(i=this.eat(x.star)));var o=this.containsEsc;return this.parsePropertyName(a),!t&&!o&&this.options.ecmaVersion>=8&&!i&&this.isAsyncProp(a)?(s=!0,i=this.options.ecmaVersion>=9&&this.eat(x.star),this.parsePropertyName(a,e)):s=!1,this.parsePropertyValue(a,t,i,s,r,n,e,o),this.finishNode(a,"Property")},Y.parsePropertyValue=function(t,e,i,s,r,n,a,o){(i||s)&&this.type===x.colon&&this.unexpected(),this.eat(x.colon)?(t.value=e?this.parseMaybeDefault(this.start,this.startLoc):this.parseMaybeAssign(!1,a),t.kind="init"):this.options.ecmaVersion>=6&&this.type===x.parenL?(e&&this.unexpected(),t.kind="init",t.method=!0,t.value=this.parseMethod(i,s)):e||o||!(this.options.ecmaVersion>=5)||t.computed||"Identifier"!==t.key.type||"get"!==t.key.name&&"set"!==t.key.name||this.type===x.comma||this.type===x.braceR?this.options.ecmaVersion>=6&&!t.computed&&"Identifier"===t.key.type?((i||s)&&this.unexpected(),this.checkUnreserved(t.key),"await"!==t.key.name||this.awaitIdentPos||(this.awaitIdentPos=r),t.kind="init",e?t.value=this.parseMaybeDefault(r,n,t.key):this.type===x.eq&&a?(a.shorthandAssign<0&&(a.shorthandAssign=this.start),t.value=this.parseMaybeDefault(r,n,t.key)):t.value=t.key,t.shorthand=!0):this.unexpected():((i||s)&&this.unexpected(),t.kind=t.key.name,this.parsePropertyName(t),t.value=this.parseMethod(!1),t.value.params.length!==("get"===t.kind?0:1)?this.raiseRecoverable(t.value.start,"get"===t.kind?"getter should have no params":"setter should have exactly one param"):"set"===t.kind&&"RestElement"===t.value.params[0].type&&this.raiseRecoverable(t.value.params[0].start,"Setter cannot use rest params"))},Y.parsePropertyName=function(t){if(this.options.ecmaVersion>=6){if(this.eat(x.bracketL))return t.computed=!0,t.key=this.parseMaybeAssign(),this.expect(x.bracketR),t.key;t.computed=!1}return t.key=this.type===x.num||this.type===x.string?this.parseExprAtom():this.parseIdent(!0)},Y.initFunction=function(t){t.id=null,this.options.ecmaVersion>=6&&(t.generator=t.expression=!1),this.options.ecmaVersion>=8&&(t.async=!1)},Y.parseMethod=function(t,e,i){var s=this.startNode(),r=this.yieldPos,n=this.awaitPos,a=this.awaitIdentPos;return this.initFunction(s),this.options.ecmaVersion>=6&&(s.generator=t),this.options.ecmaVersion>=8&&(s.async=!!e),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,this.enterScope(64|F(e,s.generator)|(i?128:0)),this.expect(x.parenL),s.params=this.parseBindingList(x.parenR,!1,this.options.ecmaVersion>=8),this.checkYieldAwaitInDefaultParams(),this.parseFunctionBody(s,!1,!0),this.yieldPos=r,this.awaitPos=n,this.awaitIdentPos=a,this.finishNode(s,"FunctionExpression")},Y.parseArrowExpression=function(t,e,i){var s=this.yieldPos,r=this.awaitPos,n=this.awaitIdentPos;return this.enterScope(16|F(i,!1)),this.initFunction(t),this.options.ecmaVersion>=8&&(t.async=!!i),this.yieldPos=0,this.awaitPos=0,this.awaitIdentPos=0,t.params=this.toAssignableList(e,!0),this.parseFunctionBody(t,!0,!1),this.yieldPos=s,this.awaitPos=r,this.awaitIdentPos=n,this.finishNode(t,"ArrowFunctionExpression")},Y.parseFunctionBody=function(t,e,i){var s=this.strict,r=!1;if(e&&this.type!==x.braceL)t.body=this.parseMaybeAssign(),t.expression=!0,this.checkParams(t,!1);else{var n=this.options.ecmaVersion>=7&&!this.isSimpleParamList(t.params);s&&!n||(r=this.strictDirective(this.end))&&n&&this.raiseRecoverable(t.start,"Illegal 'use strict' directive in function with non-simple parameter list");var a=this.labels;this.labels=[],r&&(this.strict=!0),this.checkParams(t,!s&&!r&&!e&&!i&&this.isSimpleParamList(t.params)),t.body=this.parseBlock(!1),t.expression=!1,this.adaptDirectivePrologue(t.body.body),this.labels=a}this.exitScope(),this.strict&&t.id&&this.checkLVal(t.id,5),this.strict=s},Y.isSimpleParamList=function(t){for(var e=0,i=t;e<i.length;e+=1)if("Identifier"!==i[e].type)return!1;return!0},Y.checkParams=function(t,e){for(var i={},s=0,r=t.params;s<r.length;s+=1)this.checkLVal(r[s],1,e?null:i)},Y.parseExprList=function(t,e,i,s){for(var r=[],n=!0;!this.eat(t);){if(n)n=!1;else if(this.expect(x.comma),e&&this.afterTrailingComma(t))break;var a=void 0;i&&this.type===x.comma?a=null:this.type===x.ellipsis?(a=this.parseSpread(s),s&&this.type===x.comma&&s.trailingComma<0&&(s.trailingComma=this.start)):a=this.parseMaybeAssign(!1,s),r.push(a)}return r},Y.checkUnreserved=function(t){var e=t.start,i=t.end,s=t.name;this.inGenerator&&"yield"===s&&this.raiseRecoverable(e,"Cannot use 'yield' as identifier inside a generator"),this.inAsync&&"await"===s&&this.raiseRecoverable(e,"Cannot use 'await' as identifier inside an async function"),this.keywords.test(s)&&this.raise(e,"Unexpected keyword '"+s+"'"),this.options.ecmaVersion<6&&-1!==this.input.slice(e,i).indexOf("\\")||(this.strict?this.reservedWordsStrict:this.reservedWords).test(s)&&(this.inAsync||"await"!==s||this.raiseRecoverable(e,"Cannot use keyword 'await' outside an async function"),this.raiseRecoverable(e,"The keyword '"+s+"' is reserved"))},Y.parseIdent=function(t,e){var i=this.startNode();return t&&"never"===this.options.allowReserved&&(t=!1),this.type===x.name?i.name=this.value:this.type.keyword?(i.name=this.type.keyword,"class"!==i.name&&"function"!==i.name||this.lastTokEnd===this.lastTokStart+1&&46===this.input.charCodeAt(this.lastTokStart)||this.context.pop()):this.unexpected(),this.next(),this.finishNode(i,"Identifier"),t||(this.checkUnreserved(i),"await"!==i.name||this.awaitIdentPos||(this.awaitIdentPos=i.start)),i},Y.parseYield=function(t){this.yieldPos||(this.yieldPos=this.start);var e=this.startNode();return this.next(),this.type===x.semi||this.canInsertSemicolon()||this.type!==x.star&&!this.type.startsExpr?(e.delegate=!1,e.argument=null):(e.delegate=this.eat(x.star),e.argument=this.parseMaybeAssign(t)),this.finishNode(e,"YieldExpression")},Y.parseAwait=function(){this.awaitPos||(this.awaitPos=this.start);var t=this.startNode();return this.next(),t.argument=this.parseMaybeUnary(null,!0),this.finishNode(t,"AwaitExpression")};var tt=M.prototype;tt.raise=function(t,e){var i=R(this.input,t),s=new SyntaxError(e+=" ("+i.line+":"+i.column+")");throw s.pos=t,s.loc=i,s.raisedAt=this.pos,s},tt.raiseRecoverable=tt.raise,tt.curPosition=function(){if(this.options.locations)return new P(this.curLine,this.pos-this.lineStart)};var et=M.prototype,it=function(t){this.flags=t,this.var=[],this.lexical=[],this.functions=[]};et.enterScope=function(t){this.scopeStack.push(new it(t))},et.exitScope=function(){this.scopeStack.pop()},et.treatFunctionsAsVarInScope=function(t){return t.flags&j||!this.inModule&&1&t.flags},et.declareName=function(t,e,i){var s=!1;if(2===e){var r=this.currentScope();s=r.lexical.indexOf(t)>-1||r.functions.indexOf(t)>-1||r.var.indexOf(t)>-1,r.lexical.push(t),this.inModule&&1&r.flags&&delete this.undefinedExports[t]}else if(4===e)this.currentScope().lexical.push(t);else if(3===e){var n=this.currentScope();s=this.treatFunctionsAsVar?n.lexical.indexOf(t)>-1:n.lexical.indexOf(t)>-1||n.var.indexOf(t)>-1,n.functions.push(t)}else for(var a=this.scopeStack.length-1;a>=0;--a){var o=this.scopeStack[a];if(o.lexical.indexOf(t)>-1&&!(32&o.flags&&o.lexical[0]===t)||!this.treatFunctionsAsVarInScope(o)&&o.functions.indexOf(t)>-1){s=!0;break}if(o.var.push(t),this.inModule&&1&o.flags&&delete this.undefinedExports[t],o.flags&V)break}s&&this.raiseRecoverable(i,"Identifier '"+t+"' has already been declared")},et.checkLocalExport=function(t){-1===this.scopeStack[0].lexical.indexOf(t.name)&&-1===this.scopeStack[0].var.indexOf(t.name)&&(this.undefinedExports[t.name]=t)},et.currentScope=function(){return this.scopeStack[this.scopeStack.length-1]},et.currentVarScope=function(){for(var t=this.scopeStack.length-1;;t--){var e=this.scopeStack[t];if(e.flags&V)return e}},et.currentThisScope=function(){for(var t=this.scopeStack.length-1;;t--){var e=this.scopeStack[t];if(e.flags&V&&!(16&e.flags))return e}};var st=function(t,e,i){this.type="",this.start=e,this.end=0,t.options.locations&&(this.loc=new T(t,i)),t.options.directSourceFile&&(this.sourceFile=t.options.directSourceFile),t.options.ranges&&(this.range=[e,0])},rt=M.prototype;function nt(t,e,i,s){return t.type=e,t.end=i,this.options.locations&&(t.loc.end=s),this.options.ranges&&(t.range[1]=i),t}rt.startNode=function(){return new st(this,this.start,this.startLoc)},rt.startNodeAt=function(t,e){return new st(this,t,e)},rt.finishNode=function(t,e){return nt.call(this,t,e,this.lastTokEnd,this.lastTokEndLoc)},rt.finishNodeAt=function(t,e,i,s){return nt.call(this,t,e,i,s)};var at=function(t,e,i,s,r){this.token=t,this.isExpr=!!e,this.preserveSpace=!!i,this.override=s,this.generator=!!r},ot={b_stat:new at("{",!1),b_expr:new at("{",!0),b_tmpl:new at("${",!1),p_stat:new at("(",!1),p_expr:new at("(",!0),q_tmpl:new at("`",!0,!0,function(t){return t.tryReadTemplateToken()}),f_stat:new at("function",!1),f_expr:new at("function",!0),f_expr_gen:new at("function",!0,!1,null,!0),f_gen:new at("function",!1,!1,null,!0)},pt=M.prototype;pt.initialContext=function(){return[ot.b_stat]},pt.braceIsBlock=function(t){var e=this.curContext();return e===ot.f_expr||e===ot.f_stat||(t!==x.colon||e!==ot.b_stat&&e!==ot.b_expr?t===x._return||t===x.name&&this.exprAllowed?b.test(this.input.slice(this.lastTokEnd,this.start)):t===x._else||t===x.semi||t===x.eof||t===x.parenR||t===x.arrow||(t===x.braceL?e===ot.b_stat:t!==x._var&&t!==x._const&&t!==x.name&&!this.exprAllowed):!e.isExpr)},pt.inGeneratorContext=function(){for(var t=this.context.length-1;t>=1;t--){var e=this.context[t];if("function"===e.token)return e.generator}return!1},pt.updateContext=function(t){var e,i=this.type;i.keyword&&t===x.dot?this.exprAllowed=!1:(e=i.updateContext)?e.call(this,t):this.exprAllowed=i.beforeExpr},x.parenR.updateContext=x.braceR.updateContext=function(){if(1!==this.context.length){var t=this.context.pop();t===ot.b_stat&&"function"===this.curContext().token&&(t=this.context.pop()),this.exprAllowed=!t.isExpr}else this.exprAllowed=!0},x.braceL.updateContext=function(t){this.context.push(this.braceIsBlock(t)?ot.b_stat:ot.b_expr),this.exprAllowed=!0},x.dollarBraceL.updateContext=function(){this.context.push(ot.b_tmpl),this.exprAllowed=!0},x.parenL.updateContext=function(t){this.context.push(t===x._if||t===x._for||t===x._with||t===x._while?ot.p_stat:ot.p_expr),this.exprAllowed=!0},x.incDec.updateContext=function(){},x._function.updateContext=x._class.updateContext=function(t){!t.beforeExpr||t===x.semi||t===x._else||t===x._return&&b.test(this.input.slice(this.lastTokEnd,this.start))||(t===x.colon||t===x.braceL)&&this.curContext()===ot.b_stat?this.context.push(ot.f_stat):this.context.push(ot.f_expr),this.exprAllowed=!1},x.backQuote.updateContext=function(){this.curContext()===ot.q_tmpl?this.context.pop():this.context.push(ot.q_tmpl),this.exprAllowed=!1},x.star.updateContext=function(t){if(t===x._function){var e=this.context.length-1;this.context[e]=this.context[e]===ot.f_expr?ot.f_expr_gen:ot.f_gen}this.exprAllowed=!0},x.name.updateContext=function(t){var e=!1;this.options.ecmaVersion>=6&&t!==x.dot&&("of"===this.value&&!this.exprAllowed||"yield"===this.value&&this.inGeneratorContext())&&(e=!0),this.exprAllowed=e};var ht="ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",ct={9:ht,10:ht+" Extended_Pictographic"},lt="Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",ut="Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",dt={9:ut,10:ut+" Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd"},ft={};function mt(t){var e=ft[t]={binary:N(ct[t]+" "+lt),nonBinary:{General_Category:N(lt),Script:N(dt[t])}};e.nonBinary.Script_Extensions=e.nonBinary.Script,e.nonBinary.gc=e.nonBinary.General_Category,e.nonBinary.sc=e.nonBinary.Script,e.nonBinary.scx=e.nonBinary.Script_Extensions}mt(9),mt(10);var gt=M.prototype,yt=function(t){this.parser=t,this.validFlags="gim"+(t.options.ecmaVersion>=6?"uy":"")+(t.options.ecmaVersion>=9?"s":""),this.unicodeProperties=ft[t.options.ecmaVersion>=10?10:t.options.ecmaVersion],this.source="",this.flags="",this.start=0,this.switchU=!1,this.switchN=!1,this.pos=0,this.lastIntValue=0,this.lastStringValue="",this.lastAssertionIsQuantifiable=!1,this.numCapturingParens=0,this.maxBackReference=0,this.groupNames=[],this.backReferenceNames=[]};function vt(t){return t<=65535?String.fromCharCode(t):(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t)))}function xt(t){return 36===t||t>=40&&t<=43||46===t||63===t||t>=91&&t<=94||t>=123&&t<=125}function bt(t){return t>=65&&t<=90||t>=97&&t<=122}function _t(t){return bt(t)||95===t}function St(t){return _t(t)||kt(t)}function kt(t){return t>=48&&t<=57}function wt(t){return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}function Et(t){return t>=65&&t<=70?t-65+10:t>=97&&t<=102?t-97+10:t-48}function Ct(t){return t>=48&&t<=55}yt.prototype.reset=function(t,e,i){var s=-1!==i.indexOf("u");this.start=0|t,this.source=e+"",this.flags=i,this.switchU=s&&this.parser.options.ecmaVersion>=6,this.switchN=s&&this.parser.options.ecmaVersion>=9},yt.prototype.raise=function(t){this.parser.raiseRecoverable(this.start,"Invalid regular expression: /"+this.source+"/: "+t)},yt.prototype.at=function(t){var e=this.source,i=e.length;if(t>=i)return-1;var s=e.charCodeAt(t);return!this.switchU||s<=55295||s>=57344||t+1>=i?s:(s<<10)+e.charCodeAt(t+1)-56613888},yt.prototype.nextIndex=function(t){var e=this.source,i=e.length;if(t>=i)return i;var s=e.charCodeAt(t);return!this.switchU||s<=55295||s>=57344||t+1>=i?t+1:t+2},yt.prototype.current=function(){return this.at(this.pos)},yt.prototype.lookahead=function(){return this.at(this.nextIndex(this.pos))},yt.prototype.advance=function(){this.pos=this.nextIndex(this.pos)},yt.prototype.eat=function(t){return this.current()===t&&(this.advance(),!0)},gt.validateRegExpFlags=function(t){for(var e=t.validFlags,i=t.flags,s=0;s<i.length;s++){var r=i.charAt(s);-1===e.indexOf(r)&&this.raise(t.start,"Invalid regular expression flag"),i.indexOf(r,s+1)>-1&&this.raise(t.start,"Duplicate regular expression flag")}},gt.validateRegExpPattern=function(t){this.regexp_pattern(t),!t.switchN&&this.options.ecmaVersion>=9&&t.groupNames.length>0&&(t.switchN=!0,this.regexp_pattern(t))},gt.regexp_pattern=function(t){t.pos=0,t.lastIntValue=0,t.lastStringValue="",t.lastAssertionIsQuantifiable=!1,t.numCapturingParens=0,t.maxBackReference=0,t.groupNames.length=0,t.backReferenceNames.length=0,this.regexp_disjunction(t),t.pos!==t.source.length&&(t.eat(41)&&t.raise("Unmatched ')'"),(t.eat(93)||t.eat(125))&&t.raise("Lone quantifier brackets")),t.maxBackReference>t.numCapturingParens&&t.raise("Invalid escape");for(var e=0,i=t.backReferenceNames;e<i.length;e+=1)-1===t.groupNames.indexOf(i[e])&&t.raise("Invalid named capture referenced")},gt.regexp_disjunction=function(t){for(this.regexp_alternative(t);t.eat(124);)this.regexp_alternative(t);this.regexp_eatQuantifier(t,!0)&&t.raise("Nothing to repeat"),t.eat(123)&&t.raise("Lone quantifier brackets")},gt.regexp_alternative=function(t){for(;t.pos<t.source.length&&this.regexp_eatTerm(t););},gt.regexp_eatTerm=function(t){return this.regexp_eatAssertion(t)?(t.lastAssertionIsQuantifiable&&this.regexp_eatQuantifier(t)&&t.switchU&&t.raise("Invalid quantifier"),!0):!(t.switchU?!this.regexp_eatAtom(t):!this.regexp_eatExtendedAtom(t))&&(this.regexp_eatQuantifier(t),!0)},gt.regexp_eatAssertion=function(t){var e=t.pos;if(t.lastAssertionIsQuantifiable=!1,t.eat(94)||t.eat(36))return!0;if(t.eat(92)){if(t.eat(66)||t.eat(98))return!0;t.pos=e}if(t.eat(40)&&t.eat(63)){var i=!1;if(this.options.ecmaVersion>=9&&(i=t.eat(60)),t.eat(61)||t.eat(33))return this.regexp_disjunction(t),t.eat(41)||t.raise("Unterminated group"),t.lastAssertionIsQuantifiable=!i,!0}return t.pos=e,!1},gt.regexp_eatQuantifier=function(t,e){return void 0===e&&(e=!1),!!this.regexp_eatQuantifierPrefix(t,e)&&(t.eat(63),!0)},gt.regexp_eatQuantifierPrefix=function(t,e){return t.eat(42)||t.eat(43)||t.eat(63)||this.regexp_eatBracedQuantifier(t,e)},gt.regexp_eatBracedQuantifier=function(t,e){var i=t.pos;if(t.eat(123)){var s=0,r=-1;if(this.regexp_eatDecimalDigits(t)&&(s=t.lastIntValue,t.eat(44)&&this.regexp_eatDecimalDigits(t)&&(r=t.lastIntValue),t.eat(125)))return-1!==r&&r<s&&!e&&t.raise("numbers out of order in {} quantifier"),!0;t.switchU&&!e&&t.raise("Incomplete quantifier"),t.pos=i}return!1},gt.regexp_eatAtom=function(t){return this.regexp_eatPatternCharacters(t)||t.eat(46)||this.regexp_eatReverseSolidusAtomEscape(t)||this.regexp_eatCharacterClass(t)||this.regexp_eatUncapturingGroup(t)||this.regexp_eatCapturingGroup(t)},gt.regexp_eatReverseSolidusAtomEscape=function(t){var e=t.pos;if(t.eat(92)){if(this.regexp_eatAtomEscape(t))return!0;t.pos=e}return!1},gt.regexp_eatUncapturingGroup=function(t){var e=t.pos;if(t.eat(40)){if(t.eat(63)&&t.eat(58)){if(this.regexp_disjunction(t),t.eat(41))return!0;t.raise("Unterminated group")}t.pos=e}return!1},gt.regexp_eatCapturingGroup=function(t){if(t.eat(40)){if(this.options.ecmaVersion>=9?this.regexp_groupSpecifier(t):63===t.current()&&t.raise("Invalid group"),this.regexp_disjunction(t),t.eat(41))return t.numCapturingParens+=1,!0;t.raise("Unterminated group")}return!1},gt.regexp_eatExtendedAtom=function(t){return t.eat(46)||this.regexp_eatReverseSolidusAtomEscape(t)||this.regexp_eatCharacterClass(t)||this.regexp_eatUncapturingGroup(t)||this.regexp_eatCapturingGroup(t)||this.regexp_eatInvalidBracedQuantifier(t)||this.regexp_eatExtendedPatternCharacter(t)},gt.regexp_eatInvalidBracedQuantifier=function(t){return this.regexp_eatBracedQuantifier(t,!0)&&t.raise("Nothing to repeat"),!1},gt.regexp_eatSyntaxCharacter=function(t){var e=t.current();return!!xt(e)&&(t.lastIntValue=e,t.advance(),!0)},gt.regexp_eatPatternCharacters=function(t){for(var e=t.pos,i=0;-1!==(i=t.current())&&!xt(i);)t.advance();return t.pos!==e},gt.regexp_eatExtendedPatternCharacter=function(t){var e=t.current();return!(-1===e||36===e||e>=40&&e<=43||46===e||63===e||91===e||94===e||124===e||(t.advance(),0))},gt.regexp_groupSpecifier=function(t){if(t.eat(63)){if(this.regexp_eatGroupName(t))return-1!==t.groupNames.indexOf(t.lastStringValue)&&t.raise("Duplicate capture group name"),void t.groupNames.push(t.lastStringValue);t.raise("Invalid group")}},gt.regexp_eatGroupName=function(t){if(t.lastStringValue="",t.eat(60)){if(this.regexp_eatRegExpIdentifierName(t)&&t.eat(62))return!0;t.raise("Invalid capture group name")}return!1},gt.regexp_eatRegExpIdentifierName=function(t){if(t.lastStringValue="",this.regexp_eatRegExpIdentifierStart(t)){for(t.lastStringValue+=vt(t.lastIntValue);this.regexp_eatRegExpIdentifierPart(t);)t.lastStringValue+=vt(t.lastIntValue);return!0}return!1},gt.regexp_eatRegExpIdentifierStart=function(t){var e=t.pos,i=t.current();return t.advance(),92===i&&this.regexp_eatRegExpUnicodeEscapeSequence(t)&&(i=t.lastIntValue),function(t){return l(t,!0)||36===t||95===t}(i)?(t.lastIntValue=i,!0):(t.pos=e,!1)},gt.regexp_eatRegExpIdentifierPart=function(t){var e=t.pos,i=t.current();return t.advance(),92===i&&this.regexp_eatRegExpUnicodeEscapeSequence(t)&&(i=t.lastIntValue),function(t){return u(t,!0)||36===t||95===t||8204===t||8205===t}(i)?(t.lastIntValue=i,!0):(t.pos=e,!1)},gt.regexp_eatAtomEscape=function(t){return!!(this.regexp_eatBackReference(t)||this.regexp_eatCharacterClassEscape(t)||this.regexp_eatCharacterEscape(t)||t.switchN&&this.regexp_eatKGroupName(t))||(t.switchU&&(99===t.current()&&t.raise("Invalid unicode escape"),t.raise("Invalid escape")),!1)},gt.regexp_eatBackReference=function(t){var e=t.pos;if(this.regexp_eatDecimalEscape(t)){var i=t.lastIntValue;if(t.switchU)return i>t.maxBackReference&&(t.maxBackReference=i),!0;if(i<=t.numCapturingParens)return!0;t.pos=e}return!1},gt.regexp_eatKGroupName=function(t){if(t.eat(107)){if(this.regexp_eatGroupName(t))return t.backReferenceNames.push(t.lastStringValue),!0;t.raise("Invalid named reference")}return!1},gt.regexp_eatCharacterEscape=function(t){return this.regexp_eatControlEscape(t)||this.regexp_eatCControlLetter(t)||this.regexp_eatZero(t)||this.regexp_eatHexEscapeSequence(t)||this.regexp_eatRegExpUnicodeEscapeSequence(t)||!t.switchU&&this.regexp_eatLegacyOctalEscapeSequence(t)||this.regexp_eatIdentityEscape(t)},gt.regexp_eatCControlLetter=function(t){var e=t.pos;if(t.eat(99)){if(this.regexp_eatControlLetter(t))return!0;t.pos=e}return!1},gt.regexp_eatZero=function(t){return 48===t.current()&&!kt(t.lookahead())&&(t.lastIntValue=0,t.advance(),!0)},gt.regexp_eatControlEscape=function(t){var e=t.current();return 116===e?(t.lastIntValue=9,t.advance(),!0):110===e?(t.lastIntValue=10,t.advance(),!0):118===e?(t.lastIntValue=11,t.advance(),!0):102===e?(t.lastIntValue=12,t.advance(),!0):114===e&&(t.lastIntValue=13,t.advance(),!0)},gt.regexp_eatControlLetter=function(t){var e=t.current();return!!bt(e)&&(t.lastIntValue=e%32,t.advance(),!0)},gt.regexp_eatRegExpUnicodeEscapeSequence=function(t){var e,i=t.pos;if(t.eat(117)){if(this.regexp_eatFixedHexDigits(t,4)){var s=t.lastIntValue;if(t.switchU&&s>=55296&&s<=56319){var r=t.pos;if(t.eat(92)&&t.eat(117)&&this.regexp_eatFixedHexDigits(t,4)){var n=t.lastIntValue;if(n>=56320&&n<=57343)return t.lastIntValue=1024*(s-55296)+(n-56320)+65536,!0}t.pos=r,t.lastIntValue=s}return!0}if(t.switchU&&t.eat(123)&&this.regexp_eatHexDigits(t)&&t.eat(125)&&(e=t.lastIntValue)>=0&&e<=1114111)return!0;t.switchU&&t.raise("Invalid unicode escape"),t.pos=i}return!1},gt.regexp_eatIdentityEscape=function(t){if(t.switchU)return!!this.regexp_eatSyntaxCharacter(t)||!!t.eat(47)&&(t.lastIntValue=47,!0);var e=t.current();return!(99===e||t.switchN&&107===e||(t.lastIntValue=e,t.advance(),0))},gt.regexp_eatDecimalEscape=function(t){t.lastIntValue=0;var e=t.current();if(e>=49&&e<=57){do{t.lastIntValue=10*t.lastIntValue+(e-48),t.advance()}while((e=t.current())>=48&&e<=57);return!0}return!1},gt.regexp_eatCharacterClassEscape=function(t){var e=t.current();if(function(t){return 100===t||68===t||115===t||83===t||119===t||87===t}(e))return t.lastIntValue=-1,t.advance(),!0;if(t.switchU&&this.options.ecmaVersion>=9&&(80===e||112===e)){if(t.lastIntValue=-1,t.advance(),t.eat(123)&&this.regexp_eatUnicodePropertyValueExpression(t)&&t.eat(125))return!0;t.raise("Invalid property name")}return!1},gt.regexp_eatUnicodePropertyValueExpression=function(t){var e=t.pos;if(this.regexp_eatUnicodePropertyName(t)&&t.eat(61)){var i=t.lastStringValue;if(this.regexp_eatUnicodePropertyValue(t))return this.regexp_validateUnicodePropertyNameAndValue(t,i,t.lastStringValue),!0}return t.pos=e,!!this.regexp_eatLoneUnicodePropertyNameOrValue(t)&&(this.regexp_validateUnicodePropertyNameOrValue(t,t.lastStringValue),!0)},gt.regexp_validateUnicodePropertyNameAndValue=function(t,e,i){I(t.unicodeProperties.nonBinary,e)||t.raise("Invalid property name"),t.unicodeProperties.nonBinary[e].test(i)||t.raise("Invalid property value")},gt.regexp_validateUnicodePropertyNameOrValue=function(t,e){t.unicodeProperties.binary.test(e)||t.raise("Invalid property name")},gt.regexp_eatUnicodePropertyName=function(t){var e=0;for(t.lastStringValue="";_t(e=t.current());)t.lastStringValue+=vt(e),t.advance();return""!==t.lastStringValue},gt.regexp_eatUnicodePropertyValue=function(t){var e=0;for(t.lastStringValue="";St(e=t.current());)t.lastStringValue+=vt(e),t.advance();return""!==t.lastStringValue},gt.regexp_eatLoneUnicodePropertyNameOrValue=function(t){return this.regexp_eatUnicodePropertyValue(t)},gt.regexp_eatCharacterClass=function(t){if(t.eat(91)){if(t.eat(94),this.regexp_classRanges(t),t.eat(93))return!0;t.raise("Unterminated character class")}return!1},gt.regexp_classRanges=function(t){for(;this.regexp_eatClassAtom(t);){var e=t.lastIntValue;if(t.eat(45)&&this.regexp_eatClassAtom(t)){var i=t.lastIntValue;!t.switchU||-1!==e&&-1!==i||t.raise("Invalid character class"),-1!==e&&-1!==i&&e>i&&t.raise("Range out of order in character class")}}},gt.regexp_eatClassAtom=function(t){var e=t.pos;if(t.eat(92)){if(this.regexp_eatClassEscape(t))return!0;if(t.switchU){var i=t.current();(99===i||Ct(i))&&t.raise("Invalid class escape"),t.raise("Invalid escape")}t.pos=e}var s=t.current();return 93!==s&&(t.lastIntValue=s,t.advance(),!0)},gt.regexp_eatClassEscape=function(t){var e=t.pos;if(t.eat(98))return t.lastIntValue=8,!0;if(t.switchU&&t.eat(45))return t.lastIntValue=45,!0;if(!t.switchU&&t.eat(99)){if(this.regexp_eatClassControlLetter(t))return!0;t.pos=e}return this.regexp_eatCharacterClassEscape(t)||this.regexp_eatCharacterEscape(t)},gt.regexp_eatClassControlLetter=function(t){var e=t.current();return!(!kt(e)&&95!==e||(t.lastIntValue=e%32,t.advance(),0))},gt.regexp_eatHexEscapeSequence=function(t){var e=t.pos;if(t.eat(120)){if(this.regexp_eatFixedHexDigits(t,2))return!0;t.switchU&&t.raise("Invalid escape"),t.pos=e}return!1},gt.regexp_eatDecimalDigits=function(t){var e=t.pos,i=0;for(t.lastIntValue=0;kt(i=t.current());)t.lastIntValue=10*t.lastIntValue+(i-48),t.advance();return t.pos!==e},gt.regexp_eatHexDigits=function(t){var e=t.pos,i=0;for(t.lastIntValue=0;wt(i=t.current());)t.lastIntValue=16*t.lastIntValue+Et(i),t.advance();return t.pos!==e},gt.regexp_eatLegacyOctalEscapeSequence=function(t){if(this.regexp_eatOctalDigit(t)){var e=t.lastIntValue;if(this.regexp_eatOctalDigit(t)){var i=t.lastIntValue;t.lastIntValue=e<=3&&this.regexp_eatOctalDigit(t)?64*e+8*i+t.lastIntValue:8*e+i}else t.lastIntValue=e;return!0}return!1},gt.regexp_eatOctalDigit=function(t){var e=t.current();return Ct(e)?(t.lastIntValue=e-48,t.advance(),!0):(t.lastIntValue=0,!1)},gt.regexp_eatFixedHexDigits=function(t,e){var i=t.pos;t.lastIntValue=0;for(var s=0;s<e;++s){var r=t.current();if(!wt(r))return t.pos=i,!1;t.lastIntValue=16*t.lastIntValue+Et(r),t.advance()}return!0};var At=function(t){this.type=t.type,this.value=t.value,this.start=t.start,this.end=t.end,t.options.locations&&(this.loc=new T(t,t.startLoc,t.endLoc)),t.options.ranges&&(this.range=[t.start,t.end])},It=M.prototype;function Lt(t){return t<=65535?String.fromCharCode(t):(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t)))}It.next=function(){this.options.onToken&&this.options.onToken(new At(this)),this.lastTokEnd=this.end,this.lastTokStart=this.start,this.lastTokEndLoc=this.endLoc,this.lastTokStartLoc=this.startLoc,this.nextToken()},It.getToken=function(){return this.next(),new At(this)},"undefined"!=typeof Symbol&&(It[Symbol.iterator]=function(){var t=this;return{next:function(){var e=t.getToken();return{done:e.type===x.eof,value:e}}}}),It.curContext=function(){return this.context[this.context.length-1]},It.nextToken=function(){var t=this.curContext();return t&&t.preserveSpace||this.skipSpace(),this.start=this.pos,this.options.locations&&(this.startLoc=this.curPosition()),this.pos>=this.input.length?this.finishToken(x.eof):t.override?t.override(this):void this.readToken(this.fullCharCodeAtPos())},It.readToken=function(t){return l(t,this.options.ecmaVersion>=6)||92===t?this.readWord():this.getTokenFromCode(t)},It.fullCharCodeAtPos=function(){var t=this.input.charCodeAt(this.pos);return t<=55295||t>=57344?t:(t<<10)+this.input.charCodeAt(this.pos+1)-56613888},It.skipBlockComment=function(){var t,e=this.options.onComment&&this.curPosition(),i=this.pos,s=this.input.indexOf("*/",this.pos+=2);if(-1===s&&this.raise(this.pos-2,"Unterminated comment"),this.pos=s+2,this.options.locations)for(_.lastIndex=i;(t=_.exec(this.input))&&t.index<this.pos;)++this.curLine,this.lineStart=t.index+t[0].length;this.options.onComment&&this.options.onComment(!0,this.input.slice(i+2,s),i,this.pos,e,this.curPosition())},It.skipLineComment=function(t){for(var e=this.pos,i=this.options.onComment&&this.curPosition(),s=this.input.charCodeAt(this.pos+=t);this.pos<this.input.length&&!S(s);)s=this.input.charCodeAt(++this.pos);this.options.onComment&&this.options.onComment(!1,this.input.slice(e+t,this.pos),e,this.pos,i,this.curPosition())},It.skipSpace=function(){t:for(;this.pos<this.input.length;){var t=this.input.charCodeAt(this.pos);switch(t){case 32:case 160:++this.pos;break;case 13:10===this.input.charCodeAt(this.pos+1)&&++this.pos;case 10:case 8232:case 8233:++this.pos,this.options.locations&&(++this.curLine,this.lineStart=this.pos);break;case 47:switch(this.input.charCodeAt(this.pos+1)){case 42:this.skipBlockComment();break;case 47:this.skipLineComment(2);break;default:break t}break;default:if(!(t>8&&t<14||t>=5760&&k.test(String.fromCharCode(t))))break t;++this.pos}}},It.finishToken=function(t,e){this.end=this.pos,this.options.locations&&(this.endLoc=this.curPosition());var i=this.type;this.type=t,this.value=e,this.updateContext(i)},It.readToken_dot=function(){var t=this.input.charCodeAt(this.pos+1);if(t>=48&&t<=57)return this.readNumber(!0);var e=this.input.charCodeAt(this.pos+2);return this.options.ecmaVersion>=6&&46===t&&46===e?(this.pos+=3,this.finishToken(x.ellipsis)):(++this.pos,this.finishToken(x.dot))},It.readToken_slash=function(){var t=this.input.charCodeAt(this.pos+1);return this.exprAllowed?(++this.pos,this.readRegexp()):61===t?this.finishOp(x.assign,2):this.finishOp(x.slash,1)},It.readToken_mult_modulo_exp=function(t){var e=this.input.charCodeAt(this.pos+1),i=1,s=42===t?x.star:x.modulo;return this.options.ecmaVersion>=7&&42===t&&42===e&&(++i,s=x.starstar,e=this.input.charCodeAt(this.pos+2)),61===e?this.finishOp(x.assign,i+1):this.finishOp(s,i)},It.readToken_pipe_amp=function(t){var e=this.input.charCodeAt(this.pos+1);return e===t?this.finishOp(124===t?x.logicalOR:x.logicalAND,2):61===e?this.finishOp(x.assign,2):this.finishOp(124===t?x.bitwiseOR:x.bitwiseAND,1)},It.readToken_caret=function(){return 61===this.input.charCodeAt(this.pos+1)?this.finishOp(x.assign,2):this.finishOp(x.bitwiseXOR,1)},It.readToken_plus_min=function(t){var e=this.input.charCodeAt(this.pos+1);return e===t?45!==e||this.inModule||62!==this.input.charCodeAt(this.pos+2)||0!==this.lastTokEnd&&!b.test(this.input.slice(this.lastTokEnd,this.pos))?this.finishOp(x.incDec,2):(this.skipLineComment(3),this.skipSpace(),this.nextToken()):61===e?this.finishOp(x.assign,2):this.finishOp(x.plusMin,1)},It.readToken_lt_gt=function(t){var e=this.input.charCodeAt(this.pos+1),i=1;return e===t?(i=62===t&&62===this.input.charCodeAt(this.pos+2)?3:2,61===this.input.charCodeAt(this.pos+i)?this.finishOp(x.assign,i+1):this.finishOp(x.bitShift,i)):33!==e||60!==t||this.inModule||45!==this.input.charCodeAt(this.pos+2)||45!==this.input.charCodeAt(this.pos+3)?(61===e&&(i=2),this.finishOp(x.relational,i)):(this.skipLineComment(4),this.skipSpace(),this.nextToken())},It.readToken_eq_excl=function(t){var e=this.input.charCodeAt(this.pos+1);return 61===e?this.finishOp(x.equality,61===this.input.charCodeAt(this.pos+2)?3:2):61===t&&62===e&&this.options.ecmaVersion>=6?(this.pos+=2,this.finishToken(x.arrow)):this.finishOp(61===t?x.eq:x.prefix,1)},It.getTokenFromCode=function(t){switch(t){case 46:return this.readToken_dot();case 40:return++this.pos,this.finishToken(x.parenL);case 41:return++this.pos,this.finishToken(x.parenR);case 59:return++this.pos,this.finishToken(x.semi);case 44:return++this.pos,this.finishToken(x.comma);case 91:return++this.pos,this.finishToken(x.bracketL);case 93:return++this.pos,this.finishToken(x.bracketR);case 123:return++this.pos,this.finishToken(x.braceL);case 125:return++this.pos,this.finishToken(x.braceR);case 58:return++this.pos,this.finishToken(x.colon);case 63:return++this.pos,this.finishToken(x.question);case 96:if(this.options.ecmaVersion<6)break;return++this.pos,this.finishToken(x.backQuote);case 48:var e=this.input.charCodeAt(this.pos+1);if(120===e||88===e)return this.readRadixNumber(16);if(this.options.ecmaVersion>=6){if(111===e||79===e)return this.readRadixNumber(8);if(98===e||66===e)return this.readRadixNumber(2)}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return this.readNumber(!1);case 34:case 39:return this.readString(t);case 47:return this.readToken_slash();case 37:case 42:return this.readToken_mult_modulo_exp(t);case 124:case 38:return this.readToken_pipe_amp(t);case 94:return this.readToken_caret();case 43:case 45:return this.readToken_plus_min(t);case 60:case 62:return this.readToken_lt_gt(t);case 61:case 33:return this.readToken_eq_excl(t);case 126:return this.finishOp(x.prefix,1)}this.raise(this.pos,"Unexpected character '"+Lt(t)+"'")},It.finishOp=function(t,e){var i=this.input.slice(this.pos,this.pos+e);return this.pos+=e,this.finishToken(t,i)},It.readRegexp=function(){for(var t,e,i=this.pos;;){this.pos>=this.input.length&&this.raise(i,"Unterminated regular expression");var s=this.input.charAt(this.pos);if(b.test(s)&&this.raise(i,"Unterminated regular expression"),t)t=!1;else{if("["===s)e=!0;else if("]"===s&&e)e=!1;else if("/"===s&&!e)break;t="\\"===s}++this.pos}var r=this.input.slice(i,this.pos);++this.pos;var n=this.pos,a=this.readWord1();this.containsEsc&&this.unexpected(n);var o=this.regexpState||(this.regexpState=new yt(this));o.reset(i,r,a),this.validateRegExpFlags(o),this.validateRegExpPattern(o);var p=null;try{p=new RegExp(r,a)}catch(t){}return this.finishToken(x.regexp,{pattern:r,flags:a,value:p})},It.readInt=function(t,e){for(var i=this.pos,s=0,r=0,n=null==e?Infinity:e;r<n;++r){var a,o=this.input.charCodeAt(this.pos);if((a=o>=97?o-97+10:o>=65?o-65+10:o>=48&&o<=57?o-48:Infinity)>=t)break;++this.pos,s=s*t+a}return this.pos===i||null!=e&&this.pos-i!==e?null:s},It.readRadixNumber=function(t){this.pos+=2;var e=this.readInt(t);return null==e&&this.raise(this.start+2,"Expected number in radix "+t),l(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number"),this.finishToken(x.num,e)},It.readNumber=function(t){var e=this.pos;t||null!==this.readInt(10)||this.raise(e,"Invalid number");var i=this.pos-e>=2&&48===this.input.charCodeAt(e);i&&this.strict&&this.raise(e,"Invalid number"),i&&/[89]/.test(this.input.slice(e,this.pos))&&(i=!1);var s=this.input.charCodeAt(this.pos);46!==s||i||(++this.pos,this.readInt(10),s=this.input.charCodeAt(this.pos)),69!==s&&101!==s||i||(43!==(s=this.input.charCodeAt(++this.pos))&&45!==s||++this.pos,null===this.readInt(10)&&this.raise(e,"Invalid number")),l(this.fullCharCodeAtPos())&&this.raise(this.pos,"Identifier directly after number");var r=this.input.slice(e,this.pos),n=i?parseInt(r,8):parseFloat(r);return this.finishToken(x.num,n)},It.readCodePoint=function(){var t;if(123===this.input.charCodeAt(this.pos)){this.options.ecmaVersion<6&&this.unexpected();var e=++this.pos;t=this.readHexChar(this.input.indexOf("}",this.pos)-this.pos),++this.pos,t>1114111&&this.invalidStringToken(e,"Code point out of bounds")}else t=this.readHexChar(4);return t},It.readString=function(t){for(var e="",i=++this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated string constant");var s=this.input.charCodeAt(this.pos);if(s===t)break;92===s?(e+=this.input.slice(i,this.pos),e+=this.readEscapedChar(!1),i=this.pos):(S(s,this.options.ecmaVersion>=10)&&this.raise(this.start,"Unterminated string constant"),++this.pos)}return e+=this.input.slice(i,this.pos++),this.finishToken(x.string,e)};var Nt={};It.tryReadTemplateToken=function(){this.inTemplateElement=!0;try{this.readTmplToken()}catch(t){if(t!==Nt)throw t;this.readInvalidTemplateToken()}this.inTemplateElement=!1},It.invalidStringToken=function(t,e){if(this.inTemplateElement&&this.options.ecmaVersion>=9)throw Nt;this.raise(t,e)},It.readTmplToken=function(){for(var t="",e=this.pos;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated template");var i=this.input.charCodeAt(this.pos);if(96===i||36===i&&123===this.input.charCodeAt(this.pos+1))return this.pos!==this.start||this.type!==x.template&&this.type!==x.invalidTemplate?(t+=this.input.slice(e,this.pos),this.finishToken(x.template,t)):36===i?(this.pos+=2,this.finishToken(x.dollarBraceL)):(++this.pos,this.finishToken(x.backQuote));if(92===i)t+=this.input.slice(e,this.pos),t+=this.readEscapedChar(!0),e=this.pos;else if(S(i)){switch(t+=this.input.slice(e,this.pos),++this.pos,i){case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:t+="\n";break;default:t+=String.fromCharCode(i)}this.options.locations&&(++this.curLine,this.lineStart=this.pos),e=this.pos}else++this.pos}},It.readInvalidTemplateToken=function(){for(;this.pos<this.input.length;this.pos++)switch(this.input[this.pos]){case"\\":++this.pos;break;case"$":if("{"!==this.input[this.pos+1])break;case"`":return this.finishToken(x.invalidTemplate,this.input.slice(this.start,this.pos))}this.raise(this.start,"Unterminated template")},It.readEscapedChar=function(t){var e=this.input.charCodeAt(++this.pos);switch(++this.pos,e){case 110:return"\n";case 114:return"\r";case 120:return String.fromCharCode(this.readHexChar(2));case 117:return Lt(this.readCodePoint());case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 13:10===this.input.charCodeAt(this.pos)&&++this.pos;case 10:return this.options.locations&&(this.lineStart=this.pos,++this.curLine),"";default:if(e>=48&&e<=55){var i=this.input.substr(this.pos-1,3).match(/^[0-7]+/)[0],s=parseInt(i,8);return s>255&&(i=i.slice(0,-1),s=parseInt(i,8)),this.pos+=i.length-1,e=this.input.charCodeAt(this.pos),"0"===i&&56!==e&&57!==e||!this.strict&&!t||this.invalidStringToken(this.pos-1-i.length,t?"Octal literal in template string":"Octal literal in strict mode"),String.fromCharCode(s)}return S(e)?"":String.fromCharCode(e)}},It.readHexChar=function(t){var e=this.pos,i=this.readInt(16,t);return null===i&&this.invalidStringToken(e,"Bad character escape sequence"),i},It.readWord1=function(){this.containsEsc=!1;for(var t="",e=!0,i=this.pos,s=this.options.ecmaVersion>=6;this.pos<this.input.length;){var r=this.fullCharCodeAtPos();if(u(r,s))this.pos+=r<=65535?1:2;else{if(92!==r)break;this.containsEsc=!0,t+=this.input.slice(i,this.pos);var n=this.pos;117!==this.input.charCodeAt(++this.pos)&&this.invalidStringToken(this.pos,"Expecting Unicode escape sequence \\uXXXX"),++this.pos;var a=this.readCodePoint();(e?l:u)(a,s)||this.invalidStringToken(n,"Invalid Unicode escape"),t+=Lt(a),i=this.pos}e=!1}return t+this.input.slice(i,this.pos)},It.readWord=function(){var t=this.readWord1(),e=x.name;return this.keywords.test(t)&&(this.containsEsc&&this.raiseRecoverable(this.start,"Escape sequence in keyword "+t),e=y[t]),this.finishToken(e,t)};var Pt={quot:'"',amp:"&",apos:"'",lt:"<",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"},Tt={version:"6.1.1",parse:function(t,e){return M.parse(t,e)},parseExpressionAt:function(t,e,i){return M.parseExpressionAt(t,e,i)},tokenizer:function(t,e){return M.tokenizer(t,e)},Parser:M,defaultOptions:O,Position:P,SourceLocation:T,getLineInfo:R,Node:st,TokenType:d,tokTypes:x,keywordTypes:y,TokContext:at,tokContexts:ot,isIdentifierChar:u,isIdentifierStart:l,Token:At,isNewLine:S,lineBreak:b,lineBreakG:_,nonASCIIwhitespace:k};const Rt=/^[\da-fA-F]+$/,Ot=/^\d+$/,jt=Tt.tokTypes,Vt=Tt.TokContext,Dt=Tt.tokContexts,Bt=Tt.TokenType,Ft=Tt.isNewLine,Mt=Tt.isIdentifierStart,Ut=Tt.isIdentifierChar,qt=new Vt("<tag",!1),Xt=new Vt("</tag",!1),Jt=new Vt("<tag>...</tag>",!0,!0),Wt={jsxName:new Bt("jsxName"),jsxText:new Bt("jsxText",{beforeExpr:!0}),jsxTagStart:new Bt("jsxTagStart"),jsxTagEnd:new Bt("jsxTagEnd")};function zt(t){return t?"JSXIdentifier"===t.type?t.name:"JSXNamespacedName"===t.type?t.namespace.name+":"+t.name.name:"JSXMemberExpression"===t.type?zt(t.object)+"."+zt(t.property):void 0:t}Wt.jsxTagStart.updateContext=function(){this.context.push(Jt),this.context.push(qt),this.exprAllowed=!1},Wt.jsxTagEnd.updateContext=function(t){let e=this.context.pop();e===qt&&t===jt.slash||e===Xt?(this.context.pop(),this.exprAllowed=this.curContext()===Jt):this.exprAllowed=!0};var Ht=function(t){return t=t||{},function(e){return function(t,e){return class extends e{jsx_readToken(){let t="",e=this.pos;for(;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated JSX contents");let i=this.input.charCodeAt(this.pos);switch(i){case 60:case 123:return this.pos===this.start?60===i&&this.exprAllowed?(++this.pos,this.finishToken(Wt.jsxTagStart)):this.getTokenFromCode(i):(t+=this.input.slice(e,this.pos),this.finishToken(Wt.jsxText,t));case 38:t+=this.input.slice(e,this.pos),t+=this.jsx_readEntity(),e=this.pos;break;default:Ft(i)?(t+=this.input.slice(e,this.pos),t+=this.jsx_readNewLine(!0),e=this.pos):++this.pos}}}jsx_readNewLine(t){let e,i=this.input.charCodeAt(this.pos);return++this.pos,13===i&&10===this.input.charCodeAt(this.pos)?(++this.pos,e=t?"\n":"\r\n"):e=String.fromCharCode(i),this.options.locations&&(++this.curLine,this.lineStart=this.pos),e}jsx_readString(t){let e="",i=++this.pos;for(;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated string constant");let s=this.input.charCodeAt(this.pos);if(s===t)break;38===s?(e+=this.input.slice(i,this.pos),e+=this.jsx_readEntity(),i=this.pos):Ft(s)?(e+=this.input.slice(i,this.pos),e+=this.jsx_readNewLine(!1),i=this.pos):++this.pos}return e+=this.input.slice(i,this.pos++),this.finishToken(jt.string,e)}jsx_readEntity(){let t,e="",i=0,s=this.input[this.pos];"&"!==s&&this.raise(this.pos,"Entity must start with an ampersand");let r=++this.pos;for(;this.pos<this.input.length&&i++<10;){if(";"===(s=this.input[this.pos++])){"#"===e[0]?"x"===e[1]?(e=e.substr(2),Rt.test(e)&&(t=String.fromCharCode(parseInt(e,16)))):(e=e.substr(1),Ot.test(e)&&(t=String.fromCharCode(parseInt(e,10)))):t=Pt[e];break}e+=s}return t||(this.pos=r,"&")}jsx_readWord(){let t,e=this.pos;do{t=this.input.charCodeAt(++this.pos)}while(Ut(t)||45===t);return this.finishToken(Wt.jsxName,this.input.slice(e,this.pos))}jsx_parseIdentifier(){let t=this.startNode();return this.type===Wt.jsxName?t.name=this.value:this.type.keyword?t.name=this.type.keyword:this.unexpected(),this.next(),this.finishNode(t,"JSXIdentifier")}jsx_parseNamespacedName(){let e=this.start,i=this.startLoc,s=this.jsx_parseIdentifier();if(!t.allowNamespaces||!this.eat(jt.colon))return s;var r=this.startNodeAt(e,i);return r.namespace=s,r.name=this.jsx_parseIdentifier(),this.finishNode(r,"JSXNamespacedName")}jsx_parseElementName(){if(this.type===Wt.jsxTagEnd)return"";let e=this.start,i=this.startLoc,s=this.jsx_parseNamespacedName();for(this.type!==jt.dot||"JSXNamespacedName"!==s.type||t.allowNamespacedObjects||this.unexpected();this.eat(jt.dot);){let t=this.startNodeAt(e,i);t.object=s,t.property=this.jsx_parseIdentifier(),s=this.finishNode(t,"JSXMemberExpression")}return s}jsx_parseAttributeValue(){switch(this.type){case jt.braceL:let t=this.jsx_parseExpressionContainer();return"JSXEmptyExpression"===t.expression.type&&this.raise(t.start,"JSX attributes must only be assigned a non-empty expression"),t;case Wt.jsxTagStart:case jt.string:return this.parseExprAtom();default:this.raise(this.start,"JSX value should be either an expression or a quoted JSX text")}}jsx_parseEmptyExpression(){let t=this.startNodeAt(this.lastTokEnd,this.lastTokEndLoc);return this.finishNodeAt(t,"JSXEmptyExpression",this.start,this.startLoc)}jsx_parseExpressionContainer(){let t=this.startNode();return this.next(),t.expression=this.type===jt.braceR?this.jsx_parseEmptyExpression():this.parseExpression(),this.expect(jt.braceR),this.finishNode(t,"JSXExpressionContainer")}jsx_parseAttribute(){let t=this.startNode();return this.eat(jt.braceL)?(this.expect(jt.ellipsis),t.argument=this.parseMaybeAssign(),this.expect(jt.braceR),this.finishNode(t,"JSXSpreadAttribute")):(t.name=this.jsx_parseNamespacedName(),t.value=this.eat(jt.eq)?this.jsx_parseAttributeValue():null,this.finishNode(t,"JSXAttribute"))}jsx_parseOpeningElementAt(t,e){let i=this.startNodeAt(t,e);i.attributes=[];let s=this.jsx_parseElementName();for(s&&(i.name=s);this.type!==jt.slash&&this.type!==Wt.jsxTagEnd;)i.attributes.push(this.jsx_parseAttribute());return i.selfClosing=this.eat(jt.slash),this.expect(Wt.jsxTagEnd),this.finishNode(i,s?"JSXOpeningElement":"JSXOpeningFragment")}jsx_parseClosingElementAt(t,e){let i=this.startNodeAt(t,e),s=this.jsx_parseElementName();return s&&(i.name=s),this.expect(Wt.jsxTagEnd),this.finishNode(i,s?"JSXClosingElement":"JSXClosingFragment")}jsx_parseElementAt(t,e){let i=this.startNodeAt(t,e),s=[],r=this.jsx_parseOpeningElementAt(t,e),n=null;if(!r.selfClosing){t:for(;;)switch(this.type){case Wt.jsxTagStart:if(t=this.start,e=this.startLoc,this.next(),this.eat(jt.slash)){n=this.jsx_parseClosingElementAt(t,e);break t}s.push(this.jsx_parseElementAt(t,e));break;case Wt.jsxText:s.push(this.parseExprAtom());break;case jt.braceL:s.push(this.jsx_parseExpressionContainer());break;default:this.unexpected()}zt(n.name)!==zt(r.name)&&this.raise(n.start,"Expected corresponding JSX closing tag for <"+zt(r.name)+">")}let a=r.name?"Element":"Fragment";return i["opening"+a]=r,i["closing"+a]=n,i.children=s,this.type===jt.relational&&"<"===this.value&&this.raise(this.start,"Adjacent JSX elements must be wrapped in an enclosing tag"),this.finishNode(i,"JSX"+a)}jsx_parseText(t){let e=this.parseLiteral(t);return e.type="JSXText",e}jsx_parseElement(){let t=this.start,e=this.startLoc;return this.next(),this.jsx_parseElementAt(t,e)}parseExprAtom(t){return this.type===Wt.jsxText?this.jsx_parseText(this.value):this.type===Wt.jsxTagStart?this.jsx_parseElement():super.parseExprAtom(t)}readToken(t){let e=this.curContext();if(e===Jt)return this.jsx_readToken();if(e===qt||e===Xt){if(Mt(t))return this.jsx_readWord();if(62==t)return++this.pos,this.finishToken(Wt.jsxTagEnd);if((34===t||39===t)&&e==qt)return this.jsx_readString(t)}return 60===t&&this.exprAllowed&&33!==this.input.charCodeAt(this.pos+1)?(++this.pos,this.finishToken(Wt.jsxTagStart)):super.readToken(t)}updateContext(t){if(this.type==jt.braceL){var e=this.curContext();e==qt?this.context.push(Dt.b_expr):e==Jt?this.context.push(Dt.b_tmpl):super.updateContext(t),this.exprAllowed=!0}else{if(this.type!==jt.slash||t!==Wt.jsxTagStart)return super.updateContext(t);this.context.length-=2,this.context.push(Xt),this.exprAllowed=!1}}}}({allowNamespaces:!1!==t.allowNamespaces,allowNamespacedObjects:!!t.allowNamespacedObjects},e)}};Ht.tokTypes=Wt;var Gt,Qt,Kt=(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.DynamicImportKey=void 0;var i=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),s=function t(e,i,s){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,i);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:t(n,i,s)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(s):void 0};e.default=function(t){return function(e){function n(){return function(t,e){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,t),i(n,[{key:"parseStatement",value:function(t,e,i){return this.type===Tt.tokTypes._import&&function(){return/^(\s|\/\/.*|\/\*[^]*?\*\/)*\(/.test(this.input.slice(this.pos))}.call(this)?this.parseExpressionStatement(this.startNode(),this.parseExpression()):s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"parseStatement",this).call(this,t,e,i)}},{key:"parseExprAtom",value:function(t){return this.type===Tt.tokTypes._import?function(){var t=this.startNode();return this.next(),this.type!==Tt.tokTypes.parenL&&this.unexpected(),this.finishNode(t,r)}.call(this):s(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"parseExprAtom",this).call(this,t)}}]),n}()};var r=e.DynamicImportKey="Import";Tt.tokTypes._import.startsExpr=!0}(Gt={exports:{}},Gt.exports),(Qt=Gt.exports)&&Qt.__esModule&&Object.prototype.hasOwnProperty.call(Qt,"default")?Qt.default:Qt);const $t=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,Yt=Tt.tokTypes;function Zt(t){if(this.eat(Yt.eq)){const e=this._inFieldValue;this._inFieldValue=!0,t.value=this.parseExpression(),this._inFieldValue=e}else t.value=null}function te(){const t=this.startNode();return t.name=this.value,this.next(),this.finishNode(t,"PrivateName"),"never"==this.options.allowReserved&&this.checkUnreserved(t),t}const ee=new(0,Tt.TokenType)("privateName");var ie="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function se(t){var e="";t=t<0?-t<<1|1:t<<1;do{var i=31&t;(t>>=5)>0&&(i|=32),e+=ie[i]}while(t>0);return e}var re=function(t,e,i){this.start=t,this.end=e,this.original=i,this.intro="",this.outro="",this.content=i,this.storeName=!1,this.edited=!1,Object.defineProperties(this,{previous:{writable:!0,value:null},next:{writable:!0,value:null}})};re.prototype.appendLeft=function(t){this.outro+=t},re.prototype.appendRight=function(t){this.intro=this.intro+t},re.prototype.clone=function(){var t=new re(this.start,this.end,this.original);return t.intro=this.intro,t.outro=this.outro,t.content=this.content,t.storeName=this.storeName,t.edited=this.edited,t},re.prototype.contains=function(t){return this.start<t&&t<this.end},re.prototype.eachNext=function(t){for(var e=this;e;)t(e),e=e.next},re.prototype.eachPrevious=function(t){for(var e=this;e;)t(e),e=e.previous},re.prototype.edit=function(t,e,i){return this.content=t,i||(this.intro="",this.outro=""),this.storeName=e,this.edited=!0,this},re.prototype.prependLeft=function(t){this.outro=t+this.outro},re.prototype.prependRight=function(t){this.intro=t+this.intro},re.prototype.split=function(t){var e=t-this.start,i=this.original.slice(0,e),s=this.original.slice(e);this.original=i;var r=new re(t,this.end,s);return r.outro=this.outro,this.outro="",this.end=t,this.edited?(r.edit("",!1),this.content=""):this.content=i,r.next=this.next,r.next&&(r.next.previous=r),r.previous=this,this.next=r,r},re.prototype.toString=function(){return this.intro+this.content+this.outro},re.prototype.trimEnd=function(t){if(this.outro=this.outro.replace(t,""),this.outro.length)return!0;var e=this.content.replace(t,"");return e.length?(e!==this.content&&this.split(this.start+e.length).edit("",void 0,!0),!0):(this.edit("",void 0,!0),this.intro=this.intro.replace(t,""),!!this.intro.length||void 0)},re.prototype.trimStart=function(t){if(this.intro=this.intro.replace(t,""),this.intro.length)return!0;var e=this.content.replace(t,"");return e.length?(e!==this.content&&(this.split(this.end-e.length),this.edit("",void 0,!0)),!0):(this.edit("",void 0,!0),this.outro=this.outro.replace(t,""),!!this.outro.length||void 0)};var ne=function(){throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.")};"undefined"!=typeof window&&"function"==typeof window.btoa?ne=function(t){return window.btoa(unescape(encodeURIComponent(t)))}:"function"==typeof Buffer&&(ne=function(t){return Buffer.from(t,"utf-8").toString("base64")});var ae=function(t){this.version=3,this.file=t.file,this.sources=t.sources,this.sourcesContent=t.sourcesContent,this.names=t.names,this.mappings=function(t){for(var e=0,i=0,s=0,r=0,n="",a=0;a<t.length;a++){var o=t[a];if(a>0&&(n+=";"),0!==o.length){for(var p=0,h=[],c=0,l=o;c<l.length;c++){var u=l[c],d=se(u[0]-p);p=u[0],u.length>1&&(d+=se(u[1]-e)+se(u[2]-i)+se(u[3]-s),e=u[1],i=u[2],s=u[3]),5===u.length&&(d+=se(u[4]-r),r=u[4]),h.push(d)}n+=h.join(",")}}return n}(t.mappings)};function oe(t){var e=t.split("\n"),i=e.filter(function(t){return/^\t+/.test(t)}),s=e.filter(function(t){return/^ {2,}/.test(t)});if(0===i.length&&0===s.length)return null;if(i.length>=s.length)return"\t";var r=s.reduce(function(t,e){var i=/^ +/.exec(e)[0].length;return Math.min(i,t)},Infinity);return new Array(r+1).join(" ")}function pe(t,e){var i=t.split(/[\/\\]/),s=e.split(/[\/\\]/);for(i.pop();i[0]===s[0];)i.shift(),s.shift();if(i.length)for(var r=i.length;r--;)i[r]="..";return i.concat(s).join("/")}ae.prototype.toString=function(){return JSON.stringify(this)},ae.prototype.toUrl=function(){return"data:application/json;charset=utf-8;base64,"+ne(this.toString())};var he=Object.prototype.toString;function ce(t){for(var e=t.split("\n"),i=[],s=0,r=0;s<e.length;s++)i.push(r),r+=e[s].length+1;return function(t){for(var e=0,s=i.length;e<s;){var r=e+s>>1;t<i[r]?s=r:e=r+1}var n=e-1;return{line:n,column:t-i[n]}}}var le=function(t){this.hires=t,this.generatedCodeLine=0,this.generatedCodeColumn=0,this.raw=[],this.rawSegments=this.raw[this.generatedCodeLine]=[],this.pending=null};le.prototype.addEdit=function(t,e,i,s){if(e.length){var r=[this.generatedCodeColumn,t,i.line,i.column];s>=0&&r.push(s),this.rawSegments.push(r)}else this.pending&&this.rawSegments.push(this.pending);this.advance(e),this.pending=null},le.prototype.addUneditedChunk=function(t,e,i,s,r){for(var n=e.start,a=!0;n<e.end;)(this.hires||a||r[n])&&this.rawSegments.push([this.generatedCodeColumn,t,s.line,s.column]),"\n"===i[n]?(s.line+=1,s.column=0,this.generatedCodeLine+=1,this.raw[this.generatedCodeLine]=this.rawSegments=[],this.generatedCodeColumn=0):(s.column+=1,this.generatedCodeColumn+=1),n+=1,a=!1;this.pending=[this.generatedCodeColumn,t,s.line,s.column]},le.prototype.advance=function(t){if(t){var e=t.split("\n");if(e.length>1){for(var i=0;i<e.length-1;i++)this.generatedCodeLine++,this.raw[this.generatedCodeLine]=this.rawSegments=[];this.generatedCodeColumn=0}this.generatedCodeColumn+=e[e.length-1].length}};var ue="\n",de={insertLeft:!1,insertRight:!1,storeName:!1},fe=function(t,e){void 0===e&&(e={});var i=new re(0,t.length,t);Object.defineProperties(this,{original:{writable:!0,value:t},outro:{writable:!0,value:""},intro:{writable:!0,value:""},firstChunk:{writable:!0,value:i},lastChunk:{writable:!0,value:i},lastSearchedChunk:{writable:!0,value:i},byStart:{writable:!0,value:{}},byEnd:{writable:!0,value:{}},filename:{writable:!0,value:e.filename},indentExclusionRanges:{writable:!0,value:e.indentExclusionRanges},sourcemapLocations:{writable:!0,value:{}},storedNames:{writable:!0,value:{}},indentStr:{writable:!0,value:oe(t)}}),this.byStart[0]=i,this.byEnd[t.length]=i};function me(t){var e={};return Object.keys(t).forEach(function(i){"parent"!==i&&"program"!==i&&"keys"!==i&&"__wrapped"!==i&&(e[i]=Array.isArray(t[i])?t[i].map(me):t[i]&&t[i].toJSON?t[i].toJSON():t[i])}),e}fe.prototype.addSourcemapLocation=function(t){this.sourcemapLocations[t]=!0},fe.prototype.append=function(t){if("string"!=typeof t)throw new TypeError("outro content must be a string");return this.outro+=t,this},fe.prototype.appendLeft=function(t,e){if("string"!=typeof e)throw new TypeError("inserted content must be a string");this._split(t);var i=this.byEnd[t];return i?i.appendLeft(e):this.intro+=e,this},fe.prototype.appendRight=function(t,e){if("string"!=typeof e)throw new TypeError("inserted content must be a string");this._split(t);var i=this.byStart[t];return i?i.appendRight(e):this.outro+=e,this},fe.prototype.clone=function(){for(var t=new fe(this.original,{filename:this.filename}),e=this.firstChunk,i=t.firstChunk=t.lastSearchedChunk=e.clone();e;){t.byStart[i.start]=i,t.byEnd[i.end]=i;var s=e.next,r=s&&s.clone();r&&(i.next=r,r.previous=i,i=r),e=s}return t.lastChunk=i,this.indentExclusionRanges&&(t.indentExclusionRanges=this.indentExclusionRanges.slice()),Object.keys(this.sourcemapLocations).forEach(function(e){t.sourcemapLocations[e]=!0}),t},fe.prototype.generateDecodedMap=function(t){var e=this;t=t||{};var i=Object.keys(this.storedNames),s=new le(t.hires),r=ce(this.original);return this.intro&&s.advance(this.intro),this.firstChunk.eachNext(function(t){var n=r(t.start);t.intro.length&&s.advance(t.intro),t.edited?s.addEdit(0,t.content,n,t.storeName?i.indexOf(t.original):-1):s.addUneditedChunk(0,t,e.original,n,e.sourcemapLocations),t.outro.length&&s.advance(t.outro)}),{file:t.file?t.file.split(/[\/\\]/).pop():null,sources:[t.source?pe(t.file||"",t.source):null],sourcesContent:t.includeContent?[this.original]:[null],names:i,mappings:s.raw}},fe.prototype.generateMap=function(t){return new ae(this.generateDecodedMap(t))},fe.prototype.getIndentString=function(){return null===this.indentStr?"\t":this.indentStr},fe.prototype.indent=function(t,e){var i=/^[^\r\n]/gm;if("[object Object]"===he.call(t)&&(e=t,t=void 0),""===(t=void 0!==t?t:this.indentStr||"\t"))return this;var s={};(e=e||{}).exclude&&("number"==typeof e.exclude[0]?[e.exclude]:e.exclude).forEach(function(t){for(var e=t[0];e<t[1];e+=1)s[e]=!0});var r=!1!==e.indentStart,n=function(e){return r?""+t+e:(r=!0,e)};this.intro=this.intro.replace(i,n);for(var a=0,o=this.firstChunk;o;){var p=o.end;if(o.edited)s[a]||(o.content=o.content.replace(i,n),o.content.length&&(r="\n"===o.content[o.content.length-1]));else for(a=o.start;a<p;){if(!s[a]){var h=this.original[a];"\n"===h?r=!0:"\r"!==h&&r&&(r=!1,a===o.start?o.prependRight(t):(this._splitChunk(o,a),(o=o.next).prependRight(t)))}a+=1}a=o.end,o=o.next}return this.outro=this.outro.replace(i,n),this},fe.prototype.insert=function(){throw new Error("magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)")},fe.prototype.insertLeft=function(t,e){return de.insertLeft||(console.warn("magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"),de.insertLeft=!0),this.appendLeft(t,e)},fe.prototype.insertRight=function(t,e){return de.insertRight||(console.warn("magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"),de.insertRight=!0),this.prependRight(t,e)},fe.prototype.move=function(t,e,i){if(i>=t&&i<=e)throw new Error("Cannot move a selection inside itself");this._split(t),this._split(e),this._split(i);var s=this.byStart[t],r=this.byEnd[e],n=s.previous,a=r.next,o=this.byStart[i];if(!o&&r===this.lastChunk)return this;var p=o?o.previous:this.lastChunk;return n&&(n.next=a),a&&(a.previous=n),p&&(p.next=s),o&&(o.previous=r),s.previous||(this.firstChunk=r.next),r.next||(this.lastChunk=s.previous,this.lastChunk.next=null),s.previous=p,r.next=o||null,p||(this.firstChunk=s),o||(this.lastChunk=r),this},fe.prototype.overwrite=function(t,e,i,s){if("string"!=typeof i)throw new TypeError("replacement content must be a string");for(;t<0;)t+=this.original.length;for(;e<0;)e+=this.original.length;if(e>this.original.length)throw new Error("end is out of bounds");if(t===e)throw new Error("Cannot overwrite a zero-length range – use appendLeft or prependRight instead");this._split(t),this._split(e),!0===s&&(de.storeName||(console.warn("The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"),de.storeName=!0),s={storeName:!0});var r=void 0!==s&&s.storeName,n=void 0!==s&&s.contentOnly;if(r){var a=this.original.slice(t,e);this.storedNames[a]=!0}var o=this.byStart[t],p=this.byEnd[e];if(o){if(e>o.end&&o.next!==this.byStart[o.end])throw new Error("Cannot overwrite across a split point");if(o.edit(i,r,n),o!==p){for(var h=o.next;h!==p;)h.edit("",!1),h=h.next;h.edit("",!1)}}else{var c=new re(t,e,"").edit(i,r);p.next=c,c.previous=p}return this},fe.prototype.prepend=function(t){if("string"!=typeof t)throw new TypeError("outro content must be a string");return this.intro=t+this.intro,this},fe.prototype.prependLeft=function(t,e){if("string"!=typeof e)throw new TypeError("inserted content must be a string");this._split(t);var i=this.byEnd[t];return i?i.prependLeft(e):this.intro=e+this.intro,this},fe.prototype.prependRight=function(t,e){if("string"!=typeof e)throw new TypeError("inserted content must be a string");this._split(t);var i=this.byStart[t];return i?i.prependRight(e):this.outro=e+this.outro,this},fe.prototype.remove=function(t,e){for(;t<0;)t+=this.original.length;for(;e<0;)e+=this.original.length;if(t===e)return this;if(t<0||e>this.original.length)throw new Error("Character is out of bounds");if(t>e)throw new Error("end must be greater than start");this._split(t),this._split(e);for(var i=this.byStart[t];i;)i.intro="",i.outro="",i.edit(""),i=e>i.end?this.byStart[i.end]:null;return this},fe.prototype.lastChar=function(){if(this.outro.length)return this.outro[this.outro.length-1];var t=this.lastChunk;do{if(t.outro.length)return t.outro[t.outro.length-1];if(t.content.length)return t.content[t.content.length-1];if(t.intro.length)return t.intro[t.intro.length-1]}while(t=t.previous);return this.intro.length?this.intro[this.intro.length-1]:""},fe.prototype.lastLine=function(){var t=this.outro.lastIndexOf(ue);if(-1!==t)return this.outro.substr(t+1);var e=this.outro,i=this.lastChunk;do{if(i.outro.length>0){if(-1!==(t=i.outro.lastIndexOf(ue)))return i.outro.substr(t+1)+e;e=i.outro+e}if(i.content.length>0){if(-1!==(t=i.content.lastIndexOf(ue)))return i.content.substr(t+1)+e;e=i.content+e}if(i.intro.length>0){if(-1!==(t=i.intro.lastIndexOf(ue)))return i.intro.substr(t+1)+e;e=i.intro+e}}while(i=i.previous);return-1!==(t=this.intro.lastIndexOf(ue))?this.intro.substr(t+1)+e:this.intro+e},fe.prototype.slice=function(t,e){for(void 0===t&&(t=0),void 0===e&&(e=this.original.length);t<0;)t+=this.original.length;for(;e<0;)e+=this.original.length;for(var i="",s=this.firstChunk;s&&(s.start>t||s.end<=t);){if(s.start<e&&s.end>=e)return i;s=s.next}if(s&&s.edited&&s.start!==t)throw new Error("Cannot use replaced character "+t+" as slice start anchor.");for(var r=s;s;){!s.intro||r===s&&s.start!==t||(i+=s.intro);var n=s.start<e&&s.end>=e;if(n&&s.edited&&s.end!==e)throw new Error("Cannot use replaced character "+e+" as slice end anchor.");if(i+=s.content.slice(r===s?t-s.start:0,n?s.content.length+e-s.end:s.content.length),!s.outro||n&&s.end!==e||(i+=s.outro),n)break;s=s.next}return i},fe.prototype.snip=function(t,e){var i=this.clone();return i.remove(0,t),i.remove(e,i.original.length),i},fe.prototype._split=function(t){if(!this.byStart[t]&&!this.byEnd[t])for(var e=this.lastSearchedChunk,i=t>e.end;e;){if(e.contains(t))return this._splitChunk(e,t);e=i?this.byStart[e.end]:this.byEnd[e.start]}},fe.prototype._splitChunk=function(t,e){if(t.edited&&t.content.length){var i=ce(this.original)(e);throw new Error("Cannot split a chunk that has already been edited ("+i.line+":"+i.column+' – "'+t.original+'")')}var s=t.split(e);return this.byEnd[e]=t,this.byStart[e]=s,this.byEnd[s.end]=s,t===this.lastChunk&&(this.lastChunk=s),this.lastSearchedChunk=t,!0},fe.prototype.toString=function(){for(var t=this.intro,e=this.firstChunk;e;)t+=e.toString(),e=e.next;return t+this.outro},fe.prototype.isEmpty=function(){var t=this.firstChunk;do{if(t.intro.length&&t.intro.trim()||t.content.length&&t.content.trim()||t.outro.length&&t.outro.trim())return!1}while(t=t.next);return!0},fe.prototype.length=function(){var t=this.firstChunk,e=0;do{e+=t.intro.length+t.content.length+t.outro.length}while(t=t.next);return e},fe.prototype.trimLines=function(){return this.trim("[\\r\\n]")},fe.prototype.trim=function(t){return this.trimStart(t).trimEnd(t)},fe.prototype.trimEndAborted=function(t){var e=new RegExp((t||"\\s")+"+$");if(this.outro=this.outro.replace(e,""),this.outro.length)return!0;var i=this.lastChunk;do{var s=i.end,r=i.trimEnd(e);if(i.end!==s&&(this.lastChunk===i&&(this.lastChunk=i.next),this.byEnd[i.end]=i,this.byStart[i.next.start]=i.next,this.byEnd[i.next.end]=i.next),r)return!0;i=i.previous}while(i);return!1},fe.prototype.trimEnd=function(t){return this.trimEndAborted(t),this},fe.prototype.trimStartAborted=function(t){var e=new RegExp("^"+(t||"\\s")+"+");if(this.intro=this.intro.replace(e,""),this.intro.length)return!0;var i=this.firstChunk;do{var s=i.end,r=i.trimStart(e);if(i.end!==s&&(i===this.lastChunk&&(this.lastChunk=i.next),this.byEnd[i.end]=i,this.byStart[i.next.start]=i.next,this.byEnd[i.next.end]=i.next),r)return!0;i=i.next}while(i);return!1},fe.prototype.trimStart=function(t){return this.trimStartAborted(t),this};var ge=function(){};function ye(t){var e=[];return ve[t.type](e,t),e}ge.prototype.ancestor=function(t){for(var e=this;t--;)if(!(e=e.parent))return null;return e},ge.prototype.contains=function(t){for(;t;){if(t===this)return!0;t=t.parent}return!1},ge.prototype.findLexicalBoundary=function(){return this.parent.findLexicalBoundary()},ge.prototype.findNearest=function(t){return"string"==typeof t&&(t=new RegExp("^"+t+"$")),t.test(this.type)?this:this.parent.findNearest(t)},ge.prototype.unparenthesizedParent=function(){for(var t=this.parent;t&&"ParenthesizedExpression"===t.type;)t=t.parent;return t},ge.prototype.unparenthesize=function(){for(var t=this;"ParenthesizedExpression"===t.type;)t=t.expression;return t},ge.prototype.findScope=function(t){return this.parent.findScope(t)},ge.prototype.getIndentation=function(){return this.parent.getIndentation()},ge.prototype.initialise=function(t){for(var e=0,i=this.keys;e<i.length;e+=1){var s=this[i[e]];Array.isArray(s)?s.forEach(function(e){return e&&e.initialise(t)}):s&&"object"==typeof s&&s.initialise(t)}},ge.prototype.toJSON=function(){return me(this)},ge.prototype.toString=function(){return this.program.magicString.original.slice(this.start,this.end)},ge.prototype.transpile=function(t,e){for(var i=0,s=this.keys;i<s.length;i+=1){var r=this[s[i]];Array.isArray(r)?r.forEach(function(i){return i&&i.transpile(t,e)}):r&&"object"==typeof r&&r.transpile(t,e)}};var ve={Identifier:function(t,e){t.push(e)},ObjectPattern:function(t,e){for(var i=0,s=e.properties;i<s.length;i+=1){var r=s[i];ve[r.type](t,r)}},Property:function(t,e){ve[e.value.type](t,e.value)},ArrayPattern:function(t,e){for(var i=0,s=e.elements;i<s.length;i+=1){var r=s[i];r&&ve[r.type](t,r)}},RestElement:function(t,e){ve[e.argument.type](t,e.argument)},AssignmentPattern:function(t,e){ve[e.left.type](t,e.left)}},xe=Object.create(null);function be(t){this.parent=(t=t||{}).parent,this.isBlockScope=!!t.block,this.createDeclarationCallback=t.declare;for(var e=this;e.isBlockScope;)e=e.parent;this.functionScope=e,this.identifiers=[],this.declarations=Object.create(null),this.references=Object.create(null),this.blockScopedDeclarations=this.isBlockScope?null:Object.create(null),this.aliases=Object.create(null)}function _e(t,e){var i,s=t.split("\n"),r=s.length,n=0;for(i=0;i<r;i+=1){var a=n+s[i].length+1;if(a>e)return{line:i+1,column:e-n,char:i};n=a}throw new Error("Could not determine location of character")}function Se(t,e){for(var i="";e--;)i+=t;return i}function ke(t,e,i){void 0===i&&(i=1);var s=Math.max(e.line-5,0),r=e.line,n=String(r).length,a=t.split("\n").slice(s,r),o=a[a.length-1].slice(0,e.column).replace(/\t/g,"  ").length;return a.map(function(t,e){return i=n,(r=String(e+s+1))+Se(" ",i-r.length)+" : "+t.replace(/\t/g,"  ");var i,r}).join("\n")+"\n"+Se(" ",n+3+o)+Se("^",i)}"do if in for let new try var case else enum eval null this true void with await break catch class const false super throw while yield delete export import public return static switch typeof default extends finally package private continue debugger function arguments interface protected implements instanceof".split(" ").forEach(function(t){return xe[t]=!0}),be.prototype={addDeclaration:function(t,e){for(var i=0,s=ye(t);i<s.length;i+=1){var r=s[i],n=r.name,a={name:n,node:r,kind:e,instances:[]};this.declarations[n]=a,this.isBlockScope&&(this.functionScope.blockScopedDeclarations[n]||(this.functionScope.blockScopedDeclarations[n]=[]),this.functionScope.blockScopedDeclarations[n].push(a))}},addReference:function(t){this.consolidated?this.consolidateReference(t):this.identifiers.push(t)},consolidate:function(){for(var t=0;t<this.identifiers.length;t+=1)this.consolidateReference(this.identifiers[t]);this.consolidated=!0},consolidateReference:function(t){var e=this.declarations[t.name];e?e.instances.push(t):(this.references[t.name]=!0,this.parent&&this.parent.addReference(t))},contains:function(t){return this.declarations[t]||!!this.parent&&this.parent.contains(t)},createIdentifier:function(t){"number"==typeof t&&(t=t.toString());for(var e=t=t.replace(/\s/g,"").replace(/\[([^\]]+)\]/g,"_$1").replace(/[^a-zA-Z0-9_$]/g,"_").replace(/_{2,}/,"_"),i=1;this.declarations[e]||this.references[e]||this.aliases[e]||e in xe;)e=t+"$"+i++;return this.aliases[e]=!0,e},createDeclaration:function(t){var e=this.createIdentifier(t);return this.createDeclarationCallback(e),e},findDeclaration:function(t){return this.declarations[t]||this.parent&&this.parent.findDeclaration(t)},resolveName:function(t){var e=this.findDeclaration(t);return e?e.name:t}};var we=function(t){function e(e,i){if(t.call(this,e),this.name="CompileError",i){var s=i.program.magicString.original,r=_e(s,i.start);this.message=e+" ("+r.line+":"+r.column+")",this.stack=(new t).stack.replace(new RegExp(".+new "+this.name+".+\\n","m"),""),this.loc=r,this.snippet=ke(s,r,i.end-i.start)}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.toString=function(){return this.name+": "+this.message+"\n"+this.snippet},e.missingTransform=function(t,i,s,r){throw void 0===r&&(r=null),new e("Transforming "+t+" is not "+(r?"fully supported":"implemented")+". Use `transforms: { "+i+": false }` to skip transformation and disable this error"+(r?", or `transforms: { "+r+": true }` if you know what you're doing":"")+".",s)},e}(Error);function Ee(t,e){for(var i=0;i<t.length;i+=1)if(e(t[i],i))return i;return-1}var Ce={Identifier:Ie,AssignmentPattern:function(t,e,i,s,r,n,a){var o="Identifier"===s.left.type,p=o?s.left.name:r;n||a.push(function(e,i,r){t.prependRight(s.left.end,i+"if ( "+p+" === void 0 ) "+p),t.move(s.left.end,s.right.end,e),t.appendLeft(s.right.end,r)}),o||Ae(t,e,i,s.left,r,n,a)},ArrayPattern:function(t,e,i,s,r,n,a){var o=s.start;s.elements.forEach(function(s,p){s&&("RestElement"===s.type?Ne(t,e,i,o,s.argument,r+".slice("+p+")",n,a):Ne(t,e,i,o,s,r+"["+p+"]",n,a),o=s.end)}),t.remove(o,s.end)},ObjectPattern:Le};function Ae(t,e,i,s,r,n,a){Ce[s.type](t,e,i,s,r,n,a)}function Ie(t,e,i,s,r,n,a){a.push(function(e,a,o){t.overwrite(s.start,s.end,(n?a:a+"var ")+i(s)+" = "+r+o),t.move(s.start,s.end,e)})}function Le(t,e,i,s,r,n,a){var o=this,p=s.start,h=[];s.properties.forEach(function(s){var c,l;if("Property"===s.type)if(l=s.value,s.computed||"Identifier"!==s.key.type)if(s.computed||"Literal"!==s.key.type){var u=t.slice(s.key.start,s.key.end);c=r+"["+u+"]",h.push("String("+u+")")}else c=r+"["+s.key.raw+"]",h.push(JSON.stringify(String(s.key.value)));else c=r+"."+s.key.name,h.push('"'+s.key.name+'"');else{if("RestElement"!==s.type)throw new we(o,"Unexpected node of type "+s.type+" in object pattern");l=s.argument,c=e("rest"),a.push(function(e,i,a){var o=s.program.getObjectWithoutPropertiesHelper(t);t.overwrite(s.start,p=s.argument.start,(n?i:i+"var ")+c+" = "+o+"( "+r+", ["+h.join(", ")+"] )"+a),t.move(s.start,p,e)})}Ne(t,e,i,p,l,c,n,a),p=s.end}),t.remove(p,s.end)}function Ne(t,e,i,s,r,n,a,o){switch(r.type){case"Identifier":t.remove(s,r.start),Ie(t,0,i,r,n,a,o);break;case"MemberExpression":t.remove(s,r.start),function(t,e,i,s,r,n,a){a.push(function(e,i,n){t.prependRight(s.start,i),t.appendLeft(s.end," = "+r+n),t.move(s.start,s.end,e)})}(t,0,0,r,n,0,o);break;case"AssignmentPattern":var p,h="Identifier"===r.left.type;p=h?i(r.left):e(n),o.push(function(e,i,s){a?(t.prependRight(r.right.start,p+" = "+n+", "+p+" = "+p+" === void 0 ? "),t.appendLeft(r.right.end," : "+p+s)):(t.prependRight(r.right.start,i+"var "+p+" = "+n+"; if ( "+p+" === void 0 ) "+p+" = "),t.appendLeft(r.right.end,s)),t.move(r.right.start,r.right.end,e)}),h?t.remove(s,r.right.start):(t.remove(s,r.left.start),t.remove(r.left.end,r.right.start),Ne(t,e,i,s,r.left,p,a,o));break;case"ObjectPattern":t.remove(s,s=r.start);var c=n;r.properties.length>1&&(c=e(n),o.push(function(e,i,o){t.prependRight(r.start,(a?"":i+"var ")+c+" = "),t.overwrite(r.start,s=r.start+1,n),t.appendLeft(s,o),t.overwrite(r.start,s=r.start+1,(a?"":i+"var ")+c+" = "+n+o),t.move(r.start,s,e)})),Le(t,e,i,r,c,a,o);break;case"ArrayPattern":if(t.remove(s,s=r.start),r.elements.filter(Boolean).length>1){var l=e(n);o.push(function(e,i,o){t.prependRight(r.start,(a?"":i+"var ")+l+" = "),t.overwrite(r.start,s=r.start+1,n,{contentOnly:!0}),t.appendLeft(s,o),t.move(r.start,s,e)}),r.elements.forEach(function(r,n){r&&("RestElement"===r.type?Ne(t,e,i,s,r.argument,l+".slice("+n+")",a,o):Ne(t,e,i,s,r,l+"["+n+"]",a,o),s=r.end)})}else{var u=Ee(r.elements,Boolean),d=r.elements[u];"RestElement"===d.type?Ne(t,e,i,s,d.argument,n+".slice("+u+")",a,o):Ne(t,e,i,s,d,n+"["+u+"]",a,o),s=d.end}t.remove(s,r.end);break;default:throw new Error("Unexpected node type in destructuring ("+r.type+")")}}var Pe=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.createScope=function(){var t=this;this.parentIsFunction=/Function/.test(this.parent.type),this.isFunctionBlock=this.parentIsFunction||"Root"===this.parent.type,this.scope=new be({block:!this.isFunctionBlock,parent:this.parent.findScope(!1),declare:function(e){return t.createdDeclarations.push(e)}}),this.parentIsFunction&&this.parent.params.forEach(function(e){t.scope.addDeclaration(e,"param")})},e.prototype.initialise=function(t){this.thisAlias=null,this.argumentsAlias=null,this.defaultParameters=[],this.createdDeclarations=[],this.scope||this.createScope(),this.body.forEach(function(e){return e.initialise(t)}),this.scope.consolidate()},e.prototype.findLexicalBoundary=function(){return"Program"===this.type?this:/^Function/.test(this.parent.type)?this:this.parent.findLexicalBoundary()},e.prototype.findScope=function(t){return t&&!this.isFunctionBlock?this.parent.findScope(t):this.scope},e.prototype.getArgumentsAlias=function(){return this.argumentsAlias||(this.argumentsAlias=this.scope.createIdentifier("arguments")),this.argumentsAlias},e.prototype.getArgumentsArrayAlias=function(){return this.argumentsArrayAlias||(this.argumentsArrayAlias=this.scope.createIdentifier("argsArray")),this.argumentsArrayAlias},e.prototype.getThisAlias=function(){return this.thisAlias||(this.thisAlias=this.scope.createIdentifier("this")),this.thisAlias},e.prototype.getIndentation=function(){if(void 0===this.indentation){for(var t=this.program.magicString.original,e=this.synthetic||!this.body.length,i=e?this.start:this.body[0].start;i&&"\n"!==t[i];)i-=1;for(this.indentation="";;){var s=t[i+=1];if(" "!==s&&"\t"!==s)break;this.indentation+=s}for(var r=this.program.magicString.getIndentString(),n=this.parent;n;)"constructor"!==n.kind||n.parent.parent.superClass||(this.indentation=this.indentation.replace(r,"")),n=n.parent;e&&(this.indentation+=r)}return this.indentation},e.prototype.transpile=function(e,i){var s,r,n=this,a=this.getIndentation(),o=[];if(this.argumentsAlias&&o.push(function(t,i,s){e.appendLeft(t,i+"var "+n.argumentsAlias+" = arguments"+s)}),this.thisAlias&&o.push(function(t,i,s){e.appendLeft(t,i+"var "+n.thisAlias+" = this"+s)}),this.argumentsArrayAlias&&o.push(function(t,i,s){var r=n.scope.createIdentifier("i");e.appendLeft(t,i+"var "+r+" = arguments.length, "+n.argumentsArrayAlias+" = Array("+r+");\n"+a+"while ( "+r+"-- ) "+n.argumentsArrayAlias+"["+r+"] = arguments["+r+"]"+s)}),/Function/.test(this.parent.type)?this.transpileParameters(this.parent.params,e,i,a,o):"CatchClause"===this.parent.type&&this.transpileParameters([this.parent.param],e,i,a,o),i.letConst&&this.isFunctionBlock&&this.transpileBlockScopedIdentifiers(e),t.prototype.transpile.call(this,e,i),this.createdDeclarations.length&&o.push(function(t,i,s){var r=i+"var "+n.createdDeclarations.join(", ")+s;e.appendLeft(t,r)}),this.synthetic)if("ArrowFunctionExpression"===this.parent.type){var p=this.body[0];o.length?(e.appendLeft(this.start,"{").prependRight(this.end,this.parent.getIndentation()+"}"),e.prependRight(p.start,"\n"+a+"return "),e.appendLeft(p.end,";\n")):i.arrow&&(e.prependRight(p.start,"{ return "),e.appendLeft(p.end,"; }"))}else o.length&&e.prependRight(this.start,"{").appendLeft(this.end,"}");s=(r=this.body[0])&&"ExpressionStatement"===r.type&&"Literal"===r.expression.type&&"use strict"===r.expression.value?this.body[0].end:this.synthetic||"Root"===this.parent.type?this.start:this.start+1;var h="\n"+a,c=";";o.forEach(function(t,e){e===o.length-1&&(c=";\n"),t(s,h,c)})},e.prototype.transpileParameters=function(t,e,i,s,r){var n=this;t.forEach(function(a){if("AssignmentPattern"===a.type&&"Identifier"===a.left.type)i.defaultParameter&&r.push(function(t,i,s){e.prependRight(a.left.end,i+"if ( "+a.left.name+" === void 0 ) "+a.left.name).move(a.left.end,a.right.end,t).appendLeft(a.right.end,s)});else if("RestElement"===a.type)i.spreadRest&&r.push(function(i,r,o){var p=t[t.length-2];if(p)e.remove(p?p.end:a.start,a.end);else{for(var h=a.start,c=a.end;/\s/.test(e.original[h-1]);)h-=1;for(;/\s/.test(e.original[c]);)c+=1;e.remove(h,c)}var l=a.argument.name,u=n.scope.createIdentifier("len"),d=t.length-1;e.prependRight(i,d?r+"var "+l+" = [], "+u+" = arguments.length - "+d+";\n"+s+"while ( "+u+"-- > 0 ) "+l+"[ "+u+" ] = arguments[ "+u+" + "+d+" ]"+o:r+"var "+l+" = [], "+u+" = arguments.length;\n"+s+"while ( "+u+"-- ) "+l+"[ "+u+" ] = arguments[ "+u+" ]"+o)});else if("Identifier"!==a.type&&i.parameterDestructuring){var o=n.scope.createIdentifier("ref");Ae(e,function(t){return n.scope.createIdentifier(t)},function(t){return n.scope.resolveName(t.name)},a,o,!1,r),e.prependRight(a.start,o)}})},e.prototype.transpileBlockScopedIdentifiers=function(t){var e=this;Object.keys(this.scope.blockScopedDeclarations).forEach(function(i){for(var s=0,r=e.scope.blockScopedDeclarations[i];s<r.length;s+=1){var n=r[s],a=!1;if("for.let"===n.kind){var o=n.node.findNearest("ForStatement");if(o.shouldRewriteAsFunction){var p=e.scope.createIdentifier(i),h=o.reassigned[i]?e.scope.createIdentifier(i):i;n.name=p,t.overwrite(n.node.start,n.node.end,p,{storeName:!0}),o.aliases[i]={outer:p,inner:h};for(var c=0,l=n.instances;c<l.length;c+=1){var u=l[c],d=o.body.contains(u)?h:p;i!==d&&t.overwrite(u.start,u.end,d,{storeName:!0})}a=!0}}if(!a){var f=e.scope.createIdentifier(i);if(i!==f){n.name=f,t.overwrite(n.node.start,n.node.end,f,{storeName:!0});for(var m=0,g=n.instances;m<g.length;m+=1){var y=g[m];y.rewritten=!0,t.overwrite(y.start,y.end,f,{storeName:!0})}}}}})},e}(ge);function Te(t){return"Identifier"===t.type&&"arguments"===t.name}function Re(t,e,i){for(var s=i.length;s--;){var r=i[s];if(r&&"SpreadElement"===r.type){var n=r.argument;if("ArrayExpression"===n.type){var a=n.elements;if(!a.some(function(t){return null===t})){var o=s===i.length-1;0===a.length?t.remove(o&&0!==s?i[s-1].end:r.start,o?e.end-1:i[s+1].start):(t.remove(r.start,a[0].start),t.remove(a[a.length-1].end,o?e.end-1:r.end)),i.splice.apply(i,[s,1].concat(a)),s+=a.length}}}}}function Oe(t){switch(t.type){case"ArrayExpression":case"CallExpression":case"Identifier":case"ParenthesizedExpression":case"ThisExpression":return!1;default:return!0}}function je(t,e,i,s,r){for(var n=e.length,a=-1;n--;){var o=e[n];o&&"SpreadElement"===o.type&&(Te(o.argument)&&t.overwrite(o.argument.start,o.argument.end,s),a=n)}if(-1===a)return!1;if(r){for(n=0;n<e.length;n+=1){var p=e[n];"SpreadElement"===p.type?t.remove(p.start,p.argument.start):(t.prependRight(p.start,"["),t.prependRight(p.end,"]"))}return!0}var h=e[a],c=e[a-1];if(c)t.overwrite(c.end,h.start," ].concat( ");else{var l;if(i!==h.start)(l=Oe(h.argument))?t.overwrite(i,h.start,"( "):t.remove(i,h.start);else{if("CallExpression"!==h.parent.type)throw new we("Unsupported spread construct, please raise an issue at https://github.com/bublejs/buble/issues",h);l=Oe(h.argument)}t.overwrite(h.end,e[1].start,l?" ).concat( ":".concat( ")}for(n=a;n<e.length;n+=1)(h=e[n])&&("SpreadElement"===h.type?t.remove(h.start,h.argument.start):(t.appendLeft(h.start,"["),t.appendLeft(h.end,"]")));return!0}var Ve=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){if(e.spreadRest&&this.elements.length)for(var i=this.findLexicalBoundary(),s=this.elements.length;s--;){var r=this.elements[s];r&&"SpreadElement"===r.type&&Te(r.argument)&&(this.argumentsArrayAlias=i.getArgumentsArrayAlias())}t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){if(t.prototype.transpile.call(this,e,i),i.spreadRest){if(Re(e,this,this.elements),this.elements.length){var s=this.elements[this.elements.length-1];s&&/\s*,/.test(e.original.slice(s.end,this.end))&&e.overwrite(s.end,this.end-1," ")}if(1===this.elements.length){var r=this.elements[0];r&&"SpreadElement"===r.type&&(Te(r.argument)?e.overwrite(this.start,this.end,"[].concat( "+this.argumentsArrayAlias+" )"):(e.overwrite(this.start,r.argument.start,"[].concat( "),e.overwrite(r.end,this.end," )")))}else je(e,this.elements,this.start,this.argumentsArrayAlias)&&e.overwrite(this.end-1,this.end,")")}},e}(ge);function De(t,e){for(;")"!==t.original[e];){if(","===t.original[e])return void t.remove(e,e+1);"/"===t.original[e]&&(e="/"===t.original[e+1]?t.original.indexOf("\n",e):t.original.indexOf("*/",e)+1),e+=1}}var Be=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.async&&e.asyncAwait&&we.missingTransform("async arrow functions","asyncAwait",this),this.body.createScope(),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){for(var s=this.start,r=(this.body||this.params[0]).start-1;"("!==e.original[s]&&s<r;)++s;"("!==e.original[s]&&(s=-1);var n=-1===s;if(i.arrow||this.needsArguments(i)){for(var a=this.body.start;"="!==e.original[a];)a-=1;e.remove(a,this.body.start),t.prototype.transpile.call(this,e,i),n&&(e.prependRight(this.params[0].start,"("),e.appendLeft(this.params[0].end,")"));var o,p=this.parent&&"ExpressionStatement"===this.parent.type,h=p?"!":"";this.async&&(h+="async "),h+="function",p||(h+=" "),(o=n?this.params[0].start:s)>this.start?e.overwrite(this.start,o,h):e.prependRight(this.start,h)}else t.prototype.transpile.call(this,e,i);i.trailingFunctionCommas&&this.params.length&&!n&&De(e,this.params[this.params.length-1].end)},e.prototype.needsArguments=function(t){return t.spreadRest&&this.params.filter(function(t){return"RestElement"===t.type}).length>0},e}(ge);function Fe(t,e){var i=e.findDeclaration(t.name);if(i&&"const"===i.kind)throw new we(t.name+" is read-only",t)}var Me=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){if("Identifier"===this.left.type){var i=this.findScope(!1).findDeclaration(this.left.name),s=i&&i.node.ancestor(3);s&&"ForStatement"===s.type&&s.body.contains(this)&&(s.reassigned[this.left.name]=!0)}t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){"Identifier"===this.left.type&&Fe(this.left,this.findScope(!1)),"**="===this.operator&&i.exponentiation?this.transpileExponentiation(e,i):/Pattern/.test(this.left.type)&&i.destructuring&&this.transpileDestructuring(e),t.prototype.transpile.call(this,e,i)},e.prototype.transpileDestructuring=function(t){var e=this,i=this.findScope(!0),s=this.findScope(!1),r=i.createDeclaration("assign");t.appendRight(this.left.end,"("+r),t.appendLeft(this.right.end,", ");var n=[];Ae(t,function(t){return i.createDeclaration(t)},function(t){var e=s.resolveName(t.name);return Fe(t,s),e},this.left,r,!0,n);var a=", ";n.forEach(function(t,i){i===n.length-1&&(a=""),t(e.end,"",a)}),"ExpressionStatement"===this.unparenthesizedParent().type?t.prependRight(this.end,")"):t.appendRight(this.end,", "+r+")")},e.prototype.transpileExponentiation=function(t){for(var e,i=this.findScope(!1),s=this.left.end;"*"!==t.original[s];)s+=1;t.remove(s,s+2);var r=this.left.unparenthesize();if("Identifier"===r.type)e=i.resolveName(r.name);else if("MemberExpression"===r.type){var n,a,o=!1,p=!1,h=this.findNearest(/(?:Statement|Declaration)$/),c=h.getIndentation();"Identifier"===r.property.type?a=r.computed?i.resolveName(r.property.name):r.property.name:(a=i.createDeclaration("property"),p=!0),"Identifier"===r.object.type?n=i.resolveName(r.object.name):(n=i.createDeclaration("object"),o=!0),r.start===h.start?o&&p?(t.prependRight(h.start,n+" = "),t.overwrite(r.object.end,r.property.start,";\n"+c+a+" = "),t.overwrite(r.property.end,r.end,";\n"+c+n+"["+a+"]")):o?(t.prependRight(h.start,n+" = "),t.appendLeft(r.object.end,";\n"+c),t.appendLeft(r.object.end,n)):p&&(t.prependRight(r.property.start,a+" = "),t.appendLeft(r.property.end,";\n"+c),t.move(r.property.start,r.property.end,this.start),t.appendLeft(r.object.end,"["+a+"]"),t.remove(r.object.end,r.property.start),t.remove(r.property.end,r.end)):(o&&p?(t.prependRight(r.start,"( "+n+" = "),t.overwrite(r.object.end,r.property.start,", "+a+" = "),t.overwrite(r.property.end,r.end,", "+n+"["+a+"]")):o?(t.prependRight(r.start,"( "+n+" = "),t.appendLeft(r.object.end,", "+n)):p&&(t.prependRight(r.property.start,"( "+a+" = "),t.appendLeft(r.property.end,", "),t.move(r.property.start,r.property.end,r.start),t.overwrite(r.object.end,r.property.start,"["+a+"]"),t.remove(r.property.end,r.end)),p&&t.appendLeft(this.end," )")),e=n+(r.computed||p?"["+a+"]":"."+a)}t.prependRight(this.right.start,"Math.pow( "+e+", "),t.appendLeft(this.right.end," )")},e}(ge),Ue=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.asyncAwait&&we.missingTransform("await","asyncAwait",this),t.prototype.initialise.call(this,e)},e}(ge),qe=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){"**"===this.operator&&i.exponentiation&&(e.prependRight(this.start,"Math.pow( "),e.overwrite(this.left.end,this.right.start,", "),e.appendLeft(this.end," )")),t.prototype.transpile.call(this,e,i)},e}(ge),Xe=/(?:For(?:In|Of)?|While)Statement/,Je=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(){var t=this.findNearest(Xe),e=this.findNearest("SwitchCase");t&&(!e||t.depth>e.depth)&&(t.canBreak=!0,this.loop=t)},e.prototype.transpile=function(t){if(this.loop&&this.loop.shouldRewriteAsFunction){if(this.label)throw new we("Labels are not currently supported in a loop with locally-scoped variables",this);t.overwrite(this.start,this.start+5,"return 'break'")}},e}(ge),We=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){if(e.spreadRest&&this.arguments.length>1)for(var i=this.findLexicalBoundary(),s=this.arguments.length;s--;){var r=this.arguments[s];"SpreadElement"===r.type&&Te(r.argument)&&(this.argumentsArrayAlias=i.getArgumentsArrayAlias())}t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){if(i.spreadRest&&this.arguments.length&&Re(e,this,this.arguments),i.spreadRest&&this.arguments.length){var s,r=!1,n=this.arguments[0];if(1===this.arguments.length?"SpreadElement"===n.type&&(e.remove(n.start,n.argument.start),r=!0):r=je(e,this.arguments,n.start,this.argumentsArrayAlias),r){var a=null;if("Super"===this.callee.type?a=this.callee:"MemberExpression"===this.callee.type&&"Super"===this.callee.object.type&&(a=this.callee.object),a||"MemberExpression"!==this.callee.type)s="void 0";else if("Identifier"===this.callee.object.type)s=this.callee.object.name;else{s=this.findScope(!0).createDeclaration("ref");var o=this.callee.object;e.prependRight(o.start,"("+s+" = "),e.appendLeft(o.end,")")}e.appendLeft(this.callee.end,".apply"),a?(a.noCall=!0,this.arguments.length>1&&("SpreadElement"===n.type?Oe(n.argument)&&e.prependRight(n.start,"( "):e.prependRight(n.start,"[ "),e.appendLeft(this.arguments[this.arguments.length-1].end," )"))):1===this.arguments.length?e.prependRight(n.start,s+", "):("SpreadElement"===n.type?Oe(n.argument)?e.appendLeft(n.start,s+", ( "):e.appendLeft(n.start,s+", "):e.appendLeft(n.start,s+", [ "),e.appendLeft(this.arguments[this.arguments.length-1].end," )"))}}i.trailingFunctionCommas&&this.arguments.length&&De(e,this.arguments[this.arguments.length-1].end),t.prototype.transpile.call(this,e,i)},e}(ge),ze=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i,s,r){var n=this;if(i.classes){var a=this.parent.name,o=e.getIndentString(),p=this.getIndentation()+(s?o:""),h=p+o,c=Ee(this.body,function(t){return"constructor"===t.kind}),l=this.body[c],u="",d="";if(this.body.length?(e.remove(this.start,this.body[0].start),e.remove(this.body[this.body.length-1].end,this.end)):e.remove(this.start,this.end),l){l.value.body.isConstructorBody=!0;var f=this.body[c+1];c>0&&(e.remove(this.body[c-1].end,l.start),e.move(l.start,f?f.start:this.end-1,this.body[0].start)),s||e.appendLeft(l.end,";")}var m=[];this.body.forEach(function(t){if("FieldDefinition"===t.type&&(m.push(t.computed?"this"+e.slice(t.start,t.end)+";":"this."+e.slice(t.start,t.end)+";"),e.remove(t.start,t.end),""!==e.byStart[t.end].content)){for(var i=0;i<e.byStart[t.end].content.length&&-1===e.byStart[t.end].content.slice(0,i).indexOf(";");i++);i>0&&e.remove(t.end,t.end+i)}});var g=!1!==this.program.options.namedFunctionExpressions,y=g||this.parent.superClass||"ClassDeclaration"!==this.parent.type;if(this.parent.superClass){var v="if ( "+r+" ) "+a+".__proto__ = "+r+";\n"+p+a+".prototype = Object.create( "+r+" && "+r+".prototype );\n"+p+a+".prototype.constructor = "+a+";";u+=l?"\n\n"+p+v:(v="function "+a+" () {"+(m.length?"\n"+h+m.join("\n"+h)+"\n"+h:"")+(r?"\n"+h+r+".apply(this, arguments);\n"+p+"}":"}")+(s?"":";")+(this.body.length?"\n\n"+p:"")+v)+"\n\n"+p}else if(!l){var x="function "+(y?a+" ":"")+"() {"+(m.length?"\n"+h+m.join("\n"+h)+"\n"+p:"")+"}";"ClassDeclaration"===this.parent.type&&(x+=";"),this.body.length&&(x+="\n\n"+p),u+=x}l&&m.length&&e.appendLeft(l.value.body.start+1,"\n"+h+m.join("\n"+h));var b,_,S=this.findScope(!1),k=[],w=[];if(this.body.forEach(function(t,s){if("get"!==t.kind&&"set"!==t.kind||!i.getterSetter||we.missingTransform("getters and setters","getterSetter",t),"FieldDefinition"!==t.type)if("constructor"!==t.kind){t.static&&e.remove(t.start,t.start+(" "==e.original[t.start+6]?7:6));var r,o="method"!==t.kind,h=t.key.name;(xe[h]||t.value.body.scope.references[h])&&(h=S.createIdentifier(h));var l=!1;if(t.computed||"Literal"!==t.key.type||(l=!0,t.computed=!0),o){if(t.computed)throw new Error("Computed accessor properties are not currently supported");e.remove(t.start,t.key.start),t.static?(~w.indexOf(t.key.name)||w.push(t.key.name),_||(_=S.createIdentifier("staticAccessors")),r=""+_):(~k.indexOf(t.key.name)||k.push(t.key.name),b||(b=S.createIdentifier("prototypeAccessors")),r=""+b)}else r=t.static?""+a:a+".prototype";t.computed||(r+="."),(c>0&&s===c+1||0===s&&c===n.body.length-1)&&(r="\n\n"+p+r);var u=t.key.end;if(t.computed)if(l)e.prependRight(t.key.start,"["),e.appendLeft(t.key.end,"]");else{for(;"]"!==e.original[u];)u+=1;u+=1}var d=(o?"."+t.kind:"")+" = "+(t.value.async?"async ":"")+"function"+(t.value.generator?"* ":" ")+(t.computed||o||!g?"":h+" ");e.remove(u,t.value.start),e.prependRight(t.value.start,d),e.appendLeft(t.end,";"),t.value.generator&&e.remove(t.start,t.key.start);var f=t.key.start;if(t.computed&&!l)for(;"["!=e.original[f];)--f;t.start<f?e.overwrite(t.start,f,r):e.prependRight(t.start,r)}else e.overwrite(t.key.start,t.key.end,"function"+(y?" "+a:""))}),k.length||w.length){var E=[],C=[];k.length&&(E.push("var "+b+" = { "+k.map(function(t){return t+": { configurable: true }"}).join(",")+" };"),C.push("Object.defineProperties( "+a+".prototype, "+b+" );")),w.length&&(E.push("var "+_+" = { "+w.map(function(t){return t+": { configurable: true }"}).join(",")+" };"),C.push("Object.defineProperties( "+a+", "+_+" );")),l&&(u+="\n\n"+p),u+=E.join("\n"+p),l||(u+="\n\n"+p),d+="\n\n"+p+C.join("\n"+p)}l?e.appendLeft(l.end,u):e.prependRight(this.start,u),e.appendLeft(this.end,d)}t.prototype.transpile.call(this,e,i)},e}(ge),He=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.id?(this.name=this.id.name,this.findScope(!0).addDeclaration(this.id,"class")):this.name=this.findScope(!0).createIdentifier("defaultExport"),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(t,e){if(e.classes){this.superClass||function(t,e){var i=t.start,s=t.end,r=e.getIndentString(),n=r.length,a=i-n;t.program.indentExclusions[a]||e.original.slice(a,i)!==r||e.remove(a,i);for(var o,p=new RegExp(r+"\\S","g"),h=e.original.slice(i,s);o=p.exec(h);){var c=i+o.index;t.program.indentExclusions[c]||e.remove(c,c+n)}}(this.body,t);var i=this.superClass&&(this.superClass.name||"superclass"),s=this.getIndentation(),r=s+t.getIndentString(),n="ExportDefaultDeclaration"===this.parent.type;n&&t.remove(this.parent.start,this.start);var a=this.start;this.id?(t.overwrite(a,this.id.start,"var "),a=this.id.end):t.prependLeft(a,"var "+this.name),this.superClass?this.superClass.end===this.body.start?(t.remove(a,this.superClass.start),t.appendLeft(a," = /*@__PURE__*/(function ("+i+") {\n"+r)):(t.overwrite(a,this.superClass.start," = "),t.overwrite(this.superClass.end,this.body.start,"/*@__PURE__*/(function ("+i+") {\n"+r)):a===this.body.start?t.appendLeft(a," = "):t.overwrite(a,this.body.start," = "),this.body.transpile(t,e,!!this.superClass,i);var o=n?"\n\n"+s+"export default "+this.name+";":"";this.superClass?(t.appendLeft(this.end,"\n\n"+r+"return "+this.name+";\n"+s+"}("),t.move(this.superClass.start,this.superClass.end,this.end),t.prependRight(this.end,"));"+o)):o&&t.prependRight(this.end,o)}else this.body.transpile(t,e,!1,null)},e}(ge),Ge=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.name=(this.id?this.id.name:"VariableDeclarator"===this.parent.type?this.parent.id.name:"AssignmentExpression"!==this.parent.type?null:"Identifier"===this.parent.left.type?this.parent.left.name:"MemberExpression"===this.parent.left.type?this.parent.left.property.name:null)||this.findScope(!0).createIdentifier("anonymous"),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(t,e){if(e.classes){var i=this.superClass&&(this.superClass.name||"superclass"),s=this.getIndentation(),r=s+t.getIndentString();this.superClass?(t.remove(this.start,this.superClass.start),t.remove(this.superClass.end,this.body.start),t.appendRight(this.start,"/*@__PURE__*/(function ("+i+") {\n"+r)):t.overwrite(this.start,this.body.start,"/*@__PURE__*/(function () {\n"+r),this.body.transpile(t,e,!0,i);var n="";this.superClass&&(n=t.slice(this.superClass.start,this.superClass.end),t.remove(this.superClass.start,this.superClass.end)),t.appendLeft(this.end,"\n\n"+r+"return "+this.name+";\n"+s+"}("+n+"))")}else this.body.transpile(t,e,!1)},e}(ge),Qe=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(t){if(this.findNearest(Xe).shouldRewriteAsFunction){if(this.label)throw new we("Labels are not currently supported in a loop with locally-scoped variables",this);t.overwrite(this.start,this.start+8,"return")}},e}(ge),Ke=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.moduleExport&&we.missingTransform("export","moduleExport",this),t.prototype.initialise.call(this,e)},e}(ge),$e=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.moduleExport&&we.missingTransform("export","moduleExport",this),t.prototype.initialise.call(this,e)},e}(ge),Ye=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.findScope=function(t){return t||!this.createdScope?this.parent.findScope(t):this.body.scope},e.prototype.initialise=function(e){if(this.body.createScope(),this.createdScope=!0,this.reassigned=Object.create(null),this.aliases=Object.create(null),this.thisRefs=[],t.prototype.initialise.call(this,e),e.letConst)for(var i=Object.keys(this.body.scope.declarations),s=i.length;s--;){for(var r=this.body.scope.declarations[i[s]],n=r.instances.length;n--;){var a=r.instances[n].findNearest(/Function/);if(a&&a.depth>this.depth){this.shouldRewriteAsFunction=!0;for(var o=0,p=this.thisRefs;o<p.length;o+=1){var h=p[o];h.alias=h.alias||h.findLexicalBoundary().getThisAlias()}break}}if(this.shouldRewriteAsFunction)break}},e.prototype.transpile=function(e,i){var s="ForOfStatement"!=this.type&&("BlockStatement"!==this.body.type||"BlockStatement"===this.body.type&&this.body.synthetic);if(this.shouldRewriteAsFunction){var r=this.getIndentation(),n=r+e.getIndentString(),a=this.args?" "+this.args.join(", ")+" ":"",o=this.params?" "+this.params.join(", ")+" ":"",p=this.findScope(!0),h=p.createIdentifier("loop"),c="var "+h+" = function ("+o+") "+(this.body.synthetic?"{\n"+r+e.getIndentString():""),l=(this.body.synthetic?"\n"+r+"}":"")+";\n\n"+r;if(e.prependRight(this.body.start,c),e.appendLeft(this.body.end,l),e.move(this.start,this.body.start,this.body.end),this.canBreak||this.canReturn){var u=p.createIdentifier("returned"),d="{\n"+n+"var "+u+" = "+h+"("+a+");\n";this.canBreak&&(d+="\n"+n+"if ( "+u+" === 'break' ) break;"),this.canReturn&&(d+="\n"+n+"if ( "+u+" ) return "+u+".v;"),e.prependRight(this.body.end,d+="\n"+r+"}")}else{var f=h+"("+a+");";"DoWhileStatement"===this.type?e.overwrite(this.start,this.body.start,"do {\n"+n+f+"\n"+r+"}"):e.prependRight(this.body.end,f)}}else s&&(e.appendLeft(this.body.start,"{ "),e.prependRight(this.body.end," }"));t.prototype.transpile.call(this,e,i)},e}(ge),Ze=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.findScope=function(t){return t||!this.createdScope?this.parent.findScope(t):this.body.scope},e.prototype.transpile=function(e,i){var s=this,r=this.getIndentation()+e.getIndentString();if(this.shouldRewriteAsFunction){var n="VariableDeclaration"===this.init.type?this.init.declarations.map(function(t){return ye(t.id)}):[],a=this.aliases;this.args=n.map(function(t){return t in s.aliases?s.aliases[t].outer:t}),this.params=n.map(function(t){return t in s.aliases?s.aliases[t].inner:t});var o=Object.keys(this.reassigned).map(function(t){return a[t].outer+" = "+a[t].inner+";"});o.length&&(this.body.synthetic?e.appendLeft(this.body.body[0].end,"; "+o.join(" ")):e.appendLeft(this.body.body[this.body.body.length-1].end,"\n\n"+r+o.join("\n"+r)))}t.prototype.transpile.call(this,e,i)},e}(Ye),ti=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.findScope=function(t){return t||!this.createdScope?this.parent.findScope(t):this.body.scope},e.prototype.transpile=function(e,i){var s=this,r="VariableDeclaration"===this.left.type;if(this.shouldRewriteAsFunction){var n=r?this.left.declarations.map(function(t){return ye(t.id)}):[];this.args=n.map(function(t){return t in s.aliases?s.aliases[t].outer:t}),this.params=n.map(function(t){return t in s.aliases?s.aliases[t].inner:t})}t.prototype.transpile.call(this,e,i);var a=r?this.left.declarations[0].id:this.left;"Identifier"!==a.type&&this.destructurePattern(e,a,r)},e.prototype.destructurePattern=function(t,e,i){var s=this.findScope(!0),r=this.getIndentation()+t.getIndentString(),n=s.createIdentifier("ref"),a=this.body.body.length?this.body.body[0].start:this.body.start+1;t.move(e.start,e.end,a),t.prependRight(e.end,i?n:"var "+n);var o=[];Ae(t,function(t){return s.createIdentifier(t)},function(t){return s.resolveName(t.name)},e,n,!1,o);var p=";\n"+r;o.forEach(function(t,e){e===o.length-1&&(p=";\n\n"+r),t(a,"",p)})},e}(Ye),ei=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.forOf&&!e.dangerousForOf&&we.missingTransform("for-of statements","forOf",this,"dangerousForOf"),this.await&&e.asyncAwait&&we.missingTransform("for-await-of statements","asyncAwait",this),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){if(t.prototype.transpile.call(this,e,i),i.dangerousForOf)if(this.body.body[0]){var s=this.findScope(!0),r=this.getIndentation(),n=r+e.getIndentString(),a=s.createIdentifier("i"),o=s.createIdentifier("list");this.body.synthetic&&(e.prependRight(this.left.start,"{\n"+n),e.appendLeft(this.body.body[0].end,"\n"+r+"}"));var p=this.body.body[0].start;e.remove(this.left.end,this.right.start),e.move(this.left.start,this.left.end,p),e.prependRight(this.right.start,"var "+a+" = 0, "+o+" = "),e.appendLeft(this.right.end,"; "+a+" < "+o+".length; "+a+" += 1");var h="VariableDeclaration"===this.left.type,c=h?this.left.declarations[0].id:this.left;if("Identifier"!==c.type){var l=[],u=s.createIdentifier("ref");Ae(e,function(t){return s.createIdentifier(t)},function(t){return s.resolveName(t.name)},c,u,!h,l);var d=";\n"+n;l.forEach(function(t,e){e===l.length-1&&(d=";\n\n"+n),t(p,"",d)}),h?(e.appendLeft(this.left.start+this.left.kind.length+1,u),e.appendLeft(this.left.end," = "+o+"["+a+"];\n"+n)):e.appendLeft(this.left.end,"var "+u+" = "+o+"["+a+"];\n"+n)}else e.appendLeft(this.left.end," = "+o+"["+a+"];\n\n"+n)}else"VariableDeclaration"===this.left.type&&"var"===this.left.kind?(e.remove(this.start,this.left.start),e.appendLeft(this.left.end,";"),e.remove(this.left.end,this.end)):e.remove(this.start,this.end)},e}(Ye),ii=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.generator&&e.generator&&we.missingTransform("generators","generator",this),this.async&&e.asyncAwait&&we.missingTransform("async functions","asyncAwait",this),this.body.createScope(),this.id&&this.findScope(!0).addDeclaration(this.id,"function"),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){t.prototype.transpile.call(this,e,i),i.trailingFunctionCommas&&this.params.length&&De(e,this.params[this.params.length-1].end)},e}(ge),si=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.generator&&e.generator&&we.missingTransform("generators","generator",this),this.async&&e.asyncAwait&&we.missingTransform("async functions","asyncAwait",this),this.body.createScope(),this.id&&this.body.scope.addDeclaration(this.id,"function"),t.prototype.initialise.call(this,e);var i,s=this.parent;if(e.conciseMethodProperty&&"Property"===s.type&&"init"===s.kind&&s.method&&"Identifier"===s.key.type?i=s.key.name:e.classes&&"MethodDefinition"===s.type&&"method"===s.kind&&"Identifier"===s.key.type?i=s.key.name:this.id&&"Identifier"===this.id.type&&(i=this.id.alias||this.id.name),i)for(var r=0,n=this.params;r<n.length;r+=1){var a=n[r];if("Identifier"===a.type&&i===a.name){var o=this.body.scope,p=o.declarations[i],h=o.createIdentifier(i);a.alias=h;for(var c=0,l=p.instances;c<l.length;c+=1)l[c].alias=h;break}}},e.prototype.transpile=function(e,i){t.prototype.transpile.call(this,e,i),i.trailingFunctionCommas&&this.params.length&&De(e,this.params[this.params.length-1].end)},e}(ge),ri=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.findScope=function(t){return this.parent.params&&~this.parent.params.indexOf(this)?this.parent.body.scope:"FunctionExpression"===this.parent.type&&this===this.parent.id?this.parent.body.scope:this.parent.findScope(t)},e.prototype.initialise=function(t){if(function t(e,i){return"MemberExpression"===e.type?!e.computed&&t(e.object,e):"Identifier"===e.type?!i||!/(Function|Class)Expression/.test(i.type)&&("VariableDeclarator"===i.type?e===i.init:"MemberExpression"===i.type||"MethodDefinition"===i.type?i.computed||e===i.object:"ArrayPattern"!==i.type&&("Property"===i.type?"ObjectPattern"!==i.parent.type&&(i.computed||e===i.value):"MethodDefinition"!==i.type&&("ExportSpecifier"!==i.type||e===i.local))):void 0}(this,this.parent)){if(t.arrow&&"arguments"===this.name&&!this.findScope(!1).contains(this.name)){var e=this.findLexicalBoundary(),i=this.findNearest("ArrowFunctionExpression"),s=this.findNearest(Xe);i&&i.depth>e.depth&&(this.alias=e.getArgumentsAlias()),s&&s.body.contains(this)&&s.depth>e.depth&&(this.alias=e.getArgumentsAlias())}this.findScope(!1).addReference(this)}},e.prototype.transpile=function(t){this.alias&&t.overwrite(this.start,this.end,this.alias,{storeName:!0,contentOnly:!0})},e}(ge),ni=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){("BlockStatement"!==this.consequent.type||"BlockStatement"===this.consequent.type&&this.consequent.synthetic)&&(e.appendLeft(this.consequent.start,"{ "),e.prependRight(this.consequent.end," }")),this.alternate&&"IfStatement"!==this.alternate.type&&("BlockStatement"!==this.alternate.type||"BlockStatement"===this.alternate.type&&this.alternate.synthetic)&&(e.appendLeft(this.alternate.start,"{ "),e.prependRight(this.alternate.end," }")),t.prototype.transpile.call(this,e,i)},e}(ge),ai=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.moduleImport&&we.missingTransform("dynamic import expressions","moduleImport",this),t.prototype.initialise.call(this,e)},e}(ge),oi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.moduleImport&&we.missingTransform("import","moduleImport",this),t.prototype.initialise.call(this,e)},e}(ge),pi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.findScope(!0).addDeclaration(this.local,"import"),t.prototype.initialise.call(this,e)},e}(ge),hi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){this.findScope(!0).addDeclaration(this.local,"import"),t.prototype.initialise.call(this,e)},e}(ge),ci=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){var s,r=this.name;e.overwrite(r.start,this.value?this.value.start:this.name.end,(/-/.test(s=r.name)?"'"+s+"'":s)+": "+(this.value?"":"true")),t.prototype.transpile.call(this,e,i)},e}(ge),li=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(t){var e,i=!0,s=this.parent.children[this.parent.children.length-1];(s&&"JSXText"===(e=s).type&&!/\S/.test(e.value)&&/\n/.test(e.value)||this.parent.openingElement.attributes.length)&&(i=!1),t.overwrite(this.start,this.end,i?" )":")")},e}(ge),ui=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(t){var e,i=!0,s=this.parent.children[this.parent.children.length-1];s&&"JSXText"===(e=s).type&&!/\S/.test(e.value)&&/\n/.test(e.value)&&(i=!1),t.overwrite(this.start,this.end,i?" )":")")},e}(ge);function di(t,e){return t=t.replace(/\u00a0/g,"&nbsp;"),e&&/\n/.test(t)&&(t=t.replace(/\s+$/,"")),t=t.replace(/^\n\r?\s+/,"").replace(/\s*\n\r?\s*/gm," "),JSON.stringify(t)}var fi=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){t.prototype.transpile.call(this,e,i);var s=this.children.filter(function(t){return"JSXText"!==t.type||/\S/.test(t.raw)||!/\n/.test(t.raw)});if(s.length){var r,n=(this.openingElement||this.openingFragment).end;for(r=0;r<s.length;r+=1){var a=s[r];if("JSXExpressionContainer"===a.type&&"JSXEmptyExpression"===a.expression.type||e.appendLeft(n,","+("\n"===e.original[n]&&"JSXText"!==a.type?"":" ")),"JSXText"===a.type){var o=di(a.value,r===s.length-1);e.overwrite(a.start,a.end,o)}n=a.end}}},e}(ge),mi=/[\u2028-\u2029]/g,gi={ArrayExpression:Ve,ArrowFunctionExpression:Be,AssignmentExpression:Me,AwaitExpression:Ue,BinaryExpression:qe,BreakStatement:Je,CallExpression:We,ClassBody:ze,ClassDeclaration:He,ClassExpression:Ge,ContinueStatement:Qe,DoWhileStatement:Ye,ExportNamedDeclaration:$e,ExportDefaultDeclaration:Ke,ForStatement:Ze,ForInStatement:ti,ForOfStatement:ei,FunctionDeclaration:ii,FunctionExpression:si,Identifier:ri,IfStatement:ni,Import:ai,ImportDeclaration:oi,ImportDefaultSpecifier:pi,ImportSpecifier:hi,JSXAttribute:ci,JSXClosingElement:li,JSXClosingFragment:ui,JSXElement:fi,JSXExpressionContainer:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){e.remove(this.start,this.expression.start),e.remove(this.expression.end,this.end),t.prototype.transpile.call(this,e,i)},e}(ge),JSXFragment:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e}(fi),JSXOpeningElement:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){t.prototype.transpile.call(this,e,i),e.overwrite(this.start,this.name.start,this.program.jsx+"( ");var s="JSXIdentifier"===this.name.type&&this.name.name[0]===this.name.name[0].toLowerCase();s&&e.prependRight(this.name.start,"'");var r=this.attributes.length,n=this.name.end;if(r){var a,o,p,h=!1;for(a=0;a<r;a+=1)if("JSXSpreadAttribute"===this.attributes[a].type){h=!0;break}for(n=this.attributes[0].end,a=0;a<r;a+=1){var c=this.attributes[a];if(a>0&&(c.start===n?e.prependRight(n,", "):e.overwrite(n,c.start,", ")),h&&"JSXSpreadAttribute"!==c.type){var l=this.attributes[a-1],u=this.attributes[a+1];l&&"JSXSpreadAttribute"!==l.type||e.prependRight(c.start,"{ "),u&&"JSXSpreadAttribute"!==u.type||e.appendLeft(c.end," }")}n=c.end}if(h)if(1===r)p=s?"',":",";else{if(!this.program.options.objectAssign)throw new we("Mixed JSX attributes ending in spread requires specified objectAssign option with 'Object.assign' or polyfill helper.",this);p=s?"', "+this.program.options.objectAssign+"({},":", "+this.program.options.objectAssign+"({},",o=")"}else p=s?"', {":", {",o=" }";e.prependRight(this.name.end,p),o&&e.appendLeft(this.attributes[r-1].end,o)}else e.appendLeft(this.name.end,s?"', null":", null"),n=this.name.end;this.selfClosing?e.overwrite(n,this.end,this.attributes.length?")":" )"):e.remove(n,this.end)},e}(ge),JSXOpeningFragment:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(t){t.overwrite(this.start,this.end,this.program.jsx+"( React.Fragment, null")},e}(ge),JSXSpreadAttribute:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){e.remove(this.start,this.argument.start),e.remove(this.argument.end,this.end),t.prototype.transpile.call(this,e,i)},e}(ge),Literal:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(){"string"==typeof this.value&&this.program.indentExclusionElements.push(this)},e.prototype.transpile=function(t,e){e.numericLiteral&&this.raw.match(/^0[bo]/i)&&t.overwrite(this.start,this.end,String(this.value),{storeName:!0,contentOnly:!0}),"string"==typeof this.value&&this.value.match(mi)&&t.overwrite(this.start,this.end,this.raw.replace(mi,function(t){return"\u2028"==t?"\\u2028":"\\u2029"}),{contentOnly:!0})},e}(ge),MemberExpression:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){i.reservedProperties&&xe[this.property.name]&&(e.overwrite(this.object.end,this.property.start,"['"),e.appendLeft(this.property.end,"']")),t.prototype.transpile.call(this,e,i)},e}(ge),NewExpression:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){if(e.spreadRest&&this.arguments.length)for(var i=this.findLexicalBoundary(),s=this.arguments.length;s--;){var r=this.arguments[s];if("SpreadElement"===r.type&&Te(r.argument)){this.argumentsArrayAlias=i.getArgumentsArrayAlias();break}}t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){if(t.prototype.transpile.call(this,e,i),i.spreadRest&&this.arguments.length&&Re(e,this,this.arguments),i.spreadRest&&this.arguments.length){var s=this.arguments[0];je(e,this.arguments,s.start,this.argumentsArrayAlias,!0)&&(e.prependRight(this.start+"new".length," (Function.prototype.bind.apply("),e.overwrite(this.callee.end,s.start,", [ null ].concat( "),e.appendLeft(this.end," ))"))}this.arguments.length&&De(e,this.arguments[this.arguments.length-1].end)},e}(ge),ObjectExpression:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){var s;t.prototype.transpile.call(this,e,i);for(var r=this.start+1,n=0,a=0,o=null,p=null,h=0;h<this.properties.length;++h){var c=this.properties[h];if("SpreadElement"===c.type){var l=c.argument;"ObjectExpression"===l.type||"Literal"===l.type&&"string"!=typeof l.value?"ObjectExpression"===l.type&&l.properties.length>0?(e.remove(c.start,l.properties[0].start),e.remove(l.properties[l.properties.length-1].end,c.end),(s=this.properties).splice.apply(s,[h,1].concat(l.properties)),h--):(e.remove(c.start,h===this.properties.length-1?c.end:this.properties[h+1].start),this.properties.splice(h,1),h--):(n+=1,null===o&&(o=h))}else c.computed&&i.computedProperty&&(a+=1,null===p&&(p=h))}if(!n||i.objectRestSpread||a&&i.computedProperty){if(n){if(!this.program.options.objectAssign)throw new we("Object spread operator requires specified objectAssign option with 'Object.assign' or polyfill helper.",this);for(var u=this.properties.length;u--;){var d=this.properties[u];if("Property"===d.type&&!a){var f=this.properties[u-1],m=this.properties[u+1];f&&"Property"===f.type||e.prependRight(d.start,"{"),m&&"Property"===m.type||e.appendLeft(d.end,"}")}"SpreadElement"===d.type&&(e.remove(d.start,d.argument.start),e.remove(d.argument.end,d.end))}r=this.properties[0].start,a?"SpreadElement"===this.properties[0].type?(e.overwrite(this.start,r,this.program.options.objectAssign+"({}, "),e.remove(this.end-1,this.end),e.appendRight(this.end,")")):(e.prependLeft(this.start,this.program.options.objectAssign+"("),e.appendRight(this.end,")")):(e.overwrite(this.start,r,this.program.options.objectAssign+"({}, "),e.overwrite(this.properties[this.properties.length-1].end,this.end,")"))}}else n=0,o=null;if(a&&i.computedProperty){var g,y,v=this.getIndentation();"VariableDeclarator"===this.parent.type&&1===this.parent.parent.declarations.length&&"Identifier"===this.parent.id.type?(g=!0,y=this.parent.id.alias||this.parent.id.name):"AssignmentExpression"===this.parent.type&&"ExpressionStatement"===this.parent.parent.type&&"Identifier"===this.parent.left.type?(g=!0,y=this.parent.left.alias||this.parent.left.name):"AssignmentPattern"===this.parent.type&&"Identifier"===this.parent.left.type&&(g=!0,y=this.parent.left.alias||this.parent.left.name),n&&(g=!1),y=this.findScope(!1).resolveName(y);var x=r,b=this.end;g||(null===o||p<o?(y=this.findScope(!0).createDeclaration("obj"),e.prependRight(this.start,"( "+y+" = ")):y=null);for(var _,S=this.properties.length,k=!1,w=!0,E=0;E<S;E+=1){var C=this.properties[E],A=E>0?this.properties[E-1].end:x;if("Property"===C.type&&(C.computed||_&&!n)){if(0===E&&(A=this.start+1),_=C,y){var I=(g?";\n"+v+y:", "+y)+("Literal"===C.key.type||C.computed?"":".");A<C.start?e.overwrite(A,C.start,I):e.prependRight(C.start,I)}else y=this.findScope(!0).createDeclaration("obj"),e.appendRight(C.start,"( "+y+" = {}, "+y+(C.computed?"":"."));var L=C.key.end;if(C.computed){for(;"]"!==e.original[L];)L+=1;L+=1}"Literal"!==C.key.type||C.computed?C.shorthand||C.method&&!C.computed&&i.conciseMethodProperty?e.overwrite(C.key.start,C.key.end,e.slice(C.key.start,C.key.end).replace(/:/," =")):(C.value.start>L&&e.remove(L,C.value.start),e.prependLeft(L," = ")):e.overwrite(C.start,C.key.end+1,"["+e.slice(C.start,C.key.end)+"] = "),!C.method||!C.computed&&i.conciseMethodProperty||(C.value.generator&&e.remove(C.start,C.key.start),e.prependRight(C.value.start,"function"+(C.value.generator?"*":"")+" "))}else"SpreadElement"===C.type?y&&E>0&&(_||(_=this.properties[E-1]),e.appendLeft(_.end,", "+y+" )"),_=null,y=null):(!w&&n&&(e.prependRight(C.start,"{"),e.appendLeft(C.end,"}")),k=!0);if(w&&("SpreadElement"===C.type||C.computed)){var N=k?this.properties[this.properties.length-1].end:this.end-1;","==e.original[N]&&++N;var P=e.slice(N,b);e.prependLeft(A,P),e.remove(N,b),w=!1}var T=C.end;if(E<S-1&&!k)for(;","!==e.original[T];)T+=1;else E==S-1&&(T=this.end);C.end!=T&&e.overwrite(C.end,T,"",{contentOnly:!0})}!g&&y&&e.appendLeft(_.end,", "+y+" )")}},e}(ge),Property:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){"get"!==this.kind&&"set"!==this.kind||!e.getterSetter||we.missingTransform("getters and setters","getterSetter",this),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){if(t.prototype.transpile.call(this,e,i),i.conciseMethodProperty&&!this.computed&&"ObjectPattern"!==this.parent.type)if(this.shorthand)e.prependRight(this.start,this.key.name+": ");else if(this.method){var s="";!1!==this.program.options.namedFunctionExpressions&&(s=" "+(s="Literal"===this.key.type&&"number"==typeof this.key.value?"":"Identifier"===this.key.type?xe[this.key.name]||!/^[a-z_$][a-z0-9_$]*$/i.test(this.key.name)||this.value.body.scope.references[this.key.name]?this.findScope(!0).createIdentifier(this.key.name):this.key.name:this.findScope(!0).createIdentifier(this.key.value))),this.start<this.key.start&&e.remove(this.start,this.key.start),e.appendLeft(this.key.end,": "+(this.value.async?"async ":"")+"function"+(this.value.generator?"*":"")+s)}i.reservedProperties&&xe[this.key.name]&&(e.prependRight(this.key.start,"'"),e.appendLeft(this.key.end,"'"))},e}(ge),ReturnStatement:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(t){this.loop=this.findNearest(Xe),this.nearestFunction=this.findNearest(/Function/),this.loop&&(!this.nearestFunction||this.loop.depth>this.nearestFunction.depth)&&(this.loop.canReturn=!0,this.shouldWrap=!0),this.argument&&this.argument.initialise(t)},e.prototype.transpile=function(t,e){var i=this.shouldWrap&&this.loop&&this.loop.shouldRewriteAsFunction;this.argument?(i&&t.prependRight(this.argument.start,"{ v: "),this.argument.transpile(t,e),i&&t.appendLeft(this.argument.end," }")):i&&t.appendLeft(this.start+6," {}")},e}(ge),Super:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(t){if(t.classes){if(this.method=this.findNearest("MethodDefinition"),!this.method)throw new we("use of super outside class method",this);var e=this.findNearest("ClassBody").parent;if(this.superClassName=e.superClass&&(e.superClass.name||"superclass"),!this.superClassName)throw new we("super used in base class",this);if(this.isCalled="CallExpression"===this.parent.type&&this===this.parent.callee,"constructor"!==this.method.kind&&this.isCalled)throw new we("super() not allowed outside class constructor",this);if(this.isMember="MemberExpression"===this.parent.type,!this.isCalled&&!this.isMember)throw new we("Unexpected use of `super` (expected `super(...)` or `super.*`)",this)}if(t.arrow){var i=this.findLexicalBoundary(),s=this.findNearest("ArrowFunctionExpression"),r=this.findNearest(Xe);s&&s.depth>i.depth&&(this.thisAlias=i.getThisAlias()),r&&r.body.contains(this)&&r.depth>i.depth&&(this.thisAlias=i.getThisAlias())}},e.prototype.transpile=function(t,e){if(e.classes){t.overwrite(this.start,this.end,this.isCalled||this.method.static?this.superClassName:this.superClassName+".prototype",{storeName:!0,contentOnly:!0});var i=this.isCalled?this.parent:this.parent.parent;if(i&&"CallExpression"===i.type){this.noCall||t.appendLeft(i.callee.end,".call");var s=this.thisAlias||"this";i.arguments.length?t.appendLeft(i.arguments[0].start,s+", "):t.appendLeft(i.end-1,""+s)}}},e}(ge),TaggedTemplateExpression:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){e.templateString&&!e.dangerousTaggedTemplateString&&we.missingTransform("tagged template strings","templateString",this,"dangerousTaggedTemplateString"),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){if(i.templateString&&i.dangerousTaggedTemplateString){var s=this.quasi.expressions.concat(this.quasi.quasis).sort(function(t,e){return t.start-e.start}),r=this.program.body.scope,n=this.quasi.quasis.map(function(t){return JSON.stringify(t.value.cooked)}).join(", "),a=this.program.templateLiteralQuasis[n];a||(a=r.createIdentifier("templateObject"),e.prependLeft(this.program.prependAt,"var "+a+" = Object.freeze(["+n+"]);\n"),this.program.templateLiteralQuasis[n]=a),e.overwrite(this.tag.end,s[0].start,"("+a);var o=s[0].start;s.forEach(function(t){"TemplateElement"===t.type?e.remove(o,t.end):e.overwrite(o,t.start,", "),o=t.end}),e.overwrite(o,this.end,")")}t.prototype.transpile.call(this,e,i)},e}(ge),TemplateElement:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(){this.program.indentExclusionElements.push(this)},e}(ge),TemplateLiteral:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.transpile=function(e,i){if(t.prototype.transpile.call(this,e,i),i.templateString&&"TaggedTemplateExpression"!==this.parent.type){var s=this.expressions.concat(this.quasis).sort(function(t,e){return t.start-e.start||t.end-e.end}).filter(function(t,e){return"TemplateElement"!==t.type||!!t.value.raw||!e});if(s.length>=3){var r=s[0];"TemplateElement"===r.type&&""===r.value.raw&&"TemplateElement"===s[2].type&&s.shift()}var n=!(1===this.quasis.length&&0===this.expressions.length||"TemplateLiteral"===this.parent.type||"AssignmentExpression"===this.parent.type||"AssignmentPattern"===this.parent.type||"VariableDeclarator"===this.parent.type||"BinaryExpression"===this.parent.type&&"+"===this.parent.operator);n&&e.appendRight(this.start,"(");var a=this.start;s.forEach(function(t,i){var s=0===i?n?"(":"":" + ";if("TemplateElement"===t.type)e.overwrite(a,t.end,s+JSON.stringify(t.value.cooked));else{var r="Identifier"!==t.type;r&&(s+="("),e.remove(a,t.start),s&&e.prependRight(t.start,s),r&&e.appendLeft(t.end,")")}a=t.end}),n&&e.appendLeft(a,")"),e.overwrite(a,this.end,"",{contentOnly:!0})}},e}(ge),ThisExpression:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(t){var e=this.findLexicalBoundary();if(t.letConst)for(var i=this.findNearest(Xe);i&&i.depth>e.depth;)i.thisRefs.push(this),i=i.parent.findNearest(Xe);if(t.arrow){var s=this.findNearest("ArrowFunctionExpression");s&&s.depth>e.depth&&(this.alias=e.getThisAlias())}},e.prototype.transpile=function(t){this.alias&&t.overwrite(this.start,this.end,this.alias,{storeName:!0,contentOnly:!0})},e}(ge),UpdateExpression:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){if("Identifier"===this.argument.type){var i=this.findScope(!1).findDeclaration(this.argument.name),s=i&&i.node.ancestor(3);s&&"ForStatement"===s.type&&s.body.contains(this)&&(s.reassigned[this.argument.name]=!0)}t.prototype.initialise.call(this,e)},e.prototype.transpile=function(e,i){"Identifier"===this.argument.type&&Fe(this.argument,this.findScope(!1)),t.prototype.transpile.call(this,e,i)},e}(ge),VariableDeclaration:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(t){this.scope=this.findScope("var"===this.kind),this.declarations.forEach(function(e){return e.initialise(t)})},e.prototype.transpile=function(t,e){var i=this,s=this.getIndentation(),r=this.kind;if(e.letConst&&"var"!==r&&t.overwrite(this.start,this.start+this.kind.length,r="var",{contentOnly:!0,storeName:!0}),e.destructuring&&"ForOfStatement"!==this.parent.type&&"ForInStatement"!==this.parent.type){var n,a=this.start;this.declarations.forEach(function(r,o){if(r.transpile(t,e),"Identifier"===r.id.type)o>0&&"Identifier"!==i.declarations[o-1].id.type&&t.overwrite(a,r.id.start,"var ");else{var p=Xe.test(i.parent.type);0===o?t.remove(a,r.id.start):t.overwrite(a,r.id.start,";\n"+s);var h="Identifier"===r.init.type&&!r.init.rewritten,c=h?r.init.alias||r.init.name:r.findScope(!0).createIdentifier("ref");a=r.start;var l=[];h?t.remove(r.id.end,r.end):l.push(function(e,i,s){t.prependRight(r.id.end,"var "+c),t.appendLeft(r.init.end,""+s),t.move(r.id.end,r.end,e)});var u=r.findScope(!1);Ae(t,function(t){return u.createIdentifier(t)},function(t){return u.resolveName(t.name)},r.id,c,p,l);var d=p?"var ":"",f=p?", ":";\n"+s;l.forEach(function(t,e){o===i.declarations.length-1&&e===l.length-1&&(f=p?"":";"),t(r.start,0===e?d:"",f)})}a=r.end,n="Identifier"!==r.id.type}),n&&this.end>a&&t.overwrite(a,this.end,"",{contentOnly:!0})}else this.declarations.forEach(function(i){i.transpile(t,e)})},e}(ge),VariableDeclarator:function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.initialise=function(e){var i=this.parent.kind;"let"===i&&"ForStatement"===this.parent.parent.type&&(i="for.let"),this.parent.scope.addDeclaration(this.id,i),t.prototype.initialise.call(this,e)},e.prototype.transpile=function(t,e){if(!this.init&&e.letConst&&"var"!==this.parent.kind){var i=this.findNearest(/Function|^For(In|Of)?Statement|^(?:Do)?WhileStatement/);!i||/Function/.test(i.type)||this.isLeftDeclaratorOfLoop()||t.appendLeft(this.id.end," = (void 0)")}this.id&&this.id.transpile(t,e),this.init&&this.init.transpile(t,e)},e.prototype.isLeftDeclaratorOfLoop=function(){return this.parent&&"VariableDeclaration"===this.parent.type&&this.parent.parent&&("ForInStatement"===this.parent.parent.type||"ForOfStatement"===this.parent.parent.type)&&this.parent.parent.left&&this.parent.parent.left.declarations[0]===this},e}(ge),WhileStatement:Ye},yi={Program:["body"],Literal:[]},vi={IfStatement:"consequent",ForStatement:"body",ForInStatement:"body",ForOfStatement:"body",WhileStatement:"body",DoWhileStatement:"body",ArrowFunctionExpression:"body"};function xi(t,e,i,s){this.type="Root",this.jsx=s.jsx||"React.createElement",this.options=s,this.source=t,this.magicString=new fe(t),this.ast=e,this.depth=0,function t(e,i){if(e)if("length"in e)for(var s=e.length;s--;)t(e[s],i);else if(!e.__wrapped){e.__wrapped=!0,yi[e.type]||(yi[e.type]=Object.keys(e).filter(function(t){return"object"==typeof e[t]}));var r=vi[e.type];if(r&&"BlockStatement"!==e[r].type){var n=e[r];e[r]={start:n.start,end:n.end,type:"BlockStatement",body:[n],synthetic:!0}}e.parent=i,e.program=i.program||i,e.depth=i.depth+1,e.keys=yi[e.type],e.indentation=void 0;for(var a=0,o=yi[e.type];a<o.length;a+=1)t(e[o[a]],e);e.program.magicString.addSourcemapLocation(e.start),e.program.magicString.addSourcemapLocation(e.end),e.__proto__=(("BlockStatement"===e.type?Pe:gi[e.type])||ge).prototype}}(this.body=e,this),this.body.__proto__=Pe.prototype,this.templateLiteralQuasis=Object.create(null);for(var r=0;r<this.body.body.length;++r)if(!this.body.body[r].directive){this.prependAt=this.body.body[r].start;break}this.objectWithoutPropertiesHelper=null,this.indentExclusionElements=[],this.body.initialise(i),this.indentExclusions=Object.create(null);for(var n=0,a=this.indentExclusionElements;n<a.length;n+=1)for(var o=a[n],p=o.start;p<o.end;p+=1)this.indentExclusions[p]=!0;this.body.transpile(this.magicString,i)}xi.prototype={export:function(t){return void 0===t&&(t={}),{code:this.magicString.toString(),map:this.magicString.generateMap({file:t.file,source:t.source,includeContent:!1!==t.includeContent})}},findNearest:function(){return null},findScope:function(){return null},getObjectWithoutPropertiesHelper:function(t){return this.objectWithoutPropertiesHelper||(this.objectWithoutPropertiesHelper=this.body.scope.createIdentifier("objectWithoutProperties"),t.prependLeft(this.prependAt,"function "+this.objectWithoutPropertiesHelper+" (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }\n")),this.objectWithoutPropertiesHelper}};var bi=M.extend(Kt,Ht(),function(t){return class extends t{getTokenFromCode(t){if(35===t){++this.pos;const t=this.readWord1();return this.finishToken(ee,t)}return super.getTokenFromCode(t)}parseClass(t,e){this._privateBoundNamesStack=this._privateBoundNamesStack||[];const i=Object.create(this._privateBoundNamesStack[this._privateBoundNamesStack.length-1]||null);this._privateBoundNamesStack.push(i),this._unresolvedPrivateNamesStack=this._unresolvedPrivateNamesStack||[];const s=Object.create(null);this._unresolvedPrivateNamesStack.push(s);const r=super.parseClass(t,e);if(this._privateBoundNamesStack.pop(),this._unresolvedPrivateNamesStack.pop(),this._unresolvedPrivateNamesStack.length)Object.assign(this._unresolvedPrivateNamesStack[this._unresolvedPrivateNamesStack.length-1],s);else{const t=Object.keys(s);t.length&&(t.sort((t,e)=>s[t]-s[e]),this.raise(s[t[0]],"Usage of undeclared private name"))}return r}parseClassElement(t){if(this.eat(Yt.semi))return null;const e=this.startNode();if(!(this.options.ecmaVersion>=8)||this.type!=ee){if(this.isContextual("async")){$t.lastIndex=this.pos;let t=$t.exec(this.input),i=this.input.charAt(this.pos+t[0].length);if(";"===i||"="===i)return e.key=this.parseIdent(!0),e.computed=!1,Zt.call(this,e),this.finishNode(e,"FieldDefinition"),this.semicolon(),e}return super.parseClassElement.apply(this,arguments)}return e.key=te.call(this),e.computed=!1,"constructor"==e.key.name&&this.raise(e.start,"Classes may not have a field named constructor"),Object.prototype.hasOwnProperty.call(this._privateBoundNamesStack[this._privateBoundNamesStack.length-1],e.key.name)&&this.raise(e.start,"Duplicate private element"),this._privateBoundNamesStack[this._privateBoundNamesStack.length-1][e.key.name]=!0,delete this._unresolvedPrivateNamesStack[this._unresolvedPrivateNamesStack.length-1][e.key.name],Zt.call(this,e),this.finishNode(e,"FieldDefinition"),this.semicolon(),e}parseClassMethod(t,e,i,s){return e||i||"method"!=t.kind||t.static||this.options.ecmaVersion<8||this.type==Yt.parenL?super.parseClassMethod.apply(this,arguments):(Zt.call(this,t),delete t.kind,delete t.static,t=this.finishNode(t,"FieldDefinition"),this.semicolon(),t)}parseSubscripts(t,e,i,s){for(let r;;){if(!(r=this.eat(Yt.bracketL))&&!this.eat(Yt.dot))return super.parseSubscripts(t,e,i,s);{let s=this.startNodeAt(e,i);s.object=t,r?s.property=this.parseExpression():this.type==ee?(s.property=te.call(this),this._privateBoundNamesStack.length&&this._privateBoundNamesStack[this._privateBoundNamesStack.length-1][s.property.name]||(this._unresolvedPrivateNamesStack[this._unresolvedPrivateNamesStack.length-1][s.property.name]=s.property.start)):s.property=this.parseIdent(!0),s.computed=Boolean(r),r&&this.expect(Yt.bracketR),t=this.finishNode(s,"MemberExpression")}}}parseMaybeUnary(t,e){const i=super.parseMaybeUnary(t,e);return"delete"==i.operator&&"MemberExpression"==i.argument.type&&"PrivateName"==i.argument.property.type&&this.raise(i.start,"Private elements may not be deleted"),i}parseIdent(t,e){const i=super.parseIdent(t,e);return this._inFieldValue&&"arguments"==i.name&&this.raise(i.start,"A class field initializer may not contain arguments"),i}parseExprAtom(t){const e=super.parseExprAtom(t);return this._inFieldValue&&"Super"==e.type&&this.raise(e.start,"A class field initializer may not contain super"),e}}}),_i=["getterSetter","arrow","classes","computedProperty","conciseMethodProperty","defaultParameter","destructuring","forOf","generator","letConst","moduleExport","moduleImport","numericLiteral","parameterDestructuring","spreadRest","stickyRegExp","templateString","exponentiation","reservedProperties","trailingFunctionCommas","asyncAwait","objectRestSpread"],Si=["dangerousTaggedTemplateString","dangerousForOf"];function ki(t,e){var i;void 0===e&&(e={});var s=null;try{i=bi.parse(t,{ecmaVersion:10,preserveParens:!0,sourceType:"module",allowAwaitOutsideFunction:!0,allowReturnOutsideFunction:!0,allowHashBang:!0,onComment:function(t,e){if(!s){var i=/@jsx\s+([^\s]+)/.exec(e);i&&(s=i[1])}}}),e.jsx=s||e.jsx}catch(e){throw e.snippet=ke(t,e.loc),e.toString=function(){return e.name+": "+e.message+"\n"+e.snippet},e}var r=Object.create(null);return _i.forEach(function(t){r[t]=!0}),Si.forEach(function(t){r[t]=!0}),Object.keys(e.transforms||{}).forEach(function(t){if("modules"===t)return"moduleImport"in e.transforms||(r.moduleImport=e.transforms.modules),void("moduleExport"in e.transforms||(r.moduleExport=e.transforms.modules));if(!(t in r))throw new Error("Unknown transform '"+t+"'");r[t]=e.transforms[t]}),!0===e.objectAssign&&(e.objectAssign="Object.assign"),new xi(t,i,r,e).export(e)}
//# sourceMappingURL=buble.es.js.map

;// CONCATENATED MODULE: ../node_modules/@docusaurus/theme-live-codeblock/lib/custom-buble.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // fork of Buble which removes Buble's large dependency and weighs in
// at a smaller size of ~51kB
// https://github.com/FormidableLabs/react-live#what-bundle-size-can-i-expect
// This file is designed to mimic what's written in
// https://github.com/kitten/buble/blob/mini/src/index.js, with custom transforms options,
// so that webpack can consume it correctly.
function transform(source,options){return ki(source,Object.assign({},options,{transforms:Object.assign({asyncAwait:false,classes:false,getterSetter:false},options.transforms)}));}
// EXTERNAL MODULE: ../node_modules/react-live/node_modules/core-js/fn/object/assign.js
var object_assign = __webpack_require__(4076);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);
;// CONCATENATED MODULE: ../node_modules/react-live/dist/react-live.es.js







var theme = {
  plain: {
    color: '#C5C8C6',
    backgroundColor: '#1D1F21'
  },
  styles: [{
    types: ['prolog', 'comment', 'doctype', 'cdata'],
    style: {
      color: 'hsl(30, 20%, 50%)'
    }
  }, {
    types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
    style: { color: 'hsl(350, 40%, 70%)' }
  }, {
    types: ['attr-name', 'string', 'char', 'builtin', 'insterted'],
    style: {
      color: 'hsl(75, 70%, 60%)'
    }
  }, {
    types: ['operator', 'entity', 'url', 'string', 'variable', 'language-css'],
    style: {
      color: 'hsl(40, 90%, 60%)'
    }
  }, {
    types: ['deleted'],
    style: {
      color: 'rgb(255, 85, 85)'
    }
  }, {
    types: ['italic'],
    style: {
      fontStyle: 'italic'
    }
  }, {
    types: ['important', 'bold'],
    style: {
      fontWeight: 'bold'
    }
  }, {
    types: ['regex', 'important'],
    style: {
      color: '#e90'
    }
  }, {
    types: ['atrule', 'attr-value', 'keyword'],
    style: {
      color: 'hsl(350, 40%, 70%)'
    }
  }, {
    types: ['punctuation', 'symbol'],
    style: {
      opacity: '0.7'
    }
  }]
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var CodeEditor = function (_Component) {
  inherits(CodeEditor, _Component);

  function CodeEditor() {
    var _temp, _this, _ret;

    classCallCheck(this, CodeEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      code: ''
    }, _this.updateContent = function (code) {
      _this.setState({ code: code }, function () {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state.code);
        }
      });
    }, _this.highlightCode = function (code) {
      return react.createElement(
        dist/* default */.ZP,
        {
          Prism: prism/* default */.Z,
          code: code,
          theme: _this.props.theme || theme,
          language: _this.props.language
        },
        function (_ref) {
          var tokens = _ref.tokens,
              getLineProps = _ref.getLineProps,
              getTokenProps = _ref.getTokenProps;
          return react.createElement(
            react.Fragment,
            null,
            tokens.map(function (line, i) {
              return (
                // eslint-disable-next-line react/jsx-key
                react.createElement(
                  'div',
                  getLineProps({ line: line, key: i }),
                  line.map(function (token, key) {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      react.createElement('span', getTokenProps({ token: token, key: key }))
                    );
                  })
                )
              );
            })
          );
        }
      );
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  CodeEditor.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.code !== state.prevCodeProp) {
      return { code: props.code, prevCodeProp: props.code };
    }

    return null;
  };

  CodeEditor.prototype.render = function render() {
    // eslint-disable-next-line no-unused-vars
    var _props = this.props,
        style = _props.style,
        _code = _props.code,
        onChange = _props.onChange,
        language = _props.language,
        theme$$1 = _props.theme,
        rest = objectWithoutProperties(_props, ['style', 'code', 'onChange', 'language', 'theme']);
    var code = this.state.code;


    var baseTheme = theme$$1 && _typeof(theme$$1.plain) === 'object' ? theme$$1.plain : {};

    return react.createElement(lib/* default */.Z, _extends({
      value: code,
      padding: 10,
      highlight: this.highlightCode,
      onValueChange: this.updateContent,
      style: _extends({
        whiteSpace: 'pre',
        fontFamily: 'monospace'
      }, baseTheme, style)
    }, rest));
  };

  return CodeEditor;
}(react.Component);

var LiveContext = (0,react.createContext)({});

var _poly = { assign: (assign_default()) };

var opts = {
  objectAssign: '_poly.assign',
  transforms: {
    dangerousForOf: true,
    dangerousTaggedTemplateString: true
  }
};

var transform$1 = (function (code) {
  return transform(code, opts).code;
});

var errorBoundary = function errorBoundary(Element, errorCallback) {
  return function (_Component) {
    inherits(ErrorBoundary, _Component);

    function ErrorBoundary() {
      classCallCheck(this, ErrorBoundary);
      return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ErrorBoundary.prototype.componentDidCatch = function componentDidCatch(error) {
      errorCallback(error);
    };

    ErrorBoundary.prototype.render = function render() {
      return typeof Element === 'function' ? react.createElement(Element, null) : Element;
    };

    return ErrorBoundary;
  }(react.Component);
};

var evalCode = function evalCode(code, scope) {
  var scopeKeys = Object.keys(scope);
  var scopeValues = scopeKeys.map(function (key) {
    return scope[key];
  });
  // eslint-disable-next-line no-new-func
  var res = new (Function.prototype.bind.apply(Function, [null].concat(['_poly', 'React'], scopeKeys, [code])))();
  return res.apply(undefined, [_poly, react].concat(scopeValues));
};

var generateElement = function generateElement(_ref, errorCallback) {
  var _ref$code = _ref.code,
      code = _ref$code === undefined ? '' : _ref$code,
      _ref$scope = _ref.scope,
      scope = _ref$scope === undefined ? {} : _ref$scope;

  // NOTE: Remove trailing semicolon to get an actual expression.
  var codeTrimmed = code.trim().replace(/;$/, '');

  // NOTE: Workaround for classes and arrow functions.
  var transformed = transform$1('return (' + codeTrimmed + ')').trim();
  return errorBoundary(evalCode(transformed, scope), errorCallback);
};

var renderElementAsync = function renderElementAsync(_ref2, resultCallback, errorCallback
// eslint-disable-next-line consistent-return
) {
  var _ref2$code = _ref2.code,
      code = _ref2$code === undefined ? '' : _ref2$code,
      _ref2$scope = _ref2.scope,
      scope = _ref2$scope === undefined ? {} : _ref2$scope;

  var render = function render(element) {
    if (typeof element === 'undefined') {
      errorCallback(new SyntaxError('`render` must be called with valid JSX.'));
    } else {
      resultCallback(errorBoundary(element, errorCallback));
    }
  };

  if (!/render\s*\(/.test(code)) {
    return errorCallback(new SyntaxError('No-Inline evaluations must call `render`.'));
  }

  evalCode(transform$1(code), _extends({}, scope, { render: render }));
};

var LiveProvider = function (_Component) {
  inherits(LiveProvider, _Component);

  function LiveProvider() {
    var _temp, _this, _ret;

    classCallCheck(this, LiveProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onChange = function (code) {
      var _this$props = _this.props,
          scope = _this$props.scope,
          transformCode = _this$props.transformCode,
          noInline = _this$props.noInline;

      _this.transpile({ code: code, scope: scope, transformCode: transformCode, noInline: noInline });
    }, _this.onError = function (error) {
      _this.setState({ error: error.toString() });
    }, _this.transpile = function (_ref) {
      var code = _ref.code,
          scope = _ref.scope,
          transformCode = _ref.transformCode,
          _ref$noInline = _ref.noInline,
          noInline = _ref$noInline === undefined ? false : _ref$noInline;

      // Transpilation arguments
      var input = {
        code: transformCode ? transformCode(code) : code,
        scope: scope
      };

      var errorCallback = function errorCallback(err) {
        return _this.setState({ element: undefined, error: err.toString() });
      };
      var renderElement = function renderElement(element) {
        return _this.setState(_extends({}, state, { element: element }));
      };

      // State reset object
      var state = { unsafeWrapperError: undefined, error: undefined };

      try {
        if (noInline) {
          _this.setState(_extends({}, state, { element: null })); // Reset output for async (no inline) evaluation
          renderElementAsync(input, renderElement, errorCallback);
        } else {
          renderElement(generateElement(input, errorCallback));
        }
      } catch (error) {
        _this.setState(_extends({}, state, { error: error.toString() }));
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  // eslint-disable-next-line camelcase
  LiveProvider.prototype.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    var _props = this.props,
        code = _props.code,
        scope = _props.scope,
        transformCode = _props.transformCode,
        noInline = _props.noInline;


    this.transpile({ code: code, scope: scope, transformCode: transformCode, noInline: noInline });
  };

  LiveProvider.prototype.componentDidUpdate = function componentDidUpdate(_ref2) {
    var prevCode = _ref2.code,
        prevScope = _ref2.scope,
        prevNoInline = _ref2.noInline,
        prevTransformCode = _ref2.transformCode;
    var _props2 = this.props,
        code = _props2.code,
        scope = _props2.scope,
        noInline = _props2.noInline,
        transformCode = _props2.transformCode;

    if (code !== prevCode || scope !== prevScope || noInline !== prevNoInline || transformCode !== prevTransformCode) {
      this.transpile({ code: code, scope: scope, transformCode: transformCode, noInline: noInline });
    }
  };

  LiveProvider.prototype.render = function render() {
    var _props3 = this.props,
        children = _props3.children,
        code = _props3.code,
        language = _props3.language,
        theme = _props3.theme,
        disabled = _props3.disabled;


    return react.createElement(
      LiveContext.Provider,
      {
        value: _extends({}, this.state, {
          code: code,
          language: language,
          theme: theme,
          disabled: disabled,
          onError: this.onError,
          onChange: this.onChange
        })
      },
      children
    );
  };

  return LiveProvider;
}(react.Component);

LiveProvider.defaultProps = {
  code: '',
  noInline: false,
  language: 'jsx',
  disabled: false
};

function LiveEditor(props) {
  return react.createElement(
    LiveContext.Consumer,
    null,
    function (_ref) {
      var code = _ref.code,
          language = _ref.language,
          theme = _ref.theme,
          disabled = _ref.disabled,
          onChange = _ref.onChange;
      return react.createElement(CodeEditor, _extends({
        theme: theme,
        code: code,
        language: language,
        disabled: disabled,
        onChange: onChange
      }, props));
    }
  );
}

function LiveError(props) {
  return react.createElement(
    LiveContext.Consumer,
    null,
    function (_ref) {
      var error = _ref.error;
      return error ? react.createElement(
        'pre',
        props,
        error
      ) : null;
    }
  );
}

function LivePreview(_ref) {
  var Component$$1 = _ref.Component,
      rest = objectWithoutProperties(_ref, ['Component']);

  return react.createElement(
    Component$$1,
    rest,
    react.createElement(
      LiveContext.Consumer,
      null,
      function (_ref2) {
        var Element = _ref2.element;
        return Element && react.createElement(Element, null);
      }
    )
  );
}

LivePreview.defaultProps = {
  Component: 'div'
};

function withLive(WrappedComponent) {
  var WithLive = function (_Component) {
    inherits(WithLive, _Component);

    function WithLive() {
      classCallCheck(this, WithLive);
      return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    WithLive.prototype.render = function render() {
      var _this2 = this;

      return React.createElement(
        LiveContext.Consumer,
        null,
        function (live) {
          return React.createElement(WrappedComponent, _extends({ live: live }, _this2.props));
        }
      );
    };

    return WithLive;
  }(Component);

  return WithLive;
}




/***/ }),

/***/ 4076:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(230);
module.exports = __webpack_require__(1574).Object.assign;


/***/ }),

/***/ 6142:
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 5894:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(4644);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 9216:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(74);
var toLength = __webpack_require__(1865);
var toAbsoluteIndex = __webpack_require__(8352);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ 8972:
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 1574:
/***/ (function(module) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 7028:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(6142);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 1036:
/***/ (function(module) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 6522:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9862)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 6968:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(4644);
var document = (__webpack_require__(3175).document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 7572:
/***/ (function(module) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ 4581:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(3175);
var core = __webpack_require__(1574);
var hide = __webpack_require__(2160);
var redefine = __webpack_require__(7653);
var ctx = __webpack_require__(7028);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 9862:
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 2230:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(8208)('native-function-to-string', Function.toString);


/***/ }),

/***/ 3175:
/***/ (function(module) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 8187:
/***/ (function(module) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 2160:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var dP = __webpack_require__(2868);
var createDesc = __webpack_require__(7016);
module.exports = __webpack_require__(6522) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 5825:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = !__webpack_require__(6522) && !__webpack_require__(9862)(function () {
  return Object.defineProperty(__webpack_require__(6968)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 8645:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(8972);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ 4644:
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 7927:
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ 9574:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(6522);
var getKeys = __webpack_require__(1146);
var gOPS = __webpack_require__(7431);
var pIE = __webpack_require__(7037);
var toObject = __webpack_require__(2813);
var IObject = __webpack_require__(8645);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(9862)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ 2868:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var anObject = __webpack_require__(5894);
var IE8_DOM_DEFINE = __webpack_require__(5825);
var toPrimitive = __webpack_require__(2951);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6522) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 7431:
/***/ (function(__unused_webpack_module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 44:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(8187);
var toIObject = __webpack_require__(74);
var arrayIndexOf = __webpack_require__(9216)(false);
var IE_PROTO = __webpack_require__(7276)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ 1146:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(44);
var enumBugKeys = __webpack_require__(7572);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ 7037:
/***/ (function(__unused_webpack_module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ 7016:
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 7653:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(3175);
var hide = __webpack_require__(2160);
var has = __webpack_require__(8187);
var SRC = __webpack_require__(2552)('src');
var $toString = __webpack_require__(2230);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(1574).inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ 7276:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(8208)('keys');
var uid = __webpack_require__(2552);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ 8208:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var core = __webpack_require__(1574);
var global = __webpack_require__(3175);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(7927) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 8352:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(8134);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ 8134:
/***/ (function(module) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 74:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(8645);
var defined = __webpack_require__(1036);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ 1865:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(8134);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 2813:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(1036);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ 2951:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4644);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 2552:
/***/ (function(module) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 230:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4581);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(9574) });


/***/ }),

/***/ 2062:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7378);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* global global */

var KEYCODE_ENTER = 13;
var KEYCODE_TAB = 9;
var KEYCODE_BACKSPACE = 8;
var KEYCODE_Y = 89;
var KEYCODE_Z = 90;
var KEYCODE_M = 77;
var KEYCODE_PARENS = 57;
var KEYCODE_BRACKETS = 219;
var KEYCODE_QUOTE = 222;
var KEYCODE_BACK_QUOTE = 192;
var KEYCODE_ESCAPE = 27;

var HISTORY_LIMIT = 100;
var HISTORY_TIME_GAP = 3000;

var isWindows = 'navigator' in __webpack_require__.g && /Win/i.test(navigator.platform);
var isMacLike = 'navigator' in __webpack_require__.g && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

var className = 'npm__react-simple-code-editor__textarea';

var cssText = /* CSS */'\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.' + className + ':empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn\'t support \'-webkit-text-fill-color\'\n    * So we use \'color: transparent\' to make the text transparent on IE\n    * Unlike other browsers, it doesn\'t affect caret color in IE\n    */\n  .' + className + ' {\n    color: transparent !important;\n  }\n\n  .' + className + '::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n';

var Editor = function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Editor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Editor.__proto__ || Object.getPrototypeOf(Editor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      capture: true
    }, _this._recordCurrentState = function () {
      var input = _this._input;

      if (!input) return;

      // Save current state of the input
      var value = input.value,
          selectionStart = input.selectionStart,
          selectionEnd = input.selectionEnd;


      _this._recordChange({
        value: value,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      });
    }, _this._getLines = function (text, position) {
      return text.substring(0, position).split('\n');
    }, _this._recordChange = function (record) {
      var overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _this$_history = _this._history,
          stack = _this$_history.stack,
          offset = _this$_history.offset;


      if (stack.length && offset > -1) {
        // When something updates, drop the redo operations
        _this._history.stack = stack.slice(0, offset + 1);

        // Limit the number of operations to 100
        var count = _this._history.stack.length;

        if (count > HISTORY_LIMIT) {
          var extras = count - HISTORY_LIMIT;

          _this._history.stack = stack.slice(extras, count);
          _this._history.offset = Math.max(_this._history.offset - extras, 0);
        }
      }

      var timestamp = Date.now();

      if (overwrite) {
        var last = _this._history.stack[_this._history.offset];

        if (last && timestamp - last.timestamp < HISTORY_TIME_GAP) {
          // A previous entry exists and was in short interval

          // Match the last word in the line
          var re = /[^a-z0-9]([a-z0-9]+)$/i;

          // Get the previous line
          var previous = _this._getLines(last.value, last.selectionStart).pop().match(re);

          // Get the current line
          var current = _this._getLines(record.value, record.selectionStart).pop().match(re);

          if (previous && current && current[1].startsWith(previous[1])) {
            // The last word of the previous line and current line match
            // Overwrite previous entry so that undo will remove whole word
            _this._history.stack[_this._history.offset] = _extends({}, record, { timestamp: timestamp });

            return;
          }
        }
      }

      // Add the new operation to the stack
      _this._history.stack.push(_extends({}, record, { timestamp: timestamp }));
      _this._history.offset++;
    }, _this._updateInput = function (record) {
      var input = _this._input;

      if (!input) return;

      // Update values and selection state
      input.value = record.value;
      input.selectionStart = record.selectionStart;
      input.selectionEnd = record.selectionEnd;

      _this.props.onValueChange(record.value);
    }, _this._applyEdits = function (record) {
      // Save last selection state
      var input = _this._input;
      var last = _this._history.stack[_this._history.offset];

      if (last && input) {
        _this._history.stack[_this._history.offset] = _extends({}, last, {
          selectionStart: input.selectionStart,
          selectionEnd: input.selectionEnd
        });
      }

      // Save the changes
      _this._recordChange(record);
      _this._updateInput(record);
    }, _this._undoEdit = function () {
      var _this$_history2 = _this._history,
          stack = _this$_history2.stack,
          offset = _this$_history2.offset;

      // Get the previous edit

      var record = stack[offset - 1];

      if (record) {
        // Apply the changes and update the offset
        _this._updateInput(record);
        _this._history.offset = Math.max(offset - 1, 0);
      }
    }, _this._redoEdit = function () {
      var _this$_history3 = _this._history,
          stack = _this$_history3.stack,
          offset = _this$_history3.offset;

      // Get the next edit

      var record = stack[offset + 1];

      if (record) {
        // Apply the changes and update the offset
        _this._updateInput(record);
        _this._history.offset = Math.min(offset + 1, stack.length - 1);
      }
    }, _this._handleKeyDown = function (e) {
      var _this$props = _this.props,
          tabSize = _this$props.tabSize,
          insertSpaces = _this$props.insertSpaces,
          ignoreTabKey = _this$props.ignoreTabKey,
          onKeyDown = _this$props.onKeyDown;


      if (onKeyDown) {
        onKeyDown(e);

        if (e.defaultPrevented) {
          return;
        }
      }

      if (e.keyCode === KEYCODE_ESCAPE) {
        e.target.blur();
      }

      var _e$target = e.target,
          value = _e$target.value,
          selectionStart = _e$target.selectionStart,
          selectionEnd = _e$target.selectionEnd;


      var tabCharacter = (insertSpaces ? ' ' : '\t').repeat(tabSize);

      if (e.keyCode === KEYCODE_TAB && !ignoreTabKey && _this.state.capture) {
        // Prevent focus change
        e.preventDefault();

        if (e.shiftKey) {
          // Unindent selected lines
          var linesBeforeCaret = _this._getLines(value, selectionStart);
          var startLine = linesBeforeCaret.length - 1;
          var endLine = _this._getLines(value, selectionEnd).length - 1;
          var nextValue = value.split('\n').map(function (line, i) {
            if (i >= startLine && i <= endLine && line.startsWith(tabCharacter)) {
              return line.substring(tabCharacter.length);
            }

            return line;
          }).join('\n');

          if (value !== nextValue) {
            var startLineText = linesBeforeCaret[startLine];

            _this._applyEdits({
              value: nextValue,
              // Move the start cursor if first line in selection was modified
              // It was modified only if it started with a tab
              selectionStart: startLineText.startsWith(tabCharacter) ? selectionStart - tabCharacter.length : selectionStart,
              // Move the end cursor by total number of characters removed
              selectionEnd: selectionEnd - (value.length - nextValue.length)
            });
          }
        } else if (selectionStart !== selectionEnd) {
          // Indent selected lines
          var _linesBeforeCaret = _this._getLines(value, selectionStart);
          var _startLine = _linesBeforeCaret.length - 1;
          var _endLine = _this._getLines(value, selectionEnd).length - 1;
          var _startLineText = _linesBeforeCaret[_startLine];

          _this._applyEdits({
            value: value.split('\n').map(function (line, i) {
              if (i >= _startLine && i <= _endLine) {
                return tabCharacter + line;
              }

              return line;
            }).join('\n'),
            // Move the start cursor by number of characters added in first line of selection
            // Don't move it if it there was no text before cursor
            selectionStart: /\S/.test(_startLineText) ? selectionStart + tabCharacter.length : selectionStart,
            // Move the end cursor by total number of characters added
            selectionEnd: selectionEnd + tabCharacter.length * (_endLine - _startLine + 1)
          });
        } else {
          var updatedSelection = selectionStart + tabCharacter.length;

          _this._applyEdits({
            // Insert tab character at caret
            value: value.substring(0, selectionStart) + tabCharacter + value.substring(selectionEnd),
            // Update caret position
            selectionStart: updatedSelection,
            selectionEnd: updatedSelection
          });
        }
      } else if (e.keyCode === KEYCODE_BACKSPACE) {
        var hasSelection = selectionStart !== selectionEnd;
        var textBeforeCaret = value.substring(0, selectionStart);

        if (textBeforeCaret.endsWith(tabCharacter) && !hasSelection) {
          // Prevent default delete behaviour
          e.preventDefault();

          var _updatedSelection = selectionStart - tabCharacter.length;

          _this._applyEdits({
            // Remove tab character at caret
            value: value.substring(0, selectionStart - tabCharacter.length) + value.substring(selectionEnd),
            // Update caret position
            selectionStart: _updatedSelection,
            selectionEnd: _updatedSelection
          });
        }
      } else if (e.keyCode === KEYCODE_ENTER) {
        // Ignore selections
        if (selectionStart === selectionEnd) {
          // Get the current line
          var line = _this._getLines(value, selectionStart).pop();
          var matches = line.match(/^\s+/);

          if (matches && matches[0]) {
            e.preventDefault();

            // Preserve indentation on inserting a new line
            var indent = '\n' + matches[0];
            var _updatedSelection2 = selectionStart + indent.length;

            _this._applyEdits({
              // Insert indentation character at caret
              value: value.substring(0, selectionStart) + indent + value.substring(selectionEnd),
              // Update caret position
              selectionStart: _updatedSelection2,
              selectionEnd: _updatedSelection2
            });
          }
        }
      } else if (e.keyCode === KEYCODE_PARENS || e.keyCode === KEYCODE_BRACKETS || e.keyCode === KEYCODE_QUOTE || e.keyCode === KEYCODE_BACK_QUOTE) {
        var chars = void 0;

        if (e.keyCode === KEYCODE_PARENS && e.shiftKey) {
          chars = ['(', ')'];
        } else if (e.keyCode === KEYCODE_BRACKETS) {
          if (e.shiftKey) {
            chars = ['{', '}'];
          } else {
            chars = ['[', ']'];
          }
        } else if (e.keyCode === KEYCODE_QUOTE) {
          if (e.shiftKey) {
            chars = ['"', '"'];
          } else {
            chars = ["'", "'"];
          }
        } else if (e.keyCode === KEYCODE_BACK_QUOTE && !e.shiftKey) {
          chars = ['`', '`'];
        }

        // If text is selected, wrap them in the characters
        if (selectionStart !== selectionEnd && chars) {
          e.preventDefault();

          _this._applyEdits({
            value: value.substring(0, selectionStart) + chars[0] + value.substring(selectionStart, selectionEnd) + chars[1] + value.substring(selectionEnd),
            // Update caret position
            selectionStart: selectionStart,
            selectionEnd: selectionEnd + 2
          });
        }
      } else if ((isMacLike ? // Trigger undo with ⌘+Z on Mac
      e.metaKey && e.keyCode === KEYCODE_Z : // Trigger undo with Ctrl+Z on other platforms
      e.ctrlKey && e.keyCode === KEYCODE_Z) && !e.shiftKey && !e.altKey) {
        e.preventDefault();

        _this._undoEdit();
      } else if ((isMacLike ? // Trigger redo with ⌘+Shift+Z on Mac
      e.metaKey && e.keyCode === KEYCODE_Z && e.shiftKey : isWindows ? // Trigger redo with Ctrl+Y on Windows
      e.ctrlKey && e.keyCode === KEYCODE_Y : // Trigger redo with Ctrl+Shift+Z on other platforms
      e.ctrlKey && e.keyCode === KEYCODE_Z && e.shiftKey) && !e.altKey) {
        e.preventDefault();

        _this._redoEdit();
      } else if (e.keyCode === KEYCODE_M && e.ctrlKey && (isMacLike ? e.shiftKey : true)) {
        e.preventDefault();

        // Toggle capturing tab key so users can focus away
        _this.setState(function (state) {
          return {
            capture: !state.capture
          };
        });
      }
    }, _this._handleChange = function (e) {
      var _e$target2 = e.target,
          value = _e$target2.value,
          selectionStart = _e$target2.selectionStart,
          selectionEnd = _e$target2.selectionEnd;


      _this._recordChange({
        value: value,
        selectionStart: selectionStart,
        selectionEnd: selectionEnd
      }, true);

      _this.props.onValueChange(value);
    }, _this._history = {
      stack: [],
      offset: -1
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Editor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._recordCurrentState();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          value = _props.value,
          style = _props.style,
          padding = _props.padding,
          highlight = _props.highlight,
          textareaId = _props.textareaId,
          autoFocus = _props.autoFocus,
          disabled = _props.disabled,
          form = _props.form,
          maxLength = _props.maxLength,
          minLength = _props.minLength,
          name = _props.name,
          placeholder = _props.placeholder,
          readOnly = _props.readOnly,
          required = _props.required,
          onClick = _props.onClick,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          onKeyUp = _props.onKeyUp,
          onKeyDown = _props.onKeyDown,
          onValueChange = _props.onValueChange,
          tabSize = _props.tabSize,
          insertSpaces = _props.insertSpaces,
          ignoreTabKey = _props.ignoreTabKey,
          rest = _objectWithoutProperties(_props, ['value', 'style', 'padding', 'highlight', 'textareaId', 'autoFocus', 'disabled', 'form', 'maxLength', 'minLength', 'name', 'placeholder', 'readOnly', 'required', 'onClick', 'onFocus', 'onBlur', 'onKeyUp', 'onKeyDown', 'onValueChange', 'tabSize', 'insertSpaces', 'ignoreTabKey']);

      var contentStyle = {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding
      };

      var highlighted = highlight(value);

      return React.createElement(
        'div',
        _extends({}, rest, { style: _extends({}, styles.container, style) }),
        React.createElement('textarea', {
          ref: function ref(c) {
            return _this2._input = c;
          },
          style: _extends({}, styles.editor, styles.textarea, contentStyle),
          className: className,
          id: textareaId,
          value: value,
          onChange: this._handleChange,
          onKeyDown: this._handleKeyDown,
          onClick: onClick,
          onKeyUp: onKeyUp,
          onFocus: onFocus,
          onBlur: onBlur,
          disabled: disabled,
          form: form,
          maxLength: maxLength,
          minLength: minLength,
          name: name,
          placeholder: placeholder,
          readOnly: readOnly,
          required: required,
          autoFocus: autoFocus,
          autoCapitalize: 'off',
          autoComplete: 'off',
          autoCorrect: 'off',
          spellCheck: false,
          'data-gramm': false
        }),
        React.createElement('pre', _extends({
          'aria-hidden': 'true',
          style: _extends({}, styles.editor, styles.highlight, contentStyle)
        }, typeof highlighted === 'string' ? { dangerouslySetInnerHTML: { __html: highlighted + '<br />' } } : { children: highlighted })),
        React.createElement('style', { type: 'text/css', dangerouslySetInnerHTML: { __html: cssText } })
      );
    }
  }, {
    key: 'session',
    get: function get() {
      return {
        history: this._history
      };
    },
    set: function set(session) {
      this._history = session.history;
    }
  }]);

  return Editor;
}(React.Component);

Editor.defaultProps = {
  tabSize: 2,
  insertSpaces: true,
  ignoreTabKey: false,
  padding: 0
};
exports.Z = Editor;


var styles = {
  container: {
    position: 'relative',
    textAlign: 'left',
    boxSizing: 'border-box',
    padding: 0,
    overflow: 'hidden'
  },
  textarea: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    resize: 'none',
    color: 'inherit',
    overflow: 'hidden',
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    WebkitTextFillColor: 'transparent'
  },
  highlight: {
    position: 'relative',
    pointerEvents: 'none'
  },
  editor: {
    margin: 0,
    border: 0,
    background: 'none',
    boxSizing: 'inherit',
    display: 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontVariantLigatures: 'inherit',
    fontWeight: 'inherit',
    letterSpacing: 'inherit',
    lineHeight: 'inherit',
    tabSize: 'inherit',
    textIndent: 'inherit',
    textRendering: 'inherit',
    textTransform: 'inherit',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    overflowWrap: 'break-word'
  }
};
//# sourceMappingURL=index.js.map

/***/ })

}]);