import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input() loveIts: number = 0;
  @Input() title: string = "Titre";
  @Input() content: string = "Message";
  @Input() createdDate: Date;

  ngOnInit() {
  }

  isLoved() : number {
    if (this.loveIts > 0)
      return 1;
    else if (this.loveIts === 0)
      return 0;
    else
      return -1;
  }

  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }

  onLoveIt() {
    this.loveIts += 1;
  }

  onDontLoveIt() {
    this.loveIts -= 1;
  }
}
