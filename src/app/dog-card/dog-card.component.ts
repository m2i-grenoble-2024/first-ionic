import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/angular/standalone";
import { Dog } from '../entities';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, DatePipe]
})
export class DogCardComponent  implements OnInit {
  @Input({required:true})
  dog!:Dog;

  constructor() { }

  ngOnInit() {}

}
