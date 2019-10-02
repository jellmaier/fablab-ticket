import { Ticket } from '../my-tickets/my-tickets.component';
import { Device } from '../devices/devices.component';
import { BasicResource } from '../../../services/http.service';


export const TICKET_STORE_PATH: string = 'ticket';
export const DEVICE_STORE_PATH: string = 'device';
export const PROFILE_STORE_PATH: string = 'profile';

export interface ProfileState {
  readonly ticket: Ticket[];
  readonly device: Device[];
  readonly profile: BasicResource;
}


