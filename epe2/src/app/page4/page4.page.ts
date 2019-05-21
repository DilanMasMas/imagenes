import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  imagen1(){
    this.navCtrl.navigateForward("imagende1");
    }
}
