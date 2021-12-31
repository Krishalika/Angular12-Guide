import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { PostService } from "./post.service";

//BackEndService can be used throughout the project in the root level
@Injectable({ providedIn: 'root' })
export class BackEndService {

    constructor(private postService: PostService) {

    }
    //function 1 - Save

    //it should get data from post-service
    //then save to backend
    saveData() {
        //step1 - get list of posts from post.service
        const listOfPosts: Post[] = this.postService.getPosts();

        //step2 - send list of posts to backend

    }

    //function 2 - Fetch
}