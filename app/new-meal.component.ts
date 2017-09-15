import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'new-meal',
    template: `
    <h2>Add a new Meal</h2>

    <div class = "form-group">
        <label>Enter Name of new meal:</label>
        <input class = "form-control" #newName>
    </div>

    <div class = "form-group">
        <label>Enter Details of new meal:</label>
        <input class = "form-control" #newDetails>
    </div>

    <div class = "form-group">
        <label>Enter Calories of new meal:</label>
        <input class = "form-control" #newCalories>
        <button
            (click) = "
            addClicked (newName.value, newDetails.value, newCalories.value);
            newName.value = '';
            newDetails.value = '';
            newCalories.value = '';
        ">Add New Meal</button>
    </div>
    `
})

export class NewMealComponent {
    @Output() newMealSender = new EventEmitter();

    addClicked(name : string, details : string, calories : number) {
        var newMealToAdd : Meal = new Meal(name, details, calories);

        this.newMealSender.emit(newMealToAdd);
    }
}