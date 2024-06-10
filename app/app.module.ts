import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyComponent } from './components/verify/verify.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"employee-management-syst-3b490","appId":"1:661529860960:web:bb3ccc9017462a8c4f5c05","storageBucket":"employee-management-syst-3b490.appspot.com","apiKey":"AIzaSyBNvuSo7llj-YlLqGdYlEb2pBEwweV_xtI","authDomain":"employee-management-syst-3b490.firebaseapp.com","messagingSenderId":"661529860960"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    provideClientHydration(),
    {provide:FIREBASE_OPTIONS, useValue:{"projectId":"employee-management-syst-3b490","appId":"1:661529860960:web:bb3ccc9017462a8c4f5c05","storageBucket":"employee-management-syst-3b490.appspot.com","apiKey":"AIzaSyBNvuSo7llj-YlLqGdYlEb2pBEwweV_xtI","authDomain":"employee-management-syst-3b490.firebaseapp.com","messagingSenderId":"661529860960"}},
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
