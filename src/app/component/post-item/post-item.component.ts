import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../model/post.model";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post={
    title: '',
    content: '',
    author: '',
  };

  @Output() onChange = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }


  public buttonClicked(): void {
 this.onChange.emit();
  }
}
