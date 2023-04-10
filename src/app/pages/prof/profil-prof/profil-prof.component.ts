import { Component, OnInit } from '@angular/core';
import { forkJoin, map, switchMap } from 'rxjs';
import { CurrentuserService } from 'src/app/service/api/currentuser.service';
import { User } from 'src/app/service/api/objects/User';

@Component({
  selector: 'app-profil-prof',
  templateUrl: './profil-prof.component.html',
  styleUrls: ['./profil-prof.component.css']
})
export class ProfilProfComponent implements OnInit {
  currentUser: User;
  user: any;
  id: number;
  commentaires : any;
  nom : any;
  prenom: any;

  constructor(private userService: CurrentuserService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    console.log(this.currentUser.username);
    this.userService.getUsername(this.currentUser.username).subscribe((data: any[]) => {
      this.user = data
      this.nom = data[0].nom
      this.prenom = data[0].prenom
      this.id = data[0].id
      console.log('id' + this.id);
      this.userService.getCommentaire(this.id).pipe(
        switchMap((data: any[]) => {
          const requests = data.map(commentaire => {
            const projet$ = this.userService.getProjetComm(commentaire.id);
            return projet$.pipe(
              map((projetData: any) => ({
                id: commentaire.id,
                message: commentaire.message,
                projetId: projetData.id,
                projetNom: projetData.nom
              }))
            );
          });
          return forkJoin(requests);
        })
      ).subscribe((commentaires: any[]) => {
        this.commentaires = commentaires;
      }, error => {
        console.log('Erreur:', error);
      });
      
    });
    
  }

}
