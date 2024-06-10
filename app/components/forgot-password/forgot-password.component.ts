import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  public forgotPasswordForm: FormGroup;

  public constructor(   
     private fb: FormBuilder,
    private authService: AuthService,
 
  ){
     this.forgotPasswordForm=this.fb.group({
      email:new FormControl('',[Validators.required]),
     });
  }
  public forgotPassword(): void{
   this.authService.forgotPassword(this.forgotPasswordForm.get('email')?.value);
   this.forgotPasswordForm.get('email')?.setValue('');
  }
}
