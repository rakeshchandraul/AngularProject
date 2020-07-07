import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAppHclTask';
  
  constructor()
  {
    Swal.fire('Oops...', 'Something went wrong!', 'error');
  }
}
