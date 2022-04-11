import { Component } from "@angular/core";
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {
server: number=10;
statusId: string='online';
getServerStatus(){
    return this.statusId;
}
}