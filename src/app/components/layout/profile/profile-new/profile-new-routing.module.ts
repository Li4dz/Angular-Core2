import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileNewComponent } from "./profile-new.component";

const routes : Routes = [
    { path : '', component : ProfileNewComponent }
];

@NgModule({
    imports : [ RouterModule.forChild(routes) ],
    exports : [ RouterModule ]
})

export class ProfileNewRoutingModule { }