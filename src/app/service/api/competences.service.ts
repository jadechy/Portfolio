import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Competences } from './objects/Competences';
import { ParentApiService } from './parent.api.service';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService extends ParentApiService{

  constructor(private httpClient: HttpClient) { 
    super();
  }

  connect(): Observable<Array<Competences>>{
    return this.httpClient.get<Array<Competences>>(environment.apiUrl+'/api/competences');  
  }
}
