import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "filter",
    pure : false
})

export class FilterMenuPipe implements PipeTransform {
    transform(items : any[], level : number) : any {
        let menu : any[];
             
        for(let item of items) {
            if(item.level == level){
                menu.push(item);
            }
        }

        return menu;
    }

}