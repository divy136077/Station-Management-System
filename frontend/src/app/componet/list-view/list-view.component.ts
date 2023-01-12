import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../station.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListviewComponent {
  list: any;
  newList: any;
  // obj: any;
  sortBy: any = "asc";
  columnName: any;
  searchName: any;
  searchCity: any;
  user: any;
  totalRecords: any;
  pageSize: any;
  pageNumber: number = 1;


  myForm = {
    Name: '',
    City: '',
  }


  constructor(public http: HttpClient, private router: Router, private fb: FormBuilder, private serviceData: ServiceService, private toastr: ToastrService) { }


  listAPI(obj?: any) {
    const auth: any = localStorage.getItem("authToken")?.toString()
    this.serviceData.getAllData(obj, auth).subscribe({next:((response) => {
      this.totalRecords = response.meta_data.totalRecords;
      this.pageSize = response.meta_data.pageSize;
      this.list = response.user;
      this.newList = response.user;
      console.log();
    }
    ),
      error: ((error) => {
        this.router.navigateByUrl('/login');}
    ),}
    ); 
  }

  ngOnInit() {
    this.getList();
  }

  handlePageChange(event:any){
    console.log(event.target.value);
    this.pageSize = event.target.value
    let data: any = {}
    this.searchName && (data.stationName = this.searchName)
    this.searchCity && (data.stationcity = this.searchCity)
    data.pageSize = this.pageSize
    this.listAPI(data)
  }

  sort1(num: number) {
    this.pageNumber = num;
    let data: any = {};
    data.pageNumber = num;
    this.searchName && (data.stationName = this.searchName)
    this.searchCity && (data.stationcity = this.searchCity)
    this.listAPI(data);
    console.log("Page number is changed to", num);
  }

  getList() {
    this.listAPI()
  }
  //sorting ----------------------------

  searchAPI(obj: any) {
    const auth: any = localStorage.getItem("authToken")?.toString()
    this.serviceData.getAllData(obj, auth).subscribe((response: any) => {
      console.log(response);
      this.newList = response.user;
      this.totalRecords = response.meta_data.totalRecords
      this.pageSize = response.meta_data.pageSize
    });
    
  }

  sort(col: string) {
    let data: any = {}
    this.searchName && (data.stationName = this.searchName)
    this.searchCity && (data.stationcity = this.searchCity)
    this.pageSize && (data.pageSize = this.pageSize)
    data.sortColumn = col
    data.sortDir = this.sortBy
    this.searchAPI(data)
    this.sortBy == "asc" ? this.sortBy = "desc" : this.sortBy = "asc"

  }


  delete(_id: any) {
    const auth: any = localStorage.getItem("authToken")?.toString()
    this.serviceData.deleteUser(_id , auth)
      .subscribe((response) => {
        alert("Data sucessfully deleted")
        this.toastr.success("Data sucessfully Deleted")
        this.listAPI();
      });
  }



  //  searching-------------------------------------



  onSubmit() {
    console.log(this.myForm);


    let data: any = {};
    if (this.myForm.Name) {
      data.stationName = this.myForm.Name;
      this.searchName = this.myForm.Name;
    } else {
      this.searchName = null;
    }
    if (this.myForm.City) {
      data.stationcity = this.myForm.City;
      this.searchCity = this.myForm.City;
    } else {
      this.searchCity = null;
    }
    this.searchAPI(data);
  }




  edit(element: any) {
    this.router.navigateByUrl('/editview/' + element._id);

  }


  addView() {
    this.router.navigateByUrl('/addview');
  }
}
