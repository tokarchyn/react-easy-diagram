/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as lib_core from '@react-easy-diagram/core';
import { observer } from 'mobx-react-lite';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...lib_core,
  observer
};

export default ReactLiveScope;
