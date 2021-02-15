import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  logo = {
    url: "../../assets/logo.png"
  };

  pics = {
    pic1: { url: "../../assets/pics/pic1.jpg" },
  };

  constructor() { }

}
