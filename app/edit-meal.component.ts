import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'edit-meal',
    template: `
    <div *ngIf = "childSelectedMeal">
        
        <hr/>
        
        <h2>Edit Meal</h2>

        <div class = "form-group-lg">
            <label>Edit the Name of the meal:</label>
            <input class = "form-control" [(ngModel)] = "childSelectedMeal.name" type = "text" placeholder = "Name of the meal">
        </div>

        <div class = "form-group-lg">
            <label>Edit the Details about the meal:</label>
            <textarea class = "form-control" [(ngModel)] = "childSelectedMeal.details" type = "text" placeholder = "Details about the meal" rows="3"></textarea>
        </div>

        <div class = "form-group-lg">
            <label>Edit the Calories for the meal:</label>
            <input class = "form-control" [(ngModel)] = "childSelectedMeal.calories" type = "number" placeholder = "Number of calories in the meal">
            
            <button class = "btn btn-info"
                (click) = "doneClicked()"
            >Done</button>

        </div>

    </div>
    `
})

export class EditMealComponent {
    @Input() childSelectedMeal : Meal;

    @Output() doneClickedSender = new EventEmitter();

    doneClicked() {
        this.doneClickedSender.emit();
    }
}