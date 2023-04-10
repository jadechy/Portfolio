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
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './pages/home/footer/footer.component';
import { AfficheprojetComponent } from './pages/portfolio/afficheprojet/afficheprojet.component';

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
    ProfilProfComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    AfficheprojetComponent
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
        path: 'register',
        component: RegisterComponent
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
        path:'single',
        component : SingleportfolioComponent
      },
      {
        path:'projet',
        component : AfficheprojetComponent
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
    NgSelectModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [HttpClientModule,JwtService, {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
