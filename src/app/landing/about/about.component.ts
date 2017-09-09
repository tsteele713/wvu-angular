import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: `app/landing/about/about.tpl.html`,
})

export class AboutComponent {
  aboutMe: string = 'This is the about me section';
  constructor() {
  }
}

