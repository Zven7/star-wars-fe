import useSWR from "swr";
import { fetcherForSWR } from "../utils/request.utils";

const BASE_URL = import.meta.env.VITE_BASE_URL || "https://localhost:3001";

// TODO: Refactor this, make only two hooks to fetch single X and all X.
export function useGetMovie(id) {
  const MOVIES_URL = `${BASE_URL}/movies/${id}`;
  const { data, error, isLoading } = useSWR(MOVIES_URL, fetcherForSWR);

  return {
    movie: data,
    isLoading,
    isError: error,
  };
}

export function useGetAllMovies() {
  const MOVIES_URL = `${BASE_URL}/movies`;
  const { data, error, isLoading } = useSWR(MOVIES_URL, fetcherForSWR);

  return {
    movies: data,
    isLoading,
    isError: error,
  };
}
