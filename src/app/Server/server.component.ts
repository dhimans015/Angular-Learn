import { Component } from "@angular/core";
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online {
        color:white;
    }
    `]
})
export class ServerComponent {
server: number=Math.floor((Math.random() * 100) + 1);
statusId: string='online';
constructor(){
    this.statusId=Math.random()>0.5?"online":"offline";
}
getServerStatus(){
    return this.statusId;
}
getColor(){
    return this.statusId==='online'?'palegreen':'palevioletred';
}
}