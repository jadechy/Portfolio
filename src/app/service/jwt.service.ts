import jwt_decode, { JwtPayload } from 'jwt-decode';
import { Injectable, NgModule } from '@angular/core';
import { Token } from './api/objects/Token';

@Injectable({
  providedIn: 'root'
})

export class JwtService {

  constructor() { }

  DecodeToken(token:string):Token{
    return jwt_decode(token);
  }
}
