import { getCharacterById, getCharacters } from "./api/characters-api";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import CharactersComparePage from "./pages/CharactersComparePage";
import CharactersPage from "./pages/CharactersPage";
import ContactPage from "./pages/ContactPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CharactersPage />,
        loader: ({ request }) => {
          const url = new URL(request.url);
          const sortBy = url.searchParams.get('sortBy') || 'name';
          const order = url.searchParams.get('order') || 'asc';
          return getCharacters(sortBy, order);
        },
      },
      {
        path: "/characters/:id",
        element: <CharacterDetailPage />,
        loader: ({ params }) => getCharacterById(params.id),
      },
      {
        path: "/compare",
        element: <CharactersComparePage />,
        loader: () => getCharacters(), // Assurez-vous que cette ligne retourne les personnages
      },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
];

export default routes;