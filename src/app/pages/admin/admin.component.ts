import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/api/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  users: any[] = [];
  projets: any[] = [];
  commentaires: any[] = [];

  constructor(private router: Router,private admin: AdminService){
  }

  ngOnInit() {
    this.admin.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });

    this.admin.getProjets().subscribe((data: any[]) => {
      this.projets = data;
    });

    this.admin.getCommentaires().subscribe((data: any[]) => {
      this.commentaires = data;
    });
  }

  supprimerUtilisateur(id: number) {
    this.admin.supprimerUtilisateur(id).subscribe(
      (response) => {
        console.log(response); // Afficher la réponse de l'API
      },
      (error) => {
        console.log(error); // Afficher l'erreur en cas d'échec de la requête
      }
    );
  }

  supprimerProjet(id: number) {
    this.admin.supprimerProjet(id).subscribe(
      (response) => {
        console.log(response); // Afficher la réponse de l'API
      },
      (error) => {
        console.log(error); // Afficher l'erreur en cas d'échec de la requête
      }
    );
  }

  supprimerComm(id: number) {
    this.admin.supprimerComm(id).subscribe(
      (response) => {
        console.log(response); // Afficher la réponse de l'API
      },
      (error) => {
        console.log(error); // Afficher l'erreur en cas d'échec de la requête
      }
    );
  }

}
