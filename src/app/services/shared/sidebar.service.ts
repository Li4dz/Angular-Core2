import { Injectable } from '@angular/core';
import { Menu } from "../../common/class/menu.class";

export const SidebarMenu : Array<Menu> = [
  { id: 1, path: '/dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '', level : 1, reference : 0, menu : [] },
  { id: 2, path: '/user', title: 'Users',  icon:'ti-user', class: '', level : 1, reference : 0 ,menu : []},
  { id: 3, path: '/profile', title: 'Profile',  icon:'ti-user', class: '', level : 1, reference : 0, menu : [] },
  { id: 4, path: '/typography', title: 'Typography',  icon:'ti-text', class: '', level : 1, reference : 0, menu : [] },
  { id: 5, path: '/icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '', level : 1, reference : 0 , menu : []},
  { id: 6, path: '/maps', title: 'Maps',  icon:'ti-map', class: '', level : 1, reference : 0, menu : [] },
  { id: 7, path: '/notifications', title: 'Notifications',  icon:'ti-bell', class: '', level : 1, reference : 0, menu : [] },
  { id: 8, path: '/dashboard', title: 'Dashboard',  icon:'ti-panel', class: '', level : 2, reference : 1, menu : [] },
  { id: 9, path: '/notifications', title: 'User Info',  icon:'ti-bell', class: '', level : 2, reference : 1, menu : [] }
]

@Injectable()
export class SidebarService {
  
  generateSidebar(){
    let menu : Menu;
    let levelMenu = 1;

    for(let item of SidebarMenu.filter(x=> x.level == levelMenu)){
        this.generateSubNode(item, levelMenu);
    }
    return SidebarMenu.filter(x=> x.reference == 0);;
  }

  generateSubNode(menu:Menu,level:number){
    let levelMenu = level ++;

    for(let item of SidebarMenu.filter(x=> x.level == levelMenu && x.reference == menu.id)){
        this.generateSubNode(item, levelMenu);
        menu.menu.push(item);
    }
  }
}
