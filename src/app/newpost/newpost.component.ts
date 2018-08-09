import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { SerPostsService } from '../services/ser-posts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  newpostForm: FormGroup;  
    
  constructor(private formBuilder: FormBuilder, private postsService: SerPostsService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
    
 initForm() {
    this.newpostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],   
    });
  }
    
  onSavePost() {
    const todayDate = new Date();
    const title = this.newpostForm.get('title').value;
    const content = this.newpostForm.get('content').value;
    //const createdat = {a_date | date: 'd-MM-yyyy HH:mm:ss'};
    const createdat = (todayDate.getDate() + '-' + ((todayDate.getMonth() + 1)) + '-' + todayDate.getFullYear() + ' ' + todayDate.getHours() + ':' + todayDate.getMinutes()+ ':' + todayDate.getSeconds());
    const loveIts = 0;  
    const newPost = new Post(title, content, createdat, loveIts);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/postlist']);
  }

}
