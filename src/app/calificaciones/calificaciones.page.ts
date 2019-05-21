import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class CalificacionesPage implements OnInit {
  punto: string;
  constructor(public alertctrl: AlertController, public nav : NavController) { this.punto ="1" }

  ngOnInit() {
  }
  async votocs(){
    let alert = await this.alertctrl.create({
          header:'Calificacion',
          subHeader: 'Has votado un: '+this.punto+' Gracias por la calificacion',
          mode:"ios",
          buttons: [{
            text:'Ok',
            handler:(ok)=>{
              this.nav.back();
            }
          }]
        })
        alert.present();
      }
    
}
