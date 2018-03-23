import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeysPipe } from "../../common/pipes/keys.pipe";

@NgModule({
    imports: [ CommonModule, KeysPipe ],
    exports: [ KeysPipe ]
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [ ]
        };
    }
}
