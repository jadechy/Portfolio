import { Injectable } from '@angular/core';
import { ParentApiService } from './parent.api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Portfolio } from './objects/Portfolio';

@Injectable({
  providedIn: 'root'
})
export class AllportfolioService extends ParentApiService{
  
  constructor(private httpClient: HttpClient) {
    super();
  }

  getUsers() {
    return this.httpClient.get(environment.apiUrl+'/api/utilisateurprojet');
  }

}
