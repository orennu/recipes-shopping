import { EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Chicken Burger', 
            'Home made chicken burger. Ant Jamaima style', 
            'https://hips.hearstapps.com/hmg-prod/images/190416-chicken-burger-082-1556204252.jpg',
            [
                new Ingredient('Chicken Breast', 1),
                new Ingredient('Tomatoes', 1),
                new Ingredient('Pickle', 1),
                new Ingredient('Lettuce', 1),
                new Ingredient('Burger Bun', 1),
                new Ingredient('Mayonnaise', 1)
            ]
            ),
        new Recipe(
            'Beef Burger', 
            'Home made beef burger. simple and yummi', 
            'https://www.burger-il.com/wp-content/uploads/2017/11/meat-date-burger-1.jpg',
            [
                new Ingredient('Beef', 1),
                new Ingredient('Tomatoes', 1),
                new Ingredient('Pickle', 1),
                new Ingredient('Lettuce', 1),
                new Ingredient('Burger Bun', 1),
                new Ingredient('Mayonnaise', 1),
                new Ingredient('BBQ Sauce', 1),
                new Ingredient('Cheddar Cheese', 1)
            ]
            )
      ];

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }
}