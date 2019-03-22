import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postId: string;
  comments;
  constructor(private activeRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(async (data) => {
      // The id property on data is set because of the route structure in app-routing.module.ts
      this.postId = data.id;
      this.comments = await this.postService.getComments(this.postId);
    });
  }

}
