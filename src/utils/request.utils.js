import axios from "axios";

export async function fetchData(url) {
  // AUTH FOR REQUESTS
  /* const authToken = import.meta.env.NEXT_PUBLIC_API_TOKEN;
  const AUTH = {
    cache: "no-cache",
    headers: {
      Authorization: authToken,
    },
  }; */

  const res = await axios.get(url);
  // const response = await axios.get(url, AUTH);
  return res.data;
}

/* export async function fetchDataWithOptions(url, requestBody) {
  // TODO: ADD 
  AUTH FOR REQUESTS
  const authToken = import.meta.env.NEXT_PUBLIC_API_TOKEN;
  const AUTH = {
    data: {
      ...requestBody,
    },
    headers: {
      Authorization: authToken,
    },
  };

  const response = await axios.get(url, AUTH);
  console.log(response, "clg res 1");
  return response;
} */

export async function handleMultipleRequests(urls) {
  const promises = urls?.map((url) => fetchData(url));

  const data = await Promise.all(promises);
  return data;
}

// TODO: Modify and add support for adding favorites
export function removeFavMovie(movieId) {
  const prevFavs = localStorage.getItem("favMovies") || "[]";
  let parsedFavs = JSON.parse(prevFavs);

  const foundMovie = parsedFavs.find((mov) => mov.id.toString() === movieId);
  if (foundMovie) {
    parsedFavs.splice(parsedFavs.indexOf(foundMovie), 1);
    localStorage.setItem("favMovies", JSON.stringify(parsedFavs));
  }
}

export const fetcherForSWR = (...args) =>
  fetch(...args).then((res) => res.json());
