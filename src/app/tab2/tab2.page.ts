import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
constructor(public menuCtrl : MenuController, public navCrtl: NavController){}
menu(){
  this.menuCtrl.toggle();
}
arte(){
  this.navCrtl.navigateForward("page1");
 }
arqui(){
  this.navCrtl.navigateForward("page2");
  
}
anime(){
  this.navCrtl.navigateForward("page3");
  
}
deport(){
  this.navCrtl.navigateForward("page4");
  
}
meme(){
  this.navCrtl.navigateForward("page5");
  
}
music(){
  this.navCrtl.navigateForward("page6");
  
}
}
