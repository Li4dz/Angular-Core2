import { Injectable, ElementRef } from "@angular/core";
import { SidebarMenu } from "../../services/shared/sidebar.service";

@Injectable()
export class NavbarService  {
    private listTitles: any[];
    private toggleButton;
    private sidebarVisible: boolean;

    constructor() { 
        this.listTitles = SidebarMenu.filter(listTitle => listTitle);
        // var navbar : HTMLElement = this.element.nativeElement;
        // this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    getTitle() {
        var path = window.location.pathname;
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === path){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }

    sidebarToggle(){
        console.log("aqui");
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            setTimeout(function(){
                toggleButton.classList.add('toggled');
            },500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}