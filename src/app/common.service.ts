import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  data : any;
  constructor(private http : HttpClient) {

  }

  public PostEmployee(emp) : Observable<any>
  {
     return this.http.post("https://localhost:44355/api/employee", emp);
  }

  
  public GetEmployee(name) : Observable<any>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/users?name="+name+"");
  }
}
