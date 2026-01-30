import axios from "axios";

export const searchUsers = async (
    query,
    location,
    minRepos,
    page = 1
) => {
    let q = query || "";

    if (location) {
        q += `location:${location}`;
    }

    const response = await axios.get(
        "https://api.github.com/search/users",
        {
            params: {
                q, page, per_page: 5,},
            }
        );

        return response.data;
        };

export const fetchUserDetails = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}`
  );
  return response.data;
};

