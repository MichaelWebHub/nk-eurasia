import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-partners',
  templateUrl: './home-partners.component.html',
  styleUrls: ['./home-partners.component.scss']
})
export class HomePartnersComponent implements OnInit {

  partners: { image: string; url: string; alt: string; title: string }[] = [
    {
      image: '../../assets/images/Gazprom.png',
      alt: 'Газпром',
      url: 'http://www.gazprom.ru/',
      title: 'Газпром'
    },
    {
      image: '../../assets/images/Novatek.png',
      alt: 'Новатек',
      url: 'http://www.novatek.ru/',
      title: 'Новатек'
    },
    {
      image: '../../assets/images/Rosneft.png',
      alt: 'Роснефть',
      url: 'https://www.rosneft.ru/',
      title: 'Роснефть'
    },
    {
      image: '../../assets/images/Sibur.png',
      alt: 'Сибур',
      url: 'https://www.sibur.ru/',
      title: 'Сибур'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
