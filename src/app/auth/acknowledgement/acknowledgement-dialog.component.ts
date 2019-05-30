import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialog } from '@auth/models/dialog.interface';

@Component({
  selector: 'app-acknowledgement-dialog',
  templateUrl: './acknowledgement-dialog.component.html',
  styleUrls: ['./acknowledgement-dialog.component.scss']
})
export class AcknowledgementDialogComponent {
  public dialogTitle: string;

  constructor(
    public dialogRef: MatDialogRef<AcknowledgementDialogComponent>,
    @Inject('IDialog') private dialogService: IDialog,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.dialogTitle = data.title;
  }

  public closeDialog() {
    this.dialogRef.close('close');
  }
}
