import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllportfolioService } from 'src/app/service/api/allportfolio.service';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-afficheportfolio',
  templateUrl: './afficheportfolio.component.html',
  styleUrls: ['./afficheportfolio.component.css']
})
export class AfficheportfolioComponent{
  users: any[] = [];

  constructor(private allportfolio: AllportfolioService, private router: Router){
  }

  ngOnInit() {
    this.allportfolio.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

}
