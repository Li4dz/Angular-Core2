import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from "@angular/router";
import { Test } from './test.class';
import { TestService } from '../../services/shared/test.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css']
})
export class LayoutComponent implements AfterViewInit, OnInit, OnDestroy {

 
  loading: boolean;
 
  constructor(private router: Router) { 
    this.loading = true;
  }

  ngOnInit() {
    console.log('init');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  ngAfterViewInit() {
    this.router.events
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
