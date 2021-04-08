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
          url:"/pages/home"
        },
        {
          titulo: "About",
          url: "/pages/about"
        },
        {
          titulo: "Dashboard",
          url: "/pages/dashboard"
        },
      ]
    }
  ];

  obtenerMenus(): Menu[] {
    return this.menus;
  }

  constructor() { }
}
