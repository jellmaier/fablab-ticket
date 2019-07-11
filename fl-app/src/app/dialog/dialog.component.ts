import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {

  constructor(
   // public dialogRef: MatDialogRef<DialogComponent>,
   // @Inject(MAT_DIALOG_DATA) public data: DialogData
   ) {}

  onNoClick(): void {
   // this.dialogRef.close();
  }

}

