import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private  recipes: Recipe[] = [
        new Recipe(
          'Tasty Schintzel',
          'A super-tasty Schinitzel - just awesome',
          'https://www.everyday-delicious.com/wp-content/uploads/2022/05/wiener-schnitzel-everyday-delicious-1.jpg',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]
        ),
        new Recipe(
          'Big Steak',
          'What else you need to say?',
          'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/617619d4-8e9f-4d7f-a9b8-4e73c4afdec4/Derivates/78803bf5-20df-4d7d-bba5-2696892d7043.jpg',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
          ]
        ),
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);

      }
}