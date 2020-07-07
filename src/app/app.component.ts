import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import {CommonService} from './common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = '';
  
  constructor(private commonService : CommonService, private router : Router)
  {
    //Swal.fire('Oops...', 'Something went wrong!', 'error');
  }

  search(event)
  {
    this.commonService.GetEmployee(event.target.value).subscribe(data => {
      if(data?.length != 0)
      {
        this.commonService.data = data;
        this.router.navigate(['posts']);
      }
      else{
        Swal.fire('Oops...', 'Something went wrong!', 'error');
      }
    });
  }
}
