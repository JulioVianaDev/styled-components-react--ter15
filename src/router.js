import { createBrowserRouter } from "react-router-dom";
import PessoasPage from "./pages/PessoasPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
  },{
    path: '/pessoas',
    element: <PessoasPage/>
  },{
    path: '/*',
    element: <ErrorPage/>,
  }
])
