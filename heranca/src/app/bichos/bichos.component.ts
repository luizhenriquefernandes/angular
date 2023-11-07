import { Component } from '@angular/core';
import { Animal } from "./Animal";

@Component({
  selector: 'app-bichos',
  templateUrl: './bichos.component.html',
  styleUrls: ['./bichos.component.css']
})
export class BichosComponent {
  animal = new Animal("Leo","Leao","25/5/2003");
  
}

