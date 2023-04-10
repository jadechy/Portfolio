import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/api/auth.service';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('formRegister')
  formRegister: FormGroupDirective | undefined;

  formController = new FormGroup({
    email: new FormControl('',[Validators.required]),
    nom: new FormControl('',[Validators.required]),
    prenom: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]) 
  });   
  
  constructor(private router: Router,private authService: AuthService,private jwtService: JwtService){
    
  }

  register(){
    if(this.formController.valid){
      this.authService.register(this.formController.controls.email.value,this.formController.controls.nom.value,this.formController.controls.prenom.value,this.formController.controls.password.value).subscribe(response => {
        console.log(response);
        this.router.navigate(['/login']);
      }, error =>{
        console.log(error);
      });
      
    }
  }
}
