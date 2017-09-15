import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector : 'meal-list',
    template : `
    <select (change) = "onChange($event.target.value)">
        <option value = "all">Show All</option>
        <option value = "high">High Calorie Food</option>
        <option value = "low">Low Calorie Food</option>
    </select>
    <div *ngFor="let currentMeal of childMealList | calorieFilter : selectedCalorieFilter">

        <h4> {{currentMeal.name}} </h4>

        <p> {{currentMeal.details}} <br/>
            {{currentMeal.calories}} </p>

        <button (click) = "editButtonHasBeenClicked(currentMeal)"
        >Edit</button>

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