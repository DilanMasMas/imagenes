import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Imagenan1Page } from './imagenan1.page';

const routes: Routes = [
  {
    path: '',
    component: Imagenan1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Imagenan1Page]
})
export class Imagenan1PageModule {}
