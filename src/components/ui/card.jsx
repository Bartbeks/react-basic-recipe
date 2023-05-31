import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export const RecipeCard = (props) => {
  console.log(props);

  const handleState = () => {
    props.fiets(true);
  };
  return (
    <>
      <Card key={props.key}>
        <CardHeader onClick={() => handleState()}> recipeCard</CardHeader>
      </Card>
    </>
  );
};
