import * as DeviceActions from '../actions/device.actions';
import { Device } from '../../devices/devices.component';


export function deviceReducer(state: Device[], action: DeviceActions.Actions): Device[] {

  switch (action.type) {
    case DeviceActions.INIT_DEVICE:
      return state;

    case DeviceActions.DEVICES_LOADED:
      return action.payload as Device[];

    default:
      return state;
  }
}

