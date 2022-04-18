import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Products from './components/products';
import ProductDetails from './components/productDetails';
import Navbar from './components/navbar';
import NotFound from './components/notFound';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <Navbar />
          <Switch >
            <Route path={"/"} exact component={Products} />
            <Route path={"/movies"}  component={Products} />
            <Route path={"/movie/:id"} component={ProductDetails} />
            <Route path={"*"} component={NotFound} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
