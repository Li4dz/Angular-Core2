import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

const routes: Routes = [
    { path : '',            loadChildren : './components/layout/layout.module#LayoutModule' },
    { path : 'home',        loadChildren : './components/home/home.module#HomeModule'},
    { path : '**',          redirectTo : 'home'},

];

@NgModule({
    imports : [ RouterModule.forRoot(routes)],
    exports : [ RouterModule ]
})



export class AppRoutingModule { }