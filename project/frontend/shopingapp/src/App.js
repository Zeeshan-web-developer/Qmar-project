
import './App.css';
import {Container} from 'react-bootstrap';
import Footer from './components/footer';
import Header from './components/Header';
import Homescreen from './screens/HomeScreen';
import ProductDetails from './screens/ProductDetails';
import {BrowserRouter as Router,Route} from'react-router-dom';
function App() {
  return (
        <Router>
         <Header/>
        <main className="my-5">
        <Container>
          <Route path="/" component={Homescreen} exact/>
          <Route path="/product/:id" component={ProductDetails}/>
          </Container>
          </main>
           <Footer/>   
    </Router>
  );
}

export default App;
