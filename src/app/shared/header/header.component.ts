import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu:Menu[];

  constructor(servicioMenu : MenuService) {
    this.menu = servicioMenu.obtenerMenus();
   }

  ngOnInit(): void {
  }

}
