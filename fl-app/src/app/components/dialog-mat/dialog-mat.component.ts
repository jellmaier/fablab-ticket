import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-mat',
  templateUrl: './dialog-mat.component.html',
  styleUrls: ['./dialog-mat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogMatComponent {

  constructor(
   // public dialogRef: MatDialogRef<DialogMatComponent>,
   // @Inject(MAT_DIALOG_DATA) public data: DialogData
   ) {}

  onNoClick(): void {
   // this.dialogRef.close();
  }

}

