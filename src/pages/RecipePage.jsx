import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { RecipeCard } from "../components/ui/card";
// klikfunctio allen zonder curlybrakets
export const RecipePage = (props) => {
  const setRecipe = (arg) => {
    let test = arg.label;
    props.fiets(false);
    props.fiets2 = arg.label;
  };
  // pageState = { setPageState };
  // backBtn = { setPageStatet };

  return (
    <>
      <h1>recipePage</h1>
      <div onClick={() => setRecipe(props.recipe)}>
        <Card maxW="sm" key={props.recipe.label}>
          {props.recipe.label}
          <CardBody>
            <CardHeader>
              <Heading size="md" test={props.recipe.label}>
                {props.recipe.label}
              </Heading>
            </CardHeader>
            <Image
              boxSize="300px"
              src={props.recipe.image}
              alt={props.recipe.label}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Text>{props.recipe.cuisineType}</Text>
              <Text>{props.recipe.mealType}</Text>
              <Text>{props.recipe.dietLabels}</Text>
              <Text color="blue.600" fontSize="2xl">
                {props.recipe.dishType}
              </Text>
              {props.recipe.cautions.map((caution, subIndex) => (
                <Text key={subIndex}>{caution}</Text>
              ))}
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                onClick={() => backBtn()}
                variant="solid"
                colorScheme="blue"
              >
                terug
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
