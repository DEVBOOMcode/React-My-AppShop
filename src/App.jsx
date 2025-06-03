import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Home from "./pages/Home";
import Main from "./layouts/MainLayouts";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Sign from "./pages/Sign";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <Main />}>
        <Route index element={ <Home /> } />
        <Route path="/shop" element={ <Shop /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/sign" element={ <Sign /> } />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
