import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/service/api/auth.service';
import { JwtService } from 'src/app/service/jwt.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('formLogin')
  formLogin: FormGroupDirective | undefined;

  formController = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]) 
  });   
  
  constructor(private router: Router,private authService: AuthService,private jwtService: JwtService){
    
  }

  connect(){
    if(this.formController.valid){
      this.authService.connect(this.formController.controls.email.value,this.formController.controls.password.value).pipe(tap(data => {
        if(data != null){
          localStorage.setItem('token',data['token']); 
          console.log(data);
          this.router.navigate(['']);
          localStorage.setItem('isConnect', 'true');
        }
      })).subscribe();
    }
  }
}
