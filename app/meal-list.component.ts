import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector : 'meal-list',
    template : `  
    <select (change) = "onChange($event.target.value)">
        <option value = "all">Show All Foods</option>
        <option value = "high">High Calorie Food</option>
        <option value = "low">Low Calorie Food</option>
    </select>

    <h2>Logged Meals</h2>
    
    <section class = "currentMealList">

        <div *ngFor="let currentMeal of childMealList | calorieFilter : selectedCalorieFilter">

            <h4 (click) = "nameHasBeenClicked(currentMeal)"> {{currentMeal.name}} </h4>

        </div>
        
    </section>
    `
})

export class MealListComponent {
    @Input() childMealList : Meal[];

    @Output() clickSender = new EventEmitter();

    nameHasBeenClicked( mealToEdit : Meal ) {
        this.clickSender.emit(mealToEdit);
    }

    public selectedCalorieFilter : string = "all";

    onChange(optionFromMenu) {
        this.selectedCalorieFilter = optionFromMenu;
    }
}