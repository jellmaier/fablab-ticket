import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  ChangeDetectorRef, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit, OnDestroy {

  @Input() openDialogEvent$: EventEmitter<boolean>;

  show: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.openDialogEvent$.subscribe(event => {
      this.show = event;
      this.cdr.markForCheck();
    });
  }

  closeOverlay():void {
    this.show = false;
  }

  ngOnDestroy(): void {
    this.openDialogEvent$.unsubscribe();
  }

}
