import SearchBar from "./Components/SearchBar";
import RecipeCard from "./Components/RecipeCard";
import { useEffect, useState, useRef } from "react";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipe = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipe();
    console.log("useEffect")
  }, [query]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   searchRecipe();
  // };
  return (
    <div className="container">
      <h1>Food Recipe</h1>
      <SearchBar
        setQuery = {(query)=>setQuery(query)}
        // handleSubmit={handleSubmit}
        // value={query}
        // onChange={(event) => setQuery(event.target.value)}
        isLoading={isLoading}
      />
      <div className="recipes">
        {recipes
          ? recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          : "No Recipes!"}
      </div>
    </div>
  );
}
