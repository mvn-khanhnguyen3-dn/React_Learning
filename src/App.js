import './App.css';
import {Header,Footer} from './components/layouts'
import {Home,AboutUs,UserList} from './pages'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './assets/scss/styles.scss'

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about-us" element={<AboutUs />}/>
      <Route path="user-list" element={<UserList />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
   </>
  );
}

export default App;
