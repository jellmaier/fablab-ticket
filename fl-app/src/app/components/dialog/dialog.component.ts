import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  ChangeDetectorRef, OnDestroy, Output
} from '@angular/core';
import { Link, Links } from '../../services/link.service';
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
export class DialogComponent implements OnInit, OnDestroy {

  @Input() openDialogEvent$: EventEmitter<boolean>;
  @Input() data: DialogData;
  @Input() showDialog: boolean = false;

  @Output() buttonClick: EventEmitter<Link> = new EventEmitter();
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();

  show: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.openDialogEvent$.subscribe(event => {
      this.show = event;
      this.cdr.markForCheck();
    });
  }

  closeOverlay():void {
    this.closeDialog.emit(true);
  }

  ngOnDestroy(): void {
    this.openDialogEvent$.unsubscribe();
  }

  buttonClicked(clicked: boolean, link: Link): void {
    if ( clicked ) {
      this.buttonClick.emit(link);
    }
  }


}
