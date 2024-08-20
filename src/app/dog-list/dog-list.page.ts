import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonIcon, IonFabButton, IonModal, IonButton, IonButtons } from '@ionic/angular/standalone';
import { Dog } from '../entities';
import { DogService } from '../dog.service';
import { DogCardComponent } from '../dog-card/dog-card.component';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { DogFormComponent } from "../dog-form/dog-form.component";

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.page.html',
  styleUrls: ['./dog-list.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonModal, IonFabButton, IonIcon, IonFab, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, DogCardComponent, DogFormComponent]
})
export class DogListPage implements OnInit {
  // @ViewChild(IonModal) 
  // modal!:IonModal;

  dogs:Dog[] = [];

  addDog:Dog = {
    name:'',
    breed:'',
    birthdate: '2024-01-01'
  }

  constructor(private dogService:DogService) {
    addIcons({add})

   }

  ngOnInit() {
    this.dogService.fetchAll().subscribe(data => this.dogs = data);
  }

  postDog() {
    this.dogService.add(this.addDog).subscribe(data => this.dogs.push(data));
  }

}
