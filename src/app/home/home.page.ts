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
    pic2: { url: "../../assets/pics/pic2.jpg" },
    pic3: { url: "../../assets/pics/pic3.jpg" },
    pic4: { url: "../../assets/pics/pic4.jpg" },
    pic5: { url: "../../assets/pics/pic5.jpg" },
    pic6: { url: "../../assets/pics/pic6.jpg" },
  };

  constructor() { }

}
