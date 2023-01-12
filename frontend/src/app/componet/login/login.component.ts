import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/station.service';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  error?: string;
  submitted = false;


  get email() {
    return this.loginForm.get('email')
  }


  constructor(
    private fb: FormBuilder,
    public http: HttpClient,
    private serviceData: ServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

  }
  get field() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.error = ''
      
    const data: any = {};
    data.email = this.loginForm.value.email;
    data.password = this.loginForm.value.password;
    this.serviceData.login(data).subscribe({next: ((response: any) =>

    {localStorage.setItem('authToken', response.authtoken);
    this.router.navigateByUrl('/listview');
    this.toastr.success('Login Successful!');
    }
    ),
    error: ((error: any) =>{
      this.toastr.error(error.error.message);}
    ),}
    )

  }
}










