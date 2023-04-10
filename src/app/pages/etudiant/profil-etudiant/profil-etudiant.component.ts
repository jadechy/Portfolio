import { Component, OnInit } from '@angular/core';
import { CurrentuserService } from 'src/app/service/api/currentuser.service';
import { User } from 'src/app/service/api/objects/User';
import { SingleportfolioService } from 'src/app/service/api/singleportfolio.service';

@Component({
  selector: 'app-profil-etudiant',
  templateUrl: './profil-etudiant.component.html',
  styleUrls: ['./profil-etudiant.component.css']
})
export class ProfilEtudiantComponent implements OnInit{
  currentUser: User;
  user: any;
  nom : any;
  prenom: any;
  id: number;
  projets: any;

  constructor(private userService: CurrentuserService, private userportfolio: SingleportfolioService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    this.userService.getUsername(this.currentUser.username).subscribe((data: any[]) => {
      this.user = data
      this.nom = data[0].nom
      this.prenom = data[0].prenom
      this.id = data[0].id
      console.log('id' + this.id);
      this.userportfolio.getProjets(this.id).subscribe((data: any[]) => {
        if (data.length > 0) {
          this.projets = data;
          console.log(data);
        } else {
          console.log('Aucun projet trouvé pour cet utilisateur');
        }
      });
    });
  }
}
