import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from './Data';
import { BsFillCartCheckFill } from 'react-icons/bs';
import './Navbar.css';
import { UserCircle } from "phosphor-react";

const Navbar = ({ setData, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };

  const filterByPrice = () => {
    const min = parseInt(minPrice);
    const max = parseInt(maxPrice);

    if (!isNaN(min) && !isNaN(max)) {
      const element = items.filter((product) => product.price >= min && product.price <= max);
      setData(element);
    }
  };

  const filterByColor = (color) => {
    setSelectedColor(color);
    const element = items.filter((product) => product.color === color);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };

  // Get unique colors from items
  const colors = [...new Set(items.map(item => item.color))];

  return (
    <>
      <header className="sticky-top" bgColor='light'>
        <div className="nav-bar">
          <Link to={'/'} className="brand">
            ELECTRO
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>

          <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsFillCartCheckFill style={{ fontSize: '1.5rem' }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
          <Link to={"/login"}>
            <UserCircle size={32} />
          </Link>
        </div>

        {location.pathname === '/' && (
          <div className="nav-bar-wrapper">
            <div className="items"> </div>
            <div onClick={() => setData(items)} className="items">
            Accueil
            </div>
            <div onClick={() => filterByCategory('mobiles')} className="items">
              Mobiles
            </div>
            <div onClick={() => filterByCategory('laptops')} className="items">
              Laptops
            </div>
            <div onClick={() => filterByCategory('tablets')} className="items">
              Tablets
            </div>
            <div className="items">
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <button onClick={filterByPrice}>Filter</button>
            </div>
            <div className="items">
              <select value={selectedColor} onChange={(e) => filterByColor(e.target.value)}>
                <option value="">All Colors</option>
                {colors.map((color, index) => (
                  <option key={index} value={color}>{color}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
