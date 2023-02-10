import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../api-service/api-service.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginInvalid: boolean = false;
  constructor(private router: Router, private apiService: ApiService, private formBuilder: FormBuilder) { }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const loginPayload = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls['password'].value
    }

    this.apiService.login(loginPayload).subscribe(data => {
      debugger;
      if(data.status === 200) {
        window.localStorage.setItem('token', data.result.token);
        this.router.navigate(['list-user']);
      } else {
        this.loginInvalid = true;
        alert(data.status);
      }
    })
  }

  ngOnInit(): void {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }
  
}
