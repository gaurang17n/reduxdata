import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Product from './Components/Product'
import Cart from './Components/Cart';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
