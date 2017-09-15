import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
  selector: 'my-app',
  template: `
  <div class="container">

      <section class="section1 jumbotron">
          <h1>Meal tracker</h1>
          <p>A Food Diary Plus More</p>
      </section>

      <section class="section2">
          <p>This is an online Food Diary where you can log and view a list the foods you've had. <br/>
          You can also select whether you want to see only your high calorie or low calorie meals.
          </p>
          <p>Fill out the form and keep track of your meals.</p>
      </section>

      <new-meal
          (newMealSender) = "addMeal($event)"
      ></new-meal>

      <meal-list
          [childMealList] = "masterMealList"
          (clickSender) = "showDetails($event)"
      ></meal-list>

      <edit-meal
          [childSelectedMeal] = "selectedMeal"
          (doneClickedSender) = "finishedEditing()"
      ></edit-meal>

  </div>
  `
})

export class AppComponent {

    // Meal array to be accessed by the children components

    public masterMealList : Meal [] = [

        new Meal("Fires", "Only ate half of them", 365),
        new Meal("Hamburger", "Didn't get a soda or cheese on my burger!", 540),
    ] 

    // Add a new meal to the master meal list

    addMeal( newMealFromChild : Meal) {
        this.masterMealList.push( newMealFromChild );
    }

    // Show meal details when Edit is clicked
    showDetails( clickedMeal : Meal) {
        this.selectedMeal = clickedMeal;
    }

    // Property for selected meal
    selectedMeal : Meal = null;

    // Revert selected meal to null after editing is done
    finishedEditing() {
        this.selectedMeal = null;
    }


}