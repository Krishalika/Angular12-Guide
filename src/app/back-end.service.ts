import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { Post } from "./post.model";
import { PostService } from "./post.service";

// DB path
// https://live-posts-a94b7-default-rtdb.firebaseio.com/

//BackEndService can be used throughout the project in the root level
@Injectable({ providedIn: 'root' })
export class BackEndService {

    constructor(private postService: PostService, private http: HttpClient) {

    }
    //function 1 - Save

    //it should get data from post-service
    //then save to backend
    saveData() {
        //step1 - get list of posts from post.service
        const listOfPosts: Post[] = this.postService.getPosts();

        //step2 - send list of posts to backend
        // put('') 2 parameters -> where the data needs to be this.saveData, what data to be saved
        // posts.json -> indicates a table, indicates a collection details

        //subscribe -> when a response will come, it will execute a function
        this.http.put('https://live-posts-a94b7-default-rtdb.firebaseio.com/posts.json', listOfPosts).subscribe(
            (res) => {
                //whatever the response comes, we gonna console it
                console.log(res);
            }
        );
    }

    //function 2 - Fetch
    fetchData() {
        this.http.get<Post[]>('https://live-posts-a94b7-default-rtdb.firebaseio.com/posts.json').pipe(tap((listOfPosts: Post[]) => {
            console.log(listOfPosts);

            //step 2 - send to post.service
            //pass new post list get from the backend to postservice
            this.postService.setPosts(listOfPosts);
        })
            //tap -> before utilizing data in subscribe() , check what has been received
        ).subscribe();
    }

}
