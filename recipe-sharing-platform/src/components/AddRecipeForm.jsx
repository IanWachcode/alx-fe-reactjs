import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");

  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (!title || !ingredients || !instructions) {
        setError("All fields are required.");
        return;
      }

    const ingredientsArray = ingredients.split(",").map((item) => item.trim());

    if (ingredientsArray.length < 2) {
      setError("Please enter at least two ingredients.");
      return;
    }

    //if validation passes,
    setError("");
    alert("Recipe added successfully!");

    //reset form
    setTitle("");
    setIngredients("");
    setInstructions("");
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>
        <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
        </a>
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-y-6">
                {/* Title */}
                <div>
                    <label className="block font-semibold mb-2">Recipe Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                {/* Ingredients */}
                <div>
                    <label className="block font-semibold mb-2">Ingredients (comma separated)</label>
                    <input
                        type="text"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                {/* Steps */}
                <div>
                    <label className="block font-semibold mb-2">Preparation Steps</label>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        rows="4"
                    />
                </div>
                {error && (<p className="text-red-500 mt-2">{error}</p>)}
                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Submit Recipe
                </button>
                
            </form>
    </div>
  );
}

export default AddRecipeForm;