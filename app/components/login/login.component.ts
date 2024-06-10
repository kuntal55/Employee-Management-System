import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm: FormGroup;
  public constructor(
   private fb:FormBuilder,
   private readonly _authService: AuthService,
   private router: Router
  ){
    this.loginForm=this.fb.group({
     email:new FormControl('',[Validators.required]),
     password: new FormControl('',[Validators.required]),
    })
  }
  public login(): void{
   this._authService.login(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value);
  }
  public forgotPassword():void{
  this.router.navigate(['forgot-password']);
  }
  public registration():void{
    this.router.navigate(['registration']);
  }
}
