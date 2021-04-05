import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menus: Menu[] = [
    {
      titulo:"Páginas",
      subMenus: [
        {
          titulo: "Home",
          url:"/home"
        },
        {
          titulo: "About",
          url: "/about"
        },
        {
          titulo: "Dashboard",
          url: "/dashboard"
        },
      ]
    }
  ];

  obtenerMenus(): Menu[] {
    return this.menus;
  }

  constructor() { }
}
