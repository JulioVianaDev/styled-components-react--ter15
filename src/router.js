import { createBrowserRouter } from "react-router-dom";
import PessoasPage from "./pages/PessoasPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PessoasPage/>,
  }
])
