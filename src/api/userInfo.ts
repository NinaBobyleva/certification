import axios from "axios";

export async function getUserInfo(
  userName: string,
  perPage: number,
  currentPage: number,
  sort: string
) {
  console.log("sort", sort);

  let sortResult: string = "";

  if (sort === 'По возрастанию') {
    sortResult = "&sort=repositories&order=desc";
  }

  if (sort === 'По убыванию') {
    sortResult = "&sort=repositories&order=asc";
  }
  console.log("sortResult", sortResult);
  const response = await axios.get(
    `https://api.github.com/search/users?q=${userName}&per_page=${perPage}&page=${currentPage}${sortResult}`
  );
//   console.log(response.data);
  return response.data;
}
