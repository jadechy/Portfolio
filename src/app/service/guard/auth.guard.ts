import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Token } from '../api/objects/Token';
import { JwtService } from '../jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private jwtService:JwtService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    if(localStorage.getItem('token') == null ){
      return of(false);
    }
    let token: Token = this.jwtService.DecodeToken(localStorage.getItem('token')); 
    if(token.roles[0] == 'ROLE_USER'){
      return of(true);
    }
    else{
      return of(false);
    }
  }
  
}
