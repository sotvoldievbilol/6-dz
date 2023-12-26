import './header.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';
const Header = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
      axios('https://fakestoreapi.com/products/categories')
      .then(({data})=> setCategory(data));
    },[])
    return (
        <header>
           <div className='container header-container'>
           <h1><Link> Shop</Link></h1>
           <nav>
            {
                category.map(item =>{
                    return<Link to={`/category/${item}`}>{item}</Link>
                })
            }
            <Link to={'/'}>home</Link>
            <Link to={'/cart'}>cart</Link>
           </nav>
           </div>
        </header>
    );
}

export default Header;
