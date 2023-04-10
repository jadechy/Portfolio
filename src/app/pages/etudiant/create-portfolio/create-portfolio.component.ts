import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Observable, Subscription, tap } from 'rxjs';
import { CompetencesService } from 'src/app/service/api/competences.service';
import { Competences } from 'src/app/service/api/objects/Competences';

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css']
})
export class CreatePortfolioComponent {
  @ViewChild('formPortfolio')
  formPortfolio: FormGroupDirective | undefined;
  formCompetences$ : Observable<Array<any>>;

  constructor(private competences:CompetencesService){

    this.formCompetences$=this.competences.connect();
  }

  formController = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    competences: new FormControl([],[Validators.required])
  });   


}
