import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Image,
  Heading,
  Stack,
  IconButton,
  Flex,
  Box,
  Badge,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export const RecipeCard = (props) => {
  const handleState = () => {
    props.pageState(false);
  };
  return (
    <>
      <Flex
        flexDir={"column"}
        flexWrap={"wrap"}
        mt={"15px"}
        pl={["20px", "20px", "200px"]}
        pr={["20px", "20px", "200px"]}
        gap={"50px"}
      >
        <Card key={props.key} recipe={props.recipe} size={"sm"}>
          <Flex>
            <CardBody p={"20px"}>
              <IconButton
                colorScheme="gray"
                color="red.400"
                aria-label="close window"
                icon={<CloseIcon />}
                boxSize={[10, 20]}
                onClick={() => handleState()}
                mb={"15px"}
              />
              <Image
                width={"100%"}
                height={"300px"}
                min-width={"100%"}
                objectFit="cover"
                src={props.recipe.image}
                alt={props.recipe.label}
              />
              <CardHeader>
                <Heading size={["sm", "xl"]} mr={"15px"} textAlign={"center"}>
                  {props.recipe.label}
                </Heading>
              </CardHeader>
              <Flex
                justifyContent={"space-evenly"}
                mt={"50px"}
                flexWrap={"wrap"}
              >
                <Box flex={"1"} ml={["20px", "30px"]}>
                  <Stack>
                    <Badge
                      fontSize={["sm", "md"]}
                      variant="subtle"
                      colorScheme="white"
                    >
                      {props.recipe.mealType}
                    </Badge>
                    <Badge
                      variant="subtle"
                      colorScheme="white"
                      fontSize={["sm", "md"]}
                    >
                      {props.recipe.dishType}
                    </Badge>
                    <Text pb={"5px"} pl={"15px"} fontSize={["sm", "md"]}>
                      {props.recipe.dishType}
                    </Text>
                    <Badge
                      variant="subtle"
                      colorScheme="white"
                      fontSize={["sm", "md"]}
                    >
                      Total cooking time: {props.recipe.totalTime} minutes
                    </Badge>

                    {props.recipe.dietLabels.length > 0 && (
                      <>
                        <Badge
                          variant="subtle"
                          colorScheme="white"
                          fontSize={["sm", "md"]}
                        >
                          DietLabels:
                        </Badge>
                        <Text fontSize={["sm", "md"]}>
                          {props.recipe.dietLabels.map(
                            (dietLabels, subIndex) => (
                              <span key={subIndex}>{dietLabels} </span>
                            )
                          )}
                        </Text>
                      </>
                    )}
                  </Stack>
                  {props.recipe.cautions.length > 0 && (
                    <Badge
                      variant="subtle"
                      colorScheme="white"
                      fontSize={["sm", "md"]}
                    >
                      Cautions
                    </Badge>
                  )}
                  {props.recipe.cautions.map((caution, subIndex) => (
                    <Text
                      pb={"5px"}
                      pl={"15px"}
                      fontSize={["sm", "md"]}
                      key={subIndex}
                    >
                      {caution}
                    </Text>
                  ))}

                  <Badge variant="subtle" colorScheme="white">
                    Ingredient:
                  </Badge>
                  {props.recipe.ingredients.map((ingredient, subIndex) => (
                    <Text
                      pb={"5px"}
                      pl={"15px"}
                      key={subIndex}
                      fontSize={["sm", "md"]}
                    >
                      {ingredient["text"]}
                    </Text>
                  ))}
                  <Badge
                    variant="subtle"
                    colorScheme="white "
                    fontSize={["sm", "md"]}
                  >
                    Servings: {props.recipe.yield}
                  </Badge>
                </Box>
                <Box flex={"1"} ml={["20px", "30px"]}>
                  <Box direction="row">
                    <Badge
                      variant="subtle"
                      colorScheme="white "
                      fontSize={["sm", "md"]}
                    >
                      Health-labels:
                    </Badge>
                    {props.recipe.healthLabels.map((healthlabel, subIndex) => (
                      <Badge
                        fontSize={["sm", "md"]}
                        variant="outline"
                        colorScheme="green"
                        mr={"15px"}
                        key={subIndex}
                      >
                        {healthlabel}
                      </Badge>
                    ))}
                  </Box>
                  <Badge
                    variant={"subtle"}
                    colorScheme={"white"}
                    mt={"15px"}
                    fontSize={["sm", "md"]}
                  >
                    Total nutrients :
                  </Badge>

                  <Text pb={"5px"} pl={"15px"} fontSize={["sm", "md"]}>
                    {props.recipe.totalNutrients.ENERC_KCAL.label}:
                    {Math.round(
                      props.recipe.totalNutrients.ENERC_KCAL.quantity
                    )}
                    :{props.recipe.totalNutrients.ENERC_KCAL.unit}:
                  </Text>

                  <Text pb={"5px"} pl={"15px"} fontSize={["sm", "md"]}>
                    {props.recipe.totalNutrients.PROCNT.label}:
                    {Math.round(props.recipe.totalNutrients.PROCNT.quantity)}:
                    {props.recipe.totalNutrients.PROCNT.unit}:
                  </Text>
                  <Text pb={"5px"} pl={"15px"} fontSize={["sm", "md"]}>
                    {props.recipe.totalNutrients.FAT.label}:
                    {Math.round(props.recipe.totalNutrients.FAT.quantity)}:
                    {props.recipe.totalNutrients.FAT.unit}:
                  </Text>
                  <Text pb={"5px"} pl={"15px"} fontSize={["sm", "md"]}>
                    {props.recipe.totalNutrients.CHOCDF.label}:
                    {Math.round(props.recipe.totalNutrients.CHOCDF.quantity)}:
                    {props.recipe.totalNutrients.CHOCDF.unit}:
                  </Text>
                  <Text pb={"5px"} pl={"15px"} fontSize={["sm", "md"]}>
                    {props.recipe.totalNutrients.CHOLE.label}:
                    {Math.round(props.recipe.totalNutrients.CHOLE.quantity)}:
                    {props.recipe.totalNutrients.CHOLE.unit}:
                  </Text>
                  <Text pb={"5px"} pl={"15px"} fontSize={["sm", "md"]}>
                    {props.recipe.totalNutrients.NA.label}:
                    {Math.round(props.recipe.totalNutrients.NA.quantity)}:
                    {props.recipe.totalNutrients.NA.unit}:
                  </Text>
                </Box>
              </Flex>
            </CardBody>
          </Flex>
        </Card>
      </Flex>
    </>
  );
};
