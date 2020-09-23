import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeSelectedFromList = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test recipe 1', 'This is simply a test for recipe 1', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1537973085542.jpeg'),
    new Recipe('A Test recipe 2', 'This is simply a test for recipe 2', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedFromList.emit(recipe);
  }

}
