import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'page1', loadChildren: './page1/page1.module#Page1PageModule' },
  { path: 'page2', loadChildren: './page2/page2.module#Page2PageModule' },
  { path: 'page3', loadChildren: './page3/page3.module#Page3PageModule' },
  { path: 'calificaciones', loadChildren: './calificaciones/calificaciones.module#CalificacionesPageModule' },
  { path: 'page4', loadChildren: './page4/page4.module#Page4PageModule' },
  { path: 'imagen1', loadChildren: './imagen1/imagen1.module#Imagen1PageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'page5', loadChildren: './page5/page5.module#Page5PageModule' },
  { path: 'page6', loadChildren: './page6/page6.module#Page6PageModule' },
  { path: 'imagena1', loadChildren: './imagena1/imagena1.module#Imagena1PageModule' },
  { path: 'imagenan1', loadChildren: './imagenan1/imagenan1.module#Imagenan1PageModule' },
  { path: 'imagende1', loadChildren: './imagende1/imagende1.module#Imagende1PageModule' },
  { path: 'imagenme1', loadChildren: './imagenme1/imagenme1.module#Imagenme1PageModule' },
  { path: 'imagenmu1', loadChildren: './imagenmu1/imagenmu1.module#Imagenmu1PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
