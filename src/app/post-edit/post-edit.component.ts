import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  //to communicate with form, create a form object
  // form! ->either it can be null or form
  form!: FormGroup;

  constructor(
    //build a connection with post obj
    private postService: PostService,

    //in-built functionality for router service
    private router: Router
  ) { }

  ngOnInit(): void {
    //initialize
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required
        // Validators.maxLength(10)
      ]),
      description: new FormControl(null, [Validators.required]),
      imagePath: new FormControl(null, [Validators.required])
    });
  }

  //This is a local function as it is inside this component and applicable only for this
  onSubmit() {
    //prints form details
    //console.log(this.form);

    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    const post: Post = new Post(title, description, imagePath, "test@gmail.com", new Date());

    //calling service
    this.postService.addPost(post);

    //navigate to /post-list
    this.router.navigate(["/post-list"]);
  }

}
