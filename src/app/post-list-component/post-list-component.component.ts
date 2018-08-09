import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { SerPostsService } from '../services/ser-posts.service';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {
	
 /* @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: Date;
  @Input() postLoveIts: number;*/
    
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: SerPostsService, private router: Router) { }

  ngOnInit() {
      this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.emitPosts();
  }
    
  onNewPost() {
    this.router.navigate(['/newpost']);
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }
  
  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
  
  getColor(post: Post) { 
   if(post.loveIts < 0) {
        return 'red';
    } else if(post.loveIts > 0) {
        return 'green';
    } else {
	    return 'black';
	}		
  }

  getloveIts (post : Post) {
      return post.loveIts;
  }
  
  onloveIt(post: Post) {
    this.postsService.IncLoveIts(post);
  }
  
  ondloveIt(post: Post) {
    this.postsService.DecLoveIts(post); 
  }

}
