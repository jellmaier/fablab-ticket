import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '../../../services/link.service';
import { BasicResource } from '../../../services/http.service';

export interface DeviceList extends Array<Device> {}

export interface Device extends BasicResource {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevicesComponent implements OnInit {


  @Input()
  devices$: Observable<DeviceList>;

  @Output() buttonClick: EventEmitter<Link> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}