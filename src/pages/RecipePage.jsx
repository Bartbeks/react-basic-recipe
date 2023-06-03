import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Image,
  Text,
  Flex,
  Badge,
} from "@chakra-ui/react";

export const RecipePage = (props) => {
  const setRecipe = (arg) => {
    return props.pageState(true, arg);
  };

  return (
    <>
      <Card
        onClick={() => setRecipe(props.recipe)}
        maxW="md"
        key={props.recipe.label}
        mb={"20px"}
      >
        <CardBody>
          <Image
            boxSize="420px"
            src={props.recipe.image}
            alt={props.recipe.label}
            width={"100%"}
            height={{ sm: "100px", md: "400px" }}
          />
          <Flex justifyContent={"center"}>
            <Stack mt="6" spacing="3" justifyContent={"center"}>
              <Text
                textTransform={"uppercase"}
                align={"center"}
                fontWeight={500}
              >
                {props.recipe.mealType}
              </Text>
              <CardHeader>
                <Heading size="md">{props.recipe.label}</Heading>
              </CardHeader>
              {/* <Badge align={"center"}>{props.recipe.cuisineType}</Badge> */}
              {props.recipe.dietLabels.length > 0 && (
                <Badge align={"center"}>
                  {props.recipe.dietLabels.map((dietLabels, subIndex) => (
                    <span key={subIndex}>{dietLabels} </span>
                  ))}
                </Badge>
              )}
              <Text align={"center"}>
                <b>Dish: </b>
                <span>{props.recipe.dishType}</span>
              </Text>
              {props.recipe.cautions.length > 0 && (
                <div>
                  <Text align={"center"} fontWeight={600}>
                    Cautions
                  </Text>
                  <Text align={"center"}>
                    {props.recipe.cautions.map((caution, subIndex) => (
                      <span key={subIndex}>{caution} </span>
                    ))}
                  </Text>
                </div>
              )}
            </Stack>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};
