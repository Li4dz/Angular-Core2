import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";

const routes : Routes = [
    { path : '', component : ProfileComponent },
    { path : 'new', loadChildren: './profile-new/profile-new.module#ProfileNewModule' },
    { path : 'edit/:key', loadChildren: './profile-edit/profile-edit.module#ProfileEditModule' } 
];

@NgModule({
    imports : [ RouterModule.forChild(routes)],
    exports : [ RouterModule ]
})

export class ProfileRoutingModule {}