declare var $:any;

export class Notify {

    static showNotification(message: string, style:string, icon?:string) {
        var type = ['','info','success','warning','danger'];
        $.notify({ icon: icon, message: message },
            { type: style, timer: 1000, placement: { from: 'top', align: 'right' }
        });
    }

    static successOperation() {
        this.showNotification('<b>Éxito</b> - Operación satisfactoria', 'success', 'ti-cloud');
    }

    static failedOperation() {
        this.showNotification('<b>Error</b> - Operación fallida', 'danger', 'ti-cloud');
    }

}