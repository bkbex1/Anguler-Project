import { Injectable } from "@angular/core";
import { Resolve  } from "@angular/router";
import { IPost } from "../interfaces";
import { Post, PostsService } from "../posts.service";

@Injectable({
    providedIn:'root'
})
export class StartResolver implements Resolve<Post>{

    constructor(private postService:PostsService){

    }
    resolve(){
            return this.postService.getNewPosts()
    }
}