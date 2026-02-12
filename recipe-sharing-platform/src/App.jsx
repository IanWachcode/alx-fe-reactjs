import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex justify-center">
        <div className="w-full max-w-6xl">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;

