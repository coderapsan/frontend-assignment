import React, { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  };

  return (
    <div>
      <h1>OnlineStore - Home</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => window.location.href=`/product/${product.id}`}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
