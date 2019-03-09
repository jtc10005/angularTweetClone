import { Routes, Route, RouterModule } from '@angular/router';

export { RouterModule } from '@angular/router';
export interface IRoute extends Route {
  showInMenu: boolean;
  menuText?: string;
}

export declare type IRoutes = IRoute[];
