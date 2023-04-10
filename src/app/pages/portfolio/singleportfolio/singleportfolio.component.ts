import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AllportfolioService } from 'src/app/service/api/allportfolio.service';
import { AuthService } from 'src/app/service/api/auth.service';
import { SingleportfolioService } from 'src/app/service/api/singleportfolio.service';
import { AuthProfGuard } from 'src/app/service/guard/auth-prof.guard';

@Component({
  selector: 'app-singleportfolio',
  templateUrl: './singleportfolio.component.html',
  styleUrls: ['./singleportfolio.component.css']
})
export class SingleportfolioComponent {
  projets: any;
  userId: number;
  users:any[] = [];
  commentaires: any;
  projetId: number;

  constructor(private singleportfolio: SingleportfolioService, private route: ActivatedRoute, private authService: AuthService,private profGuard: AuthProfGuard){
  }

  ngOnInit() {
    

    this.route.queryParams.subscribe((params: Params) => {
      this.userId = params['id'];
      console.log(this.userId);
    });

    this.singleportfolio.getProjets(this.userId).subscribe((data: any[]) => {
        this.projets = data;
        this.projets.forEach((projet) => {
          this.projetId = projet.id
          this.singleportfolio.getComm(this.projetId).subscribe((data: any[]) => {
            this.commentaires = data;
            console.log(data);
          })
        })
      }
    )

    this.singleportfolio.getUser(this.userId).subscribe((data: any[]) => {
        this.users = data;
      },
    )
    // this.userId = this.route.snapshot.paramMap.get('id');
  }

  isProf(): Observable<boolean> {
    return this.profGuard.canActivate(null, null);
  }

  isConnect() {
    if(localStorage.getItem("isConnect")){
      return true
    }
    else{
      return false
    }
  }

  @ViewChild('formComm')
  formComm: FormGroupDirective | undefined;

  formController = new FormGroup({
    commentaire: new FormControl('',[Validators.required])
  });
  
}
