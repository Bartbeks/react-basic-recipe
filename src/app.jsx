import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { RecipeSearch } from "./pages/search";

import { RecipeCard } from "./components/ui/card";

export const App = () => {
  const [pageState, setPageState] = useState(false);
  const [myRecipe, setRecipe] = useState("");

  const HandlePageState = (value, recipe) => {
    setPageState(value);
    setRecipe(recipe);
  };

  return pageState ? (
    <>
      <Flex
        flexDirection={"column"}
        width={"100vw"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <RecipeCard
          pageState={HandlePageState}
          backBtnFn={HandlePageState}
          recipe={myRecipe}
        ></RecipeCard>
      </Flex>
    </>
  ) : (
    <>
      <RecipeSearch pageState={HandlePageState} />
    </>
  );
};
