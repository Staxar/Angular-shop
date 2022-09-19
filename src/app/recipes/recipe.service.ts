import { Recipe } from "./recipe.model";

export class RecipeService {
  private  recipes: Recipe[] = [
        new Recipe(
          'A test recipe',
          'This is simple a test',
          'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg'
        ),
        new Recipe(
          'second',
          'This is simple a test',
          'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg'
        ),
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}