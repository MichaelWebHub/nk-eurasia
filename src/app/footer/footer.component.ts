import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  navigation: {label: string; url: string}[] = [
    {
      label: 'Главная',
      url: '/home'
    },
    {
      label: 'Продукты',
      url: '/products'
    },
    {
      label: 'Услуги',
      url: '/services'
    },
    {
      label: 'Контакты',
      url: '/contacts'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
