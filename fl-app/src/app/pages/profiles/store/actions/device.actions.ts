import { Action } from '@ngrx/store';
import { Link } from '../../../../services/link.service';
import { Device } from '../../devices/devices.component';



export const INIT_DEVICE: string      = '[DEVICE] Init';
export const DEVICES_LOADED: string   = '[DEVICE] Tickets loaded';


export class InitDevice implements Action {
  readonly type: string = INIT_DEVICE;

  constructor(public payload: Link) {}
}

export class DevicesLoaded implements Action {
  readonly type: string = DEVICES_LOADED;

  constructor(public payload: Device[]) {}
}


export type Actions = InitDevice | DevicesLoaded;
