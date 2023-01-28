import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AxiosServicesService } from 'src/app/services/axios/axios-services.service';
// import { LoginService } from 'src/app/services/core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  loginResponse:any;
  mobileNumForm: FormGroup;
  inValidMessage:boolean = false;
  // loginservice: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    // private loginservice:LoginService
    private formBuilder: FormBuilder,
    private axiosService:AxiosServicesService  
    ) {}

  ngOnInit() {
    this.mobileNumForm = this.formBuilder.group({
      mobile:[null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  passwordLogin(){
    if(this.loginForm.valid){
      let loginDetail = this.loginForm.value;
      let url =  'api/login';
      this.axiosService.validateLogin(url,loginDetail).subscribe(
        (data) => {
        if(data && data.hasOwnProperty('token')){
          this.inValidMessage = false;
          this.router.navigate(['/dashboard']);
        }
        else{
          this.inValidMessage = true;
        }
      },
      (error) => {
        this.inValidMessage = true;
      }
      );
    }
  }
}
