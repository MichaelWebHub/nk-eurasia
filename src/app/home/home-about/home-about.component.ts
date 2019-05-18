import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit {

  @ViewChild('title') title: ElementRef;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.title.nativeElement.classList.add('trigger');
    }
  }

}
