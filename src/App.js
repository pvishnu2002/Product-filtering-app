import { useState } from 'react';
import './index.css'

import Nav from "./Navigation/Nav";
import Recommandation from "./Recommadation/Recommandation";
import { Product } from "./Product/Product";
import Sidebar from './Sidebar/Sidebar';
import Card from './components/Card'



//product database
import products from './db/data'

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  // console.log(selectedCategory);
  const [query, setQuery] = useState("");

  //input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio Filter(for sidebar)
  const handleChange = (event) => {
    // console.log(event);
    // setSelectedCategory(event.target.value);
  }

  //Button Filter
  const handleClick = (event) => {
    // console.log(event.target.value);
    setSelectedCategory(event.target.value)
  }

  //filterdData Function
  function filteredData(products, selected, query) {
    let filteredProducts = products

    //filtering input items
    if (query) {
      filteredProducts = filteredItems
    }
    //selected filter
    if (selected) {
      console.log(selected);
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
      console.log(filteredProducts);
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      ));
  }

  const result = filteredData(products, selectedCategory, query);
  return (
    <div className="App">
      <Sidebar setSelectedCategory={setSelectedCategory} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommandation handleClick={handleClick} />
      <Product result={result} />
    </div>
  );
}

export default App;
