
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from "./pages/Home/Home"
import Cart from './pages/Cart/Cart'; 
import Header from './components/Header/Header' 
import './stytle.css' 
import { useState, useEffect } from 'react' 
import Category from './pages/Category/Category'; 
import Details from './pages/Details/Details';




function App() {
  const [cartData, setcartData] = useState([])

  const buyFunc = (obj) => {
    const idx = cartData.findIndex(item =>{
      return obj.id == item.id
    });

if(idx > -1){
  cartData[idx].count =  cartData[idx].count + 1;
  setcartData([...cartData]);
} else{
  setcartData([{
    ...obj,
    count:1,
  }, ...cartData])
}

  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />


        <Routes>
          <Route path={'/'} element={<Home buyFunc={buyFunc}/>} />
          <Route path='/cart' element={<Cart buyFunc={buyFunc} cartData={cartData} setcartData={setcartData}/>} />
          <Route path='/category/:category' element={<Category buyFunc={buyFunc}/>}/>
          <Route path='/Details/:id' element={<Details buyFunc={buyFunc}/>}/>

        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;