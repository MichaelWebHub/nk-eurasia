import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  sections: NodeList;
  animationOffset = window.innerHeight - 200;

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.sections = document.querySelectorAll('.section__title');
  }

  @HostListener('document:scroll')
  onScroll(): void {

    this.sections.forEach((section: HTMLDivElement) => {
      if (document.documentElement.scrollTop + this.animationOffset >= section.offsetTop) {
        section.classList.add('trigger');
      }
    });
  }

}
