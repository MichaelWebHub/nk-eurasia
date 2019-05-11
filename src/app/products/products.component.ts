import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

export interface IProduct {
  label: string;
  diameterMin?: number;
  diameterMax: number;
  pressure: number;
  deltaMin?: number;
  deltaMax?: number;
  description?: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  config: SwiperConfigInterface = {
    slidesPerView: 4,
    centeredSlides: false,
    freeMode: true,
    mousewheel: true,
    autoplay: {
      delay: 5000
    }
  };

  sections: NodeList;
  animationOffset = window.innerHeight - 200;

  products1: IProduct[] = [
    {
      label: 'T-101',
      diameterMin: 25,
      diameterMax: 100,
      pressure: 10.2,
      deltaMin: 460,
      deltaMax: 520
    },
    {
      label: 'ТМ-904',
      diameterMin: 25,
      diameterMax: 100,
      pressure: 15,
      deltaMax: 720
    },
    {
      label: 'T-203',
      diameterMin: 100,
      diameterMax: 325,
      pressure: 5.2,
      deltaMax: 900
    },
    {
      label: 'TM-360',
      diameterMin: 50,
      diameterMax: 150,
      pressure: 10.2,
      deltaMax: 600
    },
    {
      label: 'TM-660',
      diameterMin: 75,
      diameterMax: 325,
      pressure: 10.2,
      deltaMax: 1060
    },
    {
      label: 'TM-760',
      diameterMin: 75,
      diameterMax: 406,
      pressure: 10.2,
      deltaMin: 1680,
      deltaMax: 3450
    },
    {
      label: 'TM-860',
      diameterMin: 75,
      diameterMax: 508,
      pressure: 10.2,
      deltaMax: 1680
    },
    {
      label: 'TM-936',
      diameterMin: 325,
      diameterMax: 900,
      pressure: 15,
      deltaMax: 2690
    },
    {
      label: 'TM-1200',
      diameterMin: 325,
      diameterMax: 1000,
      pressure: 10.2,
      deltaMax: 2740
    },
    {
      label: 'TM-2400',
      diameterMin: 760,
      diameterMax: 1520,
      pressure: 8.2,
      deltaMin: 2740,
      deltaMax: 3300
    }
  ];

  products1_images: { label: string; url: string }[] = [
    {
      label: 'T-101',
      url: './../assets/images/products/p8.png'
    },
    {
      label: 'TM-760',
      url: './../assets/images/products/p3.png'
    },
    {
      label: 'TM-1200',
      url: './../assets/images/products/p1.png'
    },
    {
      label: 'TM-2460',
      url: './../assets/images/products/p2.png'
    }
  ];

  products2: IProduct[] = [
    {
      label: 'SHORTSTOPP 275',
      diameterMin: 100,
      diameterMax: 300,
      pressure: 1.9
    },
    {
      label: 'SHORTSTOPP 500',
      diameterMin: 38,
      diameterMax: 300,
      pressure: 3.45
    },
    {
      label: 'SHORTSTOPP II',
      diameterMin: 32,
      diameterMax: 300,
      pressure: 1
    },
    {
      label: 'SHORTSTOPP PE',
      diameterMin: 100,
      diameterMax: 300,
      pressure: 0.9
    },
    {
      label: 'STOPPLE',
      diameterMin: 100,
      diameterMax: 1200,
      pressure: 10.2
    },
    {
      label: 'STOPPLE TRAIN',
      diameterMin: 100,
      diameterMax: 900,
      pressure: 10.2
    }
  ];

  products2_images: { label: string; url: string }[] = [
    {
      label: 'SHORTSTOPP 275',
      url: './../assets/images/products/p4.png'
    },
    {
      label: 'SHORTSTOPP PE',
      url: './../assets/images/products/p5.png'
    },
    {
      label: 'STOPPLE Plugging Machine',
      url: './../assets/images/products/p6.png'
    },
    {
      label: 'STOPPLE Train',
      url: './../assets/images/products/p7.png'
    }
  ];

  products3: IProduct[] = [
    {
      label: 'SHORTSTOPP® 300D',
      diameterMax: 300,
      pressure: 3.45,
      description: 'Горячештампованные, патрубкового типа либо полнообхватные, с боковым отводом (3-WAY TEE) и без.'
    },
    {
      label: 'STOPPLE',
      diameterMin: 50,
      diameterMax: 1400,
      pressure: 15,
      description: 'Горячештампованные или сварные, патрубкового типа с накладкой и без, полнообхватные,  с боковым отводом (3-WAY TEE) и без, с резьбовой пробкой TREAD-O-RING, пробкой типа LOCK-O-RING и LOCK-O-RING PLUS.'
    }
  ];

  products3_images: { label: string; url: string }[] = [
    {
      label: 'STOPPLE Fitting',
      url: './../assets/images/fittings/f1.png'
    },
    {
      label: 'LOCK-O-RING® Plus',
      url: './../assets/images/fittings/f5.png'
    },
    {
      label: 'SHORTSTOPP® 300D',
      url: './../assets/images/fittings/f2.png'
    },
    {
      label: 'SHORTSTOP II',
      url: './../assets/images/fittings/f3.png'
    },
    {
      label: '300D Spherical',
      url: './../assets/images/fittings/f4.png'
    },
    {
      label: 'SHORTSTOPP Bolt-On 4x4',
      url: './../assets/images/fittings/f6.png'
    },
    {
      label: 'SHORTSTOPP Flat-Bottom Tee',
      url: './../assets/images/fittings/f7.png'
    },
    {
      label: 'SHORTSTP 300D Split Tee',
      url: './../assets/images/fittings/f8.png'
    },
    {
      label: 'SS Weld Fitting',
      url: './../assets/images/fittings/f9.png'
    }
  ];

  stoppleDetails: {
    type: string;
    view: string;
    description: string | string[];
  }[] = [
    {
      type: 'Тип В.',
      view: 'plain',
      description: 'Обечайки и отвод на одной из них получены путем горячей штамповки из листового металла, на полноразмерный отвод приваривается фланец типа LOCK-O-RING® или LOCK-O-RING® PLUS требуемого диаметра и класса.'
    },
    {
      type: 'Тип С.',
      view: 'plain',
      description: 'Обечайки изготавливаются из цельной секции трубы, отверстия под отвод вырезаются газорезкой, отвод приваривается полуавтоматической электродуговой сваркой, затем на отвод приваривается фланец типа LOCK-O-RING® или LOCK-O-RING® PLUS требуемого диаметра и класса.'
    },
    {
      type: 'Фитинги с отводами уменьшенного диаметра.',
      view: 'plain',
      description: 'Фитинги, изготовлены путем штамповки из листового металла. Затем на отвод приваривается фланец уменьшенного диаметра типа LOCK-O-RING® или LOCK-O-RING® PLUS требуемого стандарта.'
    },
    {
      type: 'Фитинг STOPPLE® Plus',
      view: 'list',
      description: [
        'Полнообхватный фитинг, предназначенный для врезок и перекрытия сечения трубопровода под давлением',
        'Тип фланца - LOCK-O-RING® Plus',
        'Фитинги данного типа не имеют отверстий во фланцах, что позволяет исключить потенциальные утечки',
        'Система фиксации пробки с раздвижными сегментами, позволяет зафиксировать пробку внутри фланца',
        'Диаметры, дюйм: 4 “ – 28”'
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {

    if (window.innerWidth < 1440) {
      this.config.slidesPerView = 3;
    }

  }

  ngAfterViewInit(): void {
    this.sections = document.querySelectorAll('.products__title');
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
