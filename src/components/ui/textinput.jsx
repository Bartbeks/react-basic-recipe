import { Input } from "@chakra-ui/react";
export const SearchInput = ({ changeFn }) => {
  return (
    <Input
      variant={"filled"}
      colorScheme={"facebook"}
      htmlSize={25}
      width={{ sm: "auto", md: "420px", xl: "600px" }}
      mb={"1.5rem"}
      type="text"
      onChange={changeFn}
      placeholder="Search recipes"
    />
  );
};
