import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  //to communicate with form, create a form object
  // form! ->either it can be null or form
  form!: FormGroup;

  constructor() { }

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
    console.log('onSubmit called');

    //prints form details
    console.log(this.form);

  }

}
