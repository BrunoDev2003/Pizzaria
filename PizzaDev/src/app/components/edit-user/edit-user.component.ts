import { Component, OnInit, Inject } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../../service/api.service";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService) { }

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
    this.apiService.getUserById(+userId).subscribe( data => {
      this.editForm.setValue(data.result);
    });

  }

  onSubmit(): void {
    this.apiService.updateUser(this.editForm.value).pipe(first()).subscribe( data => {
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
