import { Component, OnInit, Input } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms'
import {Login} from '../../models/login'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm : FormGroup;
  login!: Login;
  constructor(private router: Router , private fb : FormBuilder) {
    this.rForm = fb.group({
      'email': ["", Validators.compose([Validators.required,Validators.email])],
      'password': ["" , Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    this.login = new Login("", "");
  }
  onSubmit(req: Login){
    //let algo = req.title;
    this.router.navigate(["/home"] );
  }
}
