import { useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { RecipeSearch } from "./pages/search";

import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [pageState, setPageStatet] = useState(false);
  let test = pageState;

  const HandlePageState = () => {
    setPageStatet(true);
    console.log("button clicked");
  };
  return test ? (
    <>
      <Flex>
        <RecipePage
          pageState={setPageStatet}
          backBtn={HandlePageState}
        ></RecipePage>
      </Flex>
    </>
  ) : (
    <>
      <RecipeSearch pageState={setPageStatet} />
    </>
  );
};
