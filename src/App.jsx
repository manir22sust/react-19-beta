import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { UseExample1 } from "./components/useExample1/Joke";
// import { Joke } from "./components/JokeUseEffect";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        // { path: "use-example-1", element: <Joke /> },
        { path: "use-example-1", element: <UseExample1 /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
