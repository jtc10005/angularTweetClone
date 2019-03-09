import { NgModule } from '@angular/core';

import {HomeComponent, ListComponent, NewPostComponent} from './containers';
import { IRoutes, RouterModule } from './models/iRoutes';
export const routes: IRoutes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    showInMenu: true,
    menuText: 'Home'
  },
  {
    path: 'list',
    pathMatch: 'full',
    component: ListComponent,
    showInMenu: true,
    menuText: 'List'
  },
  {
    path: 'new',
    pathMatch: 'full',
    component: NewPostComponent,
    showInMenu: true,
    menuText: 'Post New'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
