import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Profile } from '../../common/class/profile';
import  "rxjs/Rx";


@Injectable() 
export class ProfileService {
    private firebaseUrl: string = "https://angular-core-ff588.firebaseio.com";
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
          .map(res=> { return res.json(); })
    }

    getProfile(key$: string) {
        let url = `${this.firebaseUrl}/profile/${key$}.json`;
        return this.http.get(url)
            .map(res=> res.json());
    }

    editProfile(profile: Profile, key$: string) {
        let body = JSON.stringify(profile);
        let headers = this.headers;
        let url =  `${this.firebaseUrl}/profile/${key$}.json`;
        return this.http.put(url, body, { headers })
            .map(res=> res.json());
    }

    
    deleteProfile(key$: string) {
        let url = `${this.firebaseUrl}/profile/${key$}.json`;
        return this.http.delete(url)  
                .map(res=> res.json());
    }

    
//   eliminarHeroe(key$:string){
//     let url = `${this.heroeUrl}/${key$}.json`;

//     return this.http.delete(url)
//       .map(res => { 
//         return res.json();
//       })
//   }
}
