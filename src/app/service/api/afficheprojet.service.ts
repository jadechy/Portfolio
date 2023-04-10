import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParentApiService } from './parent.api.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AfficheprojetService extends ParentApiService{

  constructor(private httpClient: HttpClient) {
    super();
   }

  getProjet(userid: number,projetid: number):Observable<any> {
    return this.httpClient.get(environment.apiUrl+'/api/projet/'+ userid +'/'+ projetid);
  }
}
