import React from "react";
import SearchInput from "../../components/SearchInput/view";
import "./style.css";
import Filters from "../../components/Filters/view";

const Products = () => {
  return (
    <div className="products-main-container">
      <SearchInput onSearch={() => {}} />
      <div>
        <Filters />
      </div>
    </div>
  );
};

export default Products;
