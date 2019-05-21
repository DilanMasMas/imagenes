import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor( public navCtrl: NavController) { }

  ngOnInit() {
  }
  imagen1(){
  this.navCtrl.navigateForward("imagen1");
  }
  
}
