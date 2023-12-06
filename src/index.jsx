// import { createRoot } from 'react-dom/client';
// import { Header } from './components/Header/Header';
// import { Main } from './components/Main/Main';
// import { EduMaterials } from './components/EduMaterials/EduMaterials';

// const element = document.querySelector('#root');

// createRoot(element).render(
//   <>
//     <Header />
//     <Main />
//     <EduMaterials />
//   </>
// );

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './routes/Home/Home';
// import Cabinet from './routes/Cabinet/Cabinet';
import CreateArticle from './routes/CreateArticle/CreateArticle';
import ErrorPage from "./routes/errorPage";

const Cabinet = React.lazy(() => import('./routes/Cabinet/Cabinet'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cabinet",
    element: <Cabinet />,
  },
  {
    path: "/cabinet/createArticle",
    element: <CreateArticle />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);