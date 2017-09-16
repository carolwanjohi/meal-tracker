import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'new-meal',
    template: `
    <h2>Add a new Meal</h2>

    <div class = "form-group-lg">
        <label>Enter the Name of new meal:</label>
        <input class = "form-control" #newName type="text" placeholder = "Name of the meal">
    </div>

    <div class = "form-group-lg">
        <label>Enter the Details about the new meal:</label>
        <textarea class = "form-control" #newDetails type="text" rows="3" placeholder = "Details about the meal"></textarea>
    </div>

    <div class = "form-group-lg">
        <label>Enter the Calories of the new meal:</label>
        <input class = "form-control" #newCalories type = "number" placeholder = "Number of calories in the meal">
        <button
            class = "btn btn-info"
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

    addClicked(name, details, calories) {
        var newMealToAdd : Meal = new Meal(name, details, calories);

        if( name === '' || details === '' || calories === '' ) {
            alert('Plesae fill in all the form fields');
        }  else {
            this.newMealSender.emit(newMealToAdd);
        }
    }
}