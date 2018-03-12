import { AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from "@angular/router";

export abstract class Test implements AfterViewInit {

    constructor (private router: Router) {
        console.log('service');
    }
    
    loading: boolean;

    ngAfterViewInit() {
        console.log('here');
        this.router.events
        .subscribe((event) => {
            if(event instanceof NavigationStart) {
                this.loading = true;
            }
            else if (
                event instanceof NavigationEnd || 
                event instanceof NavigationCancel
                ) {
                this.loading = false;
            }
        });
    }
}