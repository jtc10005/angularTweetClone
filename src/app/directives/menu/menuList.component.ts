import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { routes } from '../../app-routing.module';
import { IRoutes, IRoute } from 'src/app/models/iRoutes';
@Component({
  selector: 'menuList-component',
  templateUrl: './menuList.component.html',
  styleUrls: ['./menuList.component.scss']
})
export class MenulistComponent implements OnInit {
  menuItems: IRoutes;
  @Output() MenuClickEvent = new EventEmitter<IRoute>();
  constructor() {}

  ngOnInit() {
    this.menuItems = routes.filter(x => x.showInMenu);
  }
}
