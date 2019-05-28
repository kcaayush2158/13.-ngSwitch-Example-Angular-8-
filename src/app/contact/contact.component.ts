import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  template:'<div *ngIf="displayName; then ifBlock else elseBlock" > </div> <br> <ng-template #ifBlock> <h2> IF statement is running</h2></ng-template>  <ng-template #elseBlock> <h2> Else statement is running</h2></ng-template>',
  styles: []
})


export class ContactComponent implements OnInit {

  public displayName = false;
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


}
