import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        Recipe Details - {id}
      </h1>
    </div>
  );
}

export default RecipeDetails;
