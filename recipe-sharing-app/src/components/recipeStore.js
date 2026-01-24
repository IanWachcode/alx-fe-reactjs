import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filterRecipes: updatedRecipes,
      };
     }),


  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id
    );
    return {
      recipes: updatedRecipes,
      filterRecipes: updatedRecipes,
    };
  }),


  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      );
      return {
        recipes: updatedRecipes,
        filterRecipes: updatedRecipes,
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


  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;