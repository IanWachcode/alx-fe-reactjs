import { Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import './App.css';



function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🍲 Recipe Sharing App</h1>
      <Routes>
        <Route path="/recipe/:recipeId" element={<RecipeDetailsWrapper />} />
      </Routes>

      <hr />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;

const RecipeDetailsWrapper = () => {
  const { recipeId } = useParams();
  return <RecipeDetails recipeId={Number(recipeId)} />;
}

