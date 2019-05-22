import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-partners',
  templateUrl: './home-partners.component.html',
  styleUrls: ['./home-partners.component.scss']
})
export class HomePartnersComponent implements OnInit {

  partners: { image: string; url: string; alt: string; title: string }[] = [
    {
      image: '../../assets/images/partners/Gazprom.png',
      alt: 'Газпром',
      url: 'http://www.gazprom.ru/',
      title: 'Газпром'
    },
    {
      image: '../../assets/images/partners/Novatek.png',
      alt: 'Новатек',
      url: 'http://www.novatek.ru/',
      title: 'Новатек'
    },
    {
      image: '../../assets/images/partners/Rosneft.png',
      alt: 'Роснефть',
      url: 'https://www.rosneft.ru/',
      title: 'Роснефть'
    },
    {
      image: '../../assets/images/partners/Sibur.png',
      alt: 'Сибур',
      url: 'https://www.sibur.ru/',
      title: 'Сибур'
    },
    {
      image: '../../assets/images/partners/mosgaz.png',
      alt: 'Мосгаз',
      url: 'http://www.mos-gaz.ru/',
      title: 'Мосгаз'
    },
    {
      image: '../../assets/images/partners/gazprom_gazoraspredelenie.png',
      alt: 'АО Газпром газораспределение',
      url: 'http://gazoraspredelenie.gazprom.ru/',
      title: 'АО Газпром газораспределение'
    },
    {
      image: '../../assets/images/partners/mosoblgaz.png',
      alt: 'Мособлгаз',
      url: 'https://mosoblgaz.ru/',
      title: 'Мособлгаз'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
