
import './App.css';
import Header from "./Components/Home/Header/Header.jsx";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from './Components/pageContent/Homepage';
import Footer from "./Components/Home/Footer"
function App() {
  return (
    <>
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={Homepage} />
      </Switch>
    <Footer/>  
    </Router>
    </>
  );
}

export default App;
