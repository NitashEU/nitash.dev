import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root-root',
  templateUrl: './root.page.html',
  styleUrls: ['./root.page.scss']
})
export class RootRootComponent implements OnInit {
  public constructor(public media: MediaObserver) {}

  public ngOnInit(): void {
    console.log('Galaxy background: https://codepen.io/saransh/pen/BKJun');
  }
}
