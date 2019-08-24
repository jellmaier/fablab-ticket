import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Link, LinkService } from '../../services/link.service';
import { Device } from '../../pages/profiles/devices/devices.component';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceComponent implements OnInit {

  @Input() device: Device;

  @Output() buttonClick: EventEmitter<Link> = new EventEmitter();

  constructor( private linkService: LinkService ) { }

  ngOnInit(): void {
  }

  deviceClicked(): void {
    this.buttonClick.emit(this.linkService.getLinkByReltype(this.device._links, 'new-ticket'));
  }

}
