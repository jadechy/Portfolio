import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllportfolioService } from 'src/app/service/api/allportfolio.service';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-afficheportfolio',
  templateUrl: './afficheportfolio.component.html',
  styleUrls: ['./afficheportfolio.component.css']
})
export class AfficheportfolioComponent implements OnInit{
  projets: any[] = [];

  constructor(private router: Router,private allportfolio: AllportfolioService){
  }

  ngOnInit() {
    this.allportfolio.getProjets().subscribe((data: any[]) => {
      this.projets = data;
    });
  }

}
