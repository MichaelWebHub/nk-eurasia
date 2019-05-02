import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  @ViewChild('video') video: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.video.nativeElement.muted = 'muted';
  }

}
