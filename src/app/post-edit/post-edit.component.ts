import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  //store the index, initial value is 0
  index: number = 0;

  editMode: boolean = false;
  constructor(
    //build a connection with post obj
    private postService: PostService,

    //in-built functionality for router service
    private router: Router,

    //will help to work with route parameters
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';
    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        console.log(params['index']);

        this.index = params['index'];

        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;

        this.editMode = true;
      }
    });
    //initialize
    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required
        // Validators.maxLength(10)
      ]),
      description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required])
    });
  }

  //This is a local function as it is inside this component and applicable only for this
  onSubmit() {
    //prints form details
    //console.log(this.form);

    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    const post: Post = new Post(title, description, imagePath, "test@gmail.com", new Date(),0);

    if (this.editMode) {
      this.postService.updatePost(this.index, post);
    } else {
      //calling service
      this.postService.addPost(post);
    }

    //navigate to /post-list
    this.router.navigate(["/post-list"]);
  }

}
