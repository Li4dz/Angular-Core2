import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class TestService implements OnInit { 
    constructor() {
        console.log('works');
    }

    ngOnInit() {
        console.log('onInit');
    }

}