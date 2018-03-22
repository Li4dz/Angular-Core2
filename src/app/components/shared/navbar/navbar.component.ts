import { Component, OnInit, Renderer, ViewChild, ElementRef, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { SidebarMenu } from '../../../services/shared/sidebar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})

export class NavbarComponent implements OnInit, AfterContentChecked {
  private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;
  public path: string ='';
  private title: string = '';

  constructor(location:Location, 
                private renderer : Renderer, 
                private element : ElementRef,
                private changeDetectorRef : ChangeDetectorRef) {
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
}

ngAfterContentChecked() {
    this.changeDetectorRef.detectChanges();
}

ngOnInit(){
    this.listTitles = SidebarMenu.filter(listTitle => listTitle);
    var navbar : HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
}
getTitle(){
    var titlee = window.location.pathname;
    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            this.path = this.listTitles[item].path;
            this.title = this.listTitles[item].title;
            return this.title;
        }
    }
    return this.title != '' ? this.title : 'Dashboard';
}
sidebarToggle(){
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
