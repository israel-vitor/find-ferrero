import { Component, OnInit } from '@angular/core';
import { answer, CoreService, mapAccess } from '../services/core.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public answers: Array<answer> = [];
  public mapAccess: Array<mapAccess> = [];

  constructor(private coreService: CoreService) { }

  ngOnInit(): void {
    this.coreService.readAnswers().subscribe((answers) => {
      this.answers = answers.map((answer) => {
        answer.created_at = new Date(answer.created_at['seconds']*1000)
        return answer
      });
    })
    this.coreService.readMapAccess().subscribe((mapAccess) => {
      this.mapAccess = mapAccess.map((access) => {
        access.accessed_at = new Date(access.accessed_at['seconds']*1000)
        return access
      });;
    })
  }

}
