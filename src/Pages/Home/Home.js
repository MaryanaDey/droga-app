import { useState } from 'react';
import './Home.css';

const products = [
  { id: 1, name: 'Шоколадні цукерки', category: 'chocolate' },
  { id: 2, name: 'Фруктові цукерки', category: 'fruit' },
  { id: 3, name: 'Карамельні цукерки', category: 'caramel' },
  { id: 4, name: 'Шоколадні цукерки 2', category: 'chocolate' },
  { id: 5, name: 'Фруктові цукерки 2', category: 'fruit' },
  { id: 6, name: 'Карамельні цукерки 2', category: 'caramel' },
];


function Home() {
  const [category, setCategory] = useState('');

  const handleSortByCategory = (category) => {
    setCategory(category);
  };

  const filteredProducts = category
  ? products.filter((product) => product.category === category)
  : products;


  
//   const handleSortByCategory = (category) => {
//   if (category === 'chocolate') {
//     setCategory('chocolate');
//   } else {
//     setCategory('');
//   }
// };
  
  //   const handleSortByCategory = (category) => {
  // if (category === 'chocolate') {
  //   setCategory('chocolate');
  // } else {
  //   setCategory('');
  // }
  // };

  // const filteredProducts = category ? products.filter((product) => product.category === category) : products;

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
        <ul>
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