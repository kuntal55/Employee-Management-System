import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
 public registrationForm: FormGroup;
 public constructor(
  private fb:FormBuilder,
  private readonly _authService: AuthService
 ){
   this.registrationForm=this.fb.group({
    email:new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
   })
 }
 public registration(): void{
  this._authService.registration(this.registrationForm.get('email')?.value,this.registrationForm.get('password')?.value);
 }
 public googleSignIn(): void{
     this._authService.signIngoogle();
 }
}
