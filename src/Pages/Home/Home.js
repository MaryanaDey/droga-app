import { useState } from 'react';
import './Home.css';

import chocolateCandy from './../../assets/images/Rectangle 48.jpg';


const products = [
  { id: 1, name: 'Шоколадні цукерки', category: 'chocolate', image: chocolateCandy },
  { id: 2, name: 'Фруктові цукерки', category: 'fruit', image: chocolateCandy },
  { id: 3, name: 'Карамельні цукерки', category: 'caramel', image: chocolateCandy },
  { id: 4, name: 'Шоколадні цукерки 2', category: 'chocolate', image: chocolateCandy },
  { id: 5, name: 'Фруктові цукерки 2', category: 'fruit', image: chocolateCandy },
  { id: 6, name: 'Карамельні цукерки 2', category: 'caramel', image: chocolateCandy },

  { id: 7, name: 'Шоколадні цукерки3', category: 'chocolate', image: chocolateCandy },
  { id: 8, name: 'Фруктові цукерки3', category: 'fruit', image: chocolateCandy },
  { id: 9, name: 'Карамельні цукерки3', category: 'caramel', image: chocolateCandy },
  { id: 10, name: 'Шоколадні цукерки 4', category: 'chocolate', image: chocolateCandy },
  { id: 11, name: 'Фруктові цукерки 4', category: 'fruit', image: chocolateCandy },
  { id: 12, name: 'Карамельні цукерки 4', category: 'caramel', image: chocolateCandy },
];


function Home() {
  const [category, setCategory] = useState('');

  const handleSortByCategory = (category) => {
    setCategory(category);
  };

  const filteredProducts = category ? products.filter((product) => product.category === category) : products;


  // Розбиваємо масив на ряди по 3 товара
  const productRows = filteredProducts.reduce((acc, product, index) => {
    const rowIndex = Math.floor(index / 3);

    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }

    acc[rowIndex].push(product);

    return acc;
  }, []);

  return (
    <div className="container">
      <h1 className="banner">Ласкаво просимо в наш магазин цукерок!</h1>

      <div className="categories">
        <h2>Категорії цукерок:</h2>
        <ul className="categories-list">
          <li>
            <button onClick={() => handleSortByCategory('chocolate')}>Шоколадні цукерки</button>
          </li>
          <li>
            <button onClick={() => handleSortByCategory('fruit')}>Фруктові цукерки</button>
          </li>
          <li>
            <button onClick={() => handleSortByCategory('caramel')}>Карамельні цукерки</button>
          </li>
        </ul>
      </div>

      <div className="products">
        {productRows.map((row, index) => (
          <div key={index} className="product-row">
            {row.map((product) => (
              <div key={product.id} className="product-card">
                 <img src={product.image} alt={product.category} />
                <h3>{product.name}</h3>
                <p>Категорія: {product.category}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;