import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homes from './component/Homes/Homes';
import Courses from './component/Courses/Courses';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import Services from './component/Services/Services';


function App() {
  return (
    <div className="App">
    
      
    <Router>
    <Header></Header>
      <Switch>
      <Route exact path ="/course">
          <Courses></Courses>
        </Route>
        <Route exact path ="/home">
        <Homes></Homes>
        </Route>
        
        <Route exact path ="/about">
          <About></About>
        </Route>
        <Route exact path ="/services">
          <Services></Services>
        </Route>
        
        <Route  path ="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    
    <Footer></Footer>
    </div>
  );
}

export default App;
