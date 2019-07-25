import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    constructor(private http:HttpClient){ }
    getAllEmployee(){
        return this.http.get("http://localhost:9080/emplist/getalldata");

    }
    addEmployee(data:any){
        console.log(data.eid);
        let input={"empId":data.eid,"empName":data.ename,"empSalary":data.esalary};
        //console.log("service"+data);
        //let input=new FormData();
        //input.append("empId",data.eid);
        //input.append("empName",data.ename);
        //input.append("empSalary",data.esalary);

        return this.http.post("http://localhost:9080/emplist/adddata",input);
    }
    }

