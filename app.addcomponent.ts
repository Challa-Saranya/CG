import {Component } from '@angular/core';
import { EmployeeService } from './app.employeeservice';

@Component({
    selector:'add-comp',
    templateUrl:'app.addcomponent.html'
})


export class AddEmployeeComponent{
    constructor(private service:EmployeeService){}
    model:any={};
    addEmployee():any{
        console.log(this.model);
        this.service.addEmployee(this.model).subscribe();
    }

}