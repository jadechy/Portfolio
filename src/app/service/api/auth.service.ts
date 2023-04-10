import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ParentApiService } from './parent.api.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ParentApiService{

  constructor(private httpClient: HttpClient) { 
    super();
  }

  connect(username:string | null ,password:string | null): Observable<object>{
    return this.httpClient.post(environment.apiUrl+'/api/login_check',{username,password})  
  }
}
