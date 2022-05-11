import Header from "./components/Header";
import About from "./components/About";
import Team from './components/Team';
import News from './components/News';
import Footer from './components/Footer';
import Home from './components/Home';
import  Carousel  from "./components/Carousel";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
 
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
       <Routes>
         <Route path="/*" element={ <><Header/> <Footer/></>}>
           <Route path="about" element={<About />} />
           <Route path="" element={<Home />} />
           <Route path="team" element={<Team />} />
           <Route path="news" element={<News />} />
         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
