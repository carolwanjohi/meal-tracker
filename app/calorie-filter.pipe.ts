import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
    name: "calorieFilter",
    pure : false
})

export class CalorieFilterPipe implements PipeTransform {
    transform ( input : Meal[], desiredCalorieFilter) {
        var output : Meal[] = [];

        if(desiredCalorieFilter === "high") {

            for( var i = 0; i < input.length; i++ ) {

                if ( input[i].calories > 500) {
                    output.push(input[i]);
                }

            }

            return output;

        } else if (desiredCalorieFilter === "low") {

            for( var i = 0; i < input.length; i++ ) {

                if ( input[i].calories < 500) {
                    output.push(input[i]);
                }

            }

            return output;

        } else {

            return input;

        }
    }
}