import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector : 'meal-list',
    template : `
    <h2>Logged Meals</h2>

    <select (change) = "onChange($event.target.value)">
        <option value = "all">Show All Foods</option>
        <option value = "high">High Calorie Food</option>
        <option value = "low">Low Calorie Food</option>
    </select>

    <div *ngFor="let currentMeal of childMealList | calorieFilter : selectedCalorieFilter">

        <h4 (click) = "editButtonHasBeenClicked(currentMeal)"> {{currentMeal.name}} </h4>

    </div>
    `
})

export class MealListComponent {
    @Input() childMealList : Meal[];

    @Output() clickSender = new EventEmitter();

    editButtonHasBeenClicked( mealToEdit : Meal ) {
        this.clickSender.emit(mealToEdit);
    }

    public selectedCalorieFilter : string = "all";

    onChange(optionFromMenu) {
        this.selectedCalorieFilter = optionFromMenu;
    }
}