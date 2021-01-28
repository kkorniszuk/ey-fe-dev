import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hashtag-analyse',
  templateUrl: './hashtag-analyse.component.html',
  styleUrls: ['./hashtag-analyse.component.scss']
})
export class HashtagAnalyseComponent implements OnInit {

  @Input()
  tweetText: string;
  @Input()
  hashtag: string;
  @Input()
  sentiment: number;

  constructor() { }

  ngOnInit(): void {
  }

}
