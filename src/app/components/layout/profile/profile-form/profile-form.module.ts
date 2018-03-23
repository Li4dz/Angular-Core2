import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileFormComponent } from "./profile-form.component";


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule], 
    declarations: [ ProfileFormComponent ],
    exports: [ ProfileFormComponent]
})
export class ProfileFormModule { }  