import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import  "rxjs/Rx";
import { Profile } from '../../common/class/profile';


@Injectable() 
export class ProfileService {
    private firebaseUrl: string = "https://angular-core-ff588.firebaseio.com/";
    private headers = new Headers( {  'Content-Type' : 'application/json'});

    constructor(private http: Http) { }

    saveProfile(profile: Profile) {
        let body = JSON.stringify(profile);
        let headers = this.headers;
        return this.http.post(`${this.firebaseUrl}/profile.json`, body, { headers })
            .map(res=> { return res.json();});
    }

    getProfileList() {
        let url = `${this.firebaseUrl}/profile.json`;
        return this.http.get(url)
                .map(res => res.json());
    }
}
