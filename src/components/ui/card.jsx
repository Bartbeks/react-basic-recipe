import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

export const RecipeCard = (props) => {
  console.log(props);
  return (
    <>
      <Card key={props.key}>
        <CardHeader>{props.title}</CardHeader>
      </Card>
    </>
  );
};
