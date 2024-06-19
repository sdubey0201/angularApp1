import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/foods';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foodList :Foods[]=[];
  constructor(private foodService:FoodService,private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchItem']){
        this.foodList = this.foodService.getAllImages().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      }else{
        this.foodList = this.foodService.getAllImages();
      }
    })
    
    
  }

}
