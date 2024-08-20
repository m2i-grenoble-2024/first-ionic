import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dog } from '../entities';
import { IonInput, IonDatetime, IonDatetimeButton, IonModal, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss'],
  standalone: true,
  imports: [IonButton, IonModal, IonDatetimeButton, IonDatetime, IonInput, FormsModule]
})
export class DogFormComponent  implements OnInit {
  @Input()
  toEdit!:Dog;
  
  @Output()
  apply = new EventEmitter();

  constructor() { }

  ngOnInit() {}
}
