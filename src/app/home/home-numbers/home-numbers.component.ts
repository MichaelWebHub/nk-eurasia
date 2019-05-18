import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home-numbers',
  templateUrl: './home-numbers.component.html',
  styleUrls: ['./home-numbers.component.scss']
})
export class HomeNumbersComponent implements OnInit, AfterViewInit {

  @ViewChild('title') title: ElementRef;

  animationOffset = 500;

  animationBlocks: NodeList;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.animationBlocks = document.querySelectorAll('.svg-animation');
  }

  @HostListener('document:scroll')
  onScroll(): void {
    const el = document.scrollingElement || document.documentElement;
    if (el.scrollTop + this.animationOffset >= this.title.nativeElement.offsetTop) {
      this.animationBlocks.forEach((block: SVGElement) => {
        block.classList.add('trigger');
      });
    } else {
      this.animationBlocks.forEach((block: SVGElement) => {
        block.classList.remove('trigger');
      });
    }
  }

}
