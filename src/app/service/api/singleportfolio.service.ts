import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParentApiService } from './parent.api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SingleportfolioService extends ParentApiService{

  constructor(private httpClient: HttpClient) {
    super();
  }

  getProjets(id: number):Observable<any> {
    return this.httpClient.get(environment.apiUrl+'/api/portfolio/'+ id);
  }

  getUser(id: number):Observable<any> {
    return this.httpClient.get(environment.apiUrl+'/api/utilisateurid/'+ id);
  }

  getComm(projetid: number):Observable<any> {
    return this.httpClient.get(environment.apiUrl+'api/commentaireprojet/'+ projetid);
  }
}
