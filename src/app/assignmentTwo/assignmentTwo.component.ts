import { Component, OnInit } from "@angular/core";
@Component({
    selector:'user-name',
    templateUrl: './assignmentTwo.component.html'
})
export class userName implements OnInit{
    userName='';
    userField=false;
    constructor() { 
        this.userField=true;
      }
      ngOnInit(): void {
      }
}