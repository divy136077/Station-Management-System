import { getLocaleId } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../station.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css'],
})


export class EditviewComponent {
  selectedlevel: any;
  empForm!: FormGroup;
  formValues: any;
  id!: any;


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public http: HttpClient,
    private toastr: ToastrService,
    private serviceData: ServiceService
  ) {

    this.collect();
    // this.setForm();

  }

  ngOnInit(): any {

    this.empForm = this.fb.group({
      id: ['', Validators.required],
      CompanyId: ['', Validators.required],
      Name: ['', Validators.required],
      Address1: ['', Validators.required],
      Address2: ['', Validators.required],
      City: ['', Validators.required],
      State: ['', Validators.required],
      Zip: ['', Validators.required],
      Phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      DisplayInAssetViews: [false, Validators.required],
      IsActive: [false, Validators.required],
      logo: ['', Validators.required],
    });
    console.log(this.empForm.value);
    const auth: any = localStorage.getItem("authToken")?.toString()
    this.serviceData
      .getId(this.route.snapshot.params['id'], auth)
      .subscribe((res: any) => {
        this.empForm.patchValue(res);
        console.log(res);
        // alert("Data sucessfully Updated")

      });
  }




  // this.empForm.setValue ({
  //   // id : this.formValues.id,
  //   CompanyId: this.formValues.CompanyId,
  //   Name: this.formValues.Name,
  //   Address1: this.formValues.Address1,
  //   Address2: this.formValues.Address2,
  //   City: this.formValues.City,
  //   State: this.formValues.State,
  //   Zip: this.formValues.Zip,
  //   Phone: this.formValues.Phone,
  //   DisplayInAssetViews: this.formValues.DisplayInAssetViews,
  //   IsActive: this.formValues.IsActive,
  //   logo: '',
  // });




  diag() {


    var formData: any = new FormData();
    console.log(this.empForm.value);
    formData.append('Id', parseInt(this.empForm.value.id));
    formData.append('CompanyId', parseInt(this.empForm.value.CompanyId));
    formData.append('Name', this.empForm.value.Name);
    this.empForm.value.Address1
      ? formData.append('Address1', this.empForm.value.Address1)
      : null;
    this.empForm.value.Address2
      ? formData.append('Address2', this.empForm.value.Address2)
      : null;
    this.empForm.value.City
      ? formData.append('City', this.empForm.value.City)
      : null;
    this.empForm.value.State
      ? formData.append('State', this.empForm.value.State)
      : null;
    this.empForm.value.Zip
      ? formData.append('Zip', this.empForm.value.Zip)
      : null;
    this.empForm.value.Phone
      ? formData.append('Phone', this.empForm.value.Phone)
      : null;
    this.empForm.value.email
      ? formData.append('email', this.empForm.value.email)
      : null;
    this.empForm.value.password
      ? formData.append('password', this.empForm.value.password)
      : null;
    this.empForm.value.DisplayInAssetViews
      ? formData.append(
        'DisplayInAssetViews',
        this.empForm.value.DisplayInAssetViews
      )
      : null;
    this.empForm.value.IsActive
      ? formData.append('IsActive', this.empForm.value.IsActive)
      : null;
      

    this.edit(this.route.snapshot.params['id'], this.empForm.value);
  }
  edit(id: any, data: any) {
      const auth: any = localStorage.getItem("authToken")?.toString()
    this.serviceData.edit(id, data, auth).subscribe((response: any) => {
      console.log(response);
      this.toastr.success('Data sucessfully Updated!');
      this.router.navigateByUrl('/listview');
    });
  }

  collect() {
    this.serviceData.collects().subscribe((data: any) => {
      this.selectedlevel = data;
    })
  }
}





