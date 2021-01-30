import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { tipDialogData } from 'src/app/map/map.component';
import { CoreService } from 'src/app/services/core.service';



@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {

  public found: boolean = false;
  public tip: string = '';
  public tips: any = {
    'tube': 'Está no "túnel" onde as plantas dormem',
    'bed': 'Está protegido pela princesa florine',
    'pepper': 'Está com as pimentas',
    'purifier': 'Está em cima daquele comprado mas não usado',
    'mirror': 'Encontrará se olhar para si mesma'
  };
  public loading: boolean = false;

  public answer: string = '';

  constructor(
    private dialogRef: MatDialogRef<TipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: tipDialogData,
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.tip = this.tips[this.data.position]
  }

  public close(): void {
    this.dialogRef.close();
  }

  public showAnswerField(): void {
    this.found = true;
  }

  public sendAnswer(): void {
    this.loading = true;
    this.coreService.createAnswer(this.answer).finally(() => {
      this.dialogRef.close()
    })
  }

}
