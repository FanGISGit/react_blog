import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class SerPostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();
    
  constructor() {
    this.getPosts();
  }

  
   emitPosts() {
    this.postsSubject.next(this.posts);
  }
    
  savePosts() {    firebase.database().ref('/posts').set(this.posts);
  }
    
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }
    
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {       
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
  
  IncLoveIts(post: Post) {
    const postIndex = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          postEl.loveIts++;     
          return true;
        }
      }
    );
    //this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();  
  }
  
  DecLoveIts(post: Post) {
    const postIndex = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          postEl.loveIts--;     
          return true;
        }
      }
    );
    //this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();  
  }

}
