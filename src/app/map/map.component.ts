import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SuccessComponent } from '../dialogs/success/success.component';
import { TipComponent } from '../dialogs/tip/tip.component';
import { CoreService } from '../services/core.service';

export interface tipDialogData {
  position: string
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private coreService: CoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.coreService.readAnswers().subscribe((answers) => {
    //   if (answers.length === 5) {
    //     const dialogRef = this.dialog.open(SuccessComponent, {
    //       width: '700px'
    //     })

    //     dialogRef.afterClosed().subscribe((result) => {
    //       this.router.navigate(['home'])
    //     });
    //   }
    // })
  }

  public openTipDialog(position: string): void {
    this.dialog.open(TipComponent, {
      width: '700px',
      data: { position: position }
    });
  }

}
