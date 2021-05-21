import { Component, OnInit, Input } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms'
import {NewBlog} from '../../models/newBlog'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {
  rForm : FormGroup;
  newBlog!: NewBlog;
  constructor(private router: Router , private fb : FormBuilder) {
    this.rForm = fb.group({
      'title': ["", Validators.compose([Validators.required ])],
      'content': ["" , Validators.compose([Validators.required ])],
    });
   }

  ngOnInit(): void {
    this.newBlog = new NewBlog("", "");
  }

  onSubmit(req: NewBlog){
    //let algo = req.title;
    this.router.navigate(["/home"] );
  }
}
