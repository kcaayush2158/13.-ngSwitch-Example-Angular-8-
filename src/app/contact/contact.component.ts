@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  template:'<div [ngSwitch]="color"> <div *ngSwitchCase="\'red\'">red</div><div *ngSwitchCase="\'green\'">green</div><div *ngSwitchCase="\'blue\'">blue</div></div>',
  styles: []
})


export class ContactComponent implements OnInit {

  public color="green";

    constructor(){

    }
    ngOnInit(){

    }

}
