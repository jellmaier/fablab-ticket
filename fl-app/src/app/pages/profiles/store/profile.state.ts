import { TicketList } from '../my-tickets/my-tickets.component';
import { DeviceList } from '../devices/devices.component';
import { Profile } from '../profiles.component';


export const TICKET_STORE_PATH: string = 'ticket';
export const DEVICE_STORE_PATH: string = 'device';
export const PROFILE_STORE_PATH: string = 'profile';

export interface ProfileState {
  readonly ticket: TicketList;
  readonly device: DeviceList;
  readonly profile: Profile
  ;
}


