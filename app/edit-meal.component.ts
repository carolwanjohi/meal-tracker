import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'edit-meal',
    template: `
    <div *ngIf = "childSelectedMeal">

        <h2>Edit Meal</h2>

        <div class = "form-group">
            <label>Enter Name of new meal:</label>
            <input class = "form-control" [(ngModel)] = "childSelectedMeal.name">
        </div>

        <div class = "form-group">
            <label>Enter Details of new meal:</label>
            <input class = "form-control" [(ngModel)] = "childSelectedMeal.details">
        </div>

        <div class = "form-group">
            <label>Enter Calories of new meal:</label>
            <input class = "form-control" [(ngModel)] = "childSelectedMeal.calories">
            
            <button
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