import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  const handleSearch = () => {
    // Handle search action here
  };

  return (
    <div style={{marginBottom:'20px'}}>
    <input
      type="text"
      placeholder="🔍 Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '10px',
        width: '100%',
        marginBottom: '20px',
      }}
    />
    <button
      onClick={handleSearch}
      style={{padding: '10px', marginLeft:"10px"}}>Search</button>
      </div>
  );
};

export default SearchBar;
