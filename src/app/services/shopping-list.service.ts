import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        if (this.isIngredientExists(ingredient)) {
            this.incrementIngredientAmount(ingredient);
        } else {
            this.ingredients.push(ingredient);
        }
        
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        /**
         * The ... is a spread operator (ES6) which takes an array and spreads it to elements of the array.
         * This is better than doing a for loop on the array in terms of performance.
         * Eventually here I used for loop because I need to update amount of existing ingredients and avoid
         * duplicated ingredients.
        */
        // this.ingredients.push(...ingredients);
        ingredients.forEach(ingredient => {
            this.addIngredient(ingredient);
        });
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    isIngredientExists(ingredient: Ingredient) {
        return this.ingredients.filter(
            ingredientElement => ingredientElement.name === ingredient.name)
            .length > 0 ? true : false;
    }

    incrementIngredientAmount(ingredient: Ingredient) {
        this.ingredients.find(item => item.name === ingredient.name).amount += ingredient.amount;
    }

}