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
// klikfunctio allen zonder curlybrakets
export const RecipePage = ({ recipe }, backBtn) => {
  // pageState = { setPageState };
  // backBtn = { setPageStatet };
  // let objRetrievedRecipes = { ...recipe.recpe };
  // const array = [...recipe];
  // console.log(objRetrievedRecipes.recipe);
  return (
    <>
      <h1>recipePage</h1>
      <div onClick={() => setRecipe(recipe)}>
        <Card maxW="sm" key={recipe.recipe.label}>
          <CardBody>
            <CardHeader>
              <Heading size="md" test={recipe.recipe.label}>
                {recipe.recipe.label}
              </Heading>
            </CardHeader>
            <Image
              boxSize="300px"
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Text>{recipe.recipe.cuisineType}</Text>
              <Text>{recipe.recipe.mealType}</Text>
              <Text>{recipe.recipe.dietLabels}</Text>
              <Text color="blue.600" fontSize="2xl">
                {recipe.recipe.dishType}
              </Text>
              {recipe.recipe.cautions.map((caution, subIndex) => (
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
