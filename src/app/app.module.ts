import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { JwtService } from './service/jwt.service';
import { AuthGuard } from './service/guard/auth.guard';
import { TokenInterceptor } from './service/api/token.interceptor';
import { CreatePortfolioComponent } from './pages/etudiant/create-portfolio/create-portfolio.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AfficheportfolioComponent } from './pages/portfolio/afficheportfolio/afficheportfolio.component';
import { SingleportfolioComponent } from './pages/portfolio/singleportfolio/singleportfolio.component';
import { AuthAdminGuard } from './service/guard/auth-admin.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfilEtudiantComponent } from './pages/etudiant/profil-etudiant/profil-etudiant.component';
import { ProfilProfComponent } from './pages/prof/profil-prof/profil-prof.component';
import { AuthProfGuard } from './service/guard/auth-prof.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    CreatePortfolioComponent,
    AfficheportfolioComponent,
    SingleportfolioComponent,
    AdminComponent,
    ProfilEtudiantComponent,
    ProfilProfComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'addprojet',
        component: CreatePortfolioComponent, 
        canActivate:[AuthGuard]
      },
      {
        path:'all',
        component : AfficheportfolioComponent
      },
      {
        path:'all/:id',
        component : AfficheportfolioComponent
      },
      {
        path: 'admin',
        component: AdminComponent, 
        canActivate:[AuthAdminGuard]
      },
      {
        path: 'prof',
        component: ProfilProfComponent, 
        canActivate:[AuthProfGuard]
      },
      {
        path: 'etudiant',
        component: ProfilEtudiantComponent, 
        canActivate:[AuthGuard]
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [HttpClientModule,JwtService, {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
