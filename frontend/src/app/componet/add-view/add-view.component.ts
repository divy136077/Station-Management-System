import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../../station.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-view',
  templateUrl: './add-view.component.html',
  styleUrls: ['./add-view.component.css']
})


export class AddviewComponent {
  selectedlevel: any;
  error?: string;
  empForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, public http: HttpClient, private serviceData: ServiceService, private toastr: ToastrService,) {


    this.empForm = this.fb.group({
      CompanyId: ['', Validators.required],
      Name: ['', Validators.required],
      Address1: (['', Validators.required]),
      Address2: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Zip: ['', Validators.required],
      Phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      DisplayInAssetViews: [false, Validators.required],
      IsActive: [false, Validators.required],

    });
    this.collect();
    console.log(this.empForm.value)
  }
  diag() {

    this.serviceData.add(this.empForm.value).subscribe(response => {
      console.log(response)
      // alert("Data sucessfully Added")
      this.toastr.success('Data Added Successfully!');
      this.router.navigateByUrl('/listview')
    }
    );

  }


  // diag() {
  //   var formData: any = new FormData();
  //   formData.append("CompanyId",parseInt(this.empForm.value.CompanyId))
  //   formData.append("Name",this.empForm.value.Name)
  //   this.empForm.value.Address1 ? formData.append("Address1",this.empForm.value.Address1) : null;
  //   this.empForm.value.Address2 ? formData.append("Address2",this.empForm.value.Address2) : null;
  //   this.empForm.value.City ? formData.append("City",this.empForm.value.City) : null;
  //   this.empForm.value.State ? formData.append("State",this.empForm.value.State) : null;
  //   this.empForm.value.Zip ? formData.append("Zip",this.empForm.value.Zip) : null;
  //   this.empForm.value.Phone ? formData.append("Phone",this.empForm.value.Phone) : null;
  //   // this.empForm.value.logo ? formData.append("logo",this.empForm.value.logo) : null;
  //   this.empForm.value.DisplayInAssetViews ? formData.append("DisplayInAssetViews",this.empForm.value.DisplayInAssetViews) : null;
  //   this.empForm.value.IsActive ? formData.append("IsActive",this.empForm.value.IsActive) : null;
  //   console.log(this.empForm.value);

  // }

  collect() {
    this.serviceData.collects().subscribe((data: any) => {
      this.selectedlevel = data;
    })
  }


}
