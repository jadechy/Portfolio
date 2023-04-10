import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AfficheprojetService } from 'src/app/service/api/afficheprojet.service';

@Component({
  selector: 'app-afficheprojet',
  templateUrl: './afficheprojet.component.html',
  styleUrls: ['./afficheprojet.component.css']
})
export class AfficheprojetComponent {
  userId: number;
  projetId: number;
  projet: any;

  constructor(private route: ActivatedRoute, private afficheportfolio: AfficheprojetService){
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.userId = params['utilisateurId'];
      this.projetId = params['id'];
      console.log(this.userId);
      console.log(this.projetId);
    });

    this.afficheportfolio.getProjet(this.userId,this.projetId).subscribe((data: any[]) => {
      this.projet = data;
      console.log(this.projet);
    },
  )
  }
}
