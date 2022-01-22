import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import App from "../App"
import About from "../pages/About"
import FAQ from "../pages/FAQ";

export default function Router ()
{
    return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
       {/* <Route path="*" element={<NoPage />} />*/} 
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

