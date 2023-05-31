import { RecipePage } from "./RecipePage";
import { RecipeCard } from "../components/ui/card";
import { useState } from "react";

export const RecipeListPage = (props) => {
  const [pageSwitch, setPageSwitch] = useState(true);

  let test = pageSwitch;
  let test2 = "";

  return test ? (
    <>
      {props.recipes.map((recept) => (
        <RecipePage
          key={recept.recipe.label}
          recipe={recept.recipe}
          pageState={props.pageState}
          fiets={setPageSwitch}
        ></RecipePage>
      ))}
    </>
  ) : (
    <RecipeCard
      pageState={test}
      recipe={test2}
      fiets={setPageSwitch}
      fiest2={test2}
    ></RecipeCard>
  );
};
