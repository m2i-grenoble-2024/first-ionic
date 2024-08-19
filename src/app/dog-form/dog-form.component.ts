import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../entities';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.scss'],
  standalone: true,
})
export class DogFormComponent  implements OnInit {
  @Input()
  toEdit!:Dog;

  constructor() { }

  ngOnInit() {}

}
