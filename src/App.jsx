
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pagesh/Home";
import Naver from "./pagesh/Naver";
import Routelayout from "./components/Routelayout";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  path="/" element={<Routelayout/>}>
     <Route path="/" element={<Home/>}/>
      </Route>
     

    )
  );

  return (
    <>



<RouterProvider router={router} />
    </>
  )
}

export default App
