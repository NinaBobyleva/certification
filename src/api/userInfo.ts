import axios from "axios";

export async function getUsers(
  login: string,
  perPage: number,
  currentPage: number,
  sort: string
) {
  let sortResult: string = "";

  if (sort === "По возрастанию") {
    sortResult = "&sort=repositories&order=asc";
  }

  if (sort === "По убыванию") {
    sortResult = "&sort=repositories&order=desc";
  }
  
  const response = await axios.get(
    `https://api.github.com/search/users?q=${login}+&page=${currentPage}${sortResult}&per_page=${perPage}`
  );
  
  return response.data;
}

export async function getUserInfo(login: string) {
  const response = await axios.get(
    `https://api.github.com/users/${login}`
  );
  
  return response.data;
}
