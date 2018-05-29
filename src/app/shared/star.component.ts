import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: '../shared/star.component.html',
    styleUrls : ['../shared/star.component.css']
})
export class StarComponent implements OnChanges
{
    
    starWidth : number;
   @Input() rating: number;
   @Output() notify : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void{
        this.notify.emit('Clicked');
    }
}