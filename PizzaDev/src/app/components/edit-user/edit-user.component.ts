import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {User} from "../../model/user.model";
import {ApiService} from "../api-service";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class EditUserComponent implements OnInit {
  user: User;
  editForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if(!userId) {
      alert('Invalid Action!');
      this.router.navigate(['list']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required]
    });
    this.apiService.getUserById(+userId).subscribe( (data: { result: { [key: string]: any; }; }) => {
      this.editForm.setValue(data.result);
    });

  }

  onSubmit(): void {
    this.apiService.updateUser(this.editForm.value).pipe(first()).subscribe( (data: { status: number; message: any; }) => {
      if(data.status === 200) {
        alert('User updated successfully.');
        this.router.navigate(['list-user']);
      } else {
        alert(data.message);
      }
    }, (err: { message: any; }) => {
      alert(err.message);
    }
    
    );
  }
}
