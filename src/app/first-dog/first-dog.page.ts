import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Dog } from '../entities';
import {addIcons} from 'ionicons';
import { createOutline } from "ionicons/icons";
import { DogFormComponent } from "../dog-form/dog-form.component";
import { DogCardComponent } from "../dog-card/dog-card.component";

@Component({
  selector: 'app-first-dog',
  templateUrl: './first-dog.page.html',
  styleUrls: ['./first-dog.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, DogFormComponent, DogCardComponent]
})
export class FirstDogPage implements OnInit {
  showForm = false;

  dog:Dog = {
    id: 1,
    name: 'Fido',
    breed: 'Corgi',
    birthdate: '2023-01-04'
  };

  constructor() {
    addIcons({createOutline});
  }

  ngOnInit() {
  }

}
