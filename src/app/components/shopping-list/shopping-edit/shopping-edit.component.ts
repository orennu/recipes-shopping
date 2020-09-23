import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientNameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('IngredientAmountInput', { static: false }) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
