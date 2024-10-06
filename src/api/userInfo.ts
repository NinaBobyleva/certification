import axios from "axios";

export async function getUserInfo(
  login: string,
  perPage: number,
  currentPage: number,
  sort: string
) {
//   console.log("sort", sort);
//   console.log("perPage", perPage);

  let sortResult: string = "";

  if (sort === 'По возрастанию') {
    sortResult = "&sort=repositories&order=asc";
  }

  if (sort === 'По убыванию') {
    sortResult = "&sort=repositories&order=desc";
  }
//   console.log("sortResult", sortResult);
  const response = await axios.get(
    `https://api.github.com/search/users?q=${login}&page=${currentPage}${sortResult}&per_page=${perPage}`
  );
//   console.log(response.data);
  return response.data;
}
