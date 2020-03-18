import {Component, OnInit} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.post = this.postsService.getById(+params.id);
    });
  }

  public loadPost() {
    this.router.navigate(['/posts', 44]);
  }
}