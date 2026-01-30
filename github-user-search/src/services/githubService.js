const BASE_URL = "https://api.github.com";

export const searchUsers = async (
  query,
  location,
  minRepos,
  page = 1
) => {
  let q = query || "";

  if (location) {
    q += ` location:${location}`;
  }

  if (minRepos) {
    q += ` repos:>=${minRepos}`;
  }

  const response = await fetch(
    `${BASE_URL}/search/users?q=${encodeURIComponent(q)}&page=${page}&per_page=5`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

export const fetchUserData = async (username) => {
  const response = await fetch(
    `${BASE_URL}/users/${username}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json();
};

