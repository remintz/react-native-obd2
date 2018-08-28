/**
 * Copyright (c) 2016-present JetBridge, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const jetbridge_obd2 = require('react-native').NativeModules.JetBridge_OBDII;

class react_obd2 {
   constructor() {
   }

   ready() {
      jetbridge_obd2.ready();
   }

   getBluetoothDeviceNameList() {
      return jetbridge_obd2.getBluetoothDeviceName();
   }

   setMockUpMode(aEnabled) {
      jetbridge_obd2.setMockUpMode(aEnabled);
   }

   setRemoteDeviceAddress(aDeviceAddress) {
      jetbridge_obd2.setRemoteDeviceAddress(aDeviceAddress);
   }

   startLiveData(period) {
      var thePeriod = typeof period !== 'undefined' ? period : 1000;
      jetbridge_obd2.startLiveData(thePeriod);
   }

   stopLiveData() {
      return jetbridge_obd2.stopLiveData();
   }

   getQueueSize() {
      return jetbridge_obd2.getQueueSize();
   }
}

module.exports = new react_obd2();
