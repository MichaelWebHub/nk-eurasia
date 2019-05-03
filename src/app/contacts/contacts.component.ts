import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  status: boolean;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
  }

  onSubmit(): void {

    try {
      emailjs.sendForm('yandex', 'template_IKWoYchl', 'form', 'user_OShSxiw0BpmQ7XiECbLOq')
        .then((response) => {
          this.status = true;
        }, (err) => {
          this.status = false;
        });
    } catch (e) {
      console.log(e);
    }

  }
}
