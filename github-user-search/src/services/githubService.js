import axios from "axios";

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

  const response = await axios.get(
    `${BASE_URL}/search/users`,
    {
      params: {
        q,
        page,
        per_page: 5,
      },
    }
  );
  return response.data;
};

export const fetchUserData = async (username) => {
  const response = await axios.get(
    `${BASE_URL}/users/${username}`
  );

  return response.data;
};

