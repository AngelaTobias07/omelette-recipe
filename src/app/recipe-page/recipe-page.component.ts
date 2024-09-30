import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './recipe-page.component.html'
})

export class RecipePageComponent {
    pageTitle: string = 'Recipe Page';
    recipeLabel = "color: hsl(14, 45%, 36%); font-family: 'Young Serif', serif; font-optical-sizing: auto;  font-weight: 500; font-style: normal; line-height: 2.1;";
    macronutrients: any[] = [
          {
            
            "nutrients": "Calories",
            "measurement": "277kcal",
          },
          {
            "nutrients": "Carbs",
            "measurement": "0g",
          },
          {
            "nutrients": "Protein",
            "measurement": "20g",
          },
          {
            "nutrients": "Fat",
            "measurement": "22g",
          }
    ];
}