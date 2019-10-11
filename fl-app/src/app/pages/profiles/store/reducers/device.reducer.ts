import * as DeviceActions from '../actions/device.actions';
import { DeviceList } from '../../devices/devices.component';


export function deviceReducer(state: DeviceList, action: DeviceActions.Actions): DeviceList {

  switch (action.type) {
    case DeviceActions.INIT_DEVICE:
      return state;

    case DeviceActions.DEVICES_LOADED:
      return action.payload as DeviceList;

    default:
      return state;
  }
}

