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
  showPreloader = false;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
  }

  onSubmit(form): void {
    this.showPreloader = true;

    try {
      emailjs.sendForm('yandex', 'template_NQWXoYQc', 'form', 'user_JOo9rzNDhmu3PM4hhlGed')
        .then((response) => {
          this.status = true;
          this.showPreloader = false;
          form.reset();
        }, (err) => {
          this.status = false;
          this.showPreloader = false;
          form.reset();
        });
    } catch (e) {
      console.log(e);
      this.showPreloader = false;
      form.reset();
    }

  }
}
