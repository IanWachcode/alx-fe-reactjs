import axios from "axios";

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

  
  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(q)}&page=${page}&per_page=5`
  );

  return response.data;
};

export const fetchUserData = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}`
  );

  return response.data;
};

