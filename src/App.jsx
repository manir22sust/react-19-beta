import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Layout } from "./layout/Layout";
import { Home } from "./pages/Home";
import { UseExample1 } from "./components/useExample1/Joke";
// import { Joke } from "./components/JokeUseEffect";
import { UseExample2 } from "./components/useExample2/Posts";
import { UseExample3 } from "./components/useExample3/Message";
import { UseExampleContext } from "./components/useExampleContext/Theme";
import { ActionExample1 } from "./components/actionExample1/Posts";
import { ActionExample2 } from "./components/actionExample2/ShoppingCart";
import AddToCartForm from "./components/useFormStateExample/AddToCartForm";
import { UseFormStatusExample } from "./components/useFormStatusExample/Posts";
import UseOptimisticExample from "./components/useOptimisticExample/UseOptimisticExample";
import DocumentMetaData from "./components/DocumentMetadata/DocumentMetaDataExample";
import { UseTransitionExample } from "./components/useTransitionExample/Tabs";
// import { Posts } from "./components/useExample2/PostsUseEffect";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        // { path: "use-example-1", element: <Joke /> },
        { path: "use-example-1", element: <UseExample1 /> },
        // { path: "use-example-2", element: <Posts /> },
        { path: "use-example-2", element: <UseExample2 /> },
        { path: "use-example-3", element: <UseExample3 /> },
        { path: "use-example-context", element: <UseExampleContext /> },
        { path: "action-example-1", element: <ActionExample1 /> },
        { path: "action-example-2", element: <ActionExample2 /> },
        {
          path: "useformstate-example",
          element: (
            <>
              <AddToCartForm
                itemID="1"
                itemTitle="JavaScript: The Definitive Guide"
              />
              <AddToCartForm
                itemID="2"
                itemTitle="JavaScript: The Good Parts"
              />
            </>
          ),
        },
        { path: "useformstatus-example", element: <UseFormStatusExample /> },
        { path: "useoptimistic-example", element: <UseOptimisticExample /> },
        { path: "document-meta-data", element: <DocumentMetaData /> },
        { path: "usetransition-example", element: <UseTransitionExample /> },
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
