import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { ClassField } from '@angular/compiler/src/output/output_ast';

declare var $:any;

export class Menu {
    id : number;
    path: string;
    title: string;
    icon: string;
    class: string;
    level : number;
    reference : number;
    menu : Array<Menu> = [];
}

export interface Heroe {
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
}

export interface RouteInfo {
    id : number,
    path: string;
    title: string;
    icon: string;
    class: string;
    level : number;
    reference : number;
}

export const ROUTES: RouteInfo[] = [
    { id: 1, path: '/dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '', level : 1, reference : 0 },
    { id: 2, path: '/user', title: 'Users',  icon:'ti-user', class: '', level : 1, reference : 0 },
    { id: 3, path: '/table', title: 'Table List',  icon:'ti-view-list-alt', class: '', level : 1, reference : 0 },
    { id: 4, path: '/typography', title: 'Typography',  icon:'ti-text', class: '', level : 1, reference : 0 },
    { id: 5, path: '/icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '', level : 1, reference : 0 },
    { id: 6, path: '/maps', title: 'Maps',  icon:'ti-map', class: '', level : 1, reference : 0 },
    { id: 7, path: '/notifications', title: 'Notifications',  icon:'ti-bell', class: '', level : 1, reference : 0 },
    { id: 8, path: '/notifications', title: 'Notifications',  icon:'ti-bell', class: '', level : 2, reference : 1 }
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
    private menu : Array<Menu> = [
        { id: 1, path: '/dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '', level : 1, reference : 0, menu : [] },
        { id: 2, path: '/user', title: 'Users',  icon:'ti-user', class: '', level : 1, reference : 0 ,menu : []},
        { id: 3, path: '/table', title: 'Table List',  icon:'ti-view-list-alt', class: '', level : 1, reference : 0, menu : [] },
        { id: 4, path: '/typography', title: 'Typography',  icon:'ti-text', class: '', level : 1, reference : 0, menu : [] },
        { id: 5, path: '/icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '', level : 1, reference : 0 , menu : []},
        { id: 6, path: '/maps', title: 'Maps',  icon:'ti-map', class: '', level : 1, reference : 0, menu : [] },
        { id: 7, path: '/notifications', title: 'Notifications',  icon:'ti-bell', class: '', level : 1, reference : 0, menu : [] },
        { id: 8, path: '/dashboard', title: 'Dashboard',  icon:'ti-panel', class: '', level : 2, reference : 1, menu : [] },
        { id: 9, path: '/notifications', title: 'User Info',  icon:'ti-bell', class: '', level : 2, reference : 1, menu : [] }
    ]

    private sideBar : Array<Menu> = [];
    

  public menuItems: any[];
  ngOnInit() {
    // console.log(this.generateSidebar())   
    this.generateSidebar();
    console.log(this.menu);
    // this.generateSidebar();
    // console.log(this.menu);

    //   this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

    generateSidebar() {
    let menu : Menu;
    let levelMenu = 1;

    for(let item of this.menu.filter(x=> x.level == levelMenu)){
        this.generateSubNode(item, levelMenu);
    }

    this.sideBar = this.menu.filter(x=> x.reference == 0);
  }

  generateSubNode(menu:Menu,level:number){
    let levelMenu = level + 1;

    for(let item of this.menu.filter(x=> x.level == levelMenu && x.reference == menu.id)){
        this.generateSubNode(item, levelMenu);
        menu.menu.push(item);
    }

  }

  isNotMobileMenu(){
      if($(window).width() > 991){
          return false;
      }
      return true;
  }

}
