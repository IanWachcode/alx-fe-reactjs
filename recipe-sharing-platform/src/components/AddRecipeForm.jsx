import { useState, useEffect } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
  localStorage.setItem("draftRecipe", JSON.stringify({ title, ingredients, steps }));
}, [title, ingredients, steps]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientsList = ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    if (ingredientsList.length < 2) {
      setError("Please enter at least two ingredients.");
      return;
    }

    console.log({
      title,
      ingredients: ingredientsList,
      steps,
    });

    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Add New Recipe
      </h1>
      <a href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </a>

    <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-6"
      >
        {/* Title */}
        <div>
          <label className="block font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-2">
            Ingredients (comma separated)
          </label>
          <textarea
            name="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Steps */}
        <div>
          <label className="block font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            name="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;