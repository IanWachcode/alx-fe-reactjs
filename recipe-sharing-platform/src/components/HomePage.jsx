import { useState, useEffect } from "react";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

   
useEffect(() => {

  setTimeout(() => {
  setRecipes(recipesData);
  }, 0);
}, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />

            <h2 className="text-xl font-semibold mt-4">
              {recipe.title}
            </h2>

            <p className="text-gray-600 mt-2">
              {recipe.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
