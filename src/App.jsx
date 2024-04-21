
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pagesh/Home";
import Naver from "./pagesh/Naver";
import Routelayout from "./components/Routelayout";
import About from "./pagesh/About";
import HadePage from "./pagesh/HadePage";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
  <Route>
        <Route  path="/" element={<Routelayout/>}>
     <Route path="/" element={<HadePage/>}/>
     
      </Route>
     
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
