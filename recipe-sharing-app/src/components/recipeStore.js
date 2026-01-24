import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
     }),


  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes,
    };
  }),


  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes,
      };
    }),

  setSearchTerm: (term) => {
    set({ searchTerm: term});
    get().filterRecipes();
  },

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),
  
  addFavorite: (recipeId) =>
    set((state) => ({
      favorite: [...state.favorite, recipeId],
    })),

  removeFavorite: (recipeId) =>
  set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

generateRecommendations: () =>
  set((state) => {
    const recommended = state.recipes.filter(
      (recipe) =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes, }),
}));

export default useRecipeStore;