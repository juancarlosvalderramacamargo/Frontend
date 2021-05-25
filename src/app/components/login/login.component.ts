import { Component, OnInit, Input } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import {Login} from '../../models/login';
import { Router } from '@angular/router';
import {userService} from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm : FormGroup;
  login!: Login;
  hide = true;
  constructor(private userService: userService,private router: Router , private fb : FormBuilder) {
    this.rForm = fb.group({
      'email': ["", Validators.compose([Validators.required,Validators.email])],
      'password': ["" , Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    this.login = new Login("", "");
  }

  onSubmit(post:Login){
    //let algo = req.title;
    //this.userService.login(req).subscribe(res=>{ this.router.navigateByUrl('/auth')});
    console.log(post);
    let algo =this.userService.login(post);
    console.log(algo);
    this.router.navigate(["/showBlog"] );
  }
}
