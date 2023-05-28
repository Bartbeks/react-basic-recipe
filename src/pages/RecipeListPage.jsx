import { RecipePage } from "./RecipePage";

export const RecipeListPage = (recipes) => {
  return (
    <>
      {recipes.recipes.map((recept) => (
        <RecipePage key={recept.recipe.label} recipe={recept}></RecipePage>
      ))}
    </>
  );
};
