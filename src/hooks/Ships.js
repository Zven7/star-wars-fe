import useSWR from "swr";
import { fetcherForSWR } from "../utils/request.utils";

const BASE_URL = import.meta.env.VITE_BASE_URL || "https://localhost:3001";

export function useGetShip(id) {
  const SHIP_URL = `${BASE_URL}/ships/${id}`;
  const { data, error, isLoading } = useSWR(SHIP_URL, fetcherForSWR);

  return {
    ship: data,
    isLoading,
    isError: error,
  };
}

export function useGetAllShips() {
  const SHIP_URL = `${BASE_URL}/ships`;
  const { data, error, isLoading } = useSWR(SHIP_URL, fetcherForSWR);

  return {
    ships: data,
    isLoading,
    isError: error,
  };
}
