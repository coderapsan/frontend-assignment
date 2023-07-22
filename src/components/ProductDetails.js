import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) {
     
      console.error('Product ID not found.');
     
      window.location.href = '/';
      return;
    }

    fetchProductDetails();
  }, [id]);

  const fetchProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>OnlineStore - Product Details</h1>
      <div className="product-details">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
