import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5 cart-container">
        {cart.length === 0 ? (
          <>
            <div className='text-center'>
              <h1>Your Cart is Empty</h1>
              <Link to={"/"} className='btn btn-warning'>Continue Shopping...</Link>
            </div>
          </>
        ) : (
          cart.map((product) => (
            <div className="card mb-3 my-5" key={product.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.imgSrc} className="img-fluid rounded-start" alt="Product" />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary mx-3">
                      {product.price} DH
                    </button>
                    <button className="btn btn-warning">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

      </div>

      {cart.length !== 0 && (
        <div className="container text-center my-5 cart-actions">
          <button onClick={() => setCart([])} className='btn btn-danger'>Clear Cart</button>
        </div>
      )}
    </>
  );
}

export default Cart;
