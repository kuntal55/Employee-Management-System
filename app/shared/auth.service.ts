import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly _fireAuth:AngularFireAuth,
    private readonly _router:Router,
  ) {}

  public login(email: string,pass: string): void{
    this._fireAuth.signInWithEmailAndPassword(email,pass).then((val)=>{
      localStorage.setItem('token','true');
      
      if(val.user?.emailVerified){
        this._router.navigate(['dashboard']);
      }
      else{
        this._router.navigate(['/login']);
      }
    },err=>{
      alert(err.message);
      this._router.navigate(['/login']);
    });
  }
  public registration(email:string,pass:string):void{
    this._fireAuth.createUserWithEmailAndPassword(email,pass).then((val)=>{
         alert('your account has been created successfully');
        
         this.emailVerification(val.user);
         this._router.navigate(['/login']);
    },err=>{
      alert(err.message);
      this._router.navigate(['/registration']);
    });
  }

  public logout(){
    this._fireAuth.signOut().then(()=>{
      localStorage.removeItem('token');
      this._router.navigate(['/login']);
    },err=>{
      alert(err.message);
    })
  }
  public forgotPassword(email:string):void{
    this._fireAuth.sendPasswordResetEmail(email).then(()=>{
        this._router.navigate(['/verify']);
    },err=>{
      alert(err.message);
    })
  }
  public emailVerification(employee:any):void{
    employee.sendEmailVerification().then((_res : any)=>{
         this._router.navigate(['/verify']);
    },(_err : any)=>{
      alert('something went wrong');
    })
  }
  public signIngoogle(){
    return this._fireAuth.signInWithPopup(new GoogleAuthProvider).then((val)=>{
      localStorage.setItem('token','true');
     this._router.navigate(['/dashboard']);
    },err=>{
    alert('Some thing went wrong');
    }
    )
  }
}
