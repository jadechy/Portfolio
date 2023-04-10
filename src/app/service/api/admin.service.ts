import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ParentApiService } from './parent.api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends ParentApiService{
  constructor(private httpClient: HttpClient) {
    super();
  }

  getUsers() {
    return this.httpClient.get(environment.apiUrl+'/api/utilisateur');
  }

  getProjets(){
    return this.httpClient.get(environment.apiUrl+'/api/portfolio');
  }

  getCommentaires(){
    return this.httpClient.get(environment.apiUrl+'/api/commentaire');
  }

  supprimerUtilisateur(id: number) {
    return this.httpClient.delete(environment.apiUrl+'/api/deleteuser/' + id);
  }

  supprimerProjet(id: number) {
    return this.httpClient.delete(environment.apiUrl+'/api/deleteprojet/' + id);
  }

  supprimerComm(id: number){
    return this.httpClient.delete(environment.apiUrl+'/api/deletecomm/' + id);
  }
}
