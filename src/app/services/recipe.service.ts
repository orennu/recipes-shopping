import { EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test recipe 1', 
            'This is simply a test for recipe 1', 
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1537973085542.jpeg'
            ),
        new Recipe(
            'A Test recipe 2', 
            'This is simply a test for recipe 2', 
            'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg'
            )
      ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}