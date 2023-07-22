import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    if (searchTerm.trim() === '') {
      alert('Please enter a product name to search.');
      return;
    }

    fetch(`https://fakestoreapi.com/products?title=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error('Error fetching search results:', error));
  };

  return (
    <div>
      <h1>OnlineStore - Search</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search for products..." />
        <button type="submit">Search</button>
      </form>
      <div className="product-list">
        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          searchResults.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <button onClick={() => window.location.href=`/product/${product.id}`}>View Details</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
