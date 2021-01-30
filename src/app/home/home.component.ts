import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private coreService: CoreService
  ) { }

  ngOnInit(): void {
  }

  public navToMap(): void{
    this.coreService.createMapAccessRegister().finally(()=>{
      this.router.navigate(['map'])
    })
  }

}
