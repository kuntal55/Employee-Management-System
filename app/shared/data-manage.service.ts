import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Employee } from '../models/employee';
@Injectable({
  providedIn: 'root'
})
export class DataManageService {

  constructor(
    private readonly _fireStore: AngularFirestore,
    private readonly _router:Router,
  ) { }

  public addEmployee(emp: Employee){
    emp.id = this._fireStore.createId();  
    return this._fireStore.collection('/Employee').add(emp);
  }

  public getAllEmployee(){
    return this._fireStore.collection('/Employee').snapshotChanges();
  }

  public deleteEmployee(empId: string){
    return this._fireStore.doc('/Employee/'+empId).delete();
  }

  public updateEmployee(emp: Employee){
    return this._fireStore.doc('/Employee/'+emp.id).update(emp);
  }
}
