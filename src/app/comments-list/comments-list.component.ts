import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../types/Comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  @Input() comments: Comment[];
  constructor() { }

  ngOnInit() {
  }

}
