import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Link } from '../../services/link.service';
import { BasicResource } from '../../services/http.service';


export interface DialogData extends BasicResource {
  Label: string;
  DeviceInfo: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {

  @Input() data: DialogData;
  @Input() showDialog: boolean = false;

  @Output() buttonClick: EventEmitter<Link> = new EventEmitter();
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  closeOverlay():void {
    this.closeDialog.emit(true);
  }

  buttonClicked(clicked: boolean, link: Link): void {
    if ( clicked ) {
      this.buttonClick.emit(link);
    }
  }


}
