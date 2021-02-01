import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TipComponent } from '../dialogs/tip/tip.component';
import { answer, CoreService } from '../services/core.service';

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
    this.coreService.readAnswers().subscribe((answers) => {
      console.log("ok")
      console.log(answers)
      if (answers.length >= 5 && this.validatePositions(answers)) {
        this.router.navigate(['success'])
      }
    })
  }

  private validatePositions(answersList: Array<answer>): boolean {
    let answersPositions: Array<string> = answersList.map((answer) => {
      return answer.position
    });
    console.log(answersPositions)
    return (
      answersPositions.includes('bed') &&
      answersPositions.includes('tube') &&
      answersPositions.includes('mirror') &&
      answersPositions.includes('purifier') &&
      answersPositions.includes('pepper')
    )
  }

  public openTipDialog(position: string): void {
    this.dialog.open(TipComponent, {
      width: '700px',
      data: { position: position }
    });
  }

}
