export class Menu {
    id : number;
    path: string;
    title: string;
    icon: string;
    class: string;
    level : number;
    reference : number;
    menu : Array<Menu> = [];
}