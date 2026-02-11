import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          RecipeShare 🍲
        </Link>

        <Link
          to="/add"
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Add Recipe
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
