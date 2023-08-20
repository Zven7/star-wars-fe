import useSWR from "swr";
import { fetcherForSWR } from "../utils/request.utils";

const BASE_URL = import.meta.env.VITE_BASE_URL || "https://localhost:3001";

export function useGetPlanet(id) {
  const PLANETS_URL = `${BASE_URL}/planets/${id}`;
  const { data, error, isLoading } = useSWR(PLANETS_URL, fetcherForSWR);

  console.log(PLANETS_URL, data, "data from swr");

  return {
    planet: data,
    isLoading,
    isError: error,
  };
}

export function useGetAllPlanets() {
  const PLANETS_URL = `${BASE_URL}/planets`;

  console.log(BASE_URL, "url?");
  const { data, error, isLoading } = useSWR(PLANETS_URL, fetcherForSWR);

  return {
    planets: data,
    isLoading,
    isError: error,
  };
}
