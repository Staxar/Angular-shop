import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
