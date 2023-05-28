import { Input } from "@chakra-ui/react";
export const SearchInput = ({ changeFn }) => {
  return (
    <Input
      variant={"filled"}
      colorScheme={"facebook"}
      htmlSize={80}
      width="auto "
      mb={"1.5rem"}
      type="text"
      onChange={changeFn}
    />
  );
};
