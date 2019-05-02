import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home-ecology',
  templateUrl: './home-ecology.component.html',
  styleUrls: ['./home-ecology.component.scss']
})
export class HomeEcologyComponent implements OnInit, AfterViewInit {

  list: { ecology: string; economy: string }[] = [
    {
      ecology: 'Значительное ограничение необходимого для стравливания участка трубопровода',
      economy: 'Предотвращение финансовых убытков от остановки трубопровода и от не поставленного продукта в период выполнения ремонтных работ'
    },
    {
      ecology: 'Сокращение количества продукта, подлежащего стравливанию в атмосферу или перекачке в другие емкости',
      economy: 'Значительное сокращение или предотвращение потерь самого продукта при опорожнении'
    },
    {
      ecology: 'Сокращение потерь продукта при опорожнении трубопровода',
      economy: 'Уменьшение стоимости опорожнения большого участка трубопровода'
    },
    {
      ecology: 'Значительное уменьшение или полное предотвращение загрязнения окружающей среды',
      economy: 'Значительное сокращение или полное избавление от штрафов за загрязнение окружающей среды'
    },
    {
      ecology: 'Высокий уровень безопасности работ, снижение аварийности и количества сверхурочных работ',
      economy: 'Уменьшение затрат на привлечение дополнительного персонала, оборудования и оплату сверхурочной работы'
    }
  ];

  @ViewChild('line') line: ElementRef;
  @ViewChild('timeline') timeline: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.generateLine(this.list, this.timeline);
    }, 500);

  }

  generateLine(arr, element: ElementRef): void {
    try {
      if (arr.length > 0) {
        const parent = element.nativeElement;
        const circles = parent.querySelectorAll('.timeline__center');
        const first_circle = circles[1];
        const last_circle = circles[circles.length - 1];
        const line_x_offset = first_circle.offsetLeft + first_circle.offsetWidth / 2;

        const line_y1 = first_circle.getBoundingClientRect().top;
        const line_y2 = last_circle.getBoundingClientRect().top + last_circle.offsetHeight;
        const line_height = line_y2 - line_y1;
        this.line.nativeElement.style.height = line_height + 'px';
        this.line.nativeElement.style.top = first_circle.offsetTop + 'px';
        this.line.nativeElement.style.left = line_x_offset + 'px';
      }
    } catch (e) {
    }
    return;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.generateLine(this.list, this.timeline);
  }

}
