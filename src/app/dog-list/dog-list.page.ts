import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Dog } from '../entities';
import { DogService } from '../dog.service';
import { DogCardComponent } from '../dog-card/dog-card.component';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.page.html',
  styleUrls: ['./dog-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, DogCardComponent]
})
export class DogListPage implements OnInit {

  dogs:Dog[] = [];

  constructor(private dogService:DogService) { }

  ngOnInit() {
    this.dogService.fetchAll().subscribe(data => this.dogs = data);
  }

}
