import { Injectable } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as DeviceActions from '../actions/device.actions';
import { DeviceList } from '../../devices/devices.component';


@Injectable()
export class DeviceEffects {

  loadDevices$: any = createEffect(() => this.deviceActions$.pipe(
    ofType<DeviceActions.InitDevice>(DeviceActions.INIT_DEVICE),
    mergeMap((action) => this.httpService.requestByLink<DeviceList>(action.payload)
      .pipe(
        map((deviceList: DeviceList) => ({ type: DeviceActions.DEVICES_LOADED, payload: deviceList }))
      ))
    )
  );

  constructor(
    private deviceActions$: Actions,
    private httpService: HttpService
  ) {}
}
