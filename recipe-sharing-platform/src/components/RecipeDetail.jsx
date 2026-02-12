import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();

  const recipe = recipesData.find(
    (item) => item.id === parseInt(id)
  );

  if (!recipe) {
    return <p className="p-6 text-center">Recipe not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      
      <Link 
        to="/" 
        className="text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mt-4 shadow-md"
      />

      <h1 className="text-3xl font-bold mt-6">
        {recipe.title}
      </h1>

      <p className="text-gray-600 mt-4">
        {recipe.summary}
      </p>

      {/* Ingredients */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">
          Ingredients
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">
          Cooking Instructions
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
