import { SearchInput } from "../components/ui/textinput";
import { useState } from "react";
import { RecipeListPage } from "./RecipeListPage";
import { data } from "../utils/data";
import { Flex, Heading } from "@chakra-ui/react";

export const RecipeSearch = (props) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <>
      <Flex
        alignItems={"center"}
        flexDirection={"column"}
        ml={["20px", "150px"]}
        mr={["20px", "150px"]}
      >
        <Heading mb={"15px"}>Search Recipes: </Heading>
        <SearchInput changeFn={handleChange}></SearchInput>
        <Flex justifyContent={"space-evenly"} flexWrap={"wrap"}>
          <RecipeListPage
            recipes={matchedRecipes}
            pageState={props.pageState}
          />
        </Flex>
      </Flex>
    </>
  );
};
