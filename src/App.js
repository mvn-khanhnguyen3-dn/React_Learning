import './App.css';
import {Header,Footer} from './components/layouts'
import {Home,AboutUs,UserList} from './pages'

function App() {
  return (
   <>
   <Header/>
   <Home/>
   <AboutUs/>
   <UserList/>
   <Footer/>
   </>
  );
}

export default App;
