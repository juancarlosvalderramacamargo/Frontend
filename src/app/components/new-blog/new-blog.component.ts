import { Component, OnInit } from '@angular/core';
import {NewBlog} from '../../models/newBlog'

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

  newBlog: NewBlog = {
    title: '',
    content:''
  };
  constructor() { }

  ngOnInit(): void {
  }

}
