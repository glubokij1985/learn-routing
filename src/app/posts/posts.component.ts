import {Component, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public showIds = false;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params.showIds);
      this.showIds = !!params.showIds;
    });
  }

  public showIdsProgram(): void {
    this.router.navigate(['/posts'], {
      queryParams: {
        showIds: true,
      },
      fragment: 'fragment-program'
    });
  }
}
