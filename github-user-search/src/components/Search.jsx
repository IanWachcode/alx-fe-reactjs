import { useState } from "react";
import { searchUsers } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);

    try {
      const data = await searchUsers(query, location, minRepos, 1);
      setUsers(data.items);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    try {
      const data = await searchUsers(query, location, minRepos, nextPage);
      setUsers((prev) => [...prev, ...data.items]);
    } catch {
      setError(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="grid gap-3 mb-6"
      >
        <input
          type="text"
          placeholder="Search username or keyword"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded-lg px-3 py-2"
        />

        <input
          type="text"
          placeholder="Location (e.g. Kenya)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-lg px-3 py-2"
        />

        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border rounded-lg px-3 py-2"
        />

        <button
          type="submit"
          className="bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>Looks like we cant find the user</p>}

      <div className="grid gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 border p-3 rounded-lg"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{user.login}</p>
              <p className="text-sm text-gray-500">{user.type}</p>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-600 text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && !loading && (
        <button
          onClick={loadMore}
          className="mt-4 w-full border py-2 rounded-lg hover:bg-gray-100"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
