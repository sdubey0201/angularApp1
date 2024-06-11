import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/foods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllImages():Foods[]{
return [
  {
    "id":1,
    "price":100,
    "name":"paneer butter masala",
    "favorite":false,
    "star": 1,
    "tags":['indian','italy'],
    "imageUlr":'/assets/1.jpg',
    "cookTime":"1-2",
    "origins":['indian','italy']
  },{
    "id":2,
    "price":100,
    "name":"paneer butter masala",
    "favorite":true,
    "star": 1,
    "tags":['indian','italy'],
    "imageUlr": '/assets/2.jpg',
    "cookTime":"1-2",
    "origins":['indian','italy']
  },{
    "id":3,
    "price":100,
    "name":"paneer butter masala",
    "favorite":false,
    "star": 1,
    "tags":['indian','italy'],
    "imageUlr":'/assets/3.jpg',
    "cookTime":"1-2",
    "origins":['indian','italy']
  },{
    "id":4,
    "price":100,
    "name":"paneer butter masala",
    "favorite":false,
    "star": 1,
    "tags":['indian','italy'],
    "imageUlr":'/assets/4.jpg',
    "cookTime":"1-2",
    "origins":['indian','italy']
  },{
    "id":5,
    "price":100,
    "name":"paneer butter masala",
    "favorite":true,
    "star": 1,
    "tags":['indian','italy'],
    "imageUlr":'/assets/5.jpg',
    "cookTime":"1-2",
    "origins":['indian','italy']
  },{
    "id":6,
    "price":100,
    "name":"paneer butter masala",
    "favorite":false,
    "star": 1,
    "tags":['indian','italy'],
    "imageUlr":'/assets/6.jpg',
    "cookTime":"1-2",
    "origins":['indian','italy']
  },{
    "id":7,
    "price":100,
    "name":"paneer butter masala",
    "favorite":true,
    "star": 1,
    "tags":['indian','italy'],
    "imageUlr":'/assets/7.jpg',
    "cookTime":"1-2",
    "origins":['indian','italy']
  }
]
  }
}
