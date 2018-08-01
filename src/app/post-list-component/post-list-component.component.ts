import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
	
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postDate: date;
  @Input() postLoveIts: number,

  constructor() { }

  ngOnInit() {
  }
  
  getColor() {
    if(this.postLoveIts < 0) {
        return 'red';
    } else if(this.postLoveIts > 0) {
        return 'green';
    } else {
	    return 'black';
	}		
  }
  
  onloveIt() {
    this.postLoveIts++;
  }
  
  ondloveIt() {
    this.postLoveIts--;
  }

}
