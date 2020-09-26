import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
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
            ),
        new Recipe(
            'Spicy Sushi',
            'Home made sushi. delicious and healthy',
            'https://prod-wolt-venue-images-cdn.wolt.com/5b4f30ed505452000be9d978/0d24ca6ee49c396afbdd4a6a0f4e5906',
            [
                new Ingredient('Cucumbers', 2),
                new Ingredient('Carrot', 1),
                new Ingredient('Avocado', 2),
                new Ingredient('Salmon', 1),
                new Ingredient('Tuna', 1),
                new Ingredient('Rice', 1),
                new Ingredient('Seaweed', 5),
                new Ingredient('Soy Sauce', 3),
                new Ingredient('Tariyaki Sauce', 3)
            ]
        )
      ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}