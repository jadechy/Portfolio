import { Component,ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/api/auth.service';
import { AuthAdminGuard } from 'src/app/service/guard/auth-admin.guard';
import { AuthProfGuard } from 'src/app/service/guard/auth-prof.guard';
import { AuthGuard } from 'src/app/service/guard/auth.guard';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('drawer') drawer: MatSidenav;

  constructor(
    private authService: AuthService,
    private adminGuard: AuthAdminGuard,
    private profGuard: AuthProfGuard,
    private studentGuard: AuthGuard
  ) { }

  toggle() {
    console.log('toggle called'); 
  }

  isConnect() {
    if(localStorage.getItem("isConnect")){
      return true
    }
    else{
      return false
    }
  }

  isStudent(): Observable<boolean> {
    return this.studentGuard.canActivate(null, null);
  }
  
  isProf(): Observable<boolean> {
    return this.profGuard.canActivate(null, null);
  }

  isAdmin(): Observable<boolean> {
    return this.adminGuard.canActivate(null, null);
  }

  Deconnexion():void{
    localStorage.removeItem("user");
    localStorage.removeItem("isConnect");
  }
}
