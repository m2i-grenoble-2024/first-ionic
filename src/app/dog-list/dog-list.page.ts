import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonIcon, IonFabButton, IonModal, IonButton, IonButtons } from '@ionic/angular/standalone';
import { Dog } from '../entities';
import { DogService } from '../dog.service';
import { DogCardComponent } from '../dog-card/dog-card.component';
import { addIcons } from 'ionicons';
import { add, create, trash } from 'ionicons/icons';
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

  selected?:Dog;

  constructor(private dogService:DogService) {
    addIcons({add, trash, create})

   }

  ngOnInit() {
    this.dogService.fetchAll().subscribe(data => this.dogs = data);
  }

  postDog() {
    this.dogService.add(this.addDog).subscribe(data => this.dogs.push(data));
  }
  /**
   * Sélectionne un chien, s'il est déjà sélectionné, le désélectionne
   * @param dog Le chien à sélectionner
   */
  select(dog:Dog){
    if(this.selected == dog) {
      this.selected = undefined
    } else {
      this.selected = dog;
    }
  }

  deleteDog() {
    this.dogService.remove(this.selected?.id).subscribe(() => {
      //On utilise un filter pour retirer le chien supprimé de la liste des chiens
      this.dogs = this.dogs.filter(item => item.id != this.selected?.id);
      //Si on veut pas faire un filter, on peut relancer le fetch pour re-récupérer la liste des chiens, c'est un poil moins optimisé, mais techniquement c'est plus "fiable"
      // this.ngOnInit();
      this.selected = undefined;
    });
  }

  updateDog() {
    if(this.selected) {
      this.dogService.update(this.selected).subscribe();
    }
  }

}
