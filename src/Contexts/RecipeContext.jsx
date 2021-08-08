import React, { useReducer } from "react";
const RecipeContext = React.createContext();
let savedRecipes = ["hello"];
const RecipeContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LIKE_RECIPE":
        savedRecipes = [action.payload, ...state];
        return savedRecipes;
      case "DELETE_RECIPE":
        state.filter((recipe) => recipe.id !== action.payload);
        return savedRecipes;
      default:
        return state;
    }
  };
  const [Recipes, dispatch] = useReducer(reducer, savedRecipes);
  return (
    <RecipeContext.Provider value={{ Recipes, dispatch }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export { RecipeContext };
export default RecipeContextProvider;
