import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './routes/Home/Home';
import CreateArticle from './routes/CreateArticle/CreateArticle';
import ErrorPage from "./routes/errorPage";
import CourseContent from "./routes/CourseContent/CourseContent";
import SingleArticle from "./routes/SingleArticle/SingleArticle";
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
  {
    path: "/course/content/1",
    element: <CourseContent />,
  },
  {
    path: "/article/5",
    element: <SingleArticle />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);