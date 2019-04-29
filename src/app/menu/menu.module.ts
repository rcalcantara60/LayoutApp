import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  // { path: '', component: MenuPage }
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: 'tabs', loadChildren: '../tabs/tabs.module#TabsPageModule' },
      { path: 'first', loadChildren: '../first/first.module#FirstPageModule' },
      { path: 'second', loadChildren: '../second/second.module#SecondPageModule' }
    ]},
    { path: '', redirectTo: 'menu/tabs', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
