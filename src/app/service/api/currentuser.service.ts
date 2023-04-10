import { Injectable } from '@angular/core';
import { JwtService } from '../jwt.service';
import { User } from './objects/User';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ParentApiService } from './parent.api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentuserService extends ParentApiService{

  constructor(private jwtService: JwtService,private httpClient: HttpClient) {
    super();
  }

  
  getCurrentUser(): User {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtService.DecodeToken(token);
      const user = new User();
      user.username = decodedToken.username;
      user.roles = decodedToken.roles;
      return user;
    }
    return null;
  }

  getUsername(username : string){
    return this.httpClient.get(environment.apiUrl+'/api/username/' + username);
  }

  getCommentaire(id : number){
    return this.httpClient.get(environment.apiUrl+'/api/commentaire/' + id);
  }

  getProjetComm(idprojet : number){
    return this.httpClient.get(environment.apiUrl+'/api/commprojet/' + idprojet);
  }

}
