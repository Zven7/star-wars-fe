import useSWR from "swr";
import { fetcherForSWR } from "../utils/request.utils";

const BASE_URL = import.meta.env.VITE_BASE_URL || "https://localhost:3001";

export function useGetCharacter(id) {
  const PERSON_URL = `${BASE_URL}/characters/${id}`;
  const { data, error, isLoading } = useSWR(PERSON_URL, fetcherForSWR);

  return {
    character: data,
    isLoading,
    isError: error,
  };
}

export function useGetAllCharacters() {
  const PERSON_URL = `${BASE_URL}/characters`;
  const { data, error, isLoading } = useSWR(PERSON_URL, fetcherForSWR);

  return {
    characters: data,
    isLoading,
    isError: error,
  };
}
