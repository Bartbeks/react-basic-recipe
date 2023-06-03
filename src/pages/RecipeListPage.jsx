import { RecipePage } from "./RecipePage";

export const RecipeListPage = (props) => {
  return props.recipes.map((recept) => (
    <RecipePage
      key={recept.recipe.label}
      recipe={recept.recipe}
      pageState={props.pageState}
    ></RecipePage>
  ));
};
