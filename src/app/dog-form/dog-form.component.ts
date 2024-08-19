import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../entities';
import { IonInput, IonDatetime, IonDatetimeButton, IonModal } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss'],
  standalone: true,
  imports: [IonModal, IonDatetimeButton, IonDatetime, IonInput, FormsModule]
})
export class DogFormComponent  implements OnInit {
  @Input()
  toEdit!:Dog;

  constructor() { }

  ngOnInit() {}

}
