import { style } from "@angular/animations";
import { Component } from "@angular/core";
@Component({
    selector:'success-alert',
    template:'<p>This is a success alert.</p>',
    styles:[
        `
        p{
            padding:20px;
            border: 1px solid green;
            background-color:palegreen;
        }
        `
    ]
})
export class SuccessAlertComponent {

}