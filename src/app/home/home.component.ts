import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foodList :string[]=[];
  constructor(private foodService:FoodService) {
    
   }

  ngOnInit(): void {
    this.foodList = this.foodService.getAllImages();
  }

}
