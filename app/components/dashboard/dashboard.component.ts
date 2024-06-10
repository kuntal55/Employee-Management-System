import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Employee } from '../../models/employee';
import { DataManageService } from '../../shared/data-manage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  public employee: Employee[] = [];
  public employeeForm: FormGroup;
  public buttonLabel: string = 'Create Employee';
   public constructor(
    private authService: AuthService,
    private dataService: DataManageService,
    private fb: FormBuilder,
   ){
    this.employeeForm=this.fb.group({
      id:new FormControl(''),
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      mobile:new FormControl('',[Validators.required]),
      salary:new FormControl(0,[Validators.required]),
    });
   }

  public ngOnInit(): void {
    this.getAllEmployee()
  }

   public logout(){
    this.authService.logout();
   }

   public getAllEmployee(){
    this.dataService.getAllEmployee().subscribe((res)=>{
      this.employee = res.map((e : any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    },err=>{
      alert('Something went wrong');
    });
    
   }

   public createEmployee(){
    if(this.buttonLabel == 'Create Employee'){
      this.dataService.addEmployee(this.employeeForm.value);      
    }else{
      this.dataService.updateEmployee(this.employeeForm.value);
      this.employeeForm.reset();
      this.buttonLabel = 'Create Employee';
      alert("Data updated successfully");
    }
   }

   public deleteEmployee(emp: Employee){
    if(window.confirm("Do you really want to delete "+ emp.firstName + '?')){
      this.dataService.deleteEmployee(emp.id);
    }
   }

   public updateEmployee(emp: Employee){
    this.employeeForm.patchValue({
      id: emp.id,
      firstName: emp.firstName,
      lastName: emp.lastName,
      email: emp.email,
      mobile: emp.mobile,
      salary: emp.salary,
    });
    this.buttonLabel = 'Update Employee';
   }
}
