import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  const favoriteRecipes = recipes.filter(recipe =>
    favorites.includes(recipe.id)
  );

  if (favoriteRecipes.length === 0) {
    return <p>No favorite recipes yet ❤️</p>;
  }

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;







