import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export const RecipeCard = (props) => {
  console.log(props.singleRecipe);
  return (
    <>
      <Card key={props.key}>
        <CardHeader>{props.singleRecipe} recipeCard</CardHeader>
      </Card>
    </>
  );
};
