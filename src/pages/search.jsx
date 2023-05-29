import { SearchInput } from "../components/ui/textinput";
import { useState } from "react";
import { RecipeListPage } from "./RecipeListPage";
import { data } from "../utils/data";
import { Flex, Heading, Input } from "@chakra-ui/react";

export const RecipeSearch = (props) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <>
      <Flex
        alignItems={"center"}
        flexDirection={"column"}
        ml={"150px"}
        mr={"150px"}
      >
        <Heading mb={"15px"}>Search Recipes: </Heading>
        <SearchInput changeFn={handleChange}></SearchInput>
        <Flex justifyContent={"space-evenly"} flexWrap={"wrap"}>
          <RecipeListPage
            recipes={matchedRecipes}
            pageState={props.pageState}
          />
        </Flex>
      </Flex>
    </>
  );
};

// import React, { useState } from "react";
// import { data } from "../utils/data";

// export const SearchRecipes = (props) => {
//   const recipes = props.data.map((item) => item);
//   console.log({ recipes });

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedLabels, setSelectedLabels] = useState([""]);

//   const handleSearchTermChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleLabelChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setSelectedLabels((prevLabels) => [...prevLabels, value]);
//     } else {
//       setSelectedLabels((prevLabels) =>
//         prevLabels.filter((label) => label !== value)
//       );
//     }
//   };

//   const filteredRecipes = recipes.filter((recipe) => {
//     const matchesName = recipe.recipe.label
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     if (selectedLabels.length === 0) {
//       return matchesName;
//     } else {
//       const matchesLabels = selectedLabels.some((label) =>
//         recipe.recipe.healthLabels.includes(label)
//       );
//       return matchesName && matchesLabels;
//     }
//   });

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={searchTerm}
//         onChange={handleSearchTermChange}
//       />
//       <div>
//         <label>
//           Vegan
//           <input
//             type="checkbox"
//             value="vegan"
//             checked={selectedLabels.includes("vegan")}
//             onChange={handleLabelChange}
//           />
//         </label>
//         <label>
//           Vegetarian
//           <input
//             type="checkbox"
//             value="vegetarian"
//             checked={selectedLabels.includes("vegetarian")}
//             onChange={handleLabelChange}
//           />
//         </label>
//         <label>
//           Pescetarian
//           <input
//             type="checkbox"
//             value="pescetarian"
//             checked={selectedLabels.includes("pescetarian")}
//             onChange={handleLabelChange}
//           />
//         </label>
//         <label>
//           Gluten-Free
//           <input
//             type="checkbox"
//             value="gluten-free"
//             checked={selectedLabels.includes("gluten-free")}
//             onChange={handleLabelChange}
//           />
//         </label>
//         <label>
//           Sesame-Free
//           <input
//             type="checkbox"
//             value="sesame-free"
//             checked={selectedLabels.includes("sesame-free")}
//             onChange={handleLabelChange}
//           />
//         </label>
//       </div>
//       <ul>
//         {filteredRecipes.map((recipe, index) => (
//           <li key={index}>{recipe.recipe.label}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
