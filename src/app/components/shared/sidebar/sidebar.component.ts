import { Component } from '@angular/core';
import { Router } from "@angular/router"

import { Menu } from "../../../common/class/menu.class";
import { SidebarService } from "../../../services/shared/sidebar.service";

declare var $:any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})

export class SidebarComponent {

    private sideBar : Array<Menu> = [];

    constructor(sidebarService : SidebarService){
        this.sideBar = sidebarService.generateSidebar();
    }

    isNotMobileMenu() {
        return $(window).width() > 991 ? false : true;
    }

}
