import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post?: Post; //Input is a decorator-> provides an additional identity
  @Input() index: number = 0;
  memberName = 'Sam';

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.post);
  }

  onDelete() {
    this.postService.deletePost(this.index);
  }

  onEdit() {
    //["/post-edit",this.index] is an array, here there are 2 elements
    this.router.navigate(["/post-edit",this.index])
  }
}
