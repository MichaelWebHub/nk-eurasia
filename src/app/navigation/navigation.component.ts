import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
