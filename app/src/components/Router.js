import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import App from "../App"

export default function Router ()
{
    return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

