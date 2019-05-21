import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  imagen1(){
    this.navCtrl.navigateForward("imagenan1");
    }
}
