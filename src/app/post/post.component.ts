import { Component, OnInit,ViewChild, OnDestroy } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

export interface Employee {
  id: number;
  name: string;
  street: string;
  CompanyName: string;
  zipcode : string
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnDestroy  {
  displayedColumns: string[] = ['id', 'name', 'street', 'CompanyName', 'zipcode'];
  dataSource: MatTableDataSource<Employee>;
  initialization : boolean;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;

  constructor(private commonService : CommonService, private rooute : Router) { 

  }

  ngOnInit(): void {
    if(this.commonService.data){
    let self = this;
    const emplist = Array.from({length: this.commonService.data.length}, (_, k) => createNewUser(this.commonService.data[k]));
      if(emplist.length > 0)
      {
        this.initialization = true;
        self.dataSource = new MatTableDataSource(emplist);

        self.dataSource.paginator = self.paginator;
        self.dataSource.sort = self.sort;
      }
      else{
        this.rooute.navigate['../'];
      }      
    }
    else{
      this.rooute.navigate[''];
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy()
  {
    this.initialization = false;
  }
}


/** Builds and returns a new User. */
function createNewUser(element: any): Employee {
  return {
    id: element.id,
    name: element.name,
    street: element.address.street,
    CompanyName: element.company.name,
    zipcode: element.address.zipcode,
  };
}