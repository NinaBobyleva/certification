import axios from "axios";

export async function getUserInfo(userName: string, perPage: number, currentPage: number) {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${userName}&per_page=${perPage}&page=${currentPage}`
  );
  console.log(response.data);
  return response.data;
}
