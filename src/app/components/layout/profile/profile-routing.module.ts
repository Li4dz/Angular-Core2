import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import {  } from "./profile-new/profile-new.module";

const routes : Routes = [
    { path : '', component : ProfileComponent },
    { path : 'new', loadChildren: './profile-new/profile-new.module#ProfileNewModule' }  
];

@NgModule({
    imports : [ RouterModule.forChild(routes)],
    exports : [ RouterModule ]
})

export class ProfileRoutingModule {}