import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: number = new Date().getFullYear();

  navigation: { label: string; url: string }[] = [
    {
      label: 'Главная',
      url: 'home'
    },
    {
      label: 'Продукция',
      url: 'products'
    },
    {
      label: 'Услуги',
      url: 'services'
    },
    {
      label: 'Документы',
      url: 'documents'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
