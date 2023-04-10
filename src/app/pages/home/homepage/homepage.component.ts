import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthService } from 'src/app/service/api/auth.service';
import { AuthAdminGuard } from 'src/app/service/guard/auth-admin.guard';
import { AuthProfGuard } from 'src/app/service/guard/auth-prof.guard';
import { AuthGuard } from 'src/app/service/guard/auth.guard';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  constructor(
    private authService: AuthService,
    private adminGuard: AuthAdminGuard,
    private profGuard: AuthProfGuard,
    private studentGuard: AuthGuard
  ) { }

  ngOnInit(): void {
  }

  isConnect() {
    if(localStorage.getItem("isConnect")){
      console.log('connecté')
      return true
      
    }
    else{
      console.log('pas connecté')
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
