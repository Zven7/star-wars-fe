import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Planets from "./views/planets/Planets.jsx";
// Styles
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
import ErrorPage from "./views/ErrorPage.jsx";
import Root from "./views/Root.jsx";
import PlanetDetails from "./views/planets/PlanetDetails.jsx";
import Movies from "./views/movies/Movies.jsx";
import MovieDetails from "./views/movies/MovieDetails.jsx";
import Characters from "./views/characters/Characters.jsx";
import CharacterDetails from "./views/characters/CharacterDetails.jsx";
import Ships from "./views/ships/Ships.jsx";
import ShipDetails from "./views/ships/ShipDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/planets",
        element: <Planets />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/planets/:planetId",
        element: <PlanetDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/characters",
        element: <Characters />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/characters/:characterId",
        element: <CharacterDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/movies",
        element: <Movies />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/movies/:movieId",
        element: <MovieDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/ships",
        element: <Ships />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/ships/:shipId",
        element: <ShipDetails />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
